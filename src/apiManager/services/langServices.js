import { changeLangAction, langListResponseAction, langResponseAction, serviceActionError } from '../../actions';
import API from '../endpoints';
import { httpGETRequest } from '../httpRequestHandler';

 export const langServices = ( ...rest) => {
  let fileName = "-Text-30122020.json";
   let langStr = "en";
   switch(getLanguage()){
     case "1":langStr = "en";
    break;
    case "2":langStr = "ml";
    break;
     default : langStr = "en";
     break;
  }
  let URL = API.DATA_FOLDER + langStr+fileName
     return dispatch => {
       fetch(URL)
        .then((res) => res.json())
      .then((data) =>{
        if (data) {
           dispatch(langResponseAction(data));
           dispatch(changeLangAction(getLanguage()));
        } else {
           dispatch(serviceActionError('error'))
         }
       })
        .catch((error) => {
          dispatch(serviceActionError(error))
        })
          }
  }



export const languageListServices = ( ...rest) => {
  return dispatch => {
    httpGETRequest(API.MULTILANGUAGE_LIST).then(res => {
      
      if (res.data) {
        
        if(getLanguage()===null){res.data.map((item) => (item.isCurrent===true?setCurrentLanguage(item.nLanguageId):''))};
        
        dispatch(langListResponseAction(res.data));
      } else {
        // dispatch(serviceActionError("error"))
      }
    })
      .catch((error) => {
        
        dispatch(serviceActionError(error))
      })
  }
}

export const setCurrentLanguage = ( lang, ...rest) => {
  setLanguage(lang);
  //useRtlSwitch(lang)

  return dispatch => {
    dispatch(changeLangAction(lang));
  }
}




  export const setLanguage=(LangID) => {
    localStorage.setItem("langId", LangID);
}
export const getLanguage=() => {
  return localStorage.getItem("langId");
}



import { poojaConstants } from '../actionConstants';

export const poojaListResponseAction = (data) => dispatch => {
  dispatch({
    type: poojaConstants.POOJA_LIST_RESPONSE,
    payload: data
  })
}

export const poojasLoaderAction = (data) => dispatch => {
  dispatch({
    type: poojaConstants.POOJA_LOADER_RESPONSE,
    payload: data
  })
}
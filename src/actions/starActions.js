import { starConstants } from '../actionConstants';

export const starListResponseAction = (data) => dispatch => {
  dispatch({
    type: starConstants.STAR_LIST_RESPONSE,
    payload: data
  })
}

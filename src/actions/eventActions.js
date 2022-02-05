import { eventConstants } from '../actionConstants';

export const eventListResponseAction = (data) => dispatch => {
  dispatch({
    type: eventConstants.EVENT_LIST_RESPONSE,
    payload: data
  })
}

export const eventsLoaderAction = (data) => dispatch => {
  dispatch({
    type: eventConstants.EVENT_LOADER_RESPONSE,
    payload: data
  })
}
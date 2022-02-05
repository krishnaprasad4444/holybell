import { authConstants } from '../actionConstants';

export const registerResponseAction = (data) => dispatch => {
  dispatch({
    type: authConstants.REGISTER_RESPONSE,
    payload: data
  })
}
export const registerOtpResponseAction = (data) => dispatch => {
  dispatch({
    type: authConstants.REG_OTP_RESPONSE,
    payload: data
  })
}
export const loginResponseAction = (data) => dispatch => {
  dispatch({
    type: authConstants.LOGIN_RESPONSE,
    payload: data
  })
}
export const refreshResponseAction = (data) => dispatch => {
  dispatch({
    type: authConstants.REFRESH_RESPONSE,
    payload: data
  })
}
export const clearProfile = (data) => dispatch => {
  dispatch({
    type: authConstants.CLEAR_PROFILE
  })
}
export const updateProfile = (data) => dispatch => {
  dispatch({
    type: authConstants.UPDATE_PROFILE,
    payload: { data: data }
  })
}
export const setLoader = (data) => dispatch => {
  dispatch({
    type: authConstants.LOADING_UPDATE,
    payload: data
  })
}


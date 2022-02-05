import { authConstants } from "../actionConstants";
import { isTokenValid } from "../apiManager/token/tokenService";
const INTIAL_STATE = {
  isAuthenticated: isTokenValid() || false,
  registered: false,
  otpVerified: false, 
  profile:null,//{phone: 123, email: "ratheeshkdj@gmail.com"}
  //isLoading:false
};

export function authReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case authConstants.REGISTER_RESPONSE:
      delete action.payload.password
      return { ...state, registered: true,isLoading:false, otpVerified: false,profile:action.payload };
    case authConstants.REG_OTP_RESPONSE:
      return { ...state, registered: true, otpVerified: true ,profile:action.payload };
    case authConstants.LOGIN_RESPONSE:
      return { ...state, profile: action.payload ,isAuthenticated :true };
    case authConstants.REFRESH_RESPONSE:
    return { ...state, isAuthenticated : true };
    default:
      return state;
  }
}

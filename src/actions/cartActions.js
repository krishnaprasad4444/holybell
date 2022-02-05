import { cartConstants } from '../actionConstants';

export const cartCountResponseAction = (data) => dispatch => {
  dispatch({
    type: cartConstants.CART_COUNT_RESPONSE,
    payload: data
  })
}

import { cartConstants } from '../actionConstants';
import { getCartList } from '../apiManager/services/cartServices';

const INTIAL_STATE = {
    cartCount: getCartList().length,
    loading: false,
};
  
export function cartReducer(state = INTIAL_STATE, action) {
    switch (action.type) {
        case cartConstants.CART_COUNT_RESPONSE:
            return { ...state, cartCount: action.payload, loading: false }
        default:
            return state 
    }
}

import { poojaConstants } from '../actionConstants';

const INTIAL_STATE = {
    poojaList: [],
    loading: false,
};
  
export function poojaReducer(state = INTIAL_STATE, action) {
    switch (action.type) {
        case poojaConstants.POOJA_LIST_RESPONSE:
            return { ...state, poojaList: action.payload, loading: false }
        case poojaConstants.POOJA_LOADER_RESPONSE:
            return { ...state, loading: action.payload }
        default:
            return state 
    }
}

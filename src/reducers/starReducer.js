import { starConstants } from '../actionConstants';

const INTIAL_STATE = {
    starList: [],
    loading: false,
};
  
export function starReducer(state = INTIAL_STATE, action) {
    switch (action.type) {
        case starConstants.STAR_LIST_RESPONSE:
            return { ...state, starList: action.payload, loading: false }
        default:
            return state 
    }
}

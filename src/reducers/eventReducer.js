import { eventConstants } from '../actionConstants';

const INTIAL_STATE = {
    eventList: [],
    loading: false,
};
  
export function eventsReducer(state = INTIAL_STATE, action) {
    switch (action.type) {
        case eventConstants.EVENT_LIST_RESPONSE:
            return { ...state, eventList: action.payload, loading: false }
        case eventConstants.EVENT_LOADER_RESPONSE:
            return { ...state, loading: action.payload }
        default:
            return state 
    }
}

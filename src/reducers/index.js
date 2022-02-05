import { combineReducers } from 'redux'
import { alert } from './alertReducer'
import { authReducer } from './authReducer'
import { cartReducer } from './cartReducer'
import { eventsReducer } from './eventReducer'
import { poojaReducer } from './poojaReducer'
import { starReducer } from './starReducer'
const createRootReducer = (history) => combineReducers({
    authReducer,
    alert,
    eventsReducer,
    poojaReducer,
    cartReducer,
    starReducer
});

export default createRootReducer;
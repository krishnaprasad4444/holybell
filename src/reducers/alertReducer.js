import { alertConstants } from '../actionConstants';

export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS: return { type: 'success', message: action.message };
        case alertConstants.ERROR: return { type: 'danger', message: action.message };
        case alertConstants.WARNING: return { type: 'warning', message: action.message };
        case alertConstants.INFO: return { type: 'info', message: action.message };
        case alertConstants.CLEAR: return {};
        default: return { state }
    }
}
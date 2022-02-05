import { alertConstants } from '../actionConstants';

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function warning(message) {
    return { type: alertConstants.WARNING, message };
}

function info(message) {
    return { type: alertConstants.INFO, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}

export const alertActions = {
    success,
    error,
    warning,
    info,
    clear
};
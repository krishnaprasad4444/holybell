import { preferenceConstants } from '../actionConstants'

const setSidebarStatus = (data) => {
    return { type: preferenceConstants.SIDEBAR_STATUS,    
            payload: data };
}

export const preferenceActions = {
    setSidebarStatus
};

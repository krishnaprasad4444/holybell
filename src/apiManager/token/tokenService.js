export const getToken=() => {
    return localStorage.getItem("sprintToken");
}

export const getTokenExpiry=()=>{
    return localStorage.getItem("sprintTokenExpiry");
}
export const getRefreshToken=()=>{
    return localStorage.getItem("sprintRefreshToken");
}

export const setToken=(tokenObj) => {
    localStorage.setItem("sprintToken", tokenObj.token);
    localStorage.setItem("sprintRefreshToken", tokenObj.refresh);
    localStorage.setItem("sprintTokenExpiry", tokenObj.expire);
}

export const isTokenValid= () => {
    if(getToken() && getTokenExpiry()){
        const exp = new Date(getTokenExpiry()).getTime();
        return Date.now() < exp;
    }else{
        return false;
    }
}
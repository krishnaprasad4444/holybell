Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}
export const getCartList=() => {
    let cart = localStorage.getObj("codsprintCartList")
    if(cart===undefined || cart===null)
    cart=[];
    return cart;
}

export const setCartList=(cartList) => {
    localStorage.setObj("codsprintCartList", cartList)
}

import { GlobalState } from "./types/globalState"


export const getAuthState = (state:GlobalState)=> state.auth.isAuth
export const getUserID = (state:GlobalState)=> state.auth.userId

export const getAuthToken = (state:GlobalState)=> state.auth.token

export const getCart = (state:GlobalState)=> state.cart

export const getNotification = (state : GlobalState)=> state.datas.notifications

export const getWishlist = (state : GlobalState)=> state.storage?.wishlists
export const getCompareList = (state : GlobalState)=> state.storage?.compareLists
export const getSuscribed = (state : GlobalState)=> state.storage?.isSuscribed
export const getCarriers = (state : GlobalState)=> state.storage?.carrier
export const getCurrentAddress = (state : GlobalState)=> state.storage?.currentAddress
export const getCartSubTotal = (state : GlobalState)=> {
    const cartSubTotal = state.cart.sub_total + (state?.storage?.carrier?.price || 0)
    return cartSubTotal.toFixed(2)
}

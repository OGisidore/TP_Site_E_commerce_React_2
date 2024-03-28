import { GlobalState } from "./types/globalState"


export const getAuthState = (state:GlobalState)=> state.auth.isAuth
export const getAuthToken = (state:GlobalState)=> state.auth.token
export const getCart = (state:GlobalState)=> state.cart

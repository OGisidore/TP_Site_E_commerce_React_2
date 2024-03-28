import { Article } from "../../models/Article";
import { Product } from "../../models/Products";
import { ADD_NOTIFICATION, ADD_TO_CART, CLEAR_NOTIFICATION, CONNECTED, LOGOUT, REMOVE_FROM_CART } from "./actionTypes";

interface UserConnectedData{
    token : string,
    userId: string

}
interface CartData {
    product : Product,
    quantity : number
}
export interface AuthAction{
    type: typeof CONNECTED | typeof LOGOUT| null
    payload: UserConnectedData | null
}
export interface CartAction {
    type : typeof ADD_TO_CART | typeof REMOVE_FROM_CART | null
    payload :CartData | null 

}
export interface CartGlobalState {
    items : Article [],
    quantity : number
    sub_total : number
}

export interface NotificationDatas{
    message:string,
    status : string,
    timeout: number
}

export interface NotificationActions {
    type : typeof ADD_NOTIFICATION | typeof CLEAR_NOTIFICATION
    payload : NotificationDatas | null

}
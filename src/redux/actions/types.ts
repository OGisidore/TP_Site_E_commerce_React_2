import { Article } from "../../models/Article";
import { Product } from "../../models/Products";
import { ADD_NOTIFICATION,
     ADD_TO_CART, ADD_TO_STORAGE, CLEAR_CART, CLEAR_NOTIFICATIONS, CONNECTED,
      LOGOUT, REMOVE_FROM_CART, REMOVE_FROM_STORAGE, REMOVE_NOTIFICATION_ITEM } from "./actionTypes";

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
    type : typeof ADD_TO_CART | typeof REMOVE_FROM_CART |typeof CLEAR_CART | null
    payload :CartData | null 

}
export interface CartGlobalState {
    items : Article [],
    quantity : number
    sub_total : number
}
export interface NotificationItem {
    _id : string,
    message:string,
    status : string,
    timeout: number
}

export interface NotificationDatas{
    notifications : NotificationItem []
}

export interface NotificationActions {
    type : typeof ADD_NOTIFICATION | typeof CLEAR_NOTIFICATIONS | typeof REMOVE_NOTIFICATION_ITEM | null
    payload : NotificationItem | null

}

export interface StorageAction{
    type : typeof ADD_TO_STORAGE | typeof REMOVE_FROM_STORAGE | null
    key:string | null
    unique? : boolean,
    payload : Product| null
}
import { CartGlobalState, NotificationDatas } from "../../actions/types"


interface AuthData{
    isAuth:boolean,
    token:string,
    userId:string
}

export interface GlobalState{
    auth:AuthData
    cart : CartGlobalState
    datas : NotificationDatas
}
import { CartGlobalState } from "../../actions/types"


interface AuthData{
    isAuth:boolean,
    token:string,
    userId:string
}

export interface GlobalState{
    auth:AuthData
    cart : CartGlobalState
}
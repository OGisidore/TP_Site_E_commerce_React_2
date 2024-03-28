import { CONNECTED, LOGOUT } from "../actions/actionTypes";
import { AuthAction } from "../actions/types"
import { getInitStore } from "../lib/initLib";


export const initStore = getInitStore()
const initACtion: AuthAction = {
    type: LOGOUT,
    payload: initStore


}

export const authReducers = (state = initStore, action: AuthAction = initACtion) => {
    switch (action.type) {
        case CONNECTED:
            return {
                isAuth: true,
                token: action.payload?.token,
                userId: action.payload?.userId
            }

            break;
        case LOGOUT:
            localStorage.removeItem("auth")
            return {
                isAuth: false,
                token: "",
                userId: ""
            }

            break;

        default:
            return state
            break;
    }
}
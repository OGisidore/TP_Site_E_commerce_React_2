import { ADD_NOTIFICATION, CLEAR_NOTIFICATION } from "../actions/actionTypes";
import {  NotificationActions, NotificationDatas } from "../actions/types"

const initState : NotificationDatas = {
    message: '',
    status : 'success',
    timeout : 5000
}

export const notificationReducers = ( action:NotificationActions,state = initState)=>{
    switch (action.type) {
        case ADD_NOTIFICATION: 
        return{
            ...action.payload

        }
            
            break;
            case CLEAR_NOTIFICATION: 
            return {...initState}
                
                break;
    
        default:
            return state
            break;
    }
}
import { sonnorEffect } from "../../Helpers/utiles";
import { ADD_NOTIFICATION, CLEAR_NOTIFICATIONS, REMOVE_NOTIFICATION_ITEM } from "../actions/actionTypes";
import { NotificationActions, NotificationDatas, NotificationItem } from "../actions/types"

const initState: NotificationDatas = {
    notifications: []

}


export const notificationReducers = ( state = initState, action: NotificationActions = {type : null , payload : null}) => {

    switch (action.type) {
        case ADD_NOTIFICATION:
            sonnorEffect()
            return {
                notifications: [...state.notifications, action.payload]


            }
            break;
        case REMOVE_NOTIFICATION_ITEM:
            // sonnorEffect()
            state.notifications = state.notifications.filter((item: NotificationItem) => item._id !== action.payload?._id)
            return {
                notifications: [...state.notifications,]
            }

            break;
        case CLEAR_NOTIFICATIONS:
            sonnorEffect()
            return { ...initState }

            break;

        default:
            return state
            break;
    }
}
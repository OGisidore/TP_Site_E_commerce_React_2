/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 29/03/2024 09:32:47
*/
import React, { FC, useEffect } from 'react';
import './NotificationsComponent.css';
import { useSelector } from 'react-redux';
import { getNotification } from '../../redux/selectors/GlobalSelectors';
import { NotificationItem } from '../../redux/actions/types';
import { useDispatch } from 'react-redux';
import { REMOVE_NOTIFICATION_ITEM } from '../../redux/actions/actionTypes';


interface NotificationsComponentProps {

}


const NotificationsComponent: FC<NotificationsComponentProps> = () => {


const notifications = useSelector(getNotification)
const dispatch = useDispatch()

const handleRemoveNotificatiion = (notification : NotificationItem)=>{
  dispatch({
    type : REMOVE_NOTIFICATION_ITEM,
    payload : {
      ...notification
    }
  })

}
  useEffect(() => {
    
    const runLocalData = async () => {
      notifications.map((notification  : NotificationItem)=>{
        setTimeout(()=>handleRemoveNotificatiion(notification),5000)
      })
      

    }
    runLocalData()
  })

  return (
    <div className="NotificationsComponent">
      {
        notifications?.map((notification : NotificationItem)=>{
          return  <div className={"alert  alert-dismissible fade show alert-"+notification.status} role="alert" key={notification._id}>
            <p>{notification.message} </p>
            <span onClick={()=>handleRemoveNotificatiion(notification)} className='btn btn-close'></span>
        
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" /> */}
      </div>
        })
      }
     
     

    </div>

   
     
  );
}

export default NotificationsComponent;
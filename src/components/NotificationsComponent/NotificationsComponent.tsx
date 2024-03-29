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


interface NotificationsComponentProps {

}


const NotificationsComponent: FC<NotificationsComponentProps> = () => {


const notifications = useSelector(getNotification)
  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      console.log(notifications);
      

    }
    runLocalData()
  })

  return (
    <div className="NotificationsComponent">
      {
        notifications?.map((notification : NotificationItem)=>{
          return  <div className={"alert  alert-dismissible fade show alert-"+notification.status} role="alert">
            <p>{notification.message} </p>
        
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
      </div>
        })
      }
     
     

    </div>

   
     
  );
}

export default NotificationsComponent;
/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 29/03/2024 10:03:25
*/
import React, { FC, useEffect } from 'react';
import './NotificationItem.css';


interface NotificationItemProps {
 
}


const NotificationItem : FC<NotificationItemProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="NotificationItem">
          NotificationItem Component
      </div>
  );
}

export default NotificationItem;
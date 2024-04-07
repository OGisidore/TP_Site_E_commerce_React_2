/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 29/03/2024 16:18:14
*/
import React, { FC, useEffect } from 'react';
import './Loading.css';


interface LoadingProps {

}


const Loading: FC<LoadingProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="Loading d-flex justify-content-center align-items-center">
      <div className="lds-ring"><div /><div /><div /><div /></div>
    </div>
  );
}

export default Loading;
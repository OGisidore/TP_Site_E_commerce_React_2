/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 07/04/2024 10:33:50
*/
import React, { FC, useEffect, useState } from 'react';
import './SwitchOnOf.css';


interface SwitchOnOfProps {
  status? : boolean
  setStatus? : (bool:boolean)=>void

}


const SwitchOnOf: FC<SwitchOnOfProps> = ({status, setStatus}) => {

const [isOn, setIsOn]=useState<boolean | undefined>(status)

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })
  const handleChange = ()=>{
    const newStatus = !isOn
    setIsOn(newStatus)
    if (setStatus)
     setStatus(newStatus)
  }

  return (
    <div className="SwitchOnOf" onClick={handleChange}>
      {
        isOn?
      <i className="fa-solid fa-toggle-on"></i>

        :
      <i className="fa-solid fa-toggle-off"></i>

      }
    </div>
  );
}

export default SwitchOnOf;
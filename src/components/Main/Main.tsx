/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/03/2024 11:46:17
*/
import React, { FC, useEffect } from 'react';
import './Main.css';
import Slider from '../Slider/Slider';
import Collection from '../Collection/Collection';
import Exclusive from '../Exclusive/Exclusive';
import { getData } from '../../api/entities';


interface MainProps {

}


const Main: FC<MainProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      const users = getData("users")
      console.log(users);
      

    }
    runLocalData()
  })

  return (
    <div>
     <Slider/>
      <div className="main_content">
        <Collection/>
        <Exclusive/>
      </div>
    </div>)


}

export default Main;
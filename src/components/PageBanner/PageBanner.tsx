/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 23/03/2024 13:57:55
*/
import React, { FC, useEffect } from 'react';
import './PageBanner.css';


interface PageBannerProps {
  name:string

}


const PageBanner: FC<PageBannerProps> = ({name}) => {



  useEffect(() => {
    // window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="breadcrumb_section bg_gray page-title-mini">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="page-title">
              <h1>{name}</h1>
            </div>
          </div>
          <div className="col-md-6">
            <ol className="breadcrumb justify-content-md-end">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item active">{name}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
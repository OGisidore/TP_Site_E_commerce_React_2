/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/03/2024 14:52:45
*/
import React, { FC, useEffect } from 'react';
import './Collection.css';


interface CollectionProps {

}


const Collection: FC<CollectionProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="section pb_20">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="single_banner">
              <img alt="shop_banner_img1" src="/assets/files/134985227484251691648652568177479961559477851684757880896.png" />
              <div className="single_banner_info">
                <h5 className="single_bn_title1">Super Sale</h5>
                <h3 className="single_bn_title">New Collection</h3><a className="single_bn_link" href="http://localhost:4400/">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single_banner"><img alt="shop_banner_img1" src="/assets/files/1231816139442978863631268994779183882351500061684757886381.png" />
              <div className="single_banner_info">
                <h5 className="single_bn_title1">Super Sale</h5>
                <h3 className="single_bn_title">New Collection</h3><a className="single_bn_link" href="http://localhost:4400/">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
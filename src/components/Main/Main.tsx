/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/03/2024 11:46:17
*/
import React, { FC, Fragment, useEffect } from 'react';
import './Main.css';


interface MainProps {

}


const Main: FC<MainProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="main">
       <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
    <div id="carouselExampleControls" data-bs-ride="carousel" className="carousel slide carousel-fade light_arrow">
      <div className="carousel-inner">
        <div className="carousel-item active background_bg" data-img-src="/assets/files/115347265551009984873978960561874772983192541684755242040.png" style={{{{backgroundimage: ''}} 'url( assets files 115347265551009984873978960561874772983192541684755242040.png)' }}>
          <div className="banner_slide_content">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-9">
                  <div className="banner_content overflow-hidden">
                    <h5 1 data-animation="slideInLeft" data-animation-delay="0.5s" className="mb-3 staggered-animation font-weight-light animated slideInLeft" style={{{{animationdelay: ''}} '0.5s', opacity: }}>50% off in all products</h5>
                    <h2 1 data-animation="slideInLeft" data-animation-delay="1s" className="staggered-animation animated slideInLeft" style={{ animationdelay: '0.5s', opacity: }}>Man Fashion</h2><a 1 data-animation="slideInLeft" data-animation-delay="1.5s" className="btn btn-fill-out rounded-0 staggered-animation text-uppercase animated slideInLeft" href="http://localhost:4300/" style={{ animationdelay: '1.5s', opacity: }}>Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item background_bg" data-img-src="/assets/files/17099405955142852076105633054671075224313121684753428765.png" style={{ backgroundimage: 'url( assets files 17099405955142852076105633054671075224313121684753428765.png)' }}>
          <div className="banner_slide_content">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-9">
                  <div className="banner_content overflow-hidden">
                    <h5 1 data-animation="slideInLeft" data-animation-delay="0.5s" className="mb-3 staggered-animation font-weight-light animated slideInLeft" style={{ animationdelay: '0.5s', opacity: }}>Get up to 50% off Today Only!
                    </h5>
                    <h2 1 data-animation="slideInLeft" data-animation-delay="1s" className="staggered-animation animated slideInLeft" style={{{{animationdelay: ''}} '0.5s', opacity: }}>Woman Fashion</h2><a 1 data-animation="slideInLeft" data-animation-delay="1.5s" className="btn btn-fill-out rounded-0 staggered-animation text-uppercase animated slideInLeft" href="http://localhost:4300/" style={{ animationdelay: '1.5s', opacity: }}>Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item background_bg" data-img-src="/assets/files/2850766279112079091504712247552853779750349121684753505113.png" style={{ backgroundimage: 'url( assets files 2850766279112079091504712247552853779750349121684753505113.png)' }}>
          <div className="banner_slide_content">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-9">
                  <div className="banner_content overflow-hidden">
                    <h5 1 data-animation="slideInLeft" data-animation-delay="0.5s" className="mb-3 staggered-animation font-weight-light animated slideInLeft" style={{ animationdelay: '0.5s', opacity: }}>Taking your Viewing Experience to
                      Next Level</h5>
                    <h2 1 data-animation="slideInLeft" data-animation-delay="1s" className="staggered-animation animated slideInLeft" style={{ animationdelay: '0.5s', opacity: }}>Summer Sale</h2><a 1 data-animation="slideInLeft" data-animation-delay="1.5s" className="btn btn-fill-out rounded-0 staggered-animation text-uppercase animated slideInLeft" href="http://localhost:4300/" style={{ animationdelay: '1.5s', opacity: }}>Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item background_bg" data-img-src="/assets/files/80746066632713998236489572054461980464175761684755285905.png" style={{ backgroundimage: 'url( assets files 80746066632713998236489572054461980464175761684755285905.png)' }}>
          <div className="banner_slide_content">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-9">
                  <div className="banner_content overflow-hidden">
                    <h5 1 data-animation="slideInLeft" data-animation-delay="0.5s" className="mb-3 staggered-animation font-weight-light animated slideInLeft" style={{ animationdelay: '0.5s', opacity: }}>Taking your Viewing Experience to
                      Next Level</h5>
                    <h2 1 data-animation="slideInLeft" data-animation-delay="1s" className="staggered-animation animated slideInLeft" style={{ animationdelay: '0.5s', opacity: }}>Summer Sale</h2><a 1 data-animation="slideInLeft" data-animation-delay="1.5s" className="btn btn-fill-out rounded-0 staggered-animation text-uppercase animated slideInLeft" href="http://localhost:4300/" style={{ animationdelay: '1.5s', opacity: }}>Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><a href="#carouselExampleControls" role="button" data-bs-slide="prev" className="carousel-control-prev"><i className="ion-chevron-left" /></a><a href="#carouselExampleControls" role="button" data-bs-slide="next" className="carousel-control-next"><i className="ion-chevron-right" /></a>
    </div>
  </div>
    </div>
  
     
  );
}

export default Main;
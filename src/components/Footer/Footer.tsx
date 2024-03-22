/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/03/2024 11:40:59
*/
import React, { FC, useEffect } from 'react';
import './Footer.css';


interface FooterProps {
 
}


const Footer : FC<FooterProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <footer    className="footer_dark">
    <div    className="footer_top">
      <div    className="container">
        <div    className="row">
          <div    className="col-lg-3 col-md-6 col-sm-12">
            <div    className="widget">
              <div    className="footer_logo"><a href="#">
                  <h2>Jstore</h2>
                </a></div>
              <p> Retrouvez tous les accessoires et habits pour femmes, jeunes
                filles etc... </p>
            </div>
            <div    className="widget">
              <ul    className="social_icons social_white">
                <li><a target="_blank" href="https://facebook.com"><i    className="ion-social-facebook" /></a>
                </li>
                <li />
                <li />
                <li><a target="_blank" href="https://www.youtube.com/channel/UCkqALrIVPEyGnnbmiFl3lQA/?sub_confirmation=1"><i    className="ion-social-youtube-outline" /></a>
                </li>
                <li><a target="_blank" href="https://www.instagram.com/mudey_formation/"><i    className="ion-social-instagram-outline" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div    className="col-lg-2 col-md-3 col-sm-6">
            <div    className="widget">
              <h6    className="widget_title">Useful Links</h6>
              <ul    className="widget_links">
                <li><a ng-reflect-router-link="/page,a-propos-de-nous-shop" href="/page/a-propos-de-nous-shop">A Propos de nous</a></li>
                <li><a ng-reflect-router-link="/page,nos-services-jstore" href="/page/nos-services-jstore">Nos services</a></li>
                <li><a ng-reflect-router-link="/page,contactez-nous-category" href="/page/contactez-nous-category">Contactez-Nous</a></li>
                <li><a ng-reflect-router-link="/page,nos-partenaires-mudey" href="/page/nos-partenaires-mudey">Nos partenaires</a></li>
                <li><a ng-reflect-router-link="/page,mentions-lgales-espero" href="/page/mentions-lgales-espero">Mentions légales</a></li>
              </ul>
            </div>
          </div>
          <div    className="col-lg-2 col-md-3 col-sm-6">
            <div    className="widget">
              <h6    className="widget_title">Category</h6>
              <ul    className="widget_links">
                <li><a href="#">Men</a></li>
                <li><a href="#">Woman</a></li>
                <li><a href="#">Kids</a></li>
                <li><a href="#">Best Saller</a>
                </li>
                <li><a href="#">New Arrivals</a>
                </li>
              </ul>
            </div>
          </div>
          <div    className="col-lg-2 col-md-6 col-sm-6">
            <div    className="widget">
              <h6    className="widget_title">My Account</h6>
              <ul    className="widget_links">
                <li><a ng-reflect-router-link="account" href="/account">My Account</a></li>
                <li><a  ng-reflect-router-link="terms" href="/terms">Terms</a></li>
                <li><a  ng-reflect-router-link="signin" href="/signin">SignIn</a></li>
                <li><a  ng-reflect-router-link="signup" href="/signup">Signup</a></li>
              </ul>
            </div>
          </div>
          <div    className="col-lg-3 col-md-4 col-sm-6">
            <div    className="widget">
              <h6    className="widget_title">Contact Info</h6>
              <ul    className="contact_info contact_info_light">
                <li><i    className="ti-location-pin" />
                  <p>21 Rue Rubens 59800 Lille</p>
                </li>
                <li><i    className="ti-email" /><a href="mailto:contact@jstore.fr">contact@jstore.fr</a>
                </li>
                <li><i    className="ti-mobile" />
                  <p>+33 7 49 31 69 74</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div    className="bottom_footer border-top-tran">
      <div    className="container">
        <div    className="row">
          <div    className="col-md-6">
            <p    className="mb-md-0 text-center text-md-start"> © 2023 All Rights
              Reserved by Espero-Soft Informatiques </p>
          </div>
          <div    className="col-md-6">
            <ul    className="footer_payment text-center text-lg-end d-flex gap-2 justify-content-end">
              <li><a href="#"><img src="assets/images/visa.png" alt="visa" /></a></li>
              <li><a href="#"><img src="assets/images/discover.png" alt="discover" /></a>
              </li>
              <li><a href="#"><img src="assets/images/master_card.png" alt="master_card" /></a></li>
              <li><a href="#"><img src="assets/images/paypal.png" alt="paypal" /></a></li>
              <li><a href="#"><img src="assets/images/amarican_express.png" alt="amarican_express" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
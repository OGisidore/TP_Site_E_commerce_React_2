/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/03/2024 11:40:59
*/
import React, { FC, Fragment, useEffect, useState } from 'react';
import './Footer.css';
import { Meta } from '../../models/Meta';
import { getMetas } from '../../Helpers/utiles';
import { RequestResponse } from '../../models/requestResponse';
import { searchDatas } from '../../api/entities';
import { Page } from '../../models/Page';
import { Link, useLocation } from 'react-router-dom';
import SubscribComponent from '../SubscribComponent/SubscribComponent';
import { useSelector } from 'react-redux';
import { getSuscribed } from '../../redux/selectors/GlobalSelectors';


interface FooterProps {
  metas: Meta[]

}


const Footer: FC<FooterProps> = ({ metas }) => {
  const location = useLocation()
  const excludePath = ['/checkout']

  const [pages, setPages] = useState<Page[]>([])
  const isSuscribed = useSelector(getSuscribed)
  // const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!excludePath.includes(location.pathname)) {
      const runLocalData = async () => {
        const query = "isBottom=true"
        const page: RequestResponse = await searchDatas("page", query)
        if (page.isSuccess) {
          setPages(page.results as Page[])
        }

      }
      runLocalData()
    }

  }, [])

  return (
    <Fragment>
      {
        !excludePath.includes(location.pathname) ?
          <div className="Footer">
            {
              !isSuscribed ?
                <SubscribComponent />
                :
                null
            }
            <footer className="footer_dark">
              <div className="footer_top">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="widget">
                        <div className="footer_logo"><a href="#">
                          <h2>Jstore</h2>
                        </a></div>
                        <p>
                          {getMetas(metas, "site_description")} </p>
                      </div>
                      <div className="widget">
                        <ul className="social_icons social_white">
                          {
                            getMetas(metas, "facebook_link") ?
                              <li>
                                <a target="_blank" href={getMetas(metas, "facebook_link")}><i className="ion-social-facebook" /></a>
                              </li> : null
                          }

                          {
                            getMetas(metas, "youtub_links") ?
                              <li><a target="_blank" href={getMetas(metas, "youtub_links")}><i className="ion-social-youtube-outline" /></a>
                              </li> : null
                          }
                          {
                            getMetas(metas, "instagram_link") ?
                              <li><a target="_blank" href={getMetas(metas, "instagram_link")}><i className="ion-social-instagram-outline" /></a>
                              </li> : null
                          }




                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                      <div className="widget">
                        <h6 className="widget_title">Useful Links</h6>
                        <ul className="widget_links">
                          {
                            pages.map((page: Page) => {
                              return <li key={page._id}>
                                <Link to={"/page/" + page.slug}>{page.name}</Link></li>
                            })
                          }


                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                      <div className="widget">
                        <h6 className="widget_title">Category</h6>
                        <ul className="widget_links">
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
                    <div className="col-lg-2 col-md-6 col-sm-6">
                      <div className="widget">
                        <h6 className="widget_title">My Account</h6>
                        <ul className="widget_links">
                          <li><a ng-reflect-router-link="account" href="/account">My Account</a></li>
                          <li><a ng-reflect-router-link="terms" href="/terms">Terms</a></li>
                          <li><a ng-reflect-router-link="signin" href="/signin">SignIn</a></li>
                          <li><a ng-reflect-router-link="signup" href="/signup">Signup</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="widget">
                        <h6 className="widget_title">Contact Info</h6>
                        <ul className="contact_info contact_info_light">
                          {
                            getMetas(metas, "site_address") ?
                              <li><i className="ti-location-pin" />
                                <p>{getMetas(metas, "site_address")}</p>
                              </li> : null
                          }
                          {
                            getMetas(metas, "site_email") ?
                              <li><i className="ti-email" /><a href={"mailto:" + getMetas(metas, "site_email")}>{getMetas(metas, "site_email")}</a>
                              </li> : null
                          }
                          {
                            getMetas(metas, "site_phone") ?
                              <li><i className="ti-mobile" />
                                <p>{getMetas(metas, "site_phone")}</p>
                              </li> : null
                          }




                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom_footer border-top-tran">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="mb-md-0 text-center text-md-start"> {getMetas(metas, "site_copyrigth")} </p>
                    </div>
                    <div className="col-md-6">
                      <ul className="footer_payment text-center text-lg-end d-flex gap-2 justify-content-end">
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
          </div>
          :
          null
      }

    </Fragment>

    

   
  );
}

export default Footer;
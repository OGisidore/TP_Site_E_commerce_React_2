/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/03/2024 10:59:02
*/
import React, { FC, useEffect, Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Header.css';
import { Meta } from '../../models/Meta';
import { formatPrice, getMetas } from '../../Helpers/utiles';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthState, getCart } from '../../redux/selectors/GlobalSelectors';
import { useDispatch } from 'react-redux';
import { LOGOUT, REMOVE_FROM_CART } from '../../redux/actions/actionTypes';
import { Article } from '../../models/Article';
import { getDataByPage, searchDatas } from '../../api/entities';
import { RequestResponse } from '../../models/requestResponse';
import { Page } from '../../models/Page';
import { Category } from '../../models/category';
import { Product } from '../../models/Products';
import { MegaMenu } from '../../models/megaMenu';


interface HeaderProps {
  metas: Meta[]

}


const Header: FC<HeaderProps> = ({ metas }) => {

const location = useLocation()
const excludePath = ["/checkout"]
  const [pages, setPages] = useState<Page[]>([])
  const isAuth = useSelector(getAuthState)
  const cart = useSelector(getCart)
  const [categories, setCategories] = useState<Category[]>([])
  const [megaCollections, setMegaCollections] = useState<MegaMenu[]>([])

  const dispatch = useDispatch()


  useEffect(() => {
    if (!excludePath.includes(location.pathname)) {
       const runLocalData = async () => {
      let query = "isTop=true"
      const page: RequestResponse = await searchDatas("page", query)
      if (page.isSuccess) {
        setPages(page.results as Page[])
      }
      query = "isMega=true"
      const categoryData: RequestResponse = await searchDatas("category", query)
      if (categoryData.isSuccess) {
        setCategories(categoryData.results as Category[])
        // console.log({ categoryData });
      }
      const megaCollectionData: RequestResponse = await getDataByPage("megaCollection",1,3 )
      if (megaCollectionData.isSuccess) {
        setMegaCollections(megaCollectionData.results as MegaMenu[])
      }




    }
    runLocalData()
    }

   
  }, [cart])

  const handleLogout = (event: any) => {
    event.preventDefault()
    dispatch({
      type: LOGOUT,
      payload: null
    })

  }
  const handleRemoveCartItem = (event: any, item: Article) => {
    event.preventDefault()
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        product: item.product,
        quantity: item.quantity
      }
    })

  }

  return (
    <Fragment>
      {
        !excludePath.includes(location.pathname)?
        <header className="header_wrap fixed-top header_with_topbar active">
        <div className="top-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                  <div className="me-3">
                    <div className="ddOutOfVision" id="msdrpdd20_msddHolder" style={{ height: 0, overflow: 'hidden', position: 'absolute' }}><select name="countries" className="custome_select" id="msdrpdd20" tabIndex={-1}>
                      <option value="USD" data-title="USD" ng-reflect-value="USD">USD</option>
                      <option value="EUR" data-title="EUR" ng-reflect-value="EUR">EUR</option>
                      <option value="GBR" data-title="GBR" ng-reflect-value="GBR">GBR</option>
                    </select></div>
                    <div className="dd ddcommon borderRadius" id="msdrpdd20_msdd" tabIndex={0} style={{ width: 52 }}>
                      <div className="ddTitle borderRadiusTp"><span className="divider" /><span className="ddArrow arrowoff" /><span className="ddTitleText " id="msdrpdd20_title"><span className="ddlabel">USD</span><span className="description" style={{ display: 'none' }} /></span></div><input id="msdrpdd20_titleText" type="text" autoComplete="off" className="text shadow borderRadius" style={{ display: 'none' }} />
                      <div className="ddChild ddchild_ border shadow" id="msdrpdd20_child" style={{ zIndex: 9999, display: 'none', position: 'absolute', visibility: 'visible', height: 99 }}>
                        <ul>
                          <li className="enabled _msddli_ selected" title="USD"><span className="ddlabel">USD</span>
                            <div className="clear" />
                          </li>
                          <li className="enabled _msddli_" title="EUR"><span className="ddlabel">EUR</span>
                            <div className="clear" />
                          </li>
                          <li className="enabled _msddli_" title="GBR"><span className="ddlabel">GBR</span>
                            <div className="clear" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <ul className="contact_detail text-center text-lg-start">
                    <li><i className="ti-mobile" /><span>{getMetas(metas, "site_phone")}</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-center text-md-end">
                  <ul className="header_list">
                    <li>
                      <Link to={"/compare"}><i className="ti-control-shuffle" /><span>Compare</span></Link></li>
                    <li>
                      <Link to={"/wishlist"}>  <i className="ti-heart" /><span>Wishlist</span></Link></li>
                    {
                      isAuth ?
                        <> <li>
                          <Link to={"/account"}><i className="ti-user" /><span>Account</span></Link>
                        </li>
                          <li><a onClick={handleLogout}><i className="ti-user" /><span>Logout</span></a>
                          </li></>
                        :
                        <> <li>
                          <Link to={"/signin"}><i className="ti-user" /><span>Signin</span></Link>
                        </li>
                          <li><Link to={"/signup"}><i className="ti-user" /><span>Signup</span></Link>
                          </li></>
                    }

                    <li />
                    <li />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_header dark_skin main_menu_uppercase">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <h2>{getMetas(metas, "site_name")}</h2>
            </Link><button type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false" className="navbar-toggler collapsed"><span className="ion-android-menu" /></button>
              <div id="navbarSupportedContent" className="navbar-collapse justify-content-end collapse">
                <ul className="navbar-nav">
                  <li className="dropdown"><a className="nav-link" href="/">Home</a></li>
                  <li className="dropdown"><a href="#" data-bs-toggle="dropdown" className="dropdown-toggle nav-link active" aria-expanded="false">Pages</a>
                    <div className="dropdown-menu">
                      <ul>
                        {
                          pages.map((page: Page, index: number) => {
                            return <li key={index}>
                              <Link to={"/page/" + page.slug} className="dropdown-item nav-link nav_item" >{page.name} </Link></li>

                          })
                        }

                      </ul>
                    </div>
                  </li>
                  <li className="dropdown dropdown-mega-menu">
                    <a href="#" data-bs-toggle="dropdown" className="dropdown-toggle nav-link" aria-expanded="false">Products</a>
                    <div className="dropdown-menu">
                      <ul className="mega-menu d-lg-flex">
                        {categories.map((category: Category) => {
                          return <li className="mega-menu-col col-lg-3" key={category._id}>
                            <ul>
                              <li className="dropdown-header">{category.name}</li>

                              {
                                category.products.map((product: Product) => {
                                  return <li key={product._id}>
                                    <Link className="dropdown-item nav-link nav_item"
                                      to={"/product/" + product.slug}>
                                      <img src={product.imageUrls[1]} height={30} width={30} alt={product.name} />
                                      {product.name}
                                    </Link>
                                  </li>
                                })
                              }
                            </ul>
                          </li>
                        })}
                            </ul>
                      <div className="d-lg-flex menu_banners row g-3 px-3">
                        {
                          megaCollections.map((megaCollection :MegaMenu)=>{
                            return  <div className="col-sm-4" key={megaCollection._id}>
                          <div className="header-banner"><img alt="menu_banner1"
                           src={megaCollection.imageUrl} />
                            <div className="banne_info">
                              <h6>{megaCollection.description}</h6>
                              <h4>{megaCollection.title}</h4>
                              <a href={megaCollection.buttom_link}>{megaCollection.button_text}</a>
                            </div>
                          </div>
                        </div> 
                          })
                        }

                       
                       
                      </div>
                    </div>
                  </li>
                  <li className="dropdown dropdown-mega-menu"><a className="nav-link" href="/shop-list">Shop</a></li>
                  <li><a className="nav-link nav_item" href="/contact">Contact
                    Us</a></li>
                </ul>
              </div>
              <ul className="navbar-nav attr-nav align-items-center">
                <li><a href="javascript:void(0);" className="nav-link search_trigger"><i className="linearicons-magnifier" /></a>
                  <div className="search_wrap"><span className="close-search"><i className="ion-ios-close-empty" /></span>
                    <form noValidate className="ng-untouched ng-pristine ng-valid">
                      <input type="text" placeholder="Search" id="search_input" className="form-control" /><button type="submit" className="search_icon"><i className="ion-ios-search-strong" /></button></form>
                  </div>
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                  <div className="search_overlay" />
                </li>
                {
                  cart?.quantity ?
                    <li className="dropdown cart_dropdown">
                      <a href="#" data-bs-toggle="dropdown" className="nav-link cart_trigger">
                        <i className="linearicons-cart" /><span className="cart_count">{cart.quantity}</span></a>
                      <div className="cart_box dropdown-menu dropdown-menu-right">
                        <ul className="cart_list">
                          {
                            cart.items.map((item: Article, index: number) => {
                              const { product, quantity } = item
                              return <li key={index}>
                                <a onClick={(event) => handleRemoveCartItem(event, item)} href="#" className="item_remove">
                                  <i className="ion-close" />
                                </a>
                                <a href="#"><img width={50} height={50} alt="cart_thumb1"
                                  src={product.imageUrls[0]} />
                                  {product.name}</a>
                                <span className="cart_quantity">{quantity} x
                                  <span className="cart_amount">
                                    <span className="price_symbole"> {formatPrice(product.solde_price)}

                                    </span> =
                                    <span className="price_symbole"> {formatPrice(item.sub_total)}</span>
                                  </span>
                                </span>
                              </li>
                            })
                          }

                        </ul>
                        <div className="cart_footer">
                          <p className="cart_total"><strong>Subtotal:</strong><span className="cart_price"><span className="price_symbole" /></span>{formatPrice(cart.sub_total)} </p>
                          <p className="cart_buttons">
                            <Link className="btn btn-fill-line view-cart" to="/cart">View Cart</Link>
                            <Link className="btn btn-fill-out checkout" to="/checkout">Checkout</Link></p>
                        </div>
                      </div>
                    </li> :
                    null
                }

              </ul>
            </nav>
          </div>
        </div>
      </header>
      :
      null
      }
      
    </Fragment>
  );
}

export default Header;
/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/03/2024 10:59:02
*/
import React, { FC, useEffect,Fragment } from 'react';
// import Loading from '../Loading/Loading';
import './Header.css';
import { Meta } from '../../models/Meta';
import { getMetas } from '../../Helpers/utiles';
import { Link } from 'react-router-dom';


interface HeaderProps {
  metas:Meta[]
 
}


const Header : FC<HeaderProps> = ({metas}) =>{


    // const [meta, setMeta] = useState<Meta[]>([])
   

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {
      //   const datas: RequestResponse = await getData("meta")
      //   if (datas.isSuccess) {
      //     const results : Meta[] = (datas.results as Meta[])
      //     console.log(results);
      //     const name = getMetas(results, "site_name")
      //      console.log(name)
      //      setMeta(results)   
      //   } 
        
      }
      runLocalData()
    },[])

  return (
    <Fragment>
     <header className="header_wrap fixed-top header_with_topbar active">
  <div className="top-header">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="d-flex align-items-center justify-content-center justify-content-md-start">
            <div className="me-3">
              <div className="ddOutOfVision" id="msdrpdd20_msddHolder" style={{height: 0, overflow: 'hidden', position: 'absolute'}}><select name="countries" className="custome_select" id="msdrpdd20" tabIndex={-1}>
                  <option value="USD" data-title="USD" ng-reflect-value="USD">USD</option>
                  <option value="EUR" data-title="EUR" ng-reflect-value="EUR">EUR</option>
                  <option value="GBR" data-title="GBR" ng-reflect-value="GBR">GBR</option>
                </select></div>
              <div className="dd ddcommon borderRadius" id="msdrpdd20_msdd" tabIndex={0} style={{width: 52}}>
                <div className="ddTitle borderRadiusTp"><span className="divider" /><span className="ddArrow arrowoff" /><span className="ddTitleText " id="msdrpdd20_title"><span className="ddlabel">USD</span><span className="description" style={{display: 'none'}} /></span></div><input id="msdrpdd20_titleText" type="text" autoComplete="off" className="text shadow borderRadius" style={{display: 'none'}} />
                <div className="ddChild ddchild_ border shadow" id="msdrpdd20_child" style={{zIndex: 9999, display: 'none', position: 'absolute', visibility: 'visible', height: 99}}>
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
                <Link  to={"/wishlist"}>  <i className="ti-heart" /><span>Wishlist</span></Link></li>
              <li>
                <Link  to={"/signin"}><i className="ti-user" /><span>Signin</span></Link>
              </li>
              <li><Link  to={"/signup"}><i className="ti-user" /><span>Signup</span></Link>
              </li>
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
      <nav className="navbar navbar-expand-lg"><a  className="navbar-brand" href="/">
          <h2>{getMetas(metas, "site_name")}</h2>
        </a><button type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false" className="navbar-toggler collapsed"><span className="ion-android-menu" /></button>
        <div id="navbarSupportedContent" className="navbar-collapse justify-content-end collapse">
          <ul className="navbar-nav">
            <li className="dropdown"><a className="nav-link"  href="/">Home</a></li>
            <li className="dropdown"><a href="#" data-bs-toggle="dropdown" className="dropdown-toggle nav-link active" aria-expanded="false">Pages</a>
              <div className="dropdown-menu">
                <ul>
                  <li><a  className="dropdown-item nav-link nav_item" href="/about">About Us</a></li>
                  <li><a  className="dropdown-item nav-link nav_item" href="/contact">Contact Us</a></li>
                  <li><a  className="dropdown-item nav-link nav_item" href="/fqa">Faq</a></li>
                  <li><a  className="dropdown-item nav-link nav_item"  href="/signin">Login</a></li>
                  <li><a className="dropdown-item nav-link nav_item" href="/signup">Register</a></li>
                  <li><a  className="dropdown-item nav-link nav_item"  href="/terms">Terms and Conditions</a></li>
                </ul>
              </div>
            </li>
            <li className="dropdown dropdown-mega-menu"><a href="#" data-bs-toggle="dropdown" className="dropdown-toggle nav-link" aria-expanded="false">Products</a>
              <div className="dropdown-menu">
                <ul className="mega-menu d-lg-flex">
                  <li className="mega-menu-col col-lg-3">
                    <ul>
                      <li className="dropdown-header">Robes</li>
                      <li><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,bikini-unicolore-cte" href="/product/bikini-unicolore-ctel-shop">Bikini unicolore
                          côtelé</a><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,jupe-crayon-taille-h" href="/product/jupe-crayon-taille-haute-en-dentelle">Jupe crayon
                          taille haute en dentelle</a><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,jupe-imprim-floral-t" href="/product/jupe-imprim-floral-taille-fronce">Jupe à imprimé
                          floral à taille froncée</a><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,robe-fines-brides-im" href="/product/robe-fines-brides-imprim-tropical-en-dentelle">Robe à
                          fines brides à imprimé tropical en dentelle</a>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-menu-col col-lg-3">
                    <ul>
                      <li className="dropdown-header">Jupes</li>
                      <li><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,bikini-unicolore-cte" href="/product/bikini-unicolore-ctel-shop">Bikini unicolore
                          côtelé</a><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,jupe-noire-brillante" href="/product/jupe-noire-brillante">Jupe noire brillante</a><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,jupe-fendue-taille-h" href="/product/jupe-fendue-taille-haute">Jupe fendue taille
                          haute</a><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,jupe-imprim-floral-t" href="/product/jupe-imprim-floral-taille-fronce">Jupe à imprimé
                          floral à taille froncée</a>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-menu-col col-lg-3">
                    <ul>
                      <li className="dropdown-header">Culotes </li>
                      <li><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,bikini-unicolore-cte" href="/product/bikini-unicolore-ctel-shop">Bikini unicolore
                          côtelé</a><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,culotte-en-dentelle-" href="/product/culotte-en-dentelle-mudey">Culotte en dentelle</a><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,culotte-en-dentelle-" href="/product/culotte-en-dentelle-espero">Culotte en dentelle</a><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,culotte-en-dentelle" href="/product/culotte-en-dentelle">Culotte en dentelle</a><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,short-paillettes-bro" href="/product/short-paillettes-broderie-dchir">Short à paillettes à
                          broderie déchiré</a>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-menu-col col-lg-3">
                    <ul>
                      <li className="dropdown-header">Pantalons</li>
                      <li><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,pantalon-taille-haut" href="/product/pantalon-taille-haute-carreaux-avec-zip">Pantalon
                          taille haute à carreaux avec zip</a><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,pantalon-carreaux-av" href="/product/pantalon-carreaux-avec-cordon-la-taille">Pantalon à
                          carreaux avec cordon à la taille</a><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,pantalon-taille-fron" href="/product/pantalon-taille-fronce-poches">Pantalon à taille
                          froncée à poches</a><a className="dropdown-item nav-link nav_item" ng-reflect-router-link="/,product,pantalon-unicolore-t" href="/product/pantalon-unicolore-taille-haute">Pantalon unicolore
                          taille haute</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="d-lg-flex menu_banners row g-3 px-3">
                  <div className="col-sm-4">
                    <div className="header-banner"><img alt="menu_banner1" src="/assets/files/megaCollection/11736749706614988691774027121876766721152610541684827357419.png" />
                      <div className="banne_info">
                        <h6>10% Off</h6>
                        <h4>New Arrival</h4><a href="http://localhost:4300/">Shop
                          Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="header-banner"><img alt="menu_banner1" src="/assets/files/megaCollection/8932488097310286313588503554459963159142614451684826970123.png" />
                      <div className="banne_info">
                        <h6>15% Off</h6>
                        <h4>Men's Fashion</h4><a href="http://localhost:4300/">Shop
                          Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="header-banner"><img alt="menu_banner1" src="/assets/files/megaCollection/1412527185807988177642011518607795945067036381684827015102.png" />
                      <div className="banne_info">
                        <h6>23% Off</h6>
                        <h4>Kids Fashion</h4><a href="http://localhost:4300/">Shop
                          Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown dropdown-mega-menu"><a  className="nav-link" href="/shop-list">Shop</a></li>
            <li><a className="nav-link nav_item"  href="/contact">Contact
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
          <li className="dropdown cart_dropdown"><a href="#" data-bs-toggle="dropdown" className="nav-link cart_trigger"><i className="linearicons-cart" /><span className="cart_count">31</span></a>
            <div className="cart_box dropdown-menu dropdown-menu-right">
              <ul className="cart_list">
                <li><a href="#" className="item_remove"><i className="ion-close" /></a><a href="#"><img width={50} height={50} alt="cart_thumb1" src="/assets/files/culottes/culotte_5/36851533762117856286455670026456984987161761684087224828.webp" />Culotte
                    en dentelle</a><span className="cart_quantity"> 11 x
                    <span className="cart_amount"><span className="price_symbole">23,91&nbsp;€</span></span></span></li>
                <li><a href="#" className="item_remove"><i className="ion-close" /></a><a href="#"><img width={50} height={50} alt="cart_thumb1" src="/assets/files/culottes/culotte_9/116945623386141314594418897879593148825527931684087225230.webp" />Culotte
                    unicolore (sans couture)</a><span className="cart_quantity"> 4 x <span className="cart_amount"><span className="price_symbole">44,54&nbsp;€</span></span></span></li>
                <li><a href="#" className="item_remove"><i className="ion-close" /></a><a href="#"><img width={50} height={50} alt="cart_thumb1" src="/assets/files/culottes/culotte_7/825380258783085919054835307976332473139779511684087224936.webp" />Culotte
                    en dentelle</a><span className="cart_quantity"> 3 x
                    <span className="cart_amount"><span className="price_symbole">17,17&nbsp;€</span></span></span></li>
                <li><a href="#" className="item_remove"><i className="ion-close" /></a><a href="#"><img width={50} height={50} alt="cart_thumb1" src="/assets/files/970670668041335927385290724653240714148366921684565574162.webp" />Bikini
                    unicolore côtelé</a><span className="cart_quantity"> 4
                    x <span className="cart_amount"><span className="price_symbole">28,24&nbsp;€</span></span></span></li>
                <li><a href="#" className="item_remove"><i className="ion-close" /></a><a href="#"><img width={50} height={50} alt="cart_thumb1" src="/assets/files/culottes/culotte_4/87087411019387380483560199609827534551691041684087224752.webp" />Culotte
                    unicolore femme (sans couture)</a><span className="cart_quantity"> 2 x <span className="cart_amount"><span className="price_symbole">56,07&nbsp;€</span></span></span></li>
                <li><a href="#" className="item_remove"><i className="ion-close" /></a><a href="#"><img width={50} height={50} alt="cart_thumb1" src="/assets/files/culottes/culotte_2/64690629656996101166169787112869964617448491684087224479.webp" />Tanga
                    unicolore</a><span className="cart_quantity"> 3 x <span className="cart_amount"><span className="price_symbole">38,84&nbsp;€</span></span></span></li>
                <li><a href="#" className="item_remove"><i className="ion-close" /></a><a href="#"><img width={50} height={50} alt="cart_thumb1" src="/assets/files/culottes/culotte_8/10518988473111520886581236853833613928085898971684087225041.webp" />Culotte
                    en dentelle</a><span className="cart_quantity"> 1 x
                    <span className="cart_amount"><span className="price_symbole">58,43&nbsp;€</span></span></span></li>
                <li><a href="#" className="item_remove"><i className="ion-close" /></a><a href="#"><img width={50} height={50} alt="cart_thumb1" src="/assets/files/culottes/culotte_3/6138170893214881132536005127536132168491807951684087224669.webp" />Culotte
                    à blocs de couleurs en dentelle</a><span className="cart_quantity"> 3 x <span className="cart_amount"><span className="price_symbole">54,95&nbsp;€</span></span></span></li>
              </ul>
              <div className="cart_footer">
                <p className="cart_total"><strong>Subtotal:</strong><span className="cart_price"><span className="price_symbole" /></span>1 057,58&nbsp;€ </p>
                <p className="cart_buttons"><a className="btn btn-fill-line view-cart" href="/cart">View Cart</a><a  className="btn btn-fill-out checkout" ng-reflect-router-link="/checkout" href="/checkout">Checkout</a></p>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
    </Fragment>
  );
}

export default Header;
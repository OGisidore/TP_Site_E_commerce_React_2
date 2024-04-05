/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 03/04/2024 09:18:57
*/
import React, { FC, useEffect, useState } from 'react';
import './ModalQuickView.css';
import { Product } from '../../models/Products';
import { formatPrice, generateID, reductionRate } from '../../Helpers/utiles';
import { useDispatch } from 'react-redux';
import { ADD_NOTIFICATION, ADD_TO_CART, ADD_TO_STORAGE } from '../../redux/actions/actionTypes';


interface ModalQuickViewProps {
  product: Product
  close: () => void

}


const ModalQuickView: FC<ModalQuickViewProps> = ({ product, close }) => {

  const [currentImage , setCurrentImage]=useState<string>(product.imageUrls[0])
  const [quantity , setQuantity]=useState<number>(1)
  const dispatch = useDispatch()



  useEffect(() => {
    // window.scrollTo(0, 0)
    const runLocalData = async () => {
      const $ = (window as any).jQuery
      $(".slick_slider").not(".slick-initialized").slick({
        Infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      })

    }
    runLocalData()
  })
  const handleSetQuantity = (step : number)=>{
    if (quantity + step >= 1) {
      setQuantity(quantity + step)
      
    }
  }

  
  const addToCart = (e: any) => {
    e.preventDefault()
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: product,
        quantity: quantity,
        sub_total: product.solde_price
      }
    })
    dispatch({
      type: ADD_NOTIFICATION,
      payload: {
        _id: generateID(),
        message: product.name + " added to cart !",
        status: "success"
      }
    })

  }
  const addToWishlist = (event: any, productItem: Product) => {
    event.preventDefault()
    dispatch({
      type: ADD_TO_STORAGE,
      key: "wishlists",
      payload: productItem
    })
    dispatch({
      type: ADD_NOTIFICATION,
      payload: {
        _id: generateID(),
        message: product.name + " added to wishllist !",
        status: "success",
        timeout: 2000
      }
    })
  }
  const addToCompare = (event: any, productItem: Product) => {
    event.preventDefault()
    dispatch({
      type: ADD_TO_STORAGE,
      key: "compareLists",
      payload: productItem
    })
    dispatch({
      type: ADD_NOTIFICATION,
      payload: {
        _id: generateID(),
        message: product.name + " added to Compare !",
        status: "success",
        timeout: 2000
      }
    })
  }
  return (
    <div className="ModalQuickView">
      <div className="ModalQuickView">
        <div className="mfp-bg mfp-ready" />
        <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" style={{ overflow: "hidden auto;" }}>
          <div className="mfp-container mfp-ajax-holder mfp-s-ready">
            <div className="mfp-content">
              <div className="ajax_quick_view">
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                    <div className="product-image">
                      <div className="product_img_box">
                        <img id="product_img" src={currentImage} data-zoom-image={currentImage} alt="product_img1" />
                      </div>
                      <div id="pr_item_gallery" className="product_gallery_item slick_slider" data-slides-to-show={4} data-slides-to-scroll={1} data-infinite="false">
                        {
                          product.imageUrls.map((img: string, index: number) => {
                            return <div key={index} className="item">
                              <a  className="product_gallery_item active" data-image={img} data-zoom-image={img}>
                                <img  onClick={()=>setCurrentImage(img)} src={img} alt="product_small_img1" />
                              </a>
                            </div>
                          })
                        }
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="pr_detail">
                      <div className="product_description">
                        <span className="btn btn-close" onClick={close}></span>
                        <h4 className="product_title"><a href="#">{product.name}</a></h4>
                        <div className="product_price">
                          <span className="price">{formatPrice(product.solde_price)}</span>
                          <del>{formatPrice(product.regular_price)}</del>
                          <div className="on_sale">
                            <span>{reductionRate(product)} % off</span>
                          </div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: "80%" }} />
                          </div>
                          <span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>{product.description}</p>
                        </div>
                        <div className="product_sort_info">
                          <ul>
                            <li><i className="linearicons-shield-check" /> 1 Year AL Jazeera Brand
                              Warranty
                            </li>
                            <li><i className="linearicons-sync" /> 30 Day Return Policy</li>
                            <li><i className="linearicons-bag-dollar" /> Cash on Delivery available
                            </li>
                          </ul>
                        </div>
                      </div>
                      <hr />
                      <div className="cart_extra">
                        <div className="cart-product-quantity">
                          <div className="quantity">
                            <input  onClick={()=>handleSetQuantity(-1)}  type="button" defaultValue="-" className="minus" />
                            <input type="text" name="quantity" defaultValue={quantity} value={quantity} title="Qty" className="qty" size={4} />
                            <input  onClick={()=>handleSetQuantity(1)} type="button" defaultValue="+" className="plus" />
                          </div>
                        </div>
                        <div className="cart_btn">
                          <button className="btn btn-fill-out btn-addtocart" onClick={(event)=>addToCart(event)} type="button">
                            <i className="icon-basket-loaded" /> Add to cart</button>
                          <a onClick={(event)=> addToCompare(event,product)} className="add_compare" href="#"><i className="icon-shuffle" /></a>
                          <a  onClick={(event)=>addToWishlist(event,product)} className="add_wishlist" href="#"><i className="icon-heart" /></a>
                        </div>
                      </div>
                      <hr />
                      <ul className="product-meta">
                        <li>SKU: <a href="#">BE45VGRT</a></li>
                        <li>Category: <a href="#">Clothing </a></li>
                        <li>Tags: <a href="#" rel="tag">Cloth</a>, <a href="#" rel="tag">printed</a> </li>
                      </ul>
                      <div className="product_share">
                        <span>Share:</span>
                        <ul className="social_icons">

                          <li><a href="#"><i className="ion-social-facebook" /></a></li>
                          <li><a href="#"><i className="ion-social-twitter" /></a></li>
                          <li><a href="#"><i className="ion-social-googleplus" /></a></li>
                          <li><a href="#"><i className="ion-social-youtube-outline" /></a></li>
                          <li><a href="#"><i className="ion-social-instagram-outline" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default ModalQuickView;
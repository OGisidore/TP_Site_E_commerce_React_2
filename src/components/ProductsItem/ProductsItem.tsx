/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/03/2024 13:29:57
*/
import React, { FC, useEffect, useState } from 'react';
import './ProductsItem.css';
import { Product } from '../../models/Products';
import { Link } from 'react-router-dom';
import { formatPrice, generateID, reductionRate } from '../../Helpers/utiles';
import { useDispatch } from 'react-redux';
import { ADD_NOTIFICATION, ADD_TO_CART, ADD_TO_STORAGE } from '../../redux/actions/actionTypes';
import ModalQuickView from '../ModalQuickView/ModalQuickView';


interface ProductsItemProps {
  product: Product

}


const ProductsItem: FC<ProductsItemProps> = ({ product }) => {
  const dispatch = useDispatch()
  const [isQuickView, setIsQuickView] = useState(false)


  useEffect(() => {

    const runLocalData = async () => {

    }
    runLocalData()
  }, [])
  const addToCart = (e: any) => {
    e.preventDefault()
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: product,
        quantity: 1,
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
    <div className="product">
      {
        isQuickView ? 
        <ModalQuickView product={product}
        close={()=>setIsQuickView(false)}/>
        :
        null
      }
      <div className="product_img">
        <Link to={"/product/" + product.slug}>
          <img alt="product_img1" src={product.imageUrls[0]} />
        </Link>
        <div className="product_action_box">
          <ul className="list_none pr_action_btn">
            <li className="add-to-cart">
              <a onClick={addToCart}
                href="#">
                <i className="icon-basket-loaded" />
                Add To Cart
              </a>
            </li>
            <li>
              <a
                onClick={(event) => addToCompare(event, product)}
                href="#"
                className="popup-ajax">
                <i className="icon-shuffle" />
              </a>
            </li>
            <li>
              <a
              onClick={()=> setIsQuickView(! isQuickView )}
                className="popup-ajax">
                <i
                  className="icon-magnifier-add" />
              </a>
            </li>
            <li>
              <a href="#" onClick={(event) => addToWishlist(event, product)}>
                <i className="icon-heart" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="product_info">
        <h6 className="product_title">
          <Link to={"/product/" + product.slug}>
            {product.name}
          </Link>
        </h6>
        <div className="product_price">
          <span className="price"> {formatPrice(product?.solde_price)} </span>
          <del>{formatPrice(product?.regular_price)} </del>
          <div className="on_sale">
            <span>{reductionRate(product)}% Off</span>
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
        <div className="pr_switch_wrap">
          <div className="product_color_switch">
            <span data-color="#87554B" className="active" />
            <span data-color="#333333" /><span data-color="#DA323F" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default ProductsItem;
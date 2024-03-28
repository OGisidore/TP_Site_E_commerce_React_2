/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 28/03/2024 15:20:15
*/
import React, { FC } from 'react';
import './Cart.css';
import PageBanner from '../../components/PageBanner/PageBanner';
import { useSelector } from 'react-redux';
import { getCart } from '../../redux/selectors/GlobalSelectors';
import { formatPrice } from '../../Helpers/utiles';
import { Article } from '../../models/Article';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../redux/actions/actionTypes';
import { useDispatch } from 'react-redux';


interface CartProps {
 
}


const Cart : FC<CartProps> = () =>{
const dispatch = useDispatch()

const cart = useSelector(getCart)
    // useEffect(() => {
     
    //   const runLocalData = async () => {

    //   }
    //   runLocalData()
    // })
    const handleRemoveCartItem = (event:any , item:Article , quantity?:number)=>{
      event.preventDefault()
       
      dispatch({
        type : REMOVE_FROM_CART,
        payload : {
          product : item.product,
          quantity : quantity || item.quantity
        }
      })
  
    }
    const handleAddItemToCart = (event:any , item:Article , quantity?:number)=>{
     
      event.preventDefault()
       
      dispatch({
        type : ADD_TO_CART,
        payload : {
          product : item.product,
          quantity : quantity || 1
        }
      })
  
    }
  

  return (
      <div className="Cart">
           <PageBanner name='Shopping Cart' />
           <div className="main_content">
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="table-responsive shop_cart_table">
            <table className="table">
              <thead>
                <tr>
                  <th className="product-thumbnail">&nbsp;</th>
                  <th className="product-name">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-subtotal">Total</th>
                  <th className="product-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.items.map((item)=>{
                    return  <tr>
                  <td className="product-thumbnail">
                    <a><img width={50} alt="product1"
                   src={item.product.imageUrls[0]} /></a>
                  </td>
                  <td data-title="Product" className="product-name"><a>{item.product.name}</a></td>
                  <td data-title="Price" className="product-price">{formatPrice(item.product.solde_price)}</td>
                  <td data-title="Quantity" className="product-quantity">
                    <div className="quantity">
                      <input type="button" onClick={(event)=>handleRemoveCartItem(event , item,1)} defaultValue="-" className="minus" />
                      <input type="text" name="quantity" value={item.quantity} title="Qty" size={4} className="qty" />
                      <input type="button" onClick={(event)=>handleAddItemToCart(event , item , 1)} defaultValue="+" className="plus" /></div>
                  </td>
                  <td data-title="Total" className="product-subtotal">
                   {formatPrice(item.sub_total)} </td>
                  <td data-title="Remove" className="product-remove">
                    <a onClick={(event)=>handleRemoveCartItem(event , item)} href="#"><i className="ti-close" /></a></td>
                </tr>
              
                  })
                }
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="medium_divider" />
          <div className="divider center_icon"><i className="ti-shopping-cart-full" /></div>
          <div className="medium_divider" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" />
        <div className="col-md-6">
          <div className="border p-3 p-md-4">
            <div className="heading_s1 mb-3">
              <h6>Cart Totals</h6>
            </div>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="cart_total_label">Cart Subtotal</td>
                    <td className="cart_total_amount">{formatPrice(cart.sub_total)}</td>
                  </tr>
                  <tr>
                    <td className="cart_total_label">Shipping</td>
                    <td className="cart_total_amount">Free Shipping</td>
                  </tr>
                  <tr>
                    <td className="cart_total_label">Total</td>
                    <td className="cart_total_amount"><strong>{formatPrice(cart.sub_total)}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div><a className="btn btn-fill-out" href="/checkout">Proceed To CheckOut</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
  );
}

export default Cart;
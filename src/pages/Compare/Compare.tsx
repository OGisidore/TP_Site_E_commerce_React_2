/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 30/03/2024 13:06:51
*/
import React, { FC, useEffect } from 'react';
import './Compare.css';
import PageBanner from '../../components/PageBanner/PageBanner';
import { useSelector } from 'react-redux';
import { getCompareList } from '../../redux/selectors/GlobalSelectors';
import { Navigate } from 'react-router-dom';
import { Product } from '../../models/Products';
import { formatPrice, generateID } from '../../Helpers/utiles';
import { ADD_NOTIFICATION, ADD_TO_CART, REMOVE_FROM_STORAGE } from '../../redux/actions/actionTypes';
import { useDispatch } from 'react-redux';


interface CompareProps {
 
}


const Compare : FC<CompareProps> = () =>{


  const dispatch = useDispatch()
  const compares :Product[] = useSelector(getCompareList)
  



    useEffect(() => {
     
      const runLocalData = async () => {
        console.log(compares);
        

      }
      runLocalData()
    })
    const addToCart = (e: any , product:Product) => {
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
    const removeFromComparlist = (e: any , product:Product) => {
      e.preventDefault()
      dispatch({
        type: REMOVE_FROM_STORAGE,
        key:"compareLists",
        payload: product
      })
      dispatch({
        type: ADD_NOTIFICATION,
        payload: {
          _id: generateID(),
          message: product.name + " removed from wishlist !",
          status: "success",
          timeout :2000
        }
       
      })
  
    }
    if (!compares?.length) {
      return <Navigate to={"/"}/>
      
    }

  return (
      <div className="Compare">
         <PageBanner name='Compare Products' />
         <div className="section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="compare_box">
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <tbody>
                <tr className="pr_image">
                  <td className="row_title">Product Image</td>
                  {
                    compares.map((item :Product)=>{
                     return  <td key={item._id} className="row_img"><img src={item.imageUrls[0]} alt="compare-img" /></td>
                    })
                  }

  
                </tr>
                <tr className="pr_title">
                  <td className="row_title">Product Name</td>
                  {
                    compares.map((item:Product)=>{
                      return <td key={item._id} className="product_name"><a href="shop-product-detail.html">{item.name}</a></td>
                    })
                  }
                  
                </tr>
                <tr className="pr_price">
                  <td className="row_title">Price</td>
                  {
                    compares.map((item : Product)=>{
                      return <td key={item._id} className="product_price"><span className="price">{formatPrice(item.solde_price)}</span></td>
                    })
                  }
                  
                </tr>
                <tr className="pr_rating">
                  <td className="row_title">Rating</td>
                  {
                    compares.map((item:Product)=>{
                      return  <td key={item._id}>
                    <div className="rating_wrap">
                      <div className="rating">
                        <div className="product_rate" style={{ width: "80%" }} />
                      </div>
                      <span className="rating_num">(21)</span>
                    </div>
                  </td>
                    })
                  }
                 
                
                </tr>
                <tr className="pr_add_to_cart">
                  <td className="row_title">Add To Cart</td>
                  {
                    compares.map((item :Product)=>{
                      return <td key={item._id} className="row_btn"><a onClick={(event)=>addToCart(event,item)} href="#" className="btn btn-fill-out"><i className="icon-basket-loaded" /> Add To Cart</a></td>

                    })
                  }
                  
                </tr>
                <tr className="description">
                  <td className="row_title">Description</td>
                  {
                    compares.map((item:Product)=>{
                      return <td key={item._id} className="row_text">
                    <p>{item.description} </p>
                  </td>
                    })
                  }
                  
      
                </tr>
                <tr className="pr_remove">
                  <td className="row_title" />
                  {
                    compares.map((item:Product)=>{
                      return <td key={item._id} className="row_remove">
                    <a onClick={(event)=>removeFromComparlist(event, item)} href="#"><span>Remove</span> <i className="fa fa-times" /></a>
                  </td>
                    })
                  }
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
  );
}

export default Compare;
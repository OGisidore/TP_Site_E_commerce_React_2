/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 30/03/2024 13:06:51
*/
import React, { FC, useEffect } from 'react';
import './WishList.css';
import PageBanner from '../../components/PageBanner/PageBanner';
import { useSelector } from 'react-redux';
import { getWishlist } from '../../redux/selectors/GlobalSelectors';
import { Product } from '../../models/Products';
import { formatPrice, generateID } from '../../Helpers/utiles';
import { useDispatch } from 'react-redux';
import { ADD_NOTIFICATION, ADD_TO_CART, REMOVE_FROM_STORAGE } from '../../redux/actions/actionTypes';
import { Navigate } from 'react-router-dom';


interface WishListProps {
 
}


const WishList : FC<WishListProps> = () =>{

  
  const wishllists : Product[] = useSelector(getWishlist)
  

const dispatch = useDispatch()

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {
        console.log(wishllists);
        

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
    const removeFromWishlist = (e: any , product:Product) => {
      e.preventDefault()
      dispatch({
        type: REMOVE_FROM_STORAGE,
        key:"wishlists",
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
    if (!wishllists?.length) {
      return <Navigate to={"/"}/>
      
    }


  return (
      <div className="WishList">
          <PageBanner name='Wishlist' />
          <div className="main_content">
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="table-responsive wishlist_table">
            <table className="table">
              <thead>
                <tr>
                  <th className="product-thumbnail">&nbsp;</th>
                  <th className="product-name">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-stock-status">Stock Status</th>
                  <th className="product-add-to-cart" />
                  <th className="product-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                {
                  wishllists?.map((wishlist:Product )=>{
                  return <tr key={wishlist._id}>
                  <td className="product-thumbnail"><a href="#"><img width={50} height={50} alt="product1" src={wishlist.imageUrls[0]} /></a>
                  </td>
                  <td data-title="Product" className="product-name"><a href="#">{wishlist.name}</a></td>
                  <td data-title="Price" className="product-price">
                    {formatPrice(wishlist.solde_price)}</td>
                  <td data-title="Stock Status" className="product-stock-status"><span className="badge badge-pill badge-success">{wishlist.stock}</span></td>
                  <td className="product-add-to-cart">
                    <a href="#" onClick={(event)=>addToCart(event,wishlist)} className="btn btn-fill-out"><i className="icon-basket-loaded" /> Add to
                      Cart</a></td>
                  <td data-title="Remove" className="product-remove"><a onClick={(event)=>removeFromWishlist(event, wishlist)} href="#"><i className="ti-close" /></a></td>
                </tr>
                }
                  )
                }
                
                {/* <tr>
                  <td className="product-thumbnail"><a href="#"><img width={50} height={50} alt="product1" src="/assets/files/culottes/culotte_4/87087411019387380483560199609827534551691041684087224752.webp" /></a>
                  </td>
                  <td data-title="Product" className="product-name"><a href="#">Culotte unicolore femme (sans
                      couture)</a></td>
                  <td data-title="Price" className="product-price">
                    56,07&nbsp;€</td>
                  <td data-title="Stock Status" className="product-stock-status"><span className="badge badge-pill badge-success">In Stock</span></td>
                  <td className="product-add-to-cart"><a href="#" className="btn btn-fill-out"><i className="icon-basket-loaded" /> Add to
                      Cart</a></td>
                  <td data-title="Remove" className="product-remove"><a href="#"><i className="ti-close" /></a></td>
                </tr>
                <tr>
                  <td className="product-thumbnail"><a href="#"><img width={50} height={50} alt="product1" src="/assets/files/culottes/culotte_8/10518988473111520886581236853833613928085898971684087225041.webp" /></a>
                  </td>
                  <td data-title="Product" className="product-name"><a href="#">Culotte en dentelle</a></td>
                  <td data-title="Price" className="product-price">
                    58,43&nbsp;€</td>
                  <td data-title="Stock Status" className="product-stock-status"><span className="badge badge-pill badge-success">In Stock</span></td>
                  <td className="product-add-to-cart"><a href="#" className="btn btn-fill-out"><i className="icon-basket-loaded" /> Add to
                      Cart</a></td>
                  <td data-title="Remove" className="product-remove"><a href="#"><i className="ti-close" /></a></td>
                </tr>
                <tr>
                  <td className="product-thumbnail"><a href="#"><img width={50} height={50} alt="product1" src="/assets/files/jupes/jupe_7/524333185019172646736797295488095127403448401684087224592.webp" /></a>
                  </td>
                  <td data-title="Product" className="product-name"><a href="#">Jupe noire brillante</a></td>
                  <td data-title="Price" className="product-price">
                    14,60&nbsp;€</td>
                  <td data-title="Stock Status" className="product-stock-status"><span className="badge badge-pill badge-success">In Stock</span></td>
                  <td className="product-add-to-cart"><a href="#" className="btn btn-fill-out"><i className="icon-basket-loaded" /> Add to
                      Cart</a></td>
                  <td data-title="Remove" className="product-remove"><a href="#"><i className="ti-close" /></a></td>
                </tr>
                <tr>
                  <td className="product-thumbnail"><a href="#"><img width={50} height={50} alt="product1" src="/assets/files/culottes/culotte_13/244705445388511646473689254487159474772929841684087225813.webp" /></a>
                  </td>
                  <td data-title="Product" className="product-name"><a href="#">Culotte ourlet en dentelle</a></td>
                  <td data-title="Price" className="product-price">
                    45,83&nbsp;€</td>
                  <td data-title="Stock Status" className="product-stock-status"><span className="badge badge-pill badge-success">In Stock</span></td>
                  <td className="product-add-to-cart"><a href="#" className="btn btn-fill-out"><i className="icon-basket-loaded" /> Add to
                      Cart</a></td>
                  <td data-title="Remove" className="product-remove"><a href="#"><i className="ti-close" /></a></td>
                </tr> */}
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

export default WishList;
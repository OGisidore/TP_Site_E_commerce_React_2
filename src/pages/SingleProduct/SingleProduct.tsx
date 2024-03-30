/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/03/2024 14:26:41
*/
import React, { FC, useEffect, useState } from 'react';
import './SingleProduct.css';
import { useParams } from 'react-router-dom';
import PageBanner from '../../components/PageBanner/PageBanner';
import { formatPrice, loadScript, reductionRate } from '../../Helpers/utiles';
import { RequestResponse } from '../../models/requestResponse';
import { Product } from '../../models/Products';
import { getDatasBySlug } from '../../api/entities';
import ProductsItem from '../../components/ProductsItem/ProductsItem';



interface SingleProductProps {

}


const SingleProduct: FC<SingleProductProps> = () => {
  const params = useParams()
 const {slug} = params
  const [loading, setLoading] = useState<boolean>(true)
  const [product, setProduct] = useState<Product | null>(null)
 


  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      if (slug) {
        const productData: RequestResponse = await getDatasBySlug("product", slug)
       

        if (productData.isSuccess) {
          const data: Product = (productData.result as Product)
    

          setProduct(data)
          setLoading(false)
          loadScript()
        }

      }

    }
    runLocalData()
    // console.log(product?.relatedProducts);
    
  },[loading , slug])

  return (
    <div className="SingleProduct">
      <PageBanner name='Product Details' />
      {
        product ?
          <div className="main_content">
            <div className="section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                    <div className="product-image">
                      <div className="product_img_box">
                        <img id="product_img" src={product?.imageUrls[0]} alt="product_img1" />
                        <a href="#" className="product_img_zoom" title="Zoom">
                          <span className="linearicons-zoom-in"></span>
                        </a>
                      </div>
                      <div id="pr_item_gallery" className="product_gallery_item slick_slider" data-slides-to-show="4" data-slides-to-scroll="1" data-infinite="false">
                        {
                          product?.imageUrls.length ?
                            product.imageUrls.map((imageUrl: string, index) => {
                              return <div className="item" key={index}>
                                <a href="#" className="product_gallery_item active"
                                  data-image={imageUrl}
                                  data-zoom-image={imageUrl}>
                                  <img src={imageUrl} alt="product image" />
                                </a>
                              </div>
                            })
                            :
                            null
                        }
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="pr_detail">
                      <div className="product_description">
                        <h4 className="product_title"><a href="#">{product?.name}</a></h4>
                        <div className="product_price">
                          <span className="price">{formatPrice(product?.solde_price)}</span>
                          <del>{formatPrice(product?.regular_price)}</del>
                          <div className="on_sale">
                            <span>{reductionRate(product)}% Off</span>
                          </div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div className="product_rate" style={{ width: '80%' }}></div>
                          </div>
                          <span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>
                            {product.description}
                          </p>
                        </div>
                        <div className="product_sort_info">
                          <ul>
                            <li><i className="linearicons-shield-check"></i> 1 Year AL Jazeera Brand Warranty</li>
                            <li><i className="linearicons-sync"></i> 30 Day Return Policy</li>
                            <li><i className="linearicons-bag-dollar"></i> Cash on Delivery available</li>
                          </ul>
                        </div>
                      </div>
                      <hr />
                      <div className="cart_extra">
                        <div className="cart-product-quantity">
                          <div className="quantity">
                            <input type="button"  value="-" className="minus" />
                            <input type="text" name="quantity" value='1' title="Qty" className="qty" size={4} />
                            <input type="button"  value="+" className="plus" />
                          </div>
                        </div>
                        <div className="cart_btn">
                          <button className="btn btn-fill-out btn-addtocart" type="button"><i className="icon-basket-loaded"></i> Add to cart</button>
                          <a className="add_compare" href="#"><i className="icon-shuffle"></i></a>
                          <a className="add_wishlist" href="#"><i className="icon-heart"></i></a>
                        </div>
                      </div>
                      <hr />
                      <ul className="product-meta">
                        <li>SKU: <a href="#">BE45VGRT</a></li>
                        <li>Category: <a href="#">Clothing</a></li>
                        <li>Tags: <a href="#" rel="tag">Cloth</a>, <a href="#" rel="tag">printed</a> </li>
                      </ul>

                      <div className="product_share">
                        <span>Share:</span>
                        <ul className="social_icons">
                          <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                          <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                          <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
                          <li><a href="#"><i className="ion-social-youtube-outline"></i></a></li>
                          <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="large_divider clearfix"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="tab-style3">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="Description-tab" data-bs-toggle="tab" href="#Description" role="tab" aria-controls="Description" aria-selected="true">Description</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="Additional-info-tab" data-bs-toggle="tab" href="#Additional-info" role="tab" aria-controls="Additional-info" aria-selected="false">Additional info</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="Reviews-tab" data-bs-toggle="tab" href="#Reviews" role="tab" aria-controls="Reviews" aria-selected="false">Reviews (2)</a>
                        </li>
                      </ul>
                      <div className="tab-content shop_info_tab">
                        <div className="tab-pane fade show active" id="Description" role="tabpanel" aria-labelledby="Description-tab">
                          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Vivamus bibendum magna Lorem ipsum dolor sit amet, consectetur adipiscing elit.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        </div>
                        <div className="tab-pane fade" id="Additional-info" role="tabpanel" aria-labelledby="Additional-info-tab">
                          <table className="table table-bordered">
                            <tr>
                              <td>Capacity</td>
                              <td>5 Kg</td>
                            </tr>
                            <tr>
                              <td>Color</td>
                              <td>Black, Brown, Red,</td>
                            </tr>
                            <tr>
                              <td>Water Resistant</td>
                              <td>Yes</td>
                            </tr>
                            <tr>
                              <td>Material</td>
                              <td>Artificial Leather</td>
                            </tr>
                          </table>
                        </div>
                        <div className="tab-pane fade" id="Reviews" role="tabpanel" aria-labelledby="Reviews-tab">
                          <div className="comments">
                            <h5 className="product_tab_title">2 Review For <span>Blue Dress For Woman</span></h5>
                            <ul className="list_none comment_list mt-4">
                              <li>
                                <div className="comment_img">
                                  <img src="assets/images/user1.jpg" alt="user1" />
                                </div>
                                <div className="comment_block">
                                  <div className="rating_wrap">
                                    <div className="rating">
                                      <div className="product_rate" style={{ width: '80%' }}></div>
                                    </div>
                                  </div>
                                  <p className="customer_meta">
                                    <span className="review_author">Alea Brooks</span>
                                    <span className="comment-date">March 5, 2018</span>
                                  </p>
                                  <div className="description">
                                    <p>Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate</p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="comment_img">
                                  <img src="assets/images/user2.jpg" alt="user2" />
                                </div>
                                <div className="comment_block">
                                  <div className="rating_wrap">
                                    <div className="rating">
                                      <div className="product_rate" style={{ width: '60%' }}></div>
                                    </div>
                                  </div>
                                  <p className="customer_meta">
                                    <span className="review_author">Grace Wong</span>
                                    <span className="comment-date">June 17, 2018</span>
                                  </p>
                                  <div className="description">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="review_form field_form">
                            <h5>Add a review</h5>
                            <form className="row mt-3">
                              <div className="form-group col-12 mb-3">
                                <div className="star_rating">
                                  <span data-value="1"><i className="far fa-star"></i></span>
                                  <span data-value="2"><i className="far fa-star"></i></span>
                                  <span data-value="3"><i className="far fa-star"></i></span>
                                  <span data-value="4"><i className="far fa-star"></i></span>
                                  <span data-value="5"><i className="far fa-star"></i></span>
                                </div>
                              </div>
                              <div className="form-group col-12 mb-3">
                                <textarea placeholder="Your review *" className="form-control" name="message" rows={4}></textarea>
                              </div>
                              <div className="form-group col-md-6 mb-3">
                                <input placeholder="Enter Name *" className="form-control" name="name" type="text" />
                              </div>
                              <div className="form-group col-md-6 mb-3">
                                <input placeholder="Enter Email *" className="form-control" name="email" type="email" />
                              </div>

                              <div className="form-group col-12 mb-3">
                                <button type="submit" className="btn btn-fill-out" name="submit" value="Submit">Submit Review</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="small_divider"></div>
                    <div className="divider"></div>
                    <div className="medium_divider"></div>
                  </div>
                </div>
                {
                  product.relatedProducts.length ?
                    < div className="row">
                      <div className="col-12">
                        <div className="heading_s1">
                          <h3>Releted Products</h3>
                        </div>
                        <div className="releted_product_slider carousel_slider owl-carousel owl-theme" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'>
                          {
                            product.relatedProducts.map((item: Product)=>{
                              return <div className="item" key={item._id}>
                          <ProductsItem product={item}/>
                          </div>
                            })
                          }
                         

                        </div>
                      </div>
                    </div>
                    :
                    null
                }

              </div>
            </div>
          </div>
          :
          null

      }
    </div >
  );
}

export default SingleProduct;
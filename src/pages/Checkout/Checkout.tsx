/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 28/03/2024 15:20:15
*/
import React, { FC, useEffect, useState } from 'react';
import './Checkout.css';
import PageBanner from '../../components/PageBanner/PageBanner';
import { useDispatch } from 'react-redux';
import { Carrier } from '../../models/Carriers';
import { useSelector } from 'react-redux';
import { getCarriers, getCart, getUserID } from '../../redux/selectors/GlobalSelectors';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';
import { RequestResponse } from '../../models/requestResponse';
import { getData, searchDatas } from '../../api/entities';
import { formatPrice } from '../../Helpers/utiles';
// import { Link } from 'react-router-dom';
import ManageAddress from '../../components/ManageAddress/ManageAddress';
import { Address } from '../../models/Address';
import PaymentModal from '../../components/PaymentModal/PaymentModal';


interface CheckoutProps {

}


const Checkout: FC<CheckoutProps> = () => {

  const dispatch = useDispatch()
  const [carriers, setCarriers] = useState<Carrier[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false)
  const cart = useSelector(getCart)
  let carrier = useSelector(getCarriers)
  const userId = useSelector(getUserID)
  const [addressList, setAddressList] = useState<Address[]>([])
  const [billingAddress, setBillingAddress] = useState<string>('')
  const [shippingAddress, setShippingAddress] = useState<string>('')



  useEffect(() => {
    // window.scrollTo(0, 0)
    const runLocalData = async () => {
      let data: RequestResponse = await getData("carrier")
      if (data.isSuccess) {
        setCarriers(data.results as Carrier[])
        setLoading(false)
        if (!carrier && data?.results?.[0]) {
          dispatch({
            type: ADD_TO_STORAGE,
            key: "carrier",
            unique: true,
            payload: data.results[0]
          })

        }

      }
      let query = "user=" + userId
       data = await searchDatas("address", query)
      if (data.isSuccess) {
        console.log(data.results);

        setAddressList((data.results as Address[]))
       

      }


    }
    runLocalData()
  }, [loading])

  const handleChangeCarrier = (event: any) => {
    const CarrierID = event.target.value
    if (CarrierID) {
      const existingCarrier = carriers.find((carri) => carri._id === CarrierID)
      if (existingCarrier) {
        dispatch({
          type: ADD_TO_STORAGE,
          key: "carrier",
          unique: true,
          payload: existingCarrier
        })

      }

    }

  }
  const handlePay = (e : any)=>{
    e.preventDefault()
    const currentAdress = {
      billingAddress : addressList.filter((addres:Address)=> addres._id === billingAddress)[0],
      shippingAddress : addressList.filter((addres:Address)=> addres._id === shippingAddress)[0],
    }
    dispatch({
      type: ADD_TO_STORAGE,
      key: "currentAddress",
      unique: true,
      payload: currentAdress
    })

    setOpenPaymentModal(true)

  }

  return (
    <div className="Checkout">
      <PageBanner name='Checkout' />

      {
        openPaymentModal?
        <PaymentModal 
        hideModal={()=>setOpenPaymentModal(false)}/>
        :
        null
      }
      <div className="main_content">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="border p-3 p-md-4">
                  <ManageAddress
                  updateAddress={setAddressList}
                  checkout={true}
                  />
                  <div className="heading_s1">
                    <h4>Billing Details</h4>
                    <select name="Billing_details"
                     onChange={(e)=>setBillingAddress(e.target.value)}
                     className='form-control'>
                      <option value=""> Select your Billing Address ...</option>
                      {
                        addressList.map((address : Address)=>{
                          return <option value={address._id}>
                            {address.name} &nbsp;
                            {address.city}  &nbsp;
                            {address.street} &nbsp;
                            {address.code_postal} &nbsp;
                            {address.phone} &nbsp;
                            {address.state}
                          </option>
                        })
                      }

                    </select>
                    
                  </div>
                  <div className="heading_s1">
                    <h4>Shipping Details</h4>
                    <select name="Shipping_details"
                    onChange={(e)=>setShippingAddress(e.target.value)}
                    className='form-control'
                    >
                      <option value=""> Select your Shipping Address ...</option>
                      {
                        addressList.map((address : Address)=>{
                          return <option value={address._id}>
                            {address.name} &nbsp;
                            {address.city}  &nbsp;
                            {address.street} &nbsp;
                            {address.code_postal} &nbsp;
                            {address.phone} &nbsp;
                            {address.state}
                          </option>
                        })
                      }

                    </select>
                  </div>
                  <div className="select-carrier">
                  <div className="heading_s1">
                    <h4>Carriers </h4>
                  </div>
                 
                    <select name="carrier"
                      onChange={handleChangeCarrier}
                      value={carrier ? carrier._id : null}
                      className='form-control'>
                      <option disabled={true} value=""> select carrier</option>
                      {
                        carriers.map((carr: Carrier, index) => {
                          return <option key={index} value={carr._id}> {carr.name} ({formatPrice(carr.price)}) </option>
                        })
                      }
                    </select>
                  </div>
                </div>

              </div>
              <div className="col-md-6">
                <div className="order_review">
                  <div className="heading_s1">
                    <h4>Your Orders</h4>
                  </div>
                  <div className="table-responsive order_table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          cart.items.map((item) => {
                            return <tr>
                              <td>
                                <img
                                 src={item.product.imageUrls[0]}
                                 height={30}
                                 width={30}
                                 
                                  alt=" product" />
                                {item.product.name}
                                <span className="product-qty">
                                  {formatPrice(item.product.solde_price)} x {item.quantity}
                                </span>
                              </td>
                              <td>{formatPrice(item.sub_total)}</td>
                            </tr>
                          })
                        }

                      </tbody>
                      <tfoot>
                        <tr>
                          <th>SubTotal</th>
                          <td className="product-subtotal">{formatPrice(cart.sub_total)}</td>
                        </tr>
                        {
                          carrier ?
                            <tr>
                              <td className="cart_total_label">Shipping ({carrier.name})</td>
                              <td className="cart_total_amount">{formatPrice(carrier.price)}</td>
                            </tr>
                            :
                            null
                        }
                        <tr>
                          <th>Total</th>
                          <td className="product-subtotal">{formatPrice(cart.sub_total + (carrier?.price || 0))}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="payment_method">
                    <div className="heading_s1">
                    </div>
                  </div>
                  {
                    shippingAddress && billingAddress && !openPaymentModal?
                  <button onClick={handlePay} className="btn btn-fill-out btn-block"> Pay now {formatPrice(cart.sub_total + (carrier?.price || 0))} </button>

                    :
                    <p>Please select your billing and your shipping address</p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
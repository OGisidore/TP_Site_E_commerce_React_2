/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 07/04/2024 09:35:23
*/
import React, { FC, useEffect, Fragment } from 'react';
// import Loading from '../Loading/Loading';
import './OrderCompletes.css';
import PageBanner from '../../components/PageBanner/PageBanner';
import { Link } from 'react-router-dom';
import { RequestResponse } from '../../models/requestResponse';
import { captureOrder } from '../../api/payment';
import { useDispatch } from 'react-redux';
import { CLEAR_CART } from '../../redux/actions/actionTypes';


interface OrderCompletesProps {

}


const OrderCompletes: FC<OrderCompletesProps> = () => {


  // const [state, setState] = useState<any>(null)
  // const [loading, setLoading] = useState(true);
  // const [value, setValue] = useState('');
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      )
      if (clientSecret) {
        //stripe
        const data : RequestResponse = await captureOrder("Stripe", {payment_intent : clientSecret})
        console.log({data});
        
      }
      dispatch({
        type : CLEAR_CART,
        payload : null
      })
      

      // setLoading(false)
    }
    runLocalData()
  }, [])

  return (
    <Fragment>
     
          <div className="OrderCompletes">
            <PageBanner name='Order Completed' />
           
              <div className="section">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <div className="text-center order_complete">
                        <i className="fas fa-check-circle" />
                        <div className="heading_s1">
                          <h3>Your order is completed!</h3>
                        </div>
                        <p>Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.</p>
                        <Link to="/" className="btn btn-fill-out">Continue Shopping </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
      
    </Fragment>
  );
}

export default OrderCompletes;
/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 07/04/2024 11:27:39
*/
import React, { FC, useEffect } from 'react';
import './PaypalComponent.css';
import { createPaymentIntent } from '../../../../api/payment';
import { useSelector } from 'react-redux';
import { getCarriers, getCart, getCurrentAddress, getUserID } from '../../../../redux/selectors/GlobalSelectors';


interface PaypalComponentProps {

}


const PaypalComponent: FC<PaypalComponentProps> = () => {


  const cart = useSelector(getCart)
  // const [clientSecret, setClientSecret] = useState<string>("");

  const carriers = useSelector(getCarriers)
  const currentsAddress = useSelector(getCurrentAddress)
  const userId = useSelector(getUserID)
  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      const data = {
        cart,
        carriers,
        ...currentsAddress,
        userId
      }
      const paymentIntent = await createPaymentIntent("Paypal", data)
      console.log({paypal : paymentIntent});
      


    }
    runLocalData()
  })

  return (
    <div className="PaypalComponent">
      PaypalComponent Component
    </div>
  );
}

export default PaypalComponent;
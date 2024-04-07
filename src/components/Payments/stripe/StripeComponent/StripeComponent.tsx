/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 06/04/2024 13:27:28
*/
import React, { FC, useEffect, useState, } from 'react';
import './StripeComponent.css';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from 'react-redux';
import { getCarriers, getCart, getCurrentAddress, getUserID } from '../../../../redux/selectors/GlobalSelectors';
import { createPaymentIntent } from '../../../../api/payment';
import StripeCheckoutForm from '../StripeCheckoutForm/StripeCheckoutForm';

// import CheckoutForm from "./CheckoutForm";

interface StripeComponentProps {

}


const StripeComponent: FC<StripeComponentProps> = () => {


  // const [publicApiKey, setPublicApiKey] = useState<string>("");
  const [clientSecret, setClientSecret] = useState<string>("");
  const [stripePromise, setStripePromise] = useState<any>();
  const cart = useSelector(getCart)
  const carriers = useSelector(getCarriers)
  const currentsAddress = useSelector(getCurrentAddress)
  const userId = useSelector(getUserID)



  useEffect(() => {
    // window.scrollTo(0,0)
    const runLocalData = async () => {
      const data = {
        cart,
        carriers,
        ...currentsAddress,
        userId
      }
      const paymentIntent = await createPaymentIntent("Stripe", data)
      setClientSecret(paymentIntent?.clientSecret)
      if (process.env.NODE_ENV === "development") {
        // setPublicApiKey(paymentIntent.TEST_PUBLIC_API_KEY)
        setStripePromise(loadStripe(paymentIntent.TEST_PUBLIC_API_KEY))

      } else if (process.env.NODE_ENV === "production") {
        // setPublicApiKey(paymentIntent.PROD_PUBLIC_API_KEY)
        setStripePromise(loadStripe(paymentIntent.PROD_PUBLIC_API_KEY))

      }

      console.log({ paymentIntent });
      // console.log({ publicApiKey });
      // console.log({ clientSecret });

    }
    runLocalData()
  }, [cart])
  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options: any = {
    clientSecret,
    appearance,
  };

  return (
    <div className="StripeComponent">
      <div className="App">
        {clientSecret && stripePromise && (
          <Elements options={options} stripe={stripePromise}>
            <StripeCheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  );
}

export default StripeComponent;
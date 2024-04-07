/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 06/04/2024 11:15:52
*/
import React, { FC, useEffect, useState } from 'react';
import './PaymentModal.css';
import StripeComponent from '../Payments/stripe/StripeComponent/StripeComponent';
import SwitchOnOf from '../SwitchOnOf/SwitchOnOf';
import PaypalComponent from '../Payments/paypal/PaypalComponent/PaypalComponent';


interface PaymentModalProps {
  hideModal: () => void

}
// interface PaymentMEthod {
//   name: string
// }


const PaymentModal: FC<PaymentModalProps> = ({ hideModal }) => {


  const [paymentMethod, setPaymentMethod] = useState<boolean>(true)
  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      const modal = new (window as any).bootstrap.Modal("#paymentModal", { keyboard: false })
      modal.show()

    }
    runLocalData()
  })
  const handleChange = (bool:boolean) => {
    setPaymentMethod(bool)

  }

  return (
    <div className="PaymentModal">
      <div>
        <div className="modal fade" id="paymentModal" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scroll">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="paymentModalLabel">Payment Modal</h1>
                <button type="button" onClick={hideModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="select-payment-method d-flex gap-2 align-items-center  justify-content-center">
                  <div className="payment-method-name">Stripe</div>
                  <SwitchOnOf
                    status={false}
                    setStatus={handleChange}
                  />
                  <div className="payment-method-name">Paypal</div>
                </div>
                {
                  !paymentMethod ?
                    <StripeComponent />

                    :
                    <PaypalComponent/>
                }
                {/* <StripeComponent/> */}
              </div>
              {/* <div className="modal-footer">
                <button type="button" onClick={hideModal} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Understood</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default PaymentModal;
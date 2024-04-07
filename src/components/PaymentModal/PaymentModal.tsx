/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 06/04/2024 11:15:52
*/
import React, { FC, useEffect } from 'react';
import './PaymentModal.css';
import StripeComponent from '../Payments/stripe/StripeComponent/StripeComponent';


interface PaymentModalProps {
  hideModal:()=>void

}


const PaymentModal: FC<PaymentModalProps> = ({hideModal}) => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      const modal = new (window as any).bootstrap.Modal("#paymentModal", {keyboard : false})
      modal.show()

    }
    runLocalData()
  })

  return (
    <div className="PaymentModal">
      <div>
        <div className="modal fade" id="paymentModal"  aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="paymentModalLabel">Payment Modal</h1>
                <button type="button" onClick={hideModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <StripeComponent/>
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
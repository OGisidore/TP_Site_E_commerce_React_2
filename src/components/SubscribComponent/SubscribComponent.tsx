/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 03/04/2024 10:59:05
*/
import React, { FC, useEffect, useState } from 'react';
import './SubscribComponent.css';
import { useFormik } from 'formik';
import { generateID, validateSubscribe } from '../../Helpers/utiles';
import { User } from '../../models/User';
import { addData } from '../../api/entities';
import { ADD_NOTIFICATION, ADD_TO_STORAGE } from '../../redux/actions/actionTypes';
import { useDispatch } from 'react-redux';


interface SubscribComponentProps {

}


const SubscribComponent: FC<SubscribComponentProps> = () => {
  const validate = (values: any) => validateSubscribe(values)
  const [formError, setFomError] = useState<string>("")
  const dispatch = useDispatch()


  const formik = useFormik({
    initialValues: {
      fullName: "isidore og",
      email: 'isdi@gmail.com',

    },
    validate,
    onSubmit: async (user: User) => {
      // alert(JSON.stringify(user, null, 2));

      const result = await addData("newsletter", { newsletter: user })
      if (result.isSuccess) {
        dispatch({
          type: ADD_TO_STORAGE,
          key: "isSuscribed",
          unique : true,
          payload: true
        })

        dispatch({
          type: ADD_NOTIFICATION,
          payload: {
            _id: generateID(),
            message: " subscrption  completed !",
            status: "success",
            timeout: 2000
          }
        })




      } else {


        setFomError(result.message)
      }
    },
  });


  useEffect(() => {
    // window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="SubscribComponent">
      <div className="section bg_default small_pt small_pb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="heading_s1 mb-md-0 heading_light">
                <h3>Subscribe Our Newsletter</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="newsletter_form">
                <p>{formError}</p>
                <form
                  onSubmit={formik.handleSubmit}>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      name="fullName"
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                      placeholder="Enter Your Name"
                      className="form-control ng-untouched ng-pristine ng-invalid"
                      ng-reflect- />
                    {formik.touched.fullName && formik.errors.fullName ? (
                      <div className='error'>{formik.errors.fullName}</div>
                    ) : null}
                  </div>
                  <input type="text"
                    name='email' onChange={formik.handleChange}
                    defaultValue={formik.values.email}
                    required className="form-control rounded-0" placeholder="Enter Email Address" />

                  <button type="submit" className="btn btn-dark rounded-0" name="submit" value="Submit">Subscribe</button>

                </form>
                {formik.touched.email && formik.errors.email ? (
                  <div className='error-white'>{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribComponent;
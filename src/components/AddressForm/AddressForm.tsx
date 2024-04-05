/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 03/04/2024 14:55:29
*/
import React, { FC, useEffect, useState } from 'react';
import './AddressForm.css';
import { useFormik } from 'formik';
import { generateID, validateAddressForm } from '../../Helpers/utiles';
import { Address } from '../../models/Address';
import { addData, updateData } from '../../api/entities';
import { useDispatch } from 'react-redux';
import { ADD_NOTIFICATION } from '../../redux/actions/actionTypes';
import { useSelector } from 'react-redux';
import { getUserID } from '../../redux/selectors/GlobalSelectors';
import { countries } from '../../Helpers/countries';


interface AddressFormProps {
  cancel: () => void
  current_?: Address

}


const AddressForm: FC<AddressFormProps> = ({ cancel, current_ }) => {

  const dispatch = useDispatch()
  const validate = (values: any) => validateAddressForm(values)
  const [formError, setFomError] = useState<string>("")
  const userId = useSelector(getUserID)

  const handleCancel = (event: any) => {
    event?.preventDefault()
    // current_= undefined
    cancel()
  }

  const formik = useFormik({
    initialValues: current_ ? current_ : {
      address_type: "",
      name: '',
      street: '',
      state: "",
      city: "",
      user: userId,
      phone: "",
      code_postal: "",


    },
    validate,
    onSubmit: async (value: Address) => {
      let result
      if (current_) {
        const id = current_._id
        if(id)
          result = await updateData("address" , id , { address: value })

      } else {
         result = await addData("address", { address: value })

      }
      if (result.isSuccess) {
        // dispatch({
        //   type: ADD_TO_STORAGE,
        //   key: "isSuscribed",
        //   payload: true
        // })

        dispatch({
          type: ADD_NOTIFICATION,
          payload: {
            _id: generateID(),
            message: current_? "address updated!" : " address   added !",
            status: "success",
            timeout: 2000
          }
        })
        handleCancel(null)

        setFomError("")

      } else {


        setFomError(result.message)
      }
      // alert(JSON.stringify(result, null, 2));
    },
  });



  useEffect(() => {
    // window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })


  return (
    <div className="AddressForm">
      <form method="post"
        onSubmit={formik.handleSubmit}
        name="enq">
        <p className='error'> {formError}</p>
        <div className="row">
          <div className="form-group col-md-12 mb-3">
            <label>Address type<span className="required">*</span></label>
            <select name="address_type"
              onChange={formik.handleChange}
              value={formik.values.address_type}
              className='form-control' id="address_type">
              <option value="BILLING">BILLING</option>
              <option value="SHIPPING ">SHIPPING</option>
            </select>
          </div>
          {formik.touched.address_type && formik.errors.address_type ? (
            <div className='error'>{formik.errors.address_type}</div>
          ) : null}
          <div className="form-group col-md-12 mb-3">
            <label>Full Name <span className="required">*</span></label>
            <input
              onChange={formik.handleChange}
              value={formik.values.name} className="form-control" name="name" type="text" />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className='error'>{formik.errors.name}</div>
          ) : null}
          <div className="form-group col-md-6 mb-3">
            <label>Street <span className="required">*</span></label>
            <input
              onChange={formik.handleChange}
              value={formik.values.street}
              className="form-control" name="street" type="text" />
          </div>
          {formik.touched.street && formik.errors.street ? (
            <div className='error'>{formik.errors.street}</div>
          ) : null}
          <div className="form-group col-md-6 mb-3">
            <label>City <span className="required">*</span></label>
            <input
              onChange={formik.handleChange}
              value={formik.values.city}
              className="form-control" name="city" type="text" />
          </div>
          {formik.touched.city && formik.errors.city ? (
            <div className='error'>{formik.errors.city}</div>
          ) : null}
          <div className="form-group col-md-6 mb-3">
            <label>code Zip <span className="required">*</span></label>
            <input
              onChange={formik.handleChange}
              value={formik.values.code_postal}
              className="form-control" name="code_postal" type="text" />
          </div>
          {formik.touched.code_postal && formik.errors.code_postal ? (
            <div className='error'>{formik.errors.code_postal}</div>
          ) : null}

          <div className="form-group col-md-6 mb-3">
            <label>State <span className="required">*</span></label>
            <select className='form-control' name="state"
            onChange={formik.handleChange}
            value={formik.values.state} >
              <option value="select">Select country</option>
              {
                countries.map((country , index:number)=>{
                  return <option key={index} value={country.name}>{country.name}</option>
                })
              }

            </select>
          
          </div>
          {formik.touched.state && formik.errors.state ? (
            <div className='error'>{formik.errors.state}</div>
          ) : null}
          <div className="form-group col-md-12 mb-3">
            <label>phone <span className="required">*</span></label>
            <input
              onChange={formik.handleChange}
              value={formik.values.phone}
              className="form-control" name="phone" type="text" />
          </div>
          {formik.touched.phone && formik.errors.phone ? (
            <div className='error'>{formik.errors.phone}</div>
          ) : null}
          {/* <div className="form-group col-md-6 mb-3">
            <label>Country<span className="required">*</span></label>
            <input className="form-control" name="country" type="text" />
          </div> */}

          <div className="col-md-12">
            <button onClick={(event) => handleCancel(event)} className="btn btn-fill-out" >Cancel</button>
            <button type="submit" className="btn btn-fill-out" name="submit" value="Submit">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddressForm;
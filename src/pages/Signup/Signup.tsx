/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 23/03/2024 13:48:48
*/
import React, { FC, useEffect, Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Signup.css';
import PageBanner from '../../components/PageBanner/PageBanner';
import { useFormik } from 'formik';
import { validateRegisterForm } from '../../Helpers/utiles';
import { signup } from '../../api/entities';
import Signin from '../Signin/Signin';
import { Link } from 'react-router-dom';


interface SignupProps {

}


const Signup: FC<SignupProps> = () => {
  const[redirect , setRedirect]=useState<boolean>(false)
  const[formError , setFomError]=useState<string>("")


  const validate = (values: any) => validateRegisterForm(values)

  // validateRegisterForm
  const formik = useFormik({
    initialValues: {
      fullName: 'ISIDORE OG',
      password: '123456789',
      email: 'isidore@gmail.com',
      confirmPassword: '123456789',
      acceptedTerms : true
    },
    validate,
    onSubmit: async (user) => {
      const result = await signup(user)
      if (result.isSuccess) {
        setRedirect(true)
        setFomError("")
        
      }else{
        setRedirect(false)
        
        setFomError(result.message)
      }


      // alert(JSON.stringify(result, null, 2));
    },
  });

  // const [state, setState] = useState<any>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

console.log(formError);

    }
    runLocalData()
  }, [])
  if (redirect) {
   return <Signin/>
    
  }

  return (
    <Fragment>
      <PageBanner name='register' />
      <div className="main_content">
        <div className="login_register_wrap section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-md-10">
                <div className="login_wrap">
                  <div className="padding_eight_all bg-white">
                    <div className="heading_s1">
                      <h3>Create an Account</h3>
                    </div>
                   
                    <form
                      className="ng-untouched ng-pristine ng-invalid"
                      onSubmit={formik.handleSubmit}>
                        <p className='error'> {formError}</p>
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
                      <div
                        className="form-group mb-3">
                        <input
                          type="text"
                          name="email"
                          placeholder="Enter Your Email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          className="form-control ng-untouched ng-pristine ng-invalid"
                          ng-reflect- />
                          {formik.touched.email && formik.errors.email ? (
                          <div className='error'>{formik.errors.email}</div>
                        ) : null}
                      </div>
                      <div

                        className="form-group mb-3">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          className="form-control ng-untouched ng-pristine ng-invalid"
                          ng-reflect- />
                          {formik.touched.password && formik.errors.password ? (
                          <div className='error'>{formik.errors.password}</div>
                        ) : null}
                      </div>
                      <div
                        className="form-group mb-3">
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          onChange={formik.handleChange}
                          // defaultValue={formik.values.confirmPassword}
                          value={formik.values.confirmPassword}
                          className="form-control" />
                          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                          <div className='error'>{formik.errors.confirmPassword}</div>
                        ) : null}
                      </div>
                      <div className="login_footer form-group mb-3">
                        <div className="chek-form">
                          <div
                            className="custome-checkbox">
                            <input
                              type="checkbox"
                              checked={formik.values.acceptedTerms}
                              name="acceptedTerms"
                              id="exampleCheckbox2"
                              onChange={formik.handleChange}
                              
                              className="form-check-input" />
                            <label
                              htmlFor="exampleCheckbox2"
                              className="">
                              <span>I agree to terms &amp; Policy.</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <button
                          type="submit"
                          name="register"
                          className="btn btn-fill-out btn-block">
                          Register
                        </button>
                      </div>
                    </form>
                    <div
                      className="different_login"><span>
                        or</span></div>
                    {/* <ul className="btn-login list_none text-center">
                      <li><a href="#" className="btn btn-facebook"><i className="ion-social-facebook" />Facebook</a></li>
                      <li><a href="#" className="btn btn-google"><i className="ion-social-googleplus" />Google</a></li>
                    </ul> */}
                    <div className="form-note text-center">
                      Already have an account?
                       <Link to={"/login.html"}>Log in</Link>
                       </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </Fragment>
  );
}

export default Signup;
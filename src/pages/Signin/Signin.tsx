/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 23/03/2024 13:48:48
*/
import React, { FC, useEffect, Fragment, useState, } from 'react';
// import Loading from '../Loading/Loading';
import './Signin.css';
import PageBanner from '../../components/PageBanner/PageBanner';
import { Link, Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { validateLoginForm } from '../../Helpers/utiles';
import { signin } from '../../api/entities';
// import Account from '../../components/Account/Account';
import { useDispatch } from 'react-redux';
import { CONNECTED } from '../../redux/actions/actionTypes';
import { useSelector } from 'react-redux';
import { getAuthState } from '../../redux/selectors/GlobalSelectors';
import { getItem, removeItem } from '../../services/localstorage.services';


interface SigninProps {

}


const Signin: FC<SigninProps> = () => {
  const validate = (values: any) => validateLoginForm(values)
  const [redirect, setRedirect] = useState<boolean>(false)
  const [formError, setFomError] = useState<string>("")
  const dispatch = useDispatch()
  const isAuth = useSelector(getAuthState)

  const formik = useFormik({
    initialValues: {

      password: '',
      email: '',

    },
    validate,
    onSubmit: async (user) => {
      const result = await signin(user)
      if (result.isSuccess) {
        setRedirect(true)
        dispatch({
          type : CONNECTED,
          payload:{
            token : result.token,
            userId : result.userId 
          }
        })
        setFomError("")
        
      }else{
        setRedirect(false)
        
        setFomError(result.message)
      }
      // alert(JSON.stringify(result, null, 2));
    },
  });


  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
    }
    runLocalData()
  }, [])
  if (redirect) {
    const pathname = getItem('pathname')
    if (pathname) {
      removeItem("pathname")
      return <Navigate to={pathname}/>
    }
    return <Navigate to={"/account"}/>

    
    
   }
   if (isAuth) {
    const pathname = getItem('pathname')
    if (pathname) {
      removeItem("pathname")
      return <Navigate to={pathname}/>
    }

    return <Navigate to={"/account"}/>
    
   }

  return (
    <Fragment>
      <PageBanner name='Login Form' />


      <div className="main_content">
        <div className="login_register_wrap section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-md-10">
                <div className="login_wrap">
                  <div className="padding_eight_all bg-white">
                    <div className="heading_s1">
                      <h3>Login</h3>
                    </div>
                    <form
                      onSubmit={formik.handleSubmit}
                      ng-reflect-form="[object Object]"
                      className="ng-untouched ng-pristine ng-invalid">
                        <p className='errors'>{formError}</p>

                      <div className="form-group mb-3">
                        <input
                          type="text"
                          name="email"
                          placeholder="Your Email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          className="form-control ng-untouched ng-pristine ng-invalid" />
                        {formik.touched.email && formik.errors.email ? (
                          <div className='error'>{formik.errors.email}</div>
                        ) : null}
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="password"
                          name="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          placeholder="Password"
                          className="form-control ng-untouched ng-pristine ng-invalid" />
                        {formik.touched.password && formik.errors.password ? (
                          <div className='error'>{formik.errors.password}</div>
                        ) : null}
                      </div>
                      <div className="login_footer form-group mb-3">
                        <div className="chek-form">
                          <div className="custome-checkbox">
                            <input
                              type="checkbox"
                              name="checkbox"
                              id="exampleCheckbox1"
                              defaultValue={""}
                              className="form-check-input" />
                            <label htmlFor="exampleCheckbox1"><span>Remember
                              me</span></label></div>
                        </div><a href="#">Forgot password?</a>
                      </div>
                      <div className="form-group mb-3"><button type="submit" name="login" className="btn btn-fill-out btn-block">Log in</button></div>
                    </form>
                    <div className="different_login"><span>
                      or</span></div>
                    {/* <ul className="btn-login list_none text-center">
                <li><a href="#" className="btn btn-facebook"><i className="ion-social-facebook" />Facebook</a>
                </li>
                <li><a href="#" className="btn btn-google"><i className="ion-social-googleplus" />Google</a>
                </li>
              </ul> */}
                    <div className="form-note text-center">Don't Have an Account?
                      <Link to={"/signup.html"}>Sign
                        up
                        now</Link></div>
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

export default Signin;
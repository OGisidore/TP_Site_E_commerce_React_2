/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/03/2024 10:50:45
*/
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthState } from '../../redux/selectors/GlobalSelectors';

const PrivateRoute = ({ children }: any) => {

  const isAuth = useSelector(getAuthState)
  // let auth: any = localStorage.getItem("auth")

  // if (auth) {
  //   const { token, userId } = JSON.parse(auth)
  //   isAuth = !!token && !!userId
  // }

  return isAuth ? children : <Navigate replace to="/signin" />
  
}

export default PrivateRoute;



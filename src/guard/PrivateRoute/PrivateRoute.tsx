/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/03/2024 10:50:45
*/
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuthState } from '../../redux/selectors/GlobalSelectors';
import { setItem } from '../../services/localstorage.services';

const PrivateRoute = ({ children }: any) => {

  const isAuth = useSelector(getAuthState)
  const location =useLocation()
  if (!isAuth) {
    setItem("pathname",location.pathname)
  }
   return isAuth ? children : <Navigate replace to="/signin" />
}

export default PrivateRoute;



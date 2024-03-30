/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 30/03/2024 09:55:04
*/
import React, { FC, useEffect } from 'react';
// import Loading from '../Loading/Loading';
import './ErrorPage.css';
import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner/PageBanner';


interface ErrorPageProps {

}


const ErrorPage: FC<ErrorPageProps> = () => {


  // const [state, setState] = useState<any>(null)
  // const [loading, setLoading] = useState(true);
  // const [value, setValue] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {


    }
    runLocalData()
  }, [])

  return (

    <div className="ErrorPage">
      <PageBanner name='Page not found'/>
      <div className="section">
        <div className="error_wrap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10 order-lg-first">
                <div className="text-center">
                  <div className="error_txt">404</div>
                  <h5 className="mb-2 mb-sm-3">oops! The page you requested was not found!</h5>
                  <p>The page you are looking for was moved, removed, renamed or might never existed.</p>
                  {/* <div className="search_form pb-3 pb-md-4">
                    <form method="post">
                      <input name="text" id="text" type="text" placeholder="Search" className="form-control" />
                      <button type="submit" className="btn icon_search"><i className="ion-ios-search-strong" /></button>
                    </form>
                  </div> */}
                  <Link  to={"/"} className="btn btn-fill-out">Back To Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ErrorPage;
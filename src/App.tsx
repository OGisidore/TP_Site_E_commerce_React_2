import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { RequestResponse } from './models/requestResponse'
import { Meta } from './models/Meta'
import { getData } from './api/entities'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import Account from './components/Account/Account'
import PrivateRoute from './guard/PrivateRoute/PrivateRoute'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import NotificationsComponent from './components/NotificationsComponent/NotificationsComponent'
import PageComponent from './pages/PageComponent/PageComponent'

const App: React.FC = () => {
  const [meta, setMeta] = useState<Meta[]>([])
  
  useEffect(() => {
    window.scrollTo(0,0)
    const runLocalData = async () => {
      const datas: RequestResponse = await getData("meta")
      // console.log({datas});
      
      if (datas.isSuccess) {
        const results : Meta[] = (datas.results as Meta[])
        // console.log("ok");
        
        
         setMeta(results)   
      } 
      
    }
    runLocalData()
  },[])

  return (
    <BrowserRouter>
    <Header metas={meta}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/page/:slug" element={<PageComponent />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:slug" element={<SingleProduct />} />
          <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute> } />
        </Routes>
        <Footer metas={meta}/>
        <NotificationsComponent/>
      
    </BrowserRouter>
  )
}

export default App

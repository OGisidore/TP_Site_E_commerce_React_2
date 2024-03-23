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

const App: React.FC = () => {
  const [meta, setMeta] = useState<Meta[]>([])
  
  useEffect(() => {
    window.scrollTo(0,0)
    const runLocalData = async () => {
      const datas: RequestResponse = await getData("meta")
      if (datas.isSuccess) {
        const results : Meta[] = (datas.results as Meta[])
        console.log(results);
        
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
        </Routes>
        <Footer metas={meta}/>
      
    </BrowserRouter>
  )
}

export default App

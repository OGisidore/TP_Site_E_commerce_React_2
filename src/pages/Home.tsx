import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <Header/>
      <h1>home</h1>
      <Footer/>
    </Fragment>
  )
}

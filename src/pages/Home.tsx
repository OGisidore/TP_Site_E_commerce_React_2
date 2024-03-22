import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Main from '../components/Main/Main'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <Header/>
      <h1>home</h1>
      <Main/>
      <Footer/>
    </Fragment>
  )
}

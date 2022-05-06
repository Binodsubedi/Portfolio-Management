import React from 'react'
import Header from './welcomeComp/Header'
import Home from './welcomeComp/Home'
import Login from './welcomeComp/Login'
import Footer from './welcomeComp/Footer'
import './../styles/landing.css'

const Welcome = ():JSX.Element => {
  return (<div className='container'>
    <Header classNm='header' />
    <Home classNm='home' />
    <Login classNm='login-signup' />
    <Footer classNm='footer' />
  </div>
  )
}

export default Welcome
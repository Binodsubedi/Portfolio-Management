import React, { useEffect } from 'react';
import Header from './dashboardComp/Header';
import Body from './createTransComp/Body'
import Footer from './welcomeComp/Footer';
import './../styles/create.css'

const CreateTransaction = () => {

  useEffect(()=>{
    window.scrollTo({top:0})
  })

  return <div className='createTransContainer'>
    <Header classNm='dashboardheader'/>
    <Body/>
    <Footer classNm='footer'/>
    
  </div>;
};

export default CreateTransaction;

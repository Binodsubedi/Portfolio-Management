import React from 'react';
import Header from './dashboardComp/Header';
import Body from './createTransComp/Body'
import Footer from './welcomeComp/Footer';
import './../styles/create.css'

const CreateTransaction = () => {
  return <div className='createTransContainer'>
    <Header classNm='dashboardheader'/>
    <Body/>
    <Footer classNm='footer'/>
    
  </div>;
};

export default CreateTransaction;

import React from 'react'
import Header from './dashboardComp/Header'
import Body from './dashboardComp/Body'
import Footer from './welcomeComp/Footer'
import './../styles/dashboard.css'

const Dashboard = () => {
  return (
    <div className='Dashboardcontainer'>
    <Header classNm='dashboardheader'/>
    <Body classNm='body'/>
    <Footer classNm='footer'/>
    </div>
  )
}

export default Dashboard;
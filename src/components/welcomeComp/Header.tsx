import React from 'react'
// import logo from './../../images/logo/logo.svg';

interface propsIn {
    classNm:string;
}

const Header = (props:propsIn):JSX.Element => {
  return (
    <div className={props.classNm}>
        <div className='header__logo-container'>
            {/* <img src={logo} alt="logo" /> */}
        </div>
        <div className='header__links'>
            <a href="#" className="header__links--link1">Home</a>
            <a href="#" className="header__links--link2">Contact</a>
            <a href="#" className="header__links--link3">Login</a>
        </div>
    </div>
  )
}

export default Header
import React, { useEffect } from 'react'
// import logo from './../../images/logo/logo.svg';

interface propsIn {
    classNm:string;
}

const Header = (props:propsIn):JSX.Element => {




  // useEffect(()=>{
  //   window.addEventListener('scroll',()=>{
  //     console.log(window.scrollY);
  //   })
  // })

  const loginClick =(e:any)=>{

    e.preventDefault();
    window.scrollTo({top:660, behavior:'smooth'});

  }

  const homeClick =(e:any)=>{
    e.preventDefault();
    window.scroll({top:0, behavior:'smooth'})
  }

  const contactClick = (e:any)=>{
    e.preventDefault();
    window.scrollTo({top:document.body.scrollHeight, behavior:'smooth'})
  }


  return (
    <div className={props.classNm}>
        <div className='header__logo-container'>
            {/* <img src={logo} alt="logo" /> */}
        </div>
        <div className='header__links'>
            <a href="#" className="header__links--link1" onClick={(e)=>homeClick(e)}  >Home</a>
            <a href="#" className="header__links--link2" onClick={(e)=>contactClick(e)} >Contact</a>
            <a href="#" className="header__links--link3" onClick={loginClick} >Login</a>
        </div>
    </div>
  )
}

export default Header
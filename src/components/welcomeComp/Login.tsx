import React, { useEffect, useRef } from 'react'
import {connect} from 'react-redux';
import {LoginStruc,login} from './../../actions'
import {StoreState} from './../../reducers'

interface propsIn {
    classNm:string;
    loggedinUser: LoginStruc;
    login : any;


    
}

const Login = (props:propsIn) => {

  // useEffect(()=>{

  //   // (async()=>{

  //   //   // await props.login('BinodSubedi','Hellothere');

  //   //   // setTimeout(()=>{
  //   //   //   console.log(props.loggedinUser.status)
  //   //   // },2000);
      
  //   //   // console.log(props.loggedinUser.status);

  //   // })();

  //   props.login('BinodSubedi','Hellothere');

  //   console.log(props.loggedinUser.status);

    

  //   // console.log(props.loggedinUser.status);

  // },[props.loggedinUser.status])

  const innerSlider = useRef<HTMLDivElement>(null);
  
  const signupSlider = (e:any)=>{

    e.preventDefault();

    innerSlider.current?.classList.add('inner-container-active')


  }

  const signupSliderdefault = (e:any)=>{

    e.preventDefault();

    innerSlider.current?.classList.remove('inner-container-active')


  }

  return (
    <div className={props.classNm}>
      <div className='login-signup__container'>
      <div className='login-signup__container-inner' ref={innerSlider}>

        <div className='login-signup__container-inner-login'>
          <div className='login-signup__container-inner-login__header'>
          <h2>Login</h2>
          {/* <hr /> */}
          </div>
          <div className='login-signup__container-inner-login__fields'>

          <div className='login-signup__container-inner-login__fields--name'>
        <label htmlFor="name">Name:</label>
        <input type="text" id='name' />
          </div>
          <div className='login-signup__container-inner-login__fields--password'>
          <label htmlFor="pass">Password:</label>
        <input type="password" id='pass' />

          </div>
          </div>

          <div className='login-signup__container-inner-login__button-container'>
          <button>Login</button>
          <a href="" onClick={(e)=>signupSlider(e)}>Signup</a>
          </div>

        </div>
        <div className='login-signup__container-inner-signup'>
        <div className='login-signup__container-inner-signup'>
          <div className='login-signup__container-inner-signup__header'>
          <h2>Signup</h2>
          {/* <hr /> */}
          </div>
          <div className='login-signup__container-inner-signup__fields'>

          <div className='login-signup__container-inner-signup__fields--name'>
        <label htmlFor="nameSignup">Name:</label>
        <input type="text" id='nameSignup' />
          </div>
          <div className='login-signup__container-inner-signup__fields--password'>
          <label htmlFor="passSignup">Password:</label>
        <input type="password" id='passSignup' />

          </div>
          </div>

          <div className='login-signup__container-inner-signup__button-container'>
          <button>Signup</button>
          <a href="" onClick={(e)=>signupSliderdefault(e)}>Login</a>
          </div>

        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state:StoreState):{loggedinUser:LoginStruc}=>{
  return {loggedinUser: state.loggedinUser}
}

export default connect(mapStateToProps,{login})(Login);
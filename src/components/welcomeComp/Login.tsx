import React, { useRef } from 'react'

interface propsIn {
    classNm:string;
}

const Login = (props:propsIn):JSX.Element => {

  const innerSlider = useRef<HTMLDivElement>(null);
  
  const signupSlider = (e)=>{

    e.preventDefault();

    innerSlider.current.classList.add('inner-container-active')


  }

  const signupSliderdefault = (e)=>{

    e.preventDefault();

    innerSlider.current.classList.remove('inner-container-active')


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

          <div className='login-signup__container-inner-login__fields--label'>
        <label htmlFor="name">Name:</label>
          <label htmlFor="pass">Password:</label>
          </div>
          <div className='login-signup__container-inner-login__fields--Inputfields'>
        <input type="text" id='name' />
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

          <div className='login-signup__container-inner-signup__fields--label'>
        <label htmlFor="name">Name:</label>
          <label htmlFor="pass">Password:</label>
          </div>
          <div className='login-signup__container-inner-signup__fields--Inputfields'>
        <input type="text" id='name' />
        <input type="password" id='pass' />

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

export default Login
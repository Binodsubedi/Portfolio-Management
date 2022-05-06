import React from 'react'

interface propsIn {
    classNm:string;
}

const Login = (props:propsIn):JSX.Element => {
  return (
    <div className={props.classNm}>
      <div className='login-signup__container'>
      <div className='login-signup__container-inner'>

        <div className='login-signup__container-inner-login'>
          <h2>Login</h2>
          <hr />
          <div className='login-signup__container-inner-login__name'>
        <label htmlFor="name">Name:</label>
        <input type="text" id='name' />
          </div>
          <div className='login-signup__container-inner-login__password'>
          <label htmlFor="pass">Password:</label>
        <input type="text" id='pass' />

          </div>

          <div className='login-signup__container-inner-login__button-container'>
          <button>Login</button>
          <a href="#">Signup</a>
          </div>

        </div>
        <div className='login-signup__container-inner-signup'></div>
      </div>
      </div>
    </div>
  )
}

export default Login
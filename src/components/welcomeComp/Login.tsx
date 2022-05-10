import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import {connect} from 'react-redux';
import {getStocks, StockData,login,LoginStruc} from './../../actions'
import {StoreState} from './../../reducers'
import {useNavigate} from 'react-router-dom';

interface propsIn {
    classNm:string;
    loggedinUser: LoginStruc;
    login:any;
    getStocks : any;
    stocks: StockData[]


    
}

const Login = (props:propsIn) => {

  let navigate = useNavigate();

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

  const usernameField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);

  
  const signupSlider = (e:any)=>{

    e.preventDefault();

    innerSlider.current?.classList.add('inner-container-active')


  }

  const signupSliderdefault = (e:any)=>{

    e.preventDefault();

    innerSlider.current?.classList.remove('inner-container-active')


  }

  const doLogin = async (e:any)=>{

    e.preventDefault();

    const Username = usernameField.current?.value;
    const password = passwordField.current?.value;

    console.log({Username,password});

    // props.login(Username, password);
    
    const resp = await axios.post('http://localhost:3000/api/v1/user/login',{Username, password});

    // console.log(resp.data)
    // console.log()
    
    if(resp.data.status === 'success'){

      props.getStocks(Username)

      // console.log(props.stocks)
      props.login(Username, password);

      setTimeout(()=>{

        navigate('/dashboard');
      
      },1000)
      // while(props.loggedinUser.data === 'unsent'){
        
      // }
      
        // navigate('/dashboard');
      
      // window.location.assign('/dashboard');
      // useNavigate('/',{})
      
    }



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
        <input type="text" id='name' ref={usernameField} />
          </div>
          <div className='login-signup__container-inner-login__fields--password'>
          <label htmlFor="pass">Password:</label>
        <input type="password" id='pass' ref={passwordField} />

          </div>
          </div>

          <div className='login-signup__container-inner-login__button-container'>
          <button onClick={(e)=>doLogin(e)}>Login</button>
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

const mapStateToProps = (state:StoreState):{stocks:StockData[], loggedinUser:LoginStruc}=>{
  return {stocks: state.stocks,
  loggedinUser:state.loggedinUser}
}

export default connect(mapStateToProps,{getStocks,login})(Login);
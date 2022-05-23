import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import {connect} from 'react-redux';
import {getStocks, StockData,login,LoginStruc} from './../../actions'
import {StoreState} from './../../reducers'
import {useNavigate} from 'react-router-dom';
import AxiosConfig from '../axiosConfig';

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
  
  const usernameSignupField = useRef<HTMLInputElement>(null);
  const passwordSignupField = useRef<HTMLInputElement>(null);

  const [username, setUserName] = useState('');
  const [pass, setPass] = useState('');
  
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
    
    const resp = await AxiosConfig.post('/api/v1/user/login',{Username, password});

    // console.log(resp.data)
    // console.log()
    
    if(resp.data.status === 'success'){

      props.getStocks(Username)

      // console.log(props.stocks)
      props.login(Username, password);

      setTimeout(()=>{

        navigate('/dashboard');
      
      },1100)
      // while(props.loggedinUser.data === 'unsent'){
        
      // }
      
        // navigate('/dashboard');
      
      // window.location.assign('/dashboard');
      // useNavigate('/',{})
      
    }



  }

  const onSignup = async (e:any)=>{

    e.preventDefault();
    const reqBody = {
      Username: usernameSignupField.current?.value,
      password: passwordSignupField.current?.value
    }

    const res = await AxiosConfig.post('/api/v1/user/signup',reqBody);

    if(res.data.status === 'success'){
      alert('New Account has been created');
      setUserName('');
      setPass('');
    }


    // usernameSignupField.current?.value = '';


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
        <input type="text" id='name' ref={usernameField}  />
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
        <input type="text" id='nameSignup' ref={usernameSignupField} onChange={e=>setUserName(e.target.value)} value={username} />
          </div>
          <div className='login-signup__container-inner-signup__fields--password'>
          <label htmlFor="passSignup">Password:</label>
        <input type="password" id='passSignup' ref={passwordSignupField} onChange={e=>setPass(e.target.value)} value={pass} />

          </div>
          </div>

          <div className='login-signup__container-inner-signup__button-container'>
          <button onClick={e=>onSignup(e)}>Signup</button>
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
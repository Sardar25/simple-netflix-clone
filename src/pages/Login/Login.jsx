import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
const Login = () => {


  const navigate = useNavigate();
  const SIGN_IN = 'Sign In';
  const SIGN_UP = 'Sign Up';

  const [signState,setSignState] = useState(SIGN_IN);


  return (
    <div className='login'>
      <img src={ logo } alt="" className='login-logo'/>
      <div className="login-form">
        <h1>{ signState }</h1>
        <form>
            { signState === SIGN_UP && <input readOnly value={'testuser'} type='text' placeholder='Name'/>}
            <input readOnly value={'test@gmail.com'} type='email' placeholder='Email'/>
            <input readOnly value={'test12345'} type='password' placeholder='Password'/>
            <button onClick={ ()=> navigate('/') }>{ signState }</button>
            <div className="form-help">
              <div className="remember">
                <input type='checkbox'/>
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
        </form>
        <div className="form-switch">
          {
            signState === SIGN_IN ?
           <p >New to Netflix? <span onClick={()=> setSignState(SIGN_UP)} >Sign Up Now</span></p>
           :
           <p >Already have account? <span onClick={()=> setSignState(SIGN_IN)} >Sign In Now</span></p>

          }

        </div>
      </div>
    </div>
  )
}

export default Login
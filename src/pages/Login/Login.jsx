import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login,signUp } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const  Login=()=> {
  const [signState,setsignState]=useState("Sign In");
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [loading,setLoading]=useState(false);

  const user_auth=async(event)=>{
    event.preventDefault();
    setLoading(true);
    if(signState==="Sign In"){
      await login(email,password)
    }
    else{
      await signUp(name,email,password);
    }
    setLoading(false);
  }


  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input type="text" placeholder='Your Name' value={name} onChange={(e)=>{setname(e.target.value)}}/>:<></>}
          
          <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} name="" id="" placeholder='example@gmail.com'/>
          <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} name="" id="" placeholder='password' />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"? <p>New to Netflix <span onClick={()=>{setsignState("Sign Up")}}>Sign Up Now</span></p>:
          <p>Already have account<span onClick={()=>{setsignState("Sign In")}}>Sign in Now</span></p>}
          
        </div>
      </div>
    

    </div>
  )
}

export default Login
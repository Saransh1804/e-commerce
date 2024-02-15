import React, { useState } from 'react'
import "./Login.scss"
import { login } from '../../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'


const Login = () => {
  const [username,setusername] = useState("")
  const [password,setpassword] = useState("")
  const dispatch = useDispatch();
  const {isFetching,error} = useSelector((state)=>state.user);

  const handleClick=(e)=>{
    e.preventDefault();
    login(dispatch,{username,password})
  }
  return (
    <div className='Login'>
        <div className='Wrapper'>
            <h1>SIGN IN</h1>
            <form>                
                <input placeholder='username' onChange={(e)=>setusername(e.target.value)}></input>
                <input placeholder='password' onChange={(e)=>setpassword(e.target.value)}></input>
            <button onClick={handleClick}  >LOGIN</button>
            {error && <span style={{color:"red"}}>Something went Wrong...</span>}
            <a href=''>FORGOT PASSWORD ?</a>
            <a href=''>CREATE A NEW ACCOUNT</a>
            </form>
        </div>
    </div>
  )
}

export default Login
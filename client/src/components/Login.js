import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../JS/Actions/userAction'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPasswod] = useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <div className='Log'>

      <div className="colm-form">
                <div className="form-container">
                    <input type="text" placeholder="Email address " onChange={(e)=>setEmail(e.target.value) } value={email}/>
                    <input type="password" placeholder="Password" onChange={(e)=>setPasswod(e.target.value)} value={password} />
                    <button className="btn-login" onClick={()=>dispatch(login({email,password}, navigate))}>Login</button>
                                  
                </div>
        </div>
      

    </div>
  )
}

export default Login
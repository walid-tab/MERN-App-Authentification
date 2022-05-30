import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../JS/Actions/userAction'

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPasswod] = useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <div className='Reg'>

          <div className="form">

      <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " onChange={(e)=>setName(e.target.value)} value={name}/>
        <div className="cut"></div>
        <label  className="placeholder">Name</label>
      </div>

      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <div className="cut cut-short"></div>
        <label  className="placeholder">Email</label>        
      </div>

      <div className="input-container ic2">
        <input id="password" className="input" type="password" placeholder=" " onChange={(e)=>setPasswod(e.target.value)} value={password}/>
        <div className="cut"></div>
        <label  className="placeholder">Password</label>
      </div>
     

      <button type="text" className="submit" onClick={()=>dispatch(register({name,email,password}, navigate))}>submit</button>

    </div>

    </div>
  )
}

export default Register
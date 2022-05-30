import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../JS/Actions/userAction'

function Navigation() {
  const auth= useSelector((state)=>state.authReducer.auth)
  const user= useSelector((state)=>state.authReducer.user)
  const dispacth=useDispatch()
  const navigate = useNavigate()
  return (
    <div>
        <div className="page">
  <nav className="page__menu menu">
    <ul className="menu__list r-list">
      
      {
        auth? 
        <>
        <li className="menu__group"><div  className="menu__link r-link text-underlined"><div className='txt-user'>Welcome {user?.name}</div>  </div></li>

        <li className="menu__group"><div  className="menu__link r-link text-underlined"><div className='txt' onClick={()=>{dispacth(logout());navigate('/login')}}>Logout</div>  </div></li>
        </>
        : <>
        <li className="menu__group"><div  className="menu__link r-link text-underlined"><Link className='txt' to='/'>Home</Link>  </div></li>
        <li className="menu__group"><div  className="menu__link r-link text-underlined"><Link className='txt' to='/register'>Register</Link> </div></li>
        <li className="menu__group"><div  className="menu__link r-link text-underlined"><Link className='txt'to='/login'>Login</Link> </div></li>
        </>
        
      }
      
    </ul>
  </nav>
  
</div>


    </div>
  )
}

export default Navigation
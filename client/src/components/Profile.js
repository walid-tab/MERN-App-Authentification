import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const user = useSelector((state)=>state.authReducer.user)
  return (
    <div className='Profil'>
      <div className='welcome'>Welcome to my profile <br/><div className='nameProfile'>{user?.name }</div></div>
       
    </div>
  )
}

export default Profile
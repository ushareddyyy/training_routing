import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Profile = () => {
  return (
    <div style={{width:"100%",height:"100vh",background:"yellow"}}>Profile
        <hr/>
        <br/>
        <hr/>
        <Link to='/profile/myaccount'>MyAccount</Link><br></br>
        <Link to='/profile/mysettings'>MySettings</Link>
        
        <Outlet/>
    </div>
  )
}

export default Profile
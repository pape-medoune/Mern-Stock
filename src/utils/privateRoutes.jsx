import {Navigate,Outlet} from 'react-router-dom' 
import React from 'react'

function PrivateRoutes() {
    let auth = localStorage.getItem("access-token")
  return (
    auth? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes

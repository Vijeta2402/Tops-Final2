import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function Admin_authantic() {

  const admin_auth=localStorage.getItem('a_id');

  return (
     admin_auth ? <Outlet/> : <Navigate to='/admin_login' />   
  )
}

export default Admin_authantic
import React from 'react'
import {AppBar, Button, Toolbar, Typography}  from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar() {
  return (
    <div>
      <AppBar position='fixed'>
           <Toolbar>
               <Typography variant='h6' flexGrow={1} >
                     Home
                </Typography>
                <Button variant='text' color='inherit'startIcon={<LoginIcon />} >
                    LogIn
               </Button>
               <Button variant='text' color='inherit' endIcon={<LogoutIcon />} >
                LogOut
               </Button> 
           </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar

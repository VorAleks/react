import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/actions/actions';

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <>
      <header style={{width:'100%', height: 50, background:'lightgray',
                       display: 'flex', justifyContent: 'space-between'  }}>
        {/* <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black'})} to='/'>Home</NavLink>  */}
        <div>
        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                            marginRight: '10px'})} to='/login'>Login</NavLink>
        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                            marginRight: '10px'})} to='/register'>Register</NavLink>      
        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                            marginRight: '10px'})} to='/blogs'>Blogs</NavLink>
        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                          marginRight: '10px'})} to='/authors'>Authors</NavLink>
        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                          marginRight: '10px'})} to='/profile'>Profile</NavLink>
        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                          marginRight: '10px'})} to='/gitdata'>Gitdata</NavLink>
        </div>
        <div style={{width: 200, height: 30, display: 'flex', justifyContent: 'space-between'  }}>
          <Button variant="contained" onClick={handleLogin}>Log in</Button>
          <Button variant="contained" onClick={() => {
            dispatch(logoutInitiate())}}>Log out</Button>
        </div>
        
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
 };

  export default Layout;
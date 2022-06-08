import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/actions/actions';
import { authSelector } from '../redux/reducers/authReducer/selector';

const Layout = () => {
  const user = useSelector(authSelector)
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
        <div style={{paddingLeft: '10px'}}>
          <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black'})} to = '/'> 
            <p>LOGO</p>
          </NavLink>
        </div>
        <div style={{lineHeight: '45px', paddingRight : '10px'}} >
          <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                            marginRight: '10px'})} to='/blogs'>Blogs</NavLink>
          <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                          marginRight: '10px'})} to='/authors'>Authors</NavLink>
          <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                          marginRight: '10px'})} to='/contacts'>Contacts</NavLink>
          <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                    marginRight: '10px'})} to='/addcontact'>AddContact</NavLink>
          <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                marginRight: '10px'})} to='/profile'>Profile</NavLink>
          <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                          marginRight: '10px'})} to='/gitdata'>Gitdata</NavLink>
          {user.currentUser ? (
            <Button variant="contained" onClick={() => {
              dispatch(logoutInitiate())}}>Log out</Button>
            ) : (
            <Button variant="contained" onClick={handleLogin}>Log in</Button>
            )
          }
          
        </div>
        
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
 };

  export default Layout;
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header style={{width:'100%', height: 50, background:'lightgray'}}>
        {/* <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black'})} to='/'>Home</NavLink>  */}
        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                            marginRight: '10px'})} to='/blogs'>Blogs</NavLink>
        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                          marginRight: '10px'})} to='/authors'>Authors</NavLink>
        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                          marginRight: '10px'})} to='/profile'>Profile</NavLink>
        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black', 
                          marginRight: '10px'})} to='/gitdata'>Gitdata</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
 };

  export default Layout;
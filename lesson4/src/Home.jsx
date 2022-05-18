import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header style={{width:'100%', height: 100, background:'white'}}>
        {/* <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black'})} to='/'>Home</NavLink>  */}
        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black'})} to='/blogs'>Blogs</NavLink>
        <NavLink style={({isActive}) => ({color: isActive ? 'red' : 'black'})} to='/profile'>Profile</NavLink>
      </header>
    </div>
  );
 };

  export default Home;
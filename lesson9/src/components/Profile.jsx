import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSelector } from '../redux/reducers/authReducer/selector';
const Profile = () => {
  const user = useSelector(authSelector)
  const navigate = useNavigate ();
  useEffect (() =>{
    if (!user.currentUser) {
      navigate('/login')
    }
  }, [user, navigate])
  return (
    <div>
      Profile
    </div>
  );
 };

  export default Profile;
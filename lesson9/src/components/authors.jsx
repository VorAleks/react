// import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
// import { logoutInitiate } from '../redux/actions/actions';
import { authSelector } from '../redux/reducers/authReducer/selector';
import { chatsSelector } from '../redux/reducers/chatsReducer/selectors';

const Authors = () => {
  const chats = useSelector(chatsSelector);
  const user = useSelector(authSelector)
  const navigate = useNavigate ();
  // const dispatch = useDispatch();
  useEffect (() =>{
    if (!user.currentUser) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <div>
      {
        chats.map((item) =>
          <NavLink key={item.id} style={({marginRight: '10px'})} 
              to={`/messages/${item.id}`}>{item.name}</NavLink>)
      }
      {/* <Button variant="contained" onClick={() => {
    dispatch(logoutInitiate())
  }}>Logout</Button> */}
    </div>
  );
 };

export default Authors;
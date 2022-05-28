import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { chatsSelector } from '../redux/reducers/chatsReducer/selectors';

const Authors = () => {
  const chats = useSelector(chatsSelector);
  return (
    <div>
      {
        chats.map((item) =>
          <NavLink key={item.id} style={({marginRight: '10px'})} 
          to={`/messages/${item.id}`}>{item.name}</NavLink>)
      }
    </div>
  );
 };

  export default Authors;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { DELETE_MESSAGE } from '../redux/actions/actionTypes';
import { authSelector } from '../redux/reducers/authReducer/selector';
import { messagesSelector } from '../redux/reducers/messagesReducer/selectors';


const Messages = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const messages = useSelector(messagesSelector);
  const navigate = useNavigate();
  const user = useSelector(authSelector);
  
  useEffect (() =>{
    if (!user.currentUser) {
      navigate ('/login')
    }
  }, [user, navigate])

  const messagesAuthor = messages.filter(messagesAuthor => {
    if (!id) return true;
    
    return messagesAuthor.chatId === Number(id)
  })

  const deleteMessage = (id) => {
      dispatch({type: DELETE_MESSAGE, payload: id})
  }

  return (
    <div>
      {messagesAuthor.map((item) => (
        <div key={item.id} style={{display: 'flex'}}>
          <div>{item.message}</div>
          <div><button onClick={()=>deleteMessage(item.id)}>X</button></div>
        </div>
      ))}
    </div>
  );
 };

  export default Messages;
import React from 'react';
import { useState,  useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { chatsSelector } from '../redux/reducers/chatsReducer/selectors';
import { messagesSelector } from '../redux/reducers/messagesReducer/selectors';
import { ADD_MESSAGE, ADD_CHAT, DELETE_CHAT, DELETE_MESSAGES } from '../redux/actions/actionTypes';
import Blogs from './Blogs';

const BlogsContainer = () => {
  // const ref = useRef(null);
  const dispatch = useDispatch();
  // const [messageList, setMessageList] = useState([]);
  const chats = useSelector(chatsSelector);
  const messages = useSelector(messagesSelector);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  // useEffect(() => {
  //   console.log(ref.current.focus());
  //   setTimeout(() => {
  //     if (messageList.length > 0) {
  //       alert('New message')
  //     }
  //   }, 1500)
  // }, [messageList])

  // const addMessage = () => {
  //   if (name && text) {
  //     setMessageList([...messageList, {
  //       id: giveLastId(messageList), author:
  //         name, message: text
  //     }]);
  //   }
  // }

  // const deleteMessage = (id) => {
  //   let newList = messageList.filter((item) => item.id !== id);
  //   setMessageList(newList);
  // }

  function giveLastId(array) {
    return array.length ? array[array.length - 1].id + 1 : 0;
  }
  const handleChangeAuthor = (e) => {
    setName(e.target.value)
  }

  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  function newMessage() {
    let chat = {};
    let newId = 0;
    if (name && text) {
      if (!chats.find(x => x.name === name)) {
        chat = {
          id: giveLastId(chats),
          name: name
        }
        newId = chat.id;
        dispatch({type: ADD_CHAT, payload: chat, meta: {delay:2000}});
      } else {
        newId = chats.find(x => x.name === name).id;
      }
           
      const message = {
        id: giveLastId(messages),
        chatId: newId,
        message: text
      }
      dispatch({type: ADD_MESSAGE, payload: message, meta: {delay:4000}})
    }
  }

  const deleteChat = (id) => {
      dispatch({type: DELETE_MESSAGES, payload: id})
      dispatch({type: DELETE_CHAT, payload: id})
  }
     
  return (
    <Blogs
       name={name}
       handleChangeAuthor={handleChangeAuthor}
       text={text}
       handleChangeText={handleChangeText}
       newMessage={newMessage}
       chats={chats}
       deleteChat={deleteChat}
       messages={messages}
    />
  );
 };

  export default BlogsContainer;
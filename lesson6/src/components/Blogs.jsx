import React from 'react';
import { useState,  useRef } from "react";
import { Button, Card, CardContent, TextField, Typography, List, ListItem }
  from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { chatsSelector } from '../redux/reducers/chatsReducer/selectors';
import { messagesSelector } from '../redux/reducers/messagesReducer/selectors';
import { ADD_MESSAGE, ADD_CHAT, DELETE_CHAT, DELETE_MESSAGES } from '../redux/actions/actionTypes';


const Blogs = () => {
  const ref = useRef(null);
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
        dispatch({type: ADD_CHAT, payload: chat});
      } else {
        newId = chats.find(x => x.name === name).id;
      }
      
      
      const message = {
        id: giveLastId(messages),
        chatId: newId,
        message: text
      }
      dispatch({type: ADD_MESSAGE, payload: message})
    }
  }

  const deleteChat = (id) => {
      dispatch({type: DELETE_MESSAGES, payload: id})
      dispatch({type: DELETE_CHAT, payload: id})
  }
     
  return (
    <div>
      <div className="App">
        <div className="author" value={name} onChange={handleChangeAuthor}>
          <TextField id="outlined-basic" label="Author" variant="outlined"
            size="small" />
        </div>

        <div className="text" value={text} onChange={handleChangeText}>
          <TextField inputRef={ref}  id="outlined-basic"
            label="text" variant="outlined" size="medium" />
        </div>

        <Button variant="contained" onClick={newMessage}>New post</Button>

        <div className="container">
          <div className="wrp">
            <List>
              {
                chats.map((item) =>
                  <ListItem key={item.id} sx={{ margin: "10px" }}>
                    {item.name}
                    <Button onClick={() => deleteChat(item.id)}>X</Button>
                  </ListItem>
                )
              }
            </List>
          </div>

          <div className="wrp">
            {
              messages.map((item) =>
                <Card key={item.id} >
                  <CardContent >
                    <Typography variant='h5'>{chats.find(x => x.id === item.chatId).name}</Typography>
                    <Typography sx={{ fontStyle: 'italic' }}>
                      {item.message}
                    </Typography>
                  </CardContent>
                </Card>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
 };

  export default Blogs;
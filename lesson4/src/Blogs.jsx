import React from 'react';
import { useState, useEffect, useRef } from "react";
import { Button, Card, CardContent, TextField, Typography, List, ListItem }
  from '@mui/material';

const Blogs = () => {
  const ref = useRef(null);
  const [messageList, setMessageList] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(ref.current.focus());
    setTimeout(() => {
      if (messageList.length > 0) {
        alert('New message')
      }
    }, 1500)
  }, [messageList])

  const addMessage = () => {
    if (name && text) {
      setMessageList([...messageList, {
        id: giveLastId(messageList), author:
          name, message: text
      }]);
    }
  }

  const deleteMessage = (id) => {
    let newList = messageList.filter((item) => item.id !== id);
    setMessageList(newList);
    

  }
  function giveLastId(array) {
    return array.length ? array[array.length - 1].id + 1 : 0;
  }
  const handleChangeAuthor = (e) => {
    setName(e.target.value)
  }

  const handleChangeText = (e) => {
    setText(e.target.value)
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

        <Button variant="contained" onClick={addMessage}>New post</Button>

        <div className="container">
          <div className="wrp">
            <List>
              {
                messageList.map((item) =>
                  <ListItem key={item.id} sx={{ margin: "10px" }}>
                    {item.author}
                    <Button onClick={() => deleteMessage(item.id)}>X</Button>
                  </ListItem>
                )
              }
            </List>
          </div>

          <div className="wrp">
            {
              messageList.map((item) =>
                <Card key={item.id} >
                  <CardContent >
                    <Typography variant='h4'>{item.author}</Typography>
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
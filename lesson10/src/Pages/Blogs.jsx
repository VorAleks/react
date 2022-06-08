import React from 'react';
import { Button, Card, CardContent, TextField, Typography, List, ListItem }
  from '@mui/material';

const Blogs = ({user, text, handleChangeText,
                   newMessage, chats, deleteChat, messages}) => {

  return (
    <div>
      <div className="App">
        <div  className="author" >
          {/* <TextField id="outlined-basic" label="Author" variant="outlined"
            size="small" /> */}
          <h4 style={{ margin: 5 }}>Author:{user}</h4>
        </div>

        <div className="text" value={text} onChange={handleChangeText}>
          <TextField  id="outlined-basic"
            label="text" variant="outlined" size="medium" />
        </div>

        <Button variant="contained" onClick={newMessage}>New post</Button>
        {/* <Button variant="contained" onClick={handleLogout}>Logout</Button> */}
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
                    <Typography variant='h5'>{chats.find(x => 
                                  x.id === item.chatId).name}</Typography>
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
import './App.css';
// import Message from './message';
import { useState, useEffect, useRef } from "react";
import { Button, Card, CardContent, TextField, Typography, List, ListItem }
  from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  cardStyle: {
    margin: "5px",
    width: 500
  }
})

function App() {
  const ref = useRef(null);
  const style = useStyles();
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
        id: messageList.length + 1, author:
          name, message: text
      }]);
    }
  }

  const handleChangeAuthor = (e) => {
    setName(e.target.value)
  }

  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="App">
      <div className="author" value={name} onChange={handleChangeAuthor}>
        <TextField id="outlined-basic" label="Author" variant="outlined"
          size="small" />
      </div>

      <div className="text" value={text} onChange={handleChangeText}>
        <TextField inputRef={ref} className={style.button} id="outlined-basic"
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
                </ListItem>
              )
            }
          </List>
        </div>

        <div className="wrp">
          {
            messageList.map((item) =>
              <Card key={item.id} className={style.cardStyle}>
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
  );
}

export default App;



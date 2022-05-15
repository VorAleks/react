import './App.css';
// import Message from './message';
import React, { useState, useEffect } from "react";

function App() {
  const [messageList, setMessageList] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    setTimeout(function () { alert('New message') }, 1500)
  }, [messageList])

  const addMessage = () => {
    if (name && text) {
      setMessageList([...messageList, { id: messageList.length + 1, author: name, message: text }]);
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
      <div className="author">
        Author
        <input value={name} onChange={handleChangeAuthor} />
      </div>
      <div className="text" value={text} onChange={handleChangeText}>
        <textarea cols="50" raws="10" />
      </div>

      <button onClick={addMessage}>
        New post
      </button>
      {
        messageList.map((item) =>
          <div className="message" key={item.id}>
            <h4>{item.author}</h4>
            <p>{item.message}</p>
          </div>
        )
      }
    </div>
  );
}

export default App;



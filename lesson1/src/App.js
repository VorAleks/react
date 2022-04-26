import './App.css';
import Message from './message';

function App() {
    const text = 'Переданный в компонент Message текст'
  return (
    <div className="App">
      <h1> Первый код на React</h1>
      <Message text={text}/>
    </div>
  );
}

export default App;



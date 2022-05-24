import { useDispatch, useSelector } from "react-redux"; 

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type: 'increase'})
  }

  const decrease = () => {
    dispatch({type: 'decrease'})
  }
  return (
    <div style={{display : 'flex', color: 'red'}} >
      <div>
        <button style={{marginRight: '5px'}} onClick={decrease}>-</button>
      </div>
      {count}
      <div>
        <button style={{marginLeft: '5px'}} onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default App;

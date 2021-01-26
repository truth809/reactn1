import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [number, setNumber] = useState(1);

  const add = () => setNumber(number => number + 1);
  const subtract = () => setNumber(number => number - 1);
  const multplayby2 = () => setNumber(number => number * 2);
  const multplayby2AndAddby1 = () => {
    multplayby2();
    add();
  };
  // const currentState = {
  //   number : 1
  // }
  // const newState = Object.assign(currentState, { number : number * 2}, { number : number + 1})
  // setNumber(newState)

  return (
    <div className="App">
      <h1>Number : {number}</h1>
      <div className="btn-wrapper">
        <button onClick={add}>+ 1</button>
        <button onClick={subtract}>- 1</button>
        <button onClick={multplayby2}>* 2</button>
        <button onClick={multplayby2AndAddby1}>*2 + 1</button>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Block from './components/Block';

function App() {

  const [state, setState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');

  const winPossibilities = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const checkWinner = (state:any[])=>{
    for(let i=0 ; i<winPossibilities.length ; i++){
        const [a,b,c] = winPossibilities[i];
        if(state[a]!==null && state[a]===state[b] && state[a]===state[c])
          return true; 
     }
     return false;
  }

  const handleOnClick = (index:number) =>{
        const stateCopy = Array.from(state);
        if(stateCopy[index] !== null) return;
        stateCopy[index] = turn;
        setState(stateCopy);

        const win = checkWinner(stateCopy);
        if(win){
          alert(`${turn} wins`);
          stateCopy.fill(null);
          setState(stateCopy);
          return;
        }

        setTurn(turn === 'X' ? 'O' : 'X');
  }

  return (
    <div className="board">
      <div className="row">
        <Block onClick={()=>handleOnClick(0)} text={state[0]}/>
        <Block onClick={()=>handleOnClick(1)} text={state[1]}/>
        <Block onClick={()=>handleOnClick(2)} text={state[2]}/>
      </div>

      <div className="row">
        <Block onClick={()=>handleOnClick(3)} text={state[3]}/>
        <Block onClick={()=>handleOnClick(4)} text={state[4]}/>
        <Block onClick={()=>handleOnClick(5)} text={state[5]}/>
      </div>

      <div className="row">
        <Block onClick={()=>handleOnClick(6)} text={state[6]}/>
        <Block onClick={()=>handleOnClick(7)} text={state[7]}/>
        <Block onClick={()=>handleOnClick(8)} text={state[8]}/>
      </div>
    </div>
  );
}

export default App;

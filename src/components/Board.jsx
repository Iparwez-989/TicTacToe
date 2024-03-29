import React, { useState } from 'react'
import Button from './Button'

function Board() {
    const [state,setState]=useState(Array(9).fill(null))
    const [isXTurn,setTurn] = useState(true)
    const checkWinner = ()=>{
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let logic of winnerLogic){
            const [a,b,c] = logic
            if(state[a]!==null && state[a]===state[b]&& state[b]===state[c]){
                return state[a]
            }
           
        }
         return false
    }
const isWinner = checkWinner();
    function handleClick(i){
      // To check whether the box is already filled or the winner is declared 
        if(isWinner || state[i]){ 
            return;
        }
        const copy = [...state];  
        copy[i]= isXTurn ? "X": "O";
        setState(copy);
        setTurn(!isXTurn);
    }
    function reset(){
      setState(Array(9).fill(null))
      setTurn(true)
    }
    
  return (
    
    <div className='board'>
      <div className='rows'>
        <Button click={()=>handleClick(0)} value={state[0]} />
        <Button click={()=>handleClick(1)} value={state[1]} />
        <Button click={()=>handleClick(2)} value={state[2]} />
      </div>
      <div className='rows'>
        <Button click={()=>handleClick(3)} value={state[3]} />
        <Button click={()=>handleClick(4)} value={state[4]} />
        <Button click={()=>handleClick(5)} value={state[5]} />
      </div>
      <div className='rows'>
        <Button click={()=>handleClick(6)} value={state[6]} />
        <Button click={()=>handleClick(7)} value={state[7]} />
        <Button click={()=>handleClick(8)} value={state[8]} />
      </div>
      {/* to show the winner */}
    {isWinner && <p>Winner is {isWinner==='X'? 'player X':'player O'}</p>}  
    
    <button onClick={reset} className='reset' >Reset game</button>
    </div>
  )
}

export default Board

 
import React, { useState } from 'react'
import Square from './Square'

function Board() {

    const [state , setState] = useState(Array(9).fill(null));
    const [isXTurn , setIsXTurn] =useState(true);

    function checkWinner(){
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for(let logic of winnerLogic){
            const[a,b,c]=logic;
            if(state[a]!==null && state[a] === state[b] && state[b] === state[c]){
                return state[a];
            }
        }

        return false;
    }

    function resumeGame(){
        setState(Array(9).fill(null));
    }

    const isWinner =checkWinner();

   function handleClick(index){

    if(state[index]!==null){
        return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "0" ;
    setState(copyState);
    setIsXTurn(!isXTurn)
   }

  return (
    <div className='board-container'>
    {isWinner ? (
        <div className='winner'><h1>Congratulations Player {isWinner} Won the game</h1><button className='button' onClick={resumeGame}>Play Again</button></div>):
    (

    <>
    <h4 style={{fontSize:'30px'}}>Player {isXTurn ? "X" : "0"} please move</h4>
      <div className="board-row">
        <Square value={state[0]} onClick={() => handleClick(0)}/>
        <Square value={state[1]} onClick={() => handleClick(1)}/>
        <Square value={state[2]} onClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={state[3]} onClick={() => handleClick(3)}/>
        <Square value={state[4]} onClick={() => handleClick(4)}/>
        <Square value={state[5]} onClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={state[6]} onClick={() => handleClick(6)}/>
        <Square value={state[7]} onClick={() => handleClick(7)}/>
        <Square value={state[8]} onClick={() => handleClick(8)}/>
      </div>
    </>)}
    </div>
  )
}

export default Board



import React from 'react'
import { useNavigate } from 'react-router-dom'

function DoneGame() {
  const nav = useNavigate();

  return (
    <div>

        <h2>YAYYY! You won the game. It took you 3 mins.</h2>

        <button onClick={()=>nav('/game')}>Start game again</button>
      
    </div>
  )
}

export default DoneGame

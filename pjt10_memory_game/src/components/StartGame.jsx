import React, { useState } from "react";
import Game from "./Game";
import DoneGame from "./DoneGame";

function StartGame() {
  const [startGame, setStartGame] = useState(false);
  const [doneGame, setDoneGame] = useState(false);
  return (
    <div>
      <h2>Memory Game!</h2>

      {!startGame && (
        <button className="start-the-game" onClick={() => setStartGame(true)}>
          Start the game
        </button>
      )}

      {startGame && <Game doneGame={doneGame} setDoneGame={setDoneGame}></Game>}

      {doneGame && <DoneGame></DoneGame>}
    </div>
  );
}

export default StartGame;

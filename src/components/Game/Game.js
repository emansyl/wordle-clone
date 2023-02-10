import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";

import GoodBanner from "../GoodBanner/GoodBanner";
import BadBanner from "../BadBanner/BadBanner";
// import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameState, setGameState] = React.useState("running");

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput
        guessList={guessList}
        disabled={gameState !== 'running'}
        answer={answer}
        setGuessList={setGuessList}
        setGameState={setGameState}
      />
       {gameState === "won" && <GoodBanner numGuesses={guessList.length} />}
       {gameState === "lost" && <BadBanner answer={answer} />}
    </>
   
  );
}

export default Game;

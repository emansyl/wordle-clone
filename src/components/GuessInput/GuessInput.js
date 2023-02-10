import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({guessList, disabled,setGuessList,answer,setGameState}) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      type="text"
      id="guessInput"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({guess : guess})
        const nextArray = [...guessList,guess]
        setGuessList(nextArray)
        setGuess('')
        console.log({answer: answer, guess:guess})
        if(answer === guess){
          setGameState('won')
        } else if(nextArray.length >= NUM_OF_GUESSES_ALLOWED ){
          setGameState('lost')
        }

        

      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        disabled={disabled}
        required={true}
        minLength={5}
        maxLength={5}
        onChange={(event) => {
          const word = event.target.value.toUpperCase();
          console.log(word);
          setGuess(word);
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;

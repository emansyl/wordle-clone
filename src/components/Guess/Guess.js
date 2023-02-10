import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer}) {
  
  const checked = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(5).map((index) => {
        const letter = checked ? checked[index].letter : " ";
        const status =checked ? checked[index].status : "";

        return (
          <span key={index} className={`cell ${status}`}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;

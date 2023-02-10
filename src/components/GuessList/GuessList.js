import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const guess = index < guessList.length ? guessList[index] : "";
        return (
          <Guess
            key={index}
            guess={guess}
            answer={answer}
          />
        );
      })}
    </div>
  );
}

export default GuessList;

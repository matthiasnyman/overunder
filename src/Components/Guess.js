  
import React from "react";
import { connect } from "react-redux";
import { setGuessOver, setGuessUnder } from "../actions/guess";

const Guess = ({ guess, setGuessOver, setGuessUnder }) => {
  return (
    <div>
      <h3>Will it be even or odd?</h3>
      <div>
        <button
          onClick={setGuessOver}
          style={guess === 'over' ? { border: "2px solid #43a047" } : null}
        >
          Even
        </button>{" "}
        <button
          onClick={setGuessUnder}
          style={guess === 'under' ? { border: "2px solid #43a047" } : null}
        >
          Odd
        </button>
      </div>
    </div>
  );
};

export default connect(
  ({ gameState: { guess } }) => ({ guess }),
  { setGuessOver, setGuessUnder }
)(Guess);
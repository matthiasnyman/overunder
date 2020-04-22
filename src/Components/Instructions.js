import React from 'react';
import { connect } from 'react-redux';

import { expandInstructions, collapseInstructions } from '../actions/settings';

const Instructions = props => {
  const { instructionExpanded, expandInstructions, collapseInstructions } = props;

  if( instructionExpanded ) {
    return (
      <div>
        <h3>Instructions</h3>
        <p>Welcome to over under, the game!</p>
        <br />
        <p>Firstly the deck is shuffled. then then a card will be drawn! </p>
        <p>then it's your turn to gess if the next card will be over or even</p>
        <p>did you even read this... (the game is over or under)</p>
        <br />
        <button onClick={ collapseInstructions }>Show less</button>
      </div>
    );
  }

  return (
    <div>
      <h3>Hello</h3>
      <button onClick={ expandInstructions }>Show instructions</button>
    </div>
  )
}

export default connect( 
  state => ({ instructionExpanded: state.settings.instructionExpanded }),
  { expandInstructions, collapseInstructions }
)(Instructions);
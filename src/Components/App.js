import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import fetchState from '../reducers/fetchState';

import Instructions from './Instructions';
import DrawCard from './drawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';

class App extends Component {

  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();

  }
  
  
  render() {

    if (this.props.fetchState === fetchState.error) {
      return (
        <div>
          <p>Please try reload the app! an error was found</p>
          <p>{this.props.message}</p>
        </div>
      )
    }
   
    return (
      <div className="App">
        <h1>Over Under gessing game</h1>
        {
          this.props.gameStarted ? (
            <div>
              <h3>The game is on!</h3>
              <GameState  />
              <br />
              <Guess  />
              <br />
              <DrawCard />
              <hr/>
              <Card />
              <hr />
              <button onClick={ this.props.cancelGame }>Cancel Game</button>
            </div>
            ) : (
              <div>
              <h3>A new game awaits!</h3>
              <Instructions />
              <br />
              <button onClick={ this.startGame }>Start Game</button>

            </div>
          )
        }

      </div>
    );
  }
}

const mapStateToProps = state => {

  const {
    settings: { gameStarted },
    deck: { fetchState, message }
  } = state;

  return { gameStarted, fetchState, message };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch( startGame() ),
//     cancelGame: () => dispatch( cancelGame() ),
//     fetchNewDeck: () => dispatch(fetchNewDeck())
//   };
// }

const componentConnector = connect(
  mapStateToProps, 
  { startGame, cancelGame, fetchNewDeck } 
);

export default componentConnector(App);

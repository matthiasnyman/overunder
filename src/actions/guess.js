import { SET_GUESS} from './types';

export const setGuessOver = () => {
  return { type: SET_GUESS, guess: 'over'};
}

export const setGuessUnder = () => {
  return { type: SET_GUESS, guess: 'under'};
}
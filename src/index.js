import './styles/main.css';
import { submitScore, reset } from './modules/submitScore.js';
import fetchScores from './modules/fetchScores.js';

const gameId = 'lP0Y18KQGTeYLwKbVwzm';

const form = document.querySelector('.form');

const refresh = document.querySelector('.recent-scores-refresh');
refresh.addEventListener('click', () => {
  fetchScores(gameId);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitScore(gameId);
  reset();
});

fetchScores(gameId);
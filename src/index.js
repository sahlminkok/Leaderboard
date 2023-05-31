import './styles/main.css';
import Score from './modules/score.js';
import RecentScores from './modules/resentScores.js';

const recent = new RecentScores();

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const yourName = document.querySelector('#name');
  const yourScore = document.querySelector('#score');

  const score = new Score(yourName.value, yourScore.value);
  recent.addScore(score);

  yourName.value = '';
  yourScore.value = '';
});

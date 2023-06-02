const user = document.querySelector('#user');
const score = document.querySelector('#score');

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const submitScore = async (gameId) => {
  const response = await fetch(`${baseUrl}${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
    body: JSON.stringify({
      user: user.value,
      score: Number(score.value),
    }),
  });
  const data = await response.json();
  return data;
};

const reset = () => {
  user.value = '';
  score.value = '';
};

export { submitScore, reset };
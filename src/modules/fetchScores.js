import displayScores from './displayScores.js';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

// Function to fetch scores for a specific game
const fetchScores = async (gameId) => {
  const response = await fetch(`${baseUrl}${gameId}/scores`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  displayScores(data.result);
};

export default fetchScores;
const displayScores = (scores) => {
  const recentScores = document.querySelector('.recent-scores-list');
  recentScores.innerHTML = '';
  for (let i = 0; i < scores.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'score';
    li.innerHTML = `
      <span>${scores[i].user}:</span>
      <span>${scores[i].score}</span>
      `;

    recentScores.appendChild(li);
  }
};

export default displayScores;
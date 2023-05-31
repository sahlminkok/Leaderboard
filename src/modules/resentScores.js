class RecentScores {
  constructor() {
    this.peopleScores = [];
    this.loadScores();
  }

  addScore(score) {
    this.peopleScores.unshift(score);
    this.saveScores();
  }

  saveScores() {
    localStorage.setItem('scores', JSON.stringify(this.peopleScores));
    this.displayScores();
  }

  loadScores() {
    const scores = JSON.parse(localStorage.getItem('scores'));
    if (scores) {
      this.peopleScores = scores;
      this.displayScores();
    }
  }

  displayScores() {
    const recentScores = document.querySelector('.recent-scores-list');
    recentScores.innerHTML = '';
    for (let i = 0; i < this.peopleScores.length; i += 1) {
      const yourScore = this.peopleScores[i];
      const li = document.createElement('p');
      li.className = 'score';
      li.innerHTML = `
        <span>${yourScore.name}:</span>
        <span>${yourScore.score}</span>
        `;

      recentScores.appendChild(li);
    }
  }
}

export default RecentScores;
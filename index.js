let scoreEl = document.getElementById("score-el");
let awayScoreEl = document.getElementById("away-score-el");
let homeScore = 0;
let awayScore = 0;

const goalIncrement = () => {
    homeScore += 1;
    scoreEl.textContent = homeScore;
    setTimeout(updateScoreColor, 0);  
    console.log(homeScore);
};

const awayGoalIncrement = () => {
    awayScore += 1;
    awayScoreEl.textContent = awayScore;
    setTimeout(updateScoreColor, 0);  
    console.log(awayScore);
};

const updateScoreColor = () => {
    if (homeScore > awayScore) {
        scoreEl.style.color = "black";
        awayScoreEl.style.color = "";
    } else if (awayScore > homeScore) {
        awayScoreEl.style.color = "black";
        scoreEl.style.color = "";
    } else {
        scoreEl.style.color = "";
        awayScoreEl.style.color = "";
    }
};

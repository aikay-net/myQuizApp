function checkAnswers(){
    const answers = {
        q1: "Paris",
        q2: "7",
        q3: "Yellow",
        q4: "Earth",
        q5: "The Great Barrier Reef",
        q6: "Au",
        q7: "Venus",
        q8: "Blue Whale",
        q9: "Sydney",
        q10: "Thomas Edison"
    };

    let score = 0;

    for (let key in answers){
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if(selected && selected.value === answers[key]){
            score++
        }
    }

    const result = document.getElementById("result");
    result.textContent = `You scored ${score} out of ${Object.keys(answers).length}`;
    result.scrollIntoView({behaviour:"smooth"});

    const nickname = localStorage.getItem("currentUser") || "Anonymous";
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.push({nickname,score});
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}


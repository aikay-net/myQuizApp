const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
leaderboard.sort((a,b) => b.score - a.score);
const list = document.getElementById("leaderboard-list");
leaderboard.forEach(({nickname,score}) => {
    const li = document.createElement("li");
    li.className = "leaderboardItem";
    li.textContent = `${nickname}: ${score}`;
    list.appendChild(li)
});

var scoreTable = JSON.parse(localStorage.getItem("highscores"))   //[{}]

for (var i = 0; i < scoreTable.length; i++) {

    var row = `<p>${scoreTable[i].name}: ${scoreTable[i].score}`
    $("#finalScore").append(row)
}


    var scores = localStorage.getItem('correct answer');
    var name = localStorage.getItem ('user name');

    var highscoresName = document.getElementById("highscoresName");
    var highscoresScore = document.getElementById("highscoresScore");



highscoresName.append(name);
highscoresScore.append(scores);

    var scores = localStorage.getItem('correct answer');
    var name = localStorage.getItem ('user name');

    var highscores = document.getElementById("highscores1");

    highscores.append('<p>' + name + scores + '</p>');
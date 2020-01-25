// Position des korrekten Buttons
let randomPosition;

function loadJsonGame(path, callback) {
    var request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            callback(request.responseText);
        } else if (request.readyState == 4 && request.status != 200) {
            console.log('JSON konnte unter dem Pfad nicht geladen werden');
        }
    };
    request.open('GET', path, true);
    request.send(null);
}

function startGame() {
    function operateOnJson() {
        var zufallstextKorrekt;
        var zufallstextFalsch;
        let gleicheAntwort = true;
        let targetText;
        let failText;
        let solution1;
        let solution2;
        loadJsonGame('data/GameData1.json', function (response) {
            // Lade JSON
            var game_JSON1 = JSON.parse(response);

            // Wähle korrektes Ergebnis aus
            zufallstextKorrekt = 'game_JSON1.word' + Math.floor(Math.random() * 10);
            targetText = eval(zufallstextKorrekt);
            console.log('Korrektes Ergebnis: ' + eval(zufallstextKorrekt));

            // Wähle falsche Alternativantwort
            zufallstextFalsch = 'game_JSON1.word' + Math.floor(Math.random() * 10);
            failText = eval(zufallstextFalsch);
            console.log('targetText: ' + targetText);
            console.log('failText: ' + failText);
            while (gleicheAntwort) {
                if (failText != targetText) {
                    gleicheAntwort = false;
                } else {
                    console.log('****Gleicher Text gewählt, nochmals neuen Text evaluieren****');
                    zufallstextFalsch = 'game_JSON1.word' + Math.floor(Math.random() * 10);
                    failText = eval(zufallstextFalsch);
                }
            }
            zufallstextFalsch = 'game_JSON1.word' + Math.floor(Math.random() * 10);
            failText = eval(zufallstextFalsch);
            console.log('Falsches Ergebnis: ' + failText);

            // Bestimme durch Zufall in welchen Button Ergebnis abgelegt wird
            randomPosition = Math.floor(Math.random() * 2) + 1;
            console.log('Korrekter Button: ' + targetText);
            alphabet(targetText, 'spiel');// --> Ruft Funktion mit undefinied-Variable auf!
            // Gebe Button je nach Höhe des Zufallsergebnis die korrekte Antwort an den bestimmten Button
            if (randomPosition == '1') {
                solutionOne = document.getElementById("solution1");
                solutionOne.innerText = [targetText];

                solutionTwo = document.getElementById("solution2");
                solutionTwo.innerText = [failText];
            }
            else {
                solutionOne = document.getElementById("solution2");
                solutionOne.innerText = [targetText];

                solutionTwo = document.getElementById("solution1");
                solutionTwo.innerText = [failText];
            }
                
        });
        
    }
    operateOnJson();
    
}



function spielErgebnis(solution){
    console.log('Zwischenergebnis: ' + solution);
    console.log('randomPosition: ' + randomPosition);
    if (solution==randomPosition) {
        alert("Richtig erkannt!");
    } else {
        alert("Leider nicht richtig erkannt!")
    }
    // console.log('Ergnis korrekt!');
    // console.log('Ergnis falsch!');
}
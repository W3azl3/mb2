function loadJson(path, callback) {
    var request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            callback(request.responseText);
        } else if (request.readyState == 4 && request.status != 200) {
            console.log('JSOn konnte unter dem Pfad nicht geladen werden');
        }
    };
    request.open('GET', path, true);
    request.send(null);
}

function alphabet(buchstabe, herkunft) {
    // buchstabe = String(buchstabe);

    console.log('****' + buchstabe);
    let musterForm;
    let letterToMorse;
    let buildedMorseSign;
    let dauerArray = [];
    let finalArray = [];
    var requestURL = './data/LetterToMorse.json';

    if (herkunft == 'uebung') {
        buchstabe = buchstabe.value;
    }
    

    buchstabe = buchstabe.toLowerCase();
    console.log('LowerCaseWord: ' + buchstabe);


    function initUnitsPage() {
        loadJson('data/LetterToMorse.json', function (response) {
            var actual_JSON = JSON.parse(response);
            // console.log('done OOOOOIIIIOOOO' + actual_JSON.a);
            for (var i = 0; i < buchstabe.toString().length; i++) {
                switch (buchstabe.charAt(i)) {
                    case 'a':
                        console.log('Erkannter Code für A');
                        musterForm = actual_JSON.a;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'b':
                        console.log('Erkannter Code für B');
                        musterForm = actual_JSON.b;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'c':
                        console.log('Erkannter Code für C');
                        musterForm = actual_JSON.c;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'd':
                        console.log('Erkannter Code für D');
                        musterForm = actual_JSON.d;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'e':
                        console.log('Erkannter Code für E');
                        musterForm = actual_JSON.e;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'f':
                        console.log('Erkannter Code für F');
                        musterForm = actual_JSON.f;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'g':
                        console.log('Erkannter Code für G');
                        musterForm = actual_JSON.g;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'h':
                        console.log('Erkannter Code für H');
                        musterForm = actual_JSON.h;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'i':
                        console.log('Erkannter Code für I');
                        musterForm = actual_JSON.i;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'j':
                        console.log('Erkannter Code für J');
                        musterForm = actual_JSON.j;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'k':
                        console.log('Erkannter Code für K');
                        musterForm = actual_JSON.k;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'l':
                        console.log('Erkannter Code für L');
                        musterForm = actual_JSON.l;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'm':
                        console.log('Erkannter Code für M');
                        musterForm = actual_JSON.m;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'n':
                        console.log('Erkannter Code für N');
                        musterForm = actual_JSON.n;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'o':
                        console.log('Erkannter Code für O');
                        musterForm = actual_JSON.o;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'p':
                        console.log('Erkannter Code für P');
                        musterForm = actual_JSON.p;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'q':
                        console.log('Erkannter Code für Q');
                        musterForm = actual_JSON.q;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'r':
                        console.log('Erkannter Code für R');
                        musterForm = actual_JSON.r;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 's':
                        console.log('Erkannter Code für S');
                        musterForm = actual_JSON.s;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 't':
                        console.log('Erkannter Code für T');
                        musterForm = actual_JSON.t;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'u':
                        console.log('Erkannter Code für U');
                        musterForm = actual_JSON.u;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'v':
                        console.log('Erkannter Code für V');
                        musterForm = actual_JSON.v;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'w':
                        console.log('Erkannter Code für W');
                        musterForm = actual_JSON.w;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'x':
                        console.log('Erkannter Code für X');
                        musterForm = actual_JSON.x;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'y':
                        console.log('Erkannter Code für Y');
                        musterForm = actual_JSON.y;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case 'z':
                        console.log('Erkannter Code für Z');
                        musterForm = actual_JSON.z;
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    case ' ':
                        console.log('Erkannter Code für ein Leerzeichen');
                        musterForm = [' '];
                        finalArray = doAndAct(musterForm, finalArray);
                        break;
                    default:
                        console.log('Error, da Default-Buchstabe gezogen');
                        alert('Default!!');
                        break;
                }
                vibriere(finalArray);


            }
        });
    }

    initUnitsPage();



}

// Erstelle Vibrationsmuster auf Basis von "muster" (s für short, l für long, " " für Leerzeichen)
function vibrateMuster(muster) {
    let tempDauerArray = [];
    console.log(muster);

    for (var i = 0; i < muster.length; i++) {
        switch (muster.charAt(i)) {
            case 's':
                console.log('Länge "s" ' + muster.charAt(i));
                tempDauerArray.push('100');
                tempDauerArray.push('100');
                break;
            case 'l':
                console.log('Länge "l": ' + muster.charAt(i));
                tempDauerArray.push('300');
                tempDauerArray.push('100');
                break;
            case ' ':
                console.log('Länge "Leerzeichen"');
                tempDauerArray.push('0');
                tempDauerArray.push('700');
                break;
            default:
                console.log('Fehler bei Erkennung der Länge des Zeichens aufgetreten!');
                break;
        }
    }
    console.log('Zusammengebautes dauerArray: ' + tempDauerArray);
    return tempDauerArray;
}

// Vibriere nach Vorgaben von "dauer"
function vibriere(dauer) {
    console.log('Vibriere jetzt mit Pattern: ' + dauer);
    navigator.vibrate(dauer);
}

// Aktualisiere Feld "morseSign" auf index.html
function returnMorseSign(morseSign) {
    console.log('Morsezeichen ist: ' + morseSign);
    let morseResponseSign = document.getElementById("morseSign");
    morseResponseSign.innerText = [morseSign];
}

// Aktualisiere Feld "morseSignLetter" auf index.html
function returnMorseResponseLetter(morseLetter) {
    console.log('MorseLetter ist: ' + morseLetter);
    let morseResponseLetter = document.getElementById("morseSignLetter");
    morseResponseLetter.innerText = [morseLetter];
}

// Erstelle Morsezeichen (·-) aus Morsecode (s und l)
function buildMorseSign(morseCode) {
    let tempMorseSign = '';
    console.log('buildMorseSign(): morseCode: ' + morseCode);



    for (var i = 0; i < morseCode.length; i++) {
        if (morseCode.charAt(i) == 's') {
            tempMorseSign = tempMorseSign + '·'
        } else {
            tempMorseSign = tempMorseSign + '-'
        }
    }
    console.log('buildMorseSign(): tempMorseSign: ' + tempMorseSign);
    return tempMorseSign;
}

// Input: tempMusterForm als Muster (s,l," ") das in Morsepattern übersetzt wird und an tempFinalArray angehangen wird. 
// Output: tempFinalArray dass ergänzt um neues tempMusterForm ergänzt zurückgegeben wird. Zustäzlich Aufruf von Funktionen "buildMorseSign" und "returnMorseSign" um Felder auf index.html zu aktualisieren
function doAndAct(tempMusterForm, tempFinalArray) {
    returnMorseResponseLetter(tempMusterForm);
    buildedMorseSign = buildMorseSign(tempMusterForm);
    console.log('buildedMorseSign: ' + buildedMorseSign);
    returnMorseSign(buildedMorseSign);
    arrayConcat(vibrateMuster(tempMusterForm), tempFinalArray);
    return tempFinalArray;
}

// Input: appendArray das an shortArray angehangen wird. Output: zusammengehängtes Array
function arrayConcat(appendArray, shortArray) {
    appendArray.forEach(element => {
        shortArray.push(element)
        console.log('Element: ' + element);
    });
    return shortArray;
}
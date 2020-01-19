function alphabet(buchstabe) {
    let musterForm;
    let letterToMorse;
    let buildedMorseSign;
    let dauerArray = [];
    let finalArray = [];

    buchstabe.value = buchstabe.value.toLowerCase();
    alert(buchstabe.value.toString().length);
    
    for (var i = 0; i < buchstabe.value.toString().length; i++) {
        alert(buchstabe.value.charAt(i));
        switch (buchstabe.value.charAt(i)) {
            case 'a':
                console.log('Erkannter Code für A');
                musterForm = ['s', 'l'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'b':
                console.log('Erkannter Code für B');
                musterForm = ['l', 's', 's', 's'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'c':
                console.log('Erkannter Code für C');
                musterForm = ['l', 's', 'l', 's'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'd':
                console.log('Erkannter Code für D');
                musterForm = ['l', 's', 's'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'e':
                console.log('Erkannter Code für E');
                musterForm = ['s'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'f':
                console.log('Erkannter Code für F');
                musterForm = ['s', 's', 'l', 's'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'g':
                console.log('Erkannter Code für G');
                musterForm = ['l', 'l','s'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'h':
                console.log('Erkannter Code für H');
                musterForm = ['s', 's', 's', 's'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'i':
                console.log('Erkannter Code für I');
                musterForm = ['s', 's'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'j':
                console.log('Erkannter Code für J');
                musterForm = ['s', 'l', 'l', 'l'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'k':
                console.log('Erkannter Code für K');
                musterForm = ['l', 's', 'l'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'l':
                console.log('Erkannter Code für L');
                musterForm = ['s', 'l', 's', 's'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'm':
                console.log('Erkannter Code für M');
                musterForm = ['l', 'l',];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'n':
                console.log('Erkannter Code für N');
                musterForm = ['l', 's',];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'o':
                console.log('Erkannter Code für O');
                musterForm = ['l', 'l', 'l'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'p':
                console.log('Erkannter Code für P');
                musterForm = ['s', 'l', 'l', 's'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'q':
                console.log('Erkannter Code für Q');
                musterForm = ['l', 'l', 's', 'l'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'r':
                console.log('Erkannter Code für R');
                musterForm = ['s', 'l', 's'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 's':
                console.log('Erkannter Code für S');
                musterForm = ['s', 's', 's'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 't':
                console.log('Erkannter Code für T');
                musterForm = ['l'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'u':
                console.log('Erkannter Code für U');
                musterForm = ['s', 's', 'l'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'v':
                console.log('Erkannter Code für V');
                musterForm = ['s', 's', 's', 'l'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'w':
                console.log('Erkannter Code für W');
                musterForm = ['s', 'l', 'l'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'x':
                console.log('Erkannter Code für X');
                musterForm = ['l', 's', 's', 'l'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'y':
                console.log('Erkannter Code für Y');
                musterForm = ['l', 's', 'l', 'l'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case 'z':
                console.log('Erkannter Code für Z');
                musterForm = ['l', 'l', 's', 's'];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            case ' ':
                console.log('Erkannter Code für ein Leerzeichen');
                musterForm = [' '];
                finalArray = doAndAct(musterForm, finalArray);
                break;
            default:
                console.log('Error, da Default-Buchstabe gezogen');
                break;
        }
      }

      vibriere(finalArray);
}

// Erstelle Vibrationsmuster auf Basis von "muster" (s für short, l für long)
function vibrateMuster(muster) {
    let tempDauerArray = [];
    console.log(muster);
    muster.forEach(element => {
        switch(element){
            case 's':
                console.log('Länge "s" ' + element);
                tempDauerArray.push('100');
                tempDauerArray.push('100');
                break;
            case 'l':
                console.log('Länge "l": ' + element);
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
    });
    console.log('Zusammengebautes dauerArray: ' + tempDauerArray);
    return tempDauerArray;
}

function vibriere(dauer) {
    console.log('Vibriere jetzt mit Pattern: ' + dauer);
    navigator.vibrate(dauer);
}

function returnMorseSign(morseSign){
    console.log('Morsezeichen ist: ' + morseSign);
    let morseResponseSign = document.getElementById("morseSign");
    morseResponseSign.innerText = [morseSign];
}

function returnMorseResponseLetter(morseLetter){
    console.log('MorseLetter ist: ' + morseLetter);
    let morseResponseLetter = document.getElementById("morseSignLetter");
    morseResponseLetter.innerText = [morseLetter];
}

// Erstelle Morsezeichen (·-) aus Morsecode (s und l)
function buildMorseSign(morseCode){
    let tempMorseSign = '';
    console.log('buildMorseSign(): morseCode: ' + morseCode);
    morseCode.forEach(element => {
        if (element=='s') {
            tempMorseSign = tempMorseSign + '·'
        } else {
            tempMorseSign = tempMorseSign + '-'
        }
    });
    console.log('buildMorseSign(): tempMorseSign: ' + tempMorseSign);
    return tempMorseSign;
}

function doAndAct(tempMusterForm, tempFinalArray) {
    returnMorseResponseLetter(tempMusterForm);
    buildedMorseSign = buildMorseSign(tempMusterForm);
    console.log('buildedMorseSign: ' + buildedMorseSign);
    returnMorseSign(buildedMorseSign);
    arrayConcat(vibrateMuster(tempMusterForm),tempFinalArray);
    return tempFinalArray;
}

function arrayConcat(appendArray, shortArray){
    console.log('XXXX: ' + shortArray)
    appendArray.forEach(element => {
        shortArray.push(element)
        console.log('Element: ' + element);
    });
    return shortArray;
}
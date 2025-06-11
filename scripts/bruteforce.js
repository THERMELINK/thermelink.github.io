targetWord = document.getElementById("animated").innerHTML;
originalColor = document.getElementById("animated").style.color;
document.getElementById("animated").innerHTML = "";
document.getElementById("animated").style.color = "#04ff00";

currentWord = "";
charAlreadyFound = false;
const allChar = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    " ", ".", "(", ")"
];



wordLoop();
//async function kan een promise meegeven, in dit geval heb ik async gebruikt om "await" te gebruiken om te wachten op een nieuwe letter
async function wordLoop() {

    for (let char of targetWord) {
        charFound = false;
        currentChar = char;

        if (char != "") {
            for (let i = 0; i <= (allChar.length - 1); i++) {
                if (charAlreadyFound == false) {
                    if (allChar[i] == currentChar) {
                        currentWord += allChar[i];
                        await activateTimeOut(5)
                        document.getElementById("animated").innerHTML = currentWord;
                    }
                    else if (currentWord != targetWord) {
                        await activateTimeOut(5)
                        document.getElementById("animated").innerHTML = currentWord + allChar[i];
                    }
                }
            }

        }
        else {
            currentWord += "";
        }
    }
    document.getElementById("animated").style.color = originalColor;
}

//deze async functie activeerd een timeout hierbij word meteen een promise returned, de promise word pas opgelost na de timeout
//return new Promise(resolve => {...} resolve();



async function activateTimeOut(seconds) {
    return new Promise(resolve => {
        if (Math.random() < 0.5) {
            resolve();
        }
        else {
            setTimeout(() => {
                resolve();
            }, seconds);
        }
    })
};
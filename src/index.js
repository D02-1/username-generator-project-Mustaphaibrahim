const fs = require('fs'); // FileSystem, zum lesen des dateisystem
const path = require('path'); // Path, zum arbeiten mit dateipfaden

// Benutzernamen Generator
// Beispiel für Benutzer: ShinySunflower55555 oder FlyingAutomile34567 oder BeautifulCheesecake44567

// Was benötigen wir?
// -Eine Funktion um die werte aus der JSON datei zu lesen

/**
 * @function getWords
 * @description Reads words from json file.
 * @returns { object }
 */
function getWords()
{
    // Wir lesen eine json datei, die worte enhält, die wir nutzen wollen
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

    //Wir geben die worte zurück
    return json;
}



// -Eine Funktion um die zufällige Nummer hinter dem Namen zu generieren
/**
 * @function creatRandomNumber
 * @description Creates a random number according to a minimal and maimal value
 * @param { number } minNumber 
 * @param { number } maxNumber 
 * @returns  { number }
 */

function creatRandomNumber(minNumber, maxNumber)
{
    //Wir erschaffen eine zufallszahl aus einer minimalen mit einer maximalen zahl
    const num = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

    //randopm = 0.5 * 50000 - 10000 = 15000 + 10000 = 25000

    //Wir geben die zufälliger nummer zurück
    return num;
}


// -Eine Funktion mit der wir den ersten Buchstaben des jeweligen Wirtes groß schreiben (PascalCase)
/**
 * @function capitalizeString
 * @description Takes the first letter of a string and changes it to UpperCase, then returns string
 * @param { string } word 
 * @returns { string }
 */
function capitalizeString(word)
{
    //Prüfe ob kein wort vorhanden ist
    if(word === undefined || word.length === 0 || !isNaN(word))
    {
        return 'Default';
    }

    //Wir nehem den ersten buchstaben von unserem String, und ändern ihnn auf UpperCase
    const wordStart = word.charAt(0).toUpperCase();

    //Wir nehem den rest des strings und ändern ihn auf LowerCase
    const wordRest = word.substring(1).toLowerCase();

    //Wir geben den fertigen String zurück
    return wordStart + wordRest;

}

// -Eine Funktion mit der wir den benutzernamen generieren und auf die ergebnisse der anderen funktion zugreifen

/**
 * @function createRandomUserName
 * @description Creates a random username
 * @param { number } maxNumber 
 * @returns { string }
 */

function createRandomUserName(maxNumber)
{
    //Wir holen uns die wörter
    const words = getWords();

    //Wir holen uns aus der wortliste die adjektive
    const adj = words.adjs[ Math.floor(Math.random() * (words.adjs.length - 1 )) ];

    //Wir halen uns aus der wortliste die nomen
    const noun = words.nouns[ Math.floor(Math.random() * (words.nouns.length - 1 ))];

    //Wir holen uns unsere zufallszahl
    const randomNumber = creatRandomNumber(10000, maxNumber);

    const finalUserName = `${ capitalizeString(adj)}${ capitalizeString(noun)}${maxNumber !== 0 ? randomNumber : ''}`

    return finalUserName;
}

createRandomUserName(50000);

// -Eine export, um die Applikation in einer anderen datei zu nutzen
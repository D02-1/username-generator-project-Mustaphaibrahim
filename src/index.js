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
// -Eine Funktion mit der wir den ersten Buchstaben des jeweligen Wirtes groß schreiben (PascalCase)
// -Eine Funktion mit der wir den benutzernamen generieren und auf die ergebnisse der anderen funktion zugreifen
// -Eine export, um die Applikation in einer anderen datei zu nutzen
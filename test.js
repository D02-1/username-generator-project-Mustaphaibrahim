//Wir importieren unsere App
const usernameGenerator = require('./src/index.js');

//Wir führen die funktion der app aus, mit dem alias das wir vergeben haben
const username = usernameGenerator.createUserName(50000);

//wir geben das ergebnis aus
console.log(username);
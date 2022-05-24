let numKm = parseInt(prompt("Quanti chilometri devi fare?"));
let age = parseInt(prompt("Quanti anni hai"));
const pricePerKm = 0.21;

//faccio la funzione per calcolarmi sconto e costo totale
if (isNaN(numKm) || isNaN(age)) alert("try again");
else {
  const fattoreDiSconto = age < 18 ? 0.8 : age >= 65 ? 0.6 : 1;
  document.getElementById("testo").innerText =
    "Numero kilometri: " +
    numKm +
    "\nEtà: " +
    age +
    "\nSconto eseguito: " +
    Math.ceil((1 - fattoreDiSconto) * 100) +
    "%" +
    "\nCosto: " +
    numKm * pricePerKm * fattoreDiSconto;
}
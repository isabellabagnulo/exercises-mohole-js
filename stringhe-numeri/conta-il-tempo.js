/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora?
*/

const p = document.querySelector("#paragraph")

function timeCounter() {
  let residualSeconds = document.querySelector("input").value

  const secondsForMinute = 60
  const secondsForHour = 60 * secondsForMinute

  // calcoliamo quante ore
  const hours = residualSeconds / secondsForHour
  residualSeconds = residualSeconds % secondsForHour

  // calcoliamo quanti minuti sui secondi rimanenti
  const minutes = residualSeconds / secondsForMinute
  residualSeconds = residualSeconds % secondsForMinute

  // in questo caso l'operatore modulo non serve perchè dovremmo avere un valore già sotto i 60
  const seconds = residualSeconds

  p.innerHTML = `${Math.floor(hours)} ore, ${Math.floor(
    minutes
  )} minuti e ${seconds} secondi.`
}

// Oggetto Math
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// abs, floor, round, ceil, random

// Math.abs
// Math.random
// Math.floor || Math.round(3.2) -> 3 || Math.round(3.7) -> 3
// Math.round || Math.round(3.2) -> 3 || Math.round(3.7) -> 4
// Math.ceil || Math.round(3.2) -> 4 || Math.round(3.7) -> 4

/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  
*/

const p = document.querySelector("#paragraph")

function average() {
  let sum = 0
  const numbers = document.querySelector("input").value.toString().split(",")
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i])
  }
  const average = sum / numbers.length

  const belowAverage = []
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] < average) {
      belowAverage.push(numbers[j])
    }
  }

  p.innerHTML = `la media dei numeri ${numbers} è di ${average}. I numeri minori di ${average} sono ${belowAverage}`
}

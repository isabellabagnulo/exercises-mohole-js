/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  
*/

const p = document.querySelector("#paragraph")

function minMax() {
  const numbers = document.querySelector("input").value.toString().split(",")
  const maxNumber = Math.max(...numbers)
  const minNumber = Math.min(...numbers)
  p.innerHTML = `tra i numeri ${numbers}, il maggiore è ${maxNumber} e il minore è ${minNumber}`
}

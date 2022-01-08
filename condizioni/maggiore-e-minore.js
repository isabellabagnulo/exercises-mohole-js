/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  
*/

const p = document.querySelector("#paragraph")

function maxMin() {
  const numbers = document.querySelector("input").value.toString().split(",")
  const max = Math.max(...numbers)
  const min = Math.min(...numbers)
  p.innerHTML = `tra i numeri ${numbers}, il maggiore è ${max}, il minore è ${min}`
}

/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

  Esempio:
    Input: n = 5
    Output: 120

  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120

  
*/

const p = document.querySelector("#paragraph")

function factorial() {
  const n = document.querySelector("input").value
  let result = 1
  for (let i = n; i > 0; i--) {
    result *= i
  }
  p.innerHTML = `il risultato del fattoriale di ${n} è di ${result}`
}

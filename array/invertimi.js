/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  
*/

const p = document.querySelector("#paragraph")

function generateArray() {
  const n = document.querySelector("input").value
  const newArray = Array.from({ length: n }, () =>
    Math.floor(Math.random() * (100 - 1) + 1)
  )
  p.innerHTML = `array ottenuto [${newArray}] array invertito [${newArray.reverse()}]`
}

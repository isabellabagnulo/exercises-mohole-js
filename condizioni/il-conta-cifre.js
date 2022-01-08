/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  
*/

const p = document.querySelector("#paragraph")

function countNumber() {
  const val = document.querySelector("input").value
  if ((val < 0) | (val > 9999)) {
    p.innerHTML = `Inserisci una cifra compresa tra 0 e 9999`
  } else {
    p.innerHTML = `La cifra ${val} è composta da ${val.length} cifre`
  }
}

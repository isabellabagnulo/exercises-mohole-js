/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.

  Esempi:
    Input: n = 2, m = 3
    Output: FALSE

    Input: n = 2, m = '2'
    Output: FALSE

    Input: n = 2, m = 2
    Output: TRUE

    
  
*/

const p = document.querySelector("#paragraph")

function equality() {
  const a = document.querySelector("#numberA").value
  const b = document.querySelector("#numberB").value
  if (a === b) {
    p.innerHTML = `i numeri ${a} e ${b} sono uguali`
  } else {
    p.innerHTML = `i numeri ${a} e ${b} sono diversi`
  }
}

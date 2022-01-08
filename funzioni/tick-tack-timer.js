/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0

            
  
*/

const p = document.querySelector("#paragraph")

async function countdown() {
  const n = document.querySelector("input").value
  const timer = (ms) => new Promise((res) => setTimeout(res, ms))
  for (let i = parseInt(n); i >= 1; i--) {
    p.innerHTML = `${i - 1}`
    await timer(1000)
  }
}

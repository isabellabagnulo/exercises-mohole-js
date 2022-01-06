/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  
*/

const random = Math.floor(Math.random() * (100 - 1) + 1)

const p = document.querySelector("#paragraph")
const button = document.querySelector("button")
const prandom = document.querySelector("#random")

button.addEventListener("click", () => {
  prandom.innerHTML = random
})

function whoGetCloser() {
  const player1 = document.querySelector("#player1").value
  const player2 = document.querySelector("#player2").value
  if (player1 == random) {
    p.innerHTML = `Player 1 ha indovinato`
  } else if (player2 == random) {
    p.innerHTML = `Player 2 ha indovinato`
  } else {
    const a = Math.abs(random - player1)
    const b = Math.abs(random - player2)
    if (a < b) {
      p.innerHTML = `Nessuno dei due ha indovinato, ma il Player 1 ci è andato più vicino`
    } else if (a > b) {
      p.innerHTML = `Nessuno dei due ha indovinato, ma il Player 2 ci è andato più vicino`
    } else if (a == b) {
      p.innerHTML = `Nessuno dei due ha indovinato, ed entrambi avete raggiunto la stessa vicinanza`
    }
  }
}

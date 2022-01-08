/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  
*/

const p = document.querySelector("#paragraph")
const button = document.querySelector("button")
const prandom = document.querySelector("#random")

function tombola() {
  const bingoFolder = document.querySelector("input").value.split(",")
  const randomNumbers = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * (90 - 1) + 1)
  )
  button.addEventListener("click", () => {
    prandom.innerHTML = randomNumbers
  })

  let point = 0
  for (let i = 0; i <= bingoFolder.length; i++) {
    for (let j = 0; j <= randomNumbers.length; j++) {
      if (bingoFolder[i] == randomNumbers[j]) {
        point = +1
      } else {
        console.log("hai perso")
      }
    }
  }
  p.innerHTML = `i numeri che hai lanciato sono ${bingoFolder}, i numeri estratti dalla tombola sono ${randomNumbers}, quindi hai totalizzanto ${point} punti`
}

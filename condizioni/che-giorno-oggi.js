/*
  Che giorno è oggi?
  Scrivi un programma che dato un numero intero compreso tra 1 a 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì
    2 = martedì
    3 = mercoledì
    ...
    7 = domenica
  Utilizza il costrutto Switch-case e prevedi anche il caso in cui il valore immesso non sia valido
  (nel caso stampare un messaggio di errore a tua scelta).

  Esempi:
    Input: numero = 6
    Output: "Sabato"

    Input: numero = 10
    Output: "Errore! Giorno della settimana non valido!"

  Variante:
  Scrivere una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.

  
*/

// const days = {
//   lunedì: 1,
//   martedì: 2,
//   mercoledì: 3,
//   giovedì: 4,
//   venerdì: 5,
//   sabato: 6,
//   domenica: 7,
// }

const p = document.querySelector("#paragraph")

function today() {
  const day = document.querySelector("input").value
  switch (day) {
    case "1":
      p.innerHTML = `Lunedì`
      break
    case "2":
      p.innerHTML = `Martedì`
      break
    case "3":
      p.innerHTML = `Mercoledì`
      break
    case "4":
      p.innerHTML = `Giovedì`
      break
    case "5":
      p.innerHTML = `Venerdì`
      break
    case "6":
      p.innerHTML = `Sabato`
      break
    case "7":
      p.innerHTML = `Domenica`
      break
    default:
      p.innerHTML = `questo giorno della settima non esiste`
      break
  }
}

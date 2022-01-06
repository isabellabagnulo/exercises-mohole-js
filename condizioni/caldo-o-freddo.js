/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  
*/

// const temperature = [
//   (a = 10),
//   (b = -2),
//   (c = 31),
//   (d = 22),
//   (e = 15),
//   (f = -6),
//   (g = 7),
// ]

const p = document.querySelector("#paragraph")

function whatTemperature() {
  const temperature = document
    .querySelector("input")
    .value.toString()
    .split(",")
  const maxTemperature = Math.max(...temperature)
  const minTemperature = Math.min(...temperature)
  p.innerHTML = `tra queste temperature: ${temperature}, temperatura più calda = ${maxTemperature}, temperatura più fredda = ${minTemperature}`
}

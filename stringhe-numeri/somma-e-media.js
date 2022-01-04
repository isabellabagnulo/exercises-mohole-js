/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  
*/

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
const average = sum / numbers.length

console.log(
  `la somma dei numeri ${numbers} è di ${sum}, mentre la media è di ${average}`
)

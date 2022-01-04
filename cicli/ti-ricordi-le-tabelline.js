/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  
*/

const number = 2

for (let i = 1; i >= 10; i++) {
  const mult = number * i
  console.log(`${number} * ${i} = ${mult}`)
}

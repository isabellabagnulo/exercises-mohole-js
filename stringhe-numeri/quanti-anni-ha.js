/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

*/

const currentYear = 2021
const birthYear = 1997

const age = currentYear - birthYear
const ageUpToHundred = 100 - age

console.log(age)
console.log(ageUpToHundred)
console.log(
  `io ho ${age} anni e mi mancano ${ageUpToHundred} anni per arrivare a 100 anni`
)

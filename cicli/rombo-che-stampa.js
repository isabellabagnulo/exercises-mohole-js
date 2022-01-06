/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  
*/

const numberX = 5

for (let i = 1; i <= numberX - 2; i++) {
  console.log("X".repeat(i * 2 - 1))
}
for (let i = numberX - 3; i >= 1; i--) {
  console.log("X".repeat(i * 2 - 1))
}

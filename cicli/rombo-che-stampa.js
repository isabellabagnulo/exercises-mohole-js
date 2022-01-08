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
const p = document.querySelector("#paragraph")

function rhombus() {
  const draw = []
  const numberX = document.querySelector("input").value

  for (let i = 1; i <= numberX - 2; i++) {
    draw.push("X".repeat(i * 2 - 1))
  }
  for (let i = numberX - 3; i >= 1; i--) {
    draw.push("X".repeat(i * 2 - 1))
  }
  const array = draw.join("\n").replace(/(?:\r\n|\r|\n)/g, "<br>")
  p.innerHTML = array
}

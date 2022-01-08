/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  
*/

const p = document.querySelector("#paragraph")

function calculation() {
  const numberA = document.querySelector("#numbera").value
  const numberB = document.querySelector("#numberb").value
  const operation = document.querySelector("#operation").value
  const a = parseInt(numberA)
  const b = parseInt(numberB)
  const sum = a + b
  const subtraction = a - b
  const multiplication = a * b
  const division = a / b
  const module = Math.round(a) % Math.round(b)
  const power = Math.pow(a, b)
  const average = sum / 2

  switch (operation) {
    case "somma":
      p.innerHTML = `La ${operation} tra ${numberA} e ${numberB} è di ${sum}`
      break
    case "sottrazione":
      p.innerHTML = `La ${operation} tra ${numberA} e ${numberB} è di ${subtraction}`
      break
    case "moltiplicazione":
      p.innerHTML = `La ${operation} tra ${numberA} e ${numberB} è di ${multiplication}`
      break
    case "divisione":
      p.innerHTML = `La ${operation} tra ${numberA} e ${numberB} è di ${division}`
      break
    case "modulo":
      p.innerHTML = `Il ${operation} tra ${numberA} e ${numberB} è di ${module}`
      break
    case "potenza":
      p.innerHTML = `La ${operation} di ${numberA} alla ${numberB} è di ${power}`
      break
    case "media":
      p.innerHTML = `La ${operation} tra ${numberA} e ${numberB} è di ${average}`
      break
    default:
      p.innerHTML = `Questa operazione non sappiamo farla`
      break
  }
}

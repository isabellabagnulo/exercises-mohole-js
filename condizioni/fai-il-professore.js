/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  
*/

const p = document.querySelector("#paragraph")

function voteCalculation() {
  const vote = document.querySelector("input").value
  switch (true) {
    case vote == 30:
      p.innerHTML = `eccellente`
      break
    case 26 < vote && vote <= 29:
      p.innerHTML = `ottimo`
      break
    case 23 < vote && vote <= 26:
      p.innerHTML = `distinto`
      break
    case 20 < vote && vote <= 23:
      p.innerHTML = `buono`
      break
    case 17 < vote && vote <= 20:
      p.innerHTML = `sufficiente`
      break
    case 0 < vote && vote <= 17:
      p.innerHTML = `insufficiente`
      break
    default:
      p.innerHTML = `questo voto non esiste`
      break
  }
}

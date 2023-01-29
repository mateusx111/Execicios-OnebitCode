const perso1 = prompt("Nome do personagem 1 : ")
const atq = prompt(`Poder de ataque: ${perso1}`)

const perso2= prompt("Nome do personagem 2: ")
let vida= prompt(`Quantidade de vida : ${perso2}`)
const def = prompt("Poder de defesa: ")
const escudo = prompt("Possui escudo(Sim/Não)? ")

let danoCausado = 0

if (atq > def && escudo === "Não") {
  danoCausado = atq - def
} else if (atq > def && escudo === "Sim") {
  danoCausado = (atq - def) / 2 
} 

vida -= danoCausado

alert(`${perso1} causou ${danoCausado} de dano em ${perso2}`)

alert(`
  Nome do personagem 1: ${perso1}
  Nível de ataque de ${perso1}: ${atq}
  
  Nome do personagem 2: ${perso2}
  Quantida de vida de ${perso2}: ${vida}
  Nível de defesa de ${perso2}: ${def}
  ${perso2} Possui escudo? ${escudo}

  ${perso1} causou ${danoCausado} de dano em ${perso2}
`)




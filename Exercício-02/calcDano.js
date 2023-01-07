const pers1 = prompt("Nome do personagem 1")
const Atq = prompt("Poder de Ataque de " + pers1)

const pers2 = prompt("Nome do personagem 2")
let quantideVida = prompt("quantidade de pontos de vida de " + pers2)
const Def = prompt("Poder de Defesa de " + pers2)
const shild = prompt("Possui escudo? (Sim/Não)")

let danoCausado = 0

if (Atq > Def && shild === "Não"){
  danoCausado = Atq - Def
} else if (Atq > Def && shild === "Sim"){
  danoCausado = (Atq - Def) / 2
} 

quantideVida -= danoCausado

alert(pers1 + " causou " + danoCausado + " em " + pers2)

alert(
  "Bild do personagem " + pers1 + 
  "\nQuantidade de Ataque: " + Atq +
  "\n\nBild do personagem " + pers2 + 
  "\nQuantidade de Vida: " + quantideVida +
  "\nQuantidade de Defesa: " + Def +
  "\nQuantidade de Escudo: " + shild
  )

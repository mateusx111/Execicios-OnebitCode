console.log("===============================ForEach()")
//////////////////////////////////////////////
console.log("Estrutura de código antes de usar o ForEach()")

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ["mação", "vanana", "laranja", "limão"]

for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista)
}

console.log("Estrutura de código usando o ForEach()")

lista.forEach(exibirElemento)

console.log("Passando uma função anônima no ForEach()")
lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento, 
    indice, 
    array
  })
})

console.log("===============================Map()")
//////////////////////////////////////////////
console.log("O metodo Map() servepara fazer tranasformções no array.Ele cria um novo array baseado em um já existente")

const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]
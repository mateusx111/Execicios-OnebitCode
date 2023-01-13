const calculadora = {}
calculadora.somar = function (a, b) {
  return a + b
}
console.log(calculadora.somar(3, 7))

calculadora.subtrair = function (a, b) {
  return a - b
}
console.log(calculadora.subtrair(3, 7))
calculadora.multiplicar = function (a, b) {
  return a * b
}
console.log(calculadora.multiplicar(3, 7))
console.log("===============================")

//_____________________________________________________
//high order functions

function calcular(a, b, operacao) {
  console.log("realizando um operação.")
  const resultado = operacao(a, b)
  return resultado
}

function somar(x, y) {
  return x + y
}
console.log(calcular(5, 5, somar))

function subtrair(x, y) {
  return x - y
}

console.log(calcular(5, 4, subtrair))

console.log("==================================================ForEach()")
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
//////////////////////////////////////////////////////////////////
console.log("======================================================Map()")

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

console.log("Estrutura de código sem o Map()")
const nomes = []
for (let i = 0; i < personagens.length; i++) {
  nomes.push(personagens[i].nome)
}console.log(nomes)

const raca = []
for (let i = 0; i < personagens.length; i++) {
  raca.push(personagens[i].raca)
}console.log(raca)



console.log("Estrutura de código com o Map()")
const nomesPersonagens = personagens.map(function (personagem) {
  return personagem.nome
})
console.log(nomesPersonagens)

const racasPersonagens = personagens.map(function (personagem){
  return personagem.raca
})
console.log(racasPersonagens)

//////////////////////////////////////////////////////////////////
console.log("===================================================Filter()")


console.log("Estrutura de código SEM o map()")
const orcs =[]
for (let i = 0; i < personagens.length; i++) {
  if(personagens[i].raca === "Orc"){
    orcs.push(personagens[i])
  }
}
console.log(orcs)

const justGuerreiros = []
for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].classe === "Guerreiro") {
    justGuerreiros.push(personagens[i])
  }
}
console.log(justGuerreiros)


console.log("Estrutura de código COM o map()")
const justOrcs = personagens.filter(function(personagem){
  return personagem.raca === "Orc"
})
console.log(justOrcs)

const guerreiros = personagens.filter(function(personagem){
  return personagem.classe === "Guerreiro"
})
console.log(guerreiros)

//////////////////////////////////////////////////////////////////
console.log("===================================================Reduce()")

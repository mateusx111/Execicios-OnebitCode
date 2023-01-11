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

console.log("===============================")
/////////////////////////////////////////////////////
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
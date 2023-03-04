//Funcção com retorno normal
function normalSum(a, b) {
  return a + b;
}; 

console.log(`Soma normal: ${normalSum(2, 2)}`)

//Funcção anônima
const anonymousSum = function(a, b) {
  return a + b;
}; console.log(`Soma anônima: ${anonymousSum(5, 5)}`)

//Função com Arrow Function
const arrowSummaior = (a, b) => {
  return a + b
}; console.log(`soma arrow: ${arrowSummaior(7, 7)}`)

//Arrow function diminuida
const arrowSum = (a, b) => a + b
console.log(`Soma arrow mais curta: ${arrowSum(6, 6)}`)

//Arrow function somente com 1 parâmetro
const double = n => `O dobro de ${n} é ${n * 2}`
const number = 21
console.log(double(number))
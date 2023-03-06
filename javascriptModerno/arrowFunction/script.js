//Função com retorno normal
function normalSum(a, b) {
  return a + b
}; 

console.log(`Soma normal: ${normalSum(2, 2)}`)


//Função anônima ---> sem nome só o nome reservado function 
const anonymousSum = function(a, b) {
  return a + b
}; 

console.log(`Soma anônima: ${anonymousSum(5, 5)}`)


//Função com Arrow Function ---> pulka a palavra reservada function 
const arrowSummaior = (a, b) => {
  return a + b
}; 

console.log(`soma arrow: ${arrowSummaior(7, 7)}`)


//Arrow function diminuida não precisa de RETURN
const arrowSum = (a, b) => a + b

console.log(`Soma arrow mais curta: ${arrowSum(6, 6)}`)


//Arrow function somente com 1 parâmetro
const double = n => `O dobro de ${n} é ${n * 2}`
const number = 21

console.log(double(number))
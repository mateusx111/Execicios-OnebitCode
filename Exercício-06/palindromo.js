const palavra = prompt("Digite uma plavra para saber se ela é um Palíndromo: ")
let palavraIvertida = ""


for (let i = palavra.length - 1; i>=0; i--) { //let i = palavra.length - 1 vai pegar a ultima posição da palavra
  palavraIvertida += palavra[i] //vai atribuir cada letra/posição pra ver se apalavra permanece a mesma
}

if(palavra === palavraIvertida) {
  alert("A palavra é um palíndromo")
} else {
  alert("A palavra não é um palíndromo " + palavra + " !== " + palavraIvertida)
}

// Escreva um programa em javascript que seja capaz de identificar
// se uma palavra é um palíndromo. Um palíndromo é uma palavra que
// lida de trás para frente possui as mesmas letras na mesma ordem.
// O programa deve iniciar pedindo que seja informada uma palavra e
// então deve exibir uma mensagem dizendo se aquela palavra é ou
// não um palíndromo. Caso não seja um palíndromo, o programa
// deve mostrar a palavra lida da esquerda para direita e da
// direita para esquerda.
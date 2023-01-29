const veiculo1 = prompt(`Qual o nome do veículo? `)
const velocidade1 = parseFloat(prompt(`Velocidade ${veiculo1}`))

const veiculo2 = prompt(`Qual o nome do veículo? `)
const velocidade2 = parseFloat(prompt(`Velocidade de ${veiculo2}`))

if ((velocidade1 > velocidade2)) {
  alert(`${veiculo1} é mais rápido`)
  console.log(velocidade1)
  console.log(velocidade2)
} 
else if (velocidade2 > velocidade1){
  alert(`${veiculo2} é mais rápido`)
} 
else {
  alert(`${veiculo1} e ${veiculo2} tem a mesma velocidade`)
  console.log(velocidade2)
}

alert(`
  ${veiculo1}
  ${velocidade1}
  ${veiculo2}
  ${velocidade2}
`)

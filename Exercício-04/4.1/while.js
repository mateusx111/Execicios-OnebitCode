let cidadesVisitadas = ""
let contagem = 0

const nome = prompt(`Informe o nome do turista: `)
let visita = prompt(`${nome} você já visitou alguma cidade?(Sim/Não)`)

while (visita === "Sim") {
  let cidade = prompt(`Qual o nome da cidade?`)
  cidadesVisitadas +=  ` - ${cidade} \n `
  visita = prompt(`${nome} você visitou alguma outra cidade?(Sim/Não)`)
  contagem ++
}

alert(`
  Turista: ${nome}
  Quantidade de cidades visitadas: ${contagem}
  Cidade visitadas: 
  ${cidadesVisitadas} 
`)
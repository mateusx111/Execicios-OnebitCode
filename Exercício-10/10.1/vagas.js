const vagas = []

function listarVagas() {
  const lista = vagas.reduce(function (acc, vaga, indice) {
    acc += indice + ". "
    acc += vaga.nome
    acc += " (" + vaga.candidatos.lenght + "candatos)\n"
    return acc
  }, "")

  alert(lista)
}

function novaVag() {
  const nome = prompt("Qual o nome da vaga?")
  const descricao = prompt("Descrição da vaga:")
  const dataLimite = prompt("Qual a data limite do anuncio da vaga?")

  const confirmacao = consfirm(`
    Confirme os dados da vaga:
    Nome da vaga: ${nome}
    Descrição: ${descricao}
    Data limete: ${dataLimite}
  `)

  if(confirmacao){
    let novaVaga = {
      nome, 
      descricao,
      dataLimite,
      candidatos: []  
    }
    vagas.push(novaVaga)
    alert("Vaga criada")
  }
}

function exibiVaga(){
  const indice = prompt("Índice da vaga a ser consultada: ")
  const vaga = vagas[indice]

  const candidatos = vaga.candidatos.reduce(function(acc, candidato){
    return acc + "\n - " + candidato
  })

  const confirmation = confirm(`
    Deseja inscrever o candidato: ${candidato} na vaga ${indice}?
    Nome: ${vaga.nome} Descrição: ${vaga.descricao}
  `)
}

function exibirMenu() {
  return prompt(`
    1. Listar vagas
    2. Criar uma nova vaga
    3. Inscrever um candidato em uma vaga
    4. Excluir uma vaga
    5. Sair
  `)
}

function executar() {
  let opcao = ""
  do {
    opcao = exibirMenu()

    switch (opcao) {
      case "1":
        listarVagas()
        break;
      case "2":
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        alert("Finalizando programa...")
        break;
      default:
        alert("Opção inválida...")
    }
  } while (opcao !== "5");

}
executar()


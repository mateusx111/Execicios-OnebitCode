let quadroVagas = []

function listarVagas() {
  const lista = quadroVagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal += " (" + vaga.candidatos.lenght + "candatos)\n"
    return textoFinal
  }, "")
  alert(lista)
}

function criarVaga() {
  novaVaga.nome = prompt("Qual o nome da vaga que será registrada?")
  novaVaga.descricao = prompt("Dê uma descrição da vaga")
  novaVaga.dataLimite = prompt("Até quando a vaga estará disponível?(dd/mm/aaa)")

  const confirmation = confirm(
    "Cofirme os dados da vaga\n" +
    "\nNome da vaga: " + novaVaga.nome +
    "\nDescrição da vaga: " + novaVaga.descricao +
    "\nData limite da vaga: " + novaVaga.dataLimite
  )
  if (confirmation) {
    const novaVaga = {
      nome,
      descricao,
      dataLimite,
      candidatos: []
    }
    quadroVagas.push(novaVaga)
    alert("Vaga criada.")
  }
}

function exibirVaga(indice,vaga) {
  let exibir = {
    indice,
    vaga
  }
  exibir.indice = prompt("qual o indice da vaga")
  exibir.vaga = quadroVagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
    return textoFinal + "\n - " + candidato
  }, "")

  alert(
    "Vaga número " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData Limite: " + vaga.dataLimite +
    "\nQuantidade de candidatos: " + vaga.candidatos.lenght +
    "\nCandidatos inscritos: " + candidatosEmTexto
  )
}

function inscreverCandidato(nome, indiceVaga, vaga) {
  let candidato = {
    nome,
    indiceVaga,
    vaga
  }

  candidato.nome = prompt("Informe o nome do candidato: ")
  candidato.indiceVaga = prompt("Informe o indice da vaga: ")
  candidato.vaga = quadroVagas[indiceVaga]

  const confirmacao = confirm(
    "Deseja increver o candidato " + candidato.nome + " na vaga " + candidato.vaga + "?\n" +
    "Nome: " + candidato.vaga.nome + "\nDescrição: " + candidato.vaga.descricao + "\nData Limite: " + candidato.vaga.dataLimite
  )

  if (confirmation) {
    vaga.candidatos.push(candidato)
    alert("Inscrição realizada")
  }
}

function excluirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja excluir:")
  const vaga = quadroVagas[indice]

  const confirmacao = confirm("Tem certeza que deseja excluir a vaga " + indice + "? " +
    "Nome: " + candidato.vaga.nome + "\nDescrição: " + candidato.vaga.descricao + "\nData Limite: " + candidato.vaga.dataLimite
  )

  if (confirmacao) {
    quadroVagas.splice(indice, 1)
    alert("vaga escluida")
  }
}

function exibirMenu() {
  let opcao = prompt(
    "MENU DO SISTEMA DE VAGAS\n" +
    "\n1. Listar vagas disponiveis." +
    "\n2. Criar uma nova vaga." +
    "\n3. Visualizar uma vaga." +
    "\n4. Inscrever um candidato em uma vaga." +
    "\n5. Excluir uma vaga." +
    "\n6. Sair."
  )
  return opcao
}

function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()

    switch (opcao) {
      case "1":
        listarVagas()
        break
      case "2":
        criarVaga()
        break
      case "3":
        exibirVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
        break
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida")
      }
    } while (opcao !== "6")
   } 

executar()


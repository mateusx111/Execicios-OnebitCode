let opcao = ""
let capital = parseFloat(prompt(`Qual o capital inicial disponível?`))

do {
  opcao = prompt(`
    Capital dispponível: ${capital} 

    1. Adicionar dinheiro
    2. Remover Dinheiro
    3. Sair
  `)
  switch (opcao) {
    case "1":
      let add = parseFloat(prompt(`Qual a quantia a ser adicionada?`))
      capital += add
      break;
    case "2":
      let sub = parseFloat(prompt(`Qual a quantia a ser removida?`))
      capital -= sub
      break;
    case "3":
      alert(`Finalizando operação...`)
      break;
  
    default:
      alert(`Opção inválida...`)
  }

} while (opcao !== "3")
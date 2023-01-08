let dinheiro = prompt("Qual a quantidade inicial de dinheiro disponível?")
dinheiro = parseFloat(dinheiro)
let opcao = ""

do {
  opcao = prompt (
    "Dinheiro disponível: " + dinheiro +
    "\n1. Adicionar Valor " +
    "\n2. Remover Valor " +
    "\n3. Sair"    
  )

  switch (opcao) {
    case "1":
      dinheiro += parseFloat(prompt("Qual a quantidade a ser adicionada:"))
      break
    case "2":
      dinheiro -= parseFloat( prompt("Qual a quantidade de dinheiro a ser retirada:") ) 
      break
    case "3":
      alert("Voce encerrou a operação")
      break
    default:
      alert("Entrada inválida!")  
  }

}while (opcao !== "3") {
  
}

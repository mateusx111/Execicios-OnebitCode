let cadastro = "3"
let imovel = []

do{
  cadastro = prompt(
    "Imoveis cadastrados: " + imovel.length + "\n" +
    "\n1. Cadastrar Imóvel" +
    "\n2. Mostrar Imóveis Salvos" +
    "\n3. Sair" 
  )

  switch(cadastro){
     case "1":
      const cadImovel = {}
      
      cadImovel.nomeProprietario = prompt("Nome do proprietário.")
      cadImovel.numQuartos = prompt("Quantidade de Quartos.")
      cadImovel.banheiros = prompt("Quantidade de  banheiros.")
      cadImovel.garagem = prompt("Possui gararem? (Sim/não)")

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
        "\nProprietário: " + cadImovel.nomeProprietario +
        "\nQuartos: " + cadImovel.numQuartos +
        "\nBanheiros: " + cadImovel.banheiros +
        "\nPossui garagem? " + cadImovel.garagem
      )

      if (confirmacao){
        imovel.push(cadImovel)
      }
      alert("Imóvel salvo com sucesso")
      break
      case "2":
        for (let i = 0; i < imovel.length; i++) {
          alert(
            "Imóvel " + (i + 1) +
            "\nProprietário: " + cadImovel[i].nomeProprietario+
            "\nQuartos: " + cadImovel[i].numQuartos +
            "\nBanheiros: " + cadImovel[i].banheiros +
            "\nPossui garagem? " + cadImovel[i].garagem 
          )
        }
        break
      case "3":
        alert("Finalizando...")
        break  
    default:
      alert("Opção inválida")
  }

}while(cadastro !== "3")
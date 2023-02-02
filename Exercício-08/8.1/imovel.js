let menu = ""
let imovel = []

do { 
  menu = prompt(`
    Imóveis cadastrados: ${imovel.length}

    1. Salvar imóvel
    2. Mostrar imóveis
    3. Sair
  `)

  switch (menu) {
    case "1":
      const cadastro = {}
      cadastro.nomeProprietario = prompt("Nome do proprietário:")
      cadastro.quandtidadeQuartos = prompt("Quantidade de quartos:")
      cadastro.quandtidadeBanheiros = prompt("Quantidade de banheiros:")
      cadastro.garagem = prompt("Possui garagem?(sim/Não):")

      const confirmacao = confirm(`
        Salvar esté imóvel?
        Proprietário: ${cadastro.nomeProprietario}
        Quartos: ${cadastro.quandtidadeQuartos}
        Banheiros: ${cadastro.quandtidadeBanheiros}
        Garagem: ${cadastro.garagem}
      `)

      if (confirmacao){
        imovel.push(cadastro)
        alert("Imóvel salvo!")
      } else {
        alert("Voltando ao menu!")
      }

      
      break;
    case "2":
      for(let i = 0; i < imovel.length; i++){
        alert(`
          Imóvel: ${i + 1}
          Proprietário: ${imovel[i].nomeProprietario}
          Quartos: ${imovel[i].quandtidadeQuartos}
          Banheiros: ${imovel[i].quandtidadeBanheiros}
          Garagem: ${imovel[i].garagem}
        `)
      }
      break;
    case "3":
      alert("Finalizando programa...")
      break;
  
    default:
      alert("Opção inválida")
  }
  
} while (menu !=="3");
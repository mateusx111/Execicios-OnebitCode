let menu = ""
let baralho = []

do {


menu = prompt(`
  Cartas no baralho: 
  ${baralho.length}

   1. Adicionar uma carta
   2. Puxar uma carta
   3. Sair
  `)

  switch (menu) {
    case "1":
      let novaCarta = baralho.push(prompt("Qual o nome da carta?"))
      break;
    case "2":
      let cartaPuxada = baralho.shift() 
      alert(`${cartaPuxada} foi puxada do baralho`)
      break;
    
    case "3":
      alert("Finalizando...")
      break;

    default:
      alert("Opção inválida")
  }
} while (menu !== "3");
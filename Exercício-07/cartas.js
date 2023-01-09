const baralho = []
let menu = ""

do {

  menu = prompt(
    "CARTAS NO BARALHO: " + baralho.length + "\n" +
    "\nOpções de jogada:" +
    "\n1. Adicionar um carta" +
    "\n2. Puxar uma carta" +
    "\n3. Sair"
  )

  switch (menu) {
    case "1":
      let NewCard = prompt("qual o nome da carta adicionada ao baralho?")
      baralho.unshift(NewCard)
      break
    case "2":
      let removedCard = baralho.shift()
      if (!removedCard) {
        alert("Não há nenhuma carata no baralho")
      } else { alert("A carta puxada foi" + removedCard) }
      break
    case "3":
      alert("Terminando...")  
      break
    default:
      alert("Opção inválida")  
  }

} while (menu !== "3")
let options = "5"

do {
  options = prompt(
    "Menu com suas preferencias:\n" +
    "\n1. Preferencia um" +
    "\n2. Preferencia dois" +
    "\n3. Preferencia três" +
    "\n4. Preferencia quatro" +
    "\n5. Encerrar"
  )

  switch (options) {
    case "1":
      alert("Você escoheu a preferencia 1")
      break
    case "2":
      alert("Você escoheu a preferencia 2")
      break
    case "3":
      alert("Você escoheu a preferencia 3")
      break
    case "4":
      alert("Você escoheu a preferencia 4")
      break
    case "5":
      alert("Você escolheu encerrar")
      break
    default:
      ("Opção inválida")  
  }
} while (options != "5")
alert("O sistema está sendo encerrado")
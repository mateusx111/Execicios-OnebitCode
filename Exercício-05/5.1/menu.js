let menu = ""

do {
  menu = prompt(`
  Escolha as opções do menu:
    1. 
    2.
    3.
    4.
    5.
  `)

  switch (menu) {
    case "1":
      alert(`Você escolheu a opção número 1`)
      break;
    case "2":
      alert(`Você escolheu a opção número 2`)
      break;
    case "3":
      alert(`Você escolheu a opção número 3`)
      break;
    case "4":
      alert(`Você escolheu a opção número 4`)
      break;
    case "5":
      alert(`Você escolheu a opção número 5`)
      alert(`O programa está finalizando...`)
      break;

    default:
      alert(`Opção não está no menu`)
  }
} while (menu !== "5");
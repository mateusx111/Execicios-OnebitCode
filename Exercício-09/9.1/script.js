function areTriangulo(base, altura) {
  base = prompt("Digite o valor da base")
  altura = prompt("Digite o valor da altura")
  return (base * altura) / 2
}

function areRetangulo(base, altura) {
  return (base * altura)
}

function exibirMenu() {
  return prompt(`
  Selecione o que deseja calcular:
  1- área do triângulo
  2- área do retângulo
  3- área do quadrado
  4- área do trapézio
  5- área do círculo
  6- Sair 
  `)
}

function exercutar() {
  let menu = ""

  do {
    menu = exibirMenu()
    switch (menu) {
      case "1":
        prompt(areTriangulo())
        break;
      case "2":
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        break;

      default:
        alert("Opção inválida")
        break;
    }

  } while (menu !== "6");
}

exercutar()
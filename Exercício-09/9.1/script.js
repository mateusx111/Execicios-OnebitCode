function areTriangulo(base, altura) {
  base = prompt("Digite o valor da base")
  altura = prompt("Digite o valor da altura")
  return alert(`
  Base = ${base} 
  Altura = ${altura} 
  Área = ${(base * altura) / 2}`)
}

function areRetangulo(base, altura) {
  base = prompt("Digite o valor da base")
  altura = prompt("Digite o valor da altura")
  return alert(`
  Base = ${base} 
  Altura = ${altura} 
  Área = ${base * altura}`)
}

function areaQuadrado(lado) {
  lado = prompt("Digite o valor do lado do quadrado")
  return alert(`
    lado = ${lado}
    Área = ${lado * lado}
  `)
}

function areaTrapesio(baseM, baseN, altura) {
  baseM= prompt("Digite o valor da base")
  baseN = prompt("Digite o valor da base")
  altura = prompt("Digite o valor da altura")
  return alert(`
    Base maior = ${baseM}
    Base menor = ${baseN}
    Base altura = ${altura}
    Área = ${(baseM + baseN) * altura/2}
  `)
}

function areaCirculo(raio, pi = 3.14) {
  raio = prompt("Digite o valor do raio")
  return alert(`
    pi = 3.14
    raio = ${raio}
    área = ${pi * raio**2}
  `)
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
        areTriangulo()
        break;
      case "2":
        areRetangulo()
        break;
      case "3":
        areaQuadrado()
        break;
      case "4":
        areaTrapesio()
        break;
      case "5":
        areaCirculo()
        break;
      case "6":
        alert("Finalizando...")
        break;
      default:
        alert("Opção inválida")
    }

  } while (menu !== "6");
}

exercutar()
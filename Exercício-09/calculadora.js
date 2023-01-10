function areTriangulo(base, altura) {
  base = prompt("Informe a area da base")
  altura = prompt("Informe a area da altura")
  return (base * altura / 2)
}

function areRetangulo(base, altura) {
  base = prompt("Informe a area da base")
  altura = prompt("Informe a area da altura")
  return base * altura
}

function areQuadrado(lado) {
  lado = prompt("infome o tamanho do lado")
  return lado * lado
}

function areTrapezio(baseMaior, baseMenor, altura) {
  baseMaior = prompt("Informe a base maior")
  baseMenor = prompt("Informe a base menor")
  altura = prompt("Informe a altura")
  return (baseMaior * baseMenor) * (altura / 2)
}

function areCirlo(raio, pi = 3.14) {
  raio = prompt("Informe o raio do circulo")
  return pi * (raio * raio)
}

function exibirMenu() {
  return prompt(
    "CALCULADORA GEOMÊTRICA\n" +
    "\n1. - Área do triângulo" +
    "\n2. - Área do retângulo" +
    "\n3. - Área do quadrado" +
    "\n4. - Área do trapézio" +
    "\n5. - Área do círculo" +
    "\n6. - Sair"
  )
}

function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()
    switch (opcao) {
      case "1":
        prompt(areTriangulo())
        break
      case "2":
        prompt(areRetangulo())
        break
      case "3":
        prompt(areQuadrado())
        break
      case "4":
        prompt(areTrapezio())
        break
      case "5":
        prompt(areCirlo())
        break
      case "6":
        alert("Finalizando calculadora...")
        break
      default:
        alert("Opção inválida")
    }
  } while (opcao !== "6")
}

executar()
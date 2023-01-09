let fila = []
let menu = ""

do {
  let pacientes = ""
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + " º - " + fila[i] + "\n"
  }

  menu = prompt(
    "Fila de espera: " +
    "\n" + pacientes +
    "\n------------------------------------" +
    "\n\nEscolha um opção de operação: \n" +
    "\n1. Novo paciente" +
    "\n2. Consultar paciente" +
    "\n3. Sair"
  )

  switch (menu) {
    case '1':
      let newPacient = prompt("qual o nome do paciente a se adicionado?")
      fila.push(newPacient)
      break
    case '2':
      let removedPacient = fila.shift()
      if (removedPacient){
        alert(removedPacient + " foi consultado.")
      }else {
        alert("não há pacientes na fila")
      }
      break
    case '3':
      alert("Encerrando operações...")
      break
    default:
      alert("operação inválida")
  }
} while (menu !== "3") {

}
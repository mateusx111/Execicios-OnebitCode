let menu = ""
let fila = []

do {
  let pacientes = ""
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + " º - " + fila[i] + "\n"
  }

  menu = prompt(`
  Fila de espera do consultório:
  ${ pacientes } 

  Processos do sistema:
    1.  Novo paciente.
    2.  Consultar paciente.
    3.  Sair.
  `)

  switch (menu) {
    case "1":
      let novoPaciente = fila.push(prompt("Nome do paciente: "))
      console.log(fila)
      break;
    case "2":
      let pacienteConsultado = fila.shift();
      alert(`${pacienteConsultado} foi consultado(a)`)
      break;
    case "3":
      alert(`Finalizando programa...`)
      break;
    default:
      alert("Opção inválida...")
  }
} while (menu !== "3");
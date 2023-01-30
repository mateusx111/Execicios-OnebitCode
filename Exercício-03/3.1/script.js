let unidade = ""
do {
  const medida = prompt(`Valor em metros a ser convertido: `)

  unidade = prompt(`
  Escolha a unidade para ser convertida:

  -1 milímetro (mm)
  -2 centímetro (cm)
  -3 decímetro (dm)
  -4 decâmetro (dam)
  -5 hectômetro (hm)
  -6 quilômetro (km)
  -7 Sair...
`)

switch (unidade) {
  case "1":
    alert(`Resultado: ${medida}m = ${medida * 10}dm`)
    break
  case "2":
    alert(`Resultado: ${medida}m = ${medida * 100}cm`)
    break
  case "3":
    alert(`Resultado: ${medida}m = ${medida * 100}mm`)
    break
  case "4":
    alert(`Resultado: ${medida}m = ${medida / 10}dam`)
    break
  case "5":
    alert(`Resultado: ${medida}m = ${medida / 100}hm`)
    break
  case "6":
    alert(`Resultado: ${medida}m = ${medida / 1000} km`)
    break
  case "7":
    alert(`finalizando...`)
    break
  default:
    alert(`Opção inválida...`)
}
} while (unidade !== "7");



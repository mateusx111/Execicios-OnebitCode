const valor = prompt("Digite um valor em metros:")
const unidade = prompt(
  "E escolha uma unidade" +
  "\n1. milímetro(dm)" +
  "\n2. centímetro(cm)" +
  "\n3. decímetro(mm)" +
  "\n4. decâmetro(dam)"  +
  "\n5. hectômetro(hm)" +
  "\n6. quilômetro(km)" 
)

switch (unidade) {
  case "1":
    alert("Resultado: "+ valor + "m = " + valor * 10 + "dm");
    break
  case "2":
    alert("Resultado: " + valor + "m = " + valor * 100 + "cm");
    break
  case "3":
    alert("Resultado: " + valor + "m = " + valor * 100 + "mm");
    break
  case "4":
    alert("Resultado: " + valor + "m = " + valor / 10 + "dam");
    break
  case "5":
    alert("Resultado: " + valor + "m = " + valor / 100 + "hm");
    break
  case "6":
    alert("Resultado: " + valor + "m = " + valor / 1000 + "km");
    break
  default:
    unidade !== unidade
    alert("Opção inválida")
}

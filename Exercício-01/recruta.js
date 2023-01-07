let cadastro = "Insira os dados do recruta:"
console.log(cadastro)

let nome = window.prompt("Insira o primeiro nome")
console.log(nome)

let sobreNome = window.prompt("Insira o sobrenome")
console.log(sobreNome)

let areaEstudo = window.prompt("Area de estudo")
console.log(areaEstudo)

let nascimento 
nascimento = window.prompt("Ano de nascimento")
console.log(nascimento)

alert(
  "O nome do recruta é " +nome + sobreNome + 
  " \nestudante de "+ areaEstudo +
  " \nnacido no ano de " + nascimento +
  " \ncom idade: " + (2023 - nascimento)
)


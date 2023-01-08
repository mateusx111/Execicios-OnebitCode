let num = prompt("Digite um número para saber sua tabuada:")

let tabuada = ''

for (let i = 1; i <= 20; i++) {
  tabuada += + num +" X " + i + " = " + num * i + "\n" 
  alert("Tabuada de: " + num + "\n" + tabuada)
}

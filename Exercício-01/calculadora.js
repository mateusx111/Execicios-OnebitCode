let entrada1 = prompt("Digite o primeiro valor: ");
let entrada2 = prompt("Digite o segundo valor: ");

let a = parseFloat(entrada1);
let b = parseFloat(entrada2);  

let soma = a + b;
console.log(soma);

let sub = a - b;
console.log(sub);

let mult = a * b;
console.log(mult);

let div = a / b;
console.log(div);

let resultado = soma + sub + mult + div;
console.log("O resultado é igual a", resultado);
alert(
  "O valores obtidos são:\n" +
  "\nSoma: " + soma +
  "\nsubtração: " + sub +
  "\ndivisão: " + div +
  "\nmultiplicação: " + mult +
  "\n\nO resultado é igual a: " + resultado

);

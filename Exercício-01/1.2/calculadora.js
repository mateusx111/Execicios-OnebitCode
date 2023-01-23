const sum = (a, b) => {
  a = parseFloat(prompt(`Para somar digite o valor de A:`))
  b = parseFloat(prompt(`Para somar digite o valor de B:`))
  return alert(`Resultado da soma ${a} + ${b} = ${a + b}`);  
};

const sub = (a, b) => {
  a = parseFloat(prompt(`Para subtrair digite o valor de A:`))
  b = parseFloat(prompt(`Para subtrair digite o valor de B:`))
  return alert(`Resultado da subtração ${a} - ${b} = ${a - b}`)
}

const mult = (a, b) => {
  a = parseFloat(prompt(`Para multiplicar digite o valor de A:`))
  b = parseFloat(prompt(`Para multiplicar digite o valor de B:`))
  return alert(`Resultado da multiplicação ${a} X ${b} = ${a * b}`)
}

const div = (a, b) => {
  a = parseFloat(prompt(`Para dividir digite o valor de A:`))
  b = parseFloat(prompt(`Para dividir digite o valor de B:`))
  return alert(`Resultado da divisão ${a} / ${b} = ${a / b}`)
}

sum()
sub()
mult()
div()



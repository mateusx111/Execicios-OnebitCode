let num = prompt(`informe o numero a ser calculado: `)
let mult = 0
let result = ""

for(let i = 1; i <= 20; i++){
  mult = num * i
  result += ` - ${i} X ${num} = ${mult}\n`
}

alert(`
  Tabuada || multipos de: ${num}
  ${result}
`)


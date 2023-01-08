const tName = prompt("Qual o nome do turista?")
let cidadesVisitadas = ''
let contagem = 0

let visit = prompt(tName + " já visitou alguma cidade? (Sim/Não)") 

while ( visit === "Sim"){
  let cidade = prompt("Qual o nome da Cidade que você visitou?")
  cidadesVisitadas += "- " + cidade + "\n"  
  contagem++
  visit = prompt("Voce visitou alguma outra cidade? (Sim/Não)")
  if ( visit ==="Não"){
    break
  }
}
alert(
  tName + " visitou " + contagem + " cidades, sendo elas: \n" + 
  cidadesVisitadas
)
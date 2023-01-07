const car1 = prompt("Modelo do veiculo 1: ");
const velcar1 = prompt("velocidade: ");

const car2 = prompt("Modelo do veiculo 2: ")
const velcar2 = prompt("velocidade: ");

if ((velcar1 > velcar2)){
  alert("A Ford sempre Reina! Pois é mais rápida");
} else if (velcar1 == velcar2){
  alert("São as duas melhores marcas de carro!")
} else {
  alert("A Chev de vez em quado ganha! Pois é mais rápida");
}

alert(
  "Modelo: " + car1 +
  "\nVelocidade: " + velcar1 +
  "\n\nModelo: " + car2 +
  "\nVelocidade: " + velcar2
)
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])


//Clonando objetos 
const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({ towns, townsCopy })


// Clonandoi objetos com SpreadOperator
//townsClone é um outro array e não uma referência
const townsClone = [...towns]
townsClone.push('Aldebaran')
console.log({ towns, townsCopy, townsClone })

const townsObj = { ...towns }
const townsObjClone = { ...townsObj }

townsObjClone.test = 'Test'

console.log({ townsObj, townsObjClone })
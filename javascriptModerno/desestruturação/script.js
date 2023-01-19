const person = {
  name: 'John',
  job: 'Farmer',
  parents: ["Anakin", "Padme"]
}

//passar entre chaves as propriesdades que quero desestruturar
const{ name, job, parents } = person
console.log(name, job, parents)

const [father, mother] = parents
console.log(father, mother)

//FUNÇÃO COM DESESTRUTURAÇÃO
function createUser({name, job, parents}) {
  const id = Math.floor(Math.random() * 9999) //floor => aredonda o número para baixo
  return {
    id,
    name,
    job,
    parents
  }
}

const luke = createUser(person)

console.log(luke)

//const name =person.name

//FUNÇÃO SEM DESESTRUTURAÇÃO
// function createUser({person}) {
//   const id = Math.floor(Math.random() * 9999)
//   return {
//     id,
//     name: person.name,
//     job: person.job,
//     parents: person.parents
//   }
//}

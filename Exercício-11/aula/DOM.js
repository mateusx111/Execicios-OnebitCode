//Obtendo Elementos HTML do DOM
// function show() {
//   const contactList = document.getElementById('contact-list')
//   console.log(contactList)

//   const listElements = document.getElementsByTagName('li')
//   console.log(listElements)

//   const contactInput = document.getElementsByClassName('contact-input')
//   console.log(contactInput)

//   const contact1 = document.getElementsByName('contact1')
//   console.log(contact1)
//   const contact2 = document.getElementsByName('contact2')
//   console.log(contact2)
//   const contact3 = document.getElementsByName('contact3')
//   console.log(contact3)

//   const contacts = document.querySelectorAll('#contact-list > li > label')
//   console.log(contacts)

//   const firstContact = document.querySelector('#contact-list > li > label')
// }

//Criando Novos Elementos no DOM

function addInput() {
  const ul = document.getElementById('inputs')

  const newLi = document.createElement('li')
  newLi.className = 'list-item'
  newLi.innerText = 'Novo input: '

  const newInput = document.createElement('input')
  newInput.type = 'text'
  newInput.name = 'input'

  newLi.appendChild(newInput)
  ul.appendChild(newLi)
}

//Praticando a manipulação do DOM

function addContact() {
  const contactSection = document.getElementById('contact-list1')

  const h3 = document.createElement('h3')
  h3.innerText = "Contato"

  const ul = document.createElement('ul')

  const nameLi = document.createElement('li')
  nameLi.innerText = "Nome: "
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))

  const phoneLi = document.createElement('li')
  phoneLi.innerText = "Telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))


  const addressLi = document.createElement('li')
  addressLi.innerHTML = '<label for="address">Endereço: </label>'
  const addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressInput.id = 'adress'
  addressLi.appendChild(addressInput)
  ul.appendChild(addressLi)
  ul.appendChild(document.createElement('br'))


  contactSection.append(h3, ul)

}

function removeContact() {
  const contactSection = document.getElementById('contact-list1')
  
  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  contactSection.removeChild(titles[titles.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])

}
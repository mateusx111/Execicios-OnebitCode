//(e) de event sempre fica disponível quando trabalhamos com eventListner
function register(e) {
  console.log(e) 
  //variável que recebe currentTarget.parentNode sendo ele o <section>
  const sectionElement = e.currentTarget.parentNode

  //trabalhando com o addEventListener para referenciar o elemento
  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!")
  } else {
    alert("As senhas não conferem")
  }
}

//removendo o evento do button 
function removeEvent() {
  //removeEventListener('evento a ser removido', função associada ao evento)
  button.removeEventListener('click', register)
  alert("Event Removed")
}

const button = document.getElementById("register-button")
button.addEventListener('click', register)
//addEventListener('evento', função callback)

button.addEventListener('mouseover', function (e) {
console.log(e)
})

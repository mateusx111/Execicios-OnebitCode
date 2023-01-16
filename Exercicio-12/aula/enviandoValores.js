
// O parâmetro element é a section no HTML
function register(element) {
  const username = element.children.username.value
  //userName= section.label.id("useName").value[retronando um array com os valores]
  const password = element.children.password.value
  const passwordConfirmation = element.children.passwordConfirmation.value

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!")
    console.log(username, password, passwordConfirmation)
  } else {
    alert("As senhas não conferem")
  }
  
}

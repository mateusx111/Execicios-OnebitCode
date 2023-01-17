function useLightTheme() {
// Manipulando estilos diretamente pela propriedade style
  document.body.style.color = '#1f2f3a'
  document.body.style.backgroundColor = '#f1f5f9'
}

function useDarkTheme() {
  document.body.style.color = '#f1f5f9'
  document.body.style.backgroundColor = '#1f2f3a'
}

// Manipulando estilos através das classes utilizadas pelo CSS
function switchTheme() {
  //toggle adiciona ou remove a classe dependendo do cenário
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
}

// Adicionando os eventos diretamento nos botões
document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)
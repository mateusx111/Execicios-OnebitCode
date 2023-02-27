const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
  input.value = 'olá, mundo'

  console.log(input.value) // valor em tempo real
  console.log(input.getAttribute('value')) //getAttribute mostra o valor predefinido do atributo
})

document.getElementById('type').addEventListener('click', function () {
  input.type = input.type !== 'radio' ? 'radio' :  'text'
  // input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function () {
  input.placeholder = 'Digite algo...'
})

document.getElementById('disabled').addEventListener('click', function () {
  input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function () {
  const data = input.dataset.something
  console.log("O valor do atributio data-something é: " + data)
})


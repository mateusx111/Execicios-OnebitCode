// SessionStorage
document.getElementById('sessionBtn').addEventListener('click', () => {
  const input = document.getElementById('session')
  sessionStorage.setItem('info', input.value)
  input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', () => {
  const info = sessionStorage.getItem('info')
  alert(`A informação Salva é: ${info}`)
})




// LocalStorage
document.getElementById('localBtn').addEventListener('click', () => {
  const input = document.getElementById('local')
  localStorage.setItem('info', input.value)
  input.value = ''
})

document.getElementById('readLocal').addEventListener('click', () => {
  const info = localStorage.getItem('info')
  alert(`A informação salva é: ${info}`)
})




// Cookies
document.getElementById('cookieBtn').addEventListener('click', () => {
  const input = document.getElementById('cookie')
  //cookieName=value; expires=UTCStringDate; path=/;
  const cookie = 'info=' + input.value + ';'
  const espiration =  'expires=' + new Date(2023,3,3) + ';'
  const path = 'path=/;'
  document.cookie = cookie + espiration + path
  input.value = ''
})

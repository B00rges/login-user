const submitUserName = document.querySelector('form')
const inputUserName = document.querySelector('#username')

const paragraphInputUserName = document.createElement('p')
const paragraphSubmitUserName = document.createElement('p')

const regex = value => /^[a-zA-Z]{6}$/.test(value)

paragraphSubmitUserName.setAttribute('username-help','username-success')

inputUserName.addEventListener('input', event => {
  const inputUserName = regex(event.target.value)

  const paragraphExist = document.querySelector('[username-help="username-success"]')

  if(paragraphExist) {
    paragraphSubmitUserName.remove()
  }

  if(!inputUserName) {
    paragraphInputUserName.textContent = `O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas`
    paragraphInputUserName.setAttribute('class','username-help-feedback')
    event.target.insertAdjacentElement('afterend', paragraphInputUserName)
    return
  }
  paragraphInputUserName.textContent = 'Username válido =)'
  paragraphInputUserName.setAttribute('class','username-success-feedback')
  event.target.insertAdjacentElement('afterend', paragraphInputUserName)
})


submitUserName.addEventListener('submit', event => {
  event.preventDefault()

  const submitUserName = regex(inputUserName.value)

  if(!submitUserName) {
    paragraphSubmitUserName.textContent = 'Por favor, insira um username válido'
    paragraphSubmitUserName.setAttribute('class','submit-help-feedback')
    event.target.insertAdjacentElement('afterend', paragraphSubmitUserName)
     return
  }
  paragraphSubmitUserName.textContent = 'Dados enviados =)'
  paragraphSubmitUserName.setAttribute('class','submit-success-feedback')
  event.target.insertAdjacentElement('afterend', paragraphSubmitUserName)
})


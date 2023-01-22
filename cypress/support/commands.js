import AuthPage from '../pages/auth.page'

Cypress.Commands.add('login', (username, password) => {
  AuthPage.open()
  AuthPage.logIn(username, password)
})

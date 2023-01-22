import {AuthPage} from '../pages'

Cypress.Commands.add('login', (username, password) => {
  AuthPage.open()
  AuthPage.logIn(username, password)
})

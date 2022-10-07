import AuthPage from '../pages/auth.page'
import user from '../fixtures/user.json'
import error from '../fixtures/error.json'

describe('Authentication', () => {
  beforeEach(() => {
    AuthPage.open()
  })

  it('With existing credentials', () => {
    AuthPage.logIn(user.username, user.password)
    cy.location('pathname')
      .should('include', 'inventory')
  })

  it('With non-existing credentials', () => {
    AuthPage.logIn('foo', 'bar')
    AuthPage.containerError
      .should('have.text', error.credentials)
  })
})

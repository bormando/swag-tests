import {AuthPage, ProductsPage} from '../pages'
import user from '../fixtures/user.json'
import error from '../fixtures/error.json'

describe('Authentication', () => {
  beforeEach(() => {
    AuthPage.open()
  })

  it('With existing credentials', () => {
    AuthPage.logIn(user.username, user.password)
    ProductsPage.path
      .should('eq', '/inventory.html')
  })

  it('With non-existing credentials', () => {
    AuthPage.logIn('foo', 'bar')
    AuthPage.containerError
      .should('have.text', error.credentials)
  })
})

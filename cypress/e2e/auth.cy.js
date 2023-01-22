import AuthPage from '../pages/auth.page'
import ProductsPage from '../pages/products.page'
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

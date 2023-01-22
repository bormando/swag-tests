import user from '../fixtures/user.json'
import ProductsPage from '../pages/products.page'
import CartPage from '../pages/cart.page'

describe('Items', () => {
  beforeEach(() => {
    cy.login(user.username, user.password)
  })

  it('Navigate to Cart from the navbar', () => {
    ProductsPage.navbar.cart.click()
    CartPage.path
      .should('eq', '/cart.html')
  })
})

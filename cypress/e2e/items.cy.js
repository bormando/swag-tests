import user from '../fixtures/user.json'
import {ProductsPage, CartPage} from '../pages'

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

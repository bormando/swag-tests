import Page from './page'
import Navbar from '../elements/navbar'

class CartPage extends Page {
  navbar = Navbar

  open() {
    return super.open('/cart.html')
  }
}

export default new CartPage()

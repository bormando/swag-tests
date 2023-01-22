import Page from './page'
import Navbar from '../elements/navbar'

class ProductsPage extends Page {
  navbar = Navbar

  open() {
    return super.open('/inventory.html')
  }
}

export default new ProductsPage()

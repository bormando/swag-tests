import Page from './page'
import Navbar from '../elements/navbar'

export const ProductsPage = new class extends Page {
  navbar = Navbar

  open() {
    return super.open('/inventory.html')
  }
}

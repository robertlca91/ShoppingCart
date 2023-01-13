import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/ShoppingCartContext'

export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext)

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)

  const styles = {
    listStyle: 'none',
    textDecoration: 'none',
  }
  return (
    <nav className='navbar-content'>
      <Link to={'/'} style={styles}>
        <h2>Store</h2>
      </Link>
      <ul className='nav-list'>
        <Link to={'/cart'} style={styles}>
          <li>
            Cart items: <span className='cart-count'>{quantity}</span>
          </li>
        </Link>
      </ul>
    </nav>
  )
}

import {GrCart} from 'react-icons/gr'
import './index.css'

const Header = ({cartItems}) => {
  const getCartItemsCount = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const renderCartIcon = () => (
    <div className="cart-icon-container">
      <GrCart
        width="35"
        height="35"
        className="cart-icon"
        viewBox="0 0 16 16"
      />
      <div className="cart-count-badge d-flex justify-content-center align-items-center">
        <p className="m-0  cart-count">{getCartItemsCount()}</p>
      </div>
    </div>
  )

  return (
    <header className="p-4 d-flex flex-row align-items-center nav-header">
      <h1 className="m-0 logo-heading">UNI Resto Cafe</h1>
      <div className="d-flex flex-row align-items-center ms-auto">
        <p className="d-none mt-0 mb-0 mr-0 d-sm-block my-orders-text">
          My Orders
        </p>
        {renderCartIcon()}
      </div>
    </header>
  )
}

export default Header

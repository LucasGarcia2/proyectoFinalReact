import cart from './assets/cart.svg';
import React, { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget">
      <img className="CartImg" src={cart} alt="cart-widget" />
      {totalQuantity > 0 && (
        <div className="CartQuantity">{totalQuantity}</div>
      )}
    </Link>
  );
};

export default CartWidget;

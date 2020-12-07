import React, { useContext } from 'react';
import Product from '../Product';
import { Link } from 'react-router-dom';

import ProductContext from '../../context/productContext';

function Cart() {
  const productContext = useContext(ProductContext);

  const { cart, removeProduct, clearCart } = productContext;

  const getTotalSum = () => {
    return cart.map((prod) => prod.price).reduce((acc, curr) => acc + curr);
  };

  return (
    <div className="centerClass">
      <h1>Carrinho de compras</h1>
      {cart.length > 0 && <h3>Total: {getTotalSum()}€</h3>}
      {cart.length > 0 && (
        <div>
          <button>
            <Link to="/checkout">Finalizar compra</Link>
          </button>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
      <div className="products">
        {cart.map((product, index) => (
          <Product
            key={index}
            product={product}
            removeProduct={removeProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;

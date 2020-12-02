import React, { useContext } from 'react';
import Product from '../Product';

import ProductContext from '../../context/productContext';

function Cart() {
  const productContext = useContext(ProductContext);

  const { cart, removeProduct, clearCart } = productContext;

  const getTotalSum = () => {
    return cart.map((prod) => prod.price).reduce((acc, curr) => acc + curr);
  };

  return (
    <>
      <h1>Carrinho de compras</h1>
      {cart.length > 0 && <div>Total: {getTotalSum()}€</div>}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      <div className="products">
        {cart.map((product, index) => (
          <Product
            key={index}
            product={product}
            removeProduct={removeProduct}
          />
        ))}
      </div>
    </>
  );
}

export default Cart;

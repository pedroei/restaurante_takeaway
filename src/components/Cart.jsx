import React, { useContext } from 'react';

import ProductContext from '../context/productContext';

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
          <div className="product" key={index}>
            <h3>{product.name}</h3>
            <h4>{product.price}€</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeProduct(product)}>Remover</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;

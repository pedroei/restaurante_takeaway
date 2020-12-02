import React from 'react';

function Cart({ cart, setCart }) {
  const removeProduct = (productToRemove) => {
    setCart(cart.filter((prod) => prod !== productToRemove));
  };

  const getTotalSum = () => {
    return cart.map((prod) => prod.price).reduce((acc, curr) => acc + curr);
  };

  const clearCart = () => {
    setCart([]);
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

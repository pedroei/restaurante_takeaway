import React from 'react';

const Product = ({ product, addToCart, removeProduct }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <h4>{product.price}€</h4>
      <img src={product.image} alt={product.name} />
      {addToCart && (
        <button onClick={() => addToCart(product)}>
          Adicionar ao carrinho
        </button>
      )}
      {removeProduct && (
        <button onClick={() => removeProduct(product)}>Remover</button>
      )}
    </div>
  );
};

export default Product;

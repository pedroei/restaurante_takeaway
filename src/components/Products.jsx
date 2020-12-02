import React, { useContext } from 'react';

import ProductContext from '../context/productContext';

function Products() {
  const productContext = useContext(ProductContext);

  const { products, addToCart } = productContext;

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <h3>{product.name}</h3>
            <h4>{product.price}€</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;

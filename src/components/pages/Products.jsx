import React, { useContext } from 'react';
import Product from '../Product';

import ProductContext from '../../context/productContext';

function Products() {
  const productContext = useContext(ProductContext);

  const { products, addToCart } = productContext;

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, index) => (
          <Product key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

export default Products;

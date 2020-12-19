import React, { useContext } from 'react';
import Product from '../Product';

import ProductContext from '../../context/productContext';

function Products() {
  const productContext = useContext(ProductContext);

  const { products, addToCart } = productContext;

  return (
    <div className="container mb-2">
      <h1 className="display-3 mb-5 mt-3">Products</h1>
      <div className="row">
        {products.map((product, index) => (
          <Product key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;

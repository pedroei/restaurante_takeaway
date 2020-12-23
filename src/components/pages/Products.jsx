import React, { useContext, useEffect } from 'react';
import Product from '../Product';
import Spinner from '../layout/Spinner';

import ProductContext from '../../context/productContext';

function Products() {
  const productContext = useContext(ProductContext);

  const { products, addToCart, getProducts, getImage } = productContext;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container mb-2">
      <h1 className="display-3 mb-5 mt-3">Produtos</h1>
      <div className="row">
        {products !== null && products.length > 0 ? (
          products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCart={addToCart}
              getImage={getImage}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default Products;

import React, { useContext, useEffect } from 'react';
import Product from '../Product';
import Spinner from '../layout/Spinner';

import ProductContext from '../../context/productContext';

function Products() {
  const productContext = useContext(ProductContext);

  const {
    products,
    addToCart,
    getProducts,
    finalMessage,
    clearMessage,
    finished
  } = productContext;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  // setTimeout(() => {
  //   clearMessage();
  // }, 3000);

  if(finished) return <Spinner/>

  return (
    <div className="container mb-2">
      {finalMessage && (
        <div
          className="alert alert-success alert-dismissible fade show mt-3"
          role="alert"
        >
          <h4 className="alert-heading">Sucesso!</h4>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <p>{finalMessage}</p>
        </div>
      )}
      <h1 className="display-3 mb-5 mt-3">Produtos</h1>
      <div className="row">
        {products !== null && products.length > 0 ? (
          products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default Products;

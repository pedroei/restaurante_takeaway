import React from 'react';

const Product = ({ product, addToCart, removeProduct }) => {
  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img
          className="card-img-top img-fluid img-thumbnail"
          src={product.image}
          alt={product.name}
        />
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <h4 className="card-text">{product.price}€</h4>
        </div>
        <div className="card-footer bg-white">
          {addToCart && (
            <button
              className="btn btn-success"
              onClick={() => addToCart(product)}
            >
              Adicionar ao carrinho
            </button>
          )}
          {removeProduct && (
            <button
              className="btn btn-danger"
              onClick={() => removeProduct(product)}
            >
              Remover
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

import React, { useContext } from 'react';
import Product from '../Product';
import { Link } from 'react-router-dom';

import ProductContext from '../../context/productContext';

function Cart() {
  const productContext = useContext(ProductContext);

  const { cart, total, removeProduct, clearCart } = productContext;

  return (
    <div className="container mb-2">
      <h1 className="display-3 mb-2 mt-3">Carrinho de compras</h1>
      {cart.length > 0 && (
        <h3 className="display-5">
          Total: <span className="text-success">{total}€</span>
        </h3>
      )}
      {cart.length > 0 && (
        <div className="container my-3">
          <div className="row">
            <div className="col text-center">
              <button
                className="btn btn-warning mr-5 text-white"
                onClick={clearCart}
              >
                Limpar carrinho
              </button>

              <Link className="btn btn-success" to="/checkout">
                Finalizar compra
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="row">
        {cart.map((product, index) => (
          <Product
            key={index}
            product={product}
            removeProduct={removeProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;

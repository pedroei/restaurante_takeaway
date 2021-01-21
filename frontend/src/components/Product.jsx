import { useState } from 'react';
import { selectImage } from '../helpers/helpers';

const Product = ({ product, addToCart, removeProduct }) => {
  const [localStock, setlocalStock] = useState(product.stock);
  const [outOfStock, setoutOfStock] = useState(false);

  const handleAdd = () => {
    if (localStock !== 0) {
      setlocalStock(localStock - 1);
      addToCart(product);
    } else {
      setoutOfStock(true);
    }
  };

  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img
          /*style={{ height: '60%' }}*/
          className="card-img-top img-fluid img-thumbnail"
          src={selectImage(product.name)}
          alt={product.name}
        />
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <h4 className="card-text">{product.price}€</h4>
          <p className="card-text">Stock: {localStock}</p>
        </div>
        <div className="card-footer bg-white">
          {addToCart && (
            <button className="btn btn-success" onClick={handleAdd}>
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

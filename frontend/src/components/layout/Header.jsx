import { useContext } from 'react';
import { Link } from 'react-router-dom';

import ProductContext from '../../context/productContext';

function Header() {
  const productContext = useContext(ProductContext);

  const { cart } = productContext;

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link className="btn btn-outline-light" to="/cart">
          Carrinho de compras ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Header;

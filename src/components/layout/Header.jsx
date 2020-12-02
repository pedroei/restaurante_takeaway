import { useContext } from 'react';
import { Link } from 'react-router-dom';

import ProductContext from '../../context/productContext';

function Header() {
  const productContext = useContext(ProductContext);

  const { cart } = productContext;

  return (
    <header>
      <Link className="btnLink" to="/cart">
        Carrinho de compras({cart.length})
      </Link>
      <Link className="btnLink" to="/">
        Produtos
      </Link>
    </header>
  );
}

export default Header;

import { useState } from 'react';
import './App.css';
import productsList from './assets/products.json';
import Products from './components/Products';
import Cart from './components/Cart';

const PRODUCTS_PAGE = 'products';
const CART_PAGE = 'cart';

function App() {
  const [products] = useState(productsList);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PRODUCTS_PAGE);

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const changePage = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => changePage(CART_PAGE)}>
          Carrinho de compras({cart.length})
        </button>
        <button onClick={() => changePage(PRODUCTS_PAGE)}>Produtos</button>
      </header>
      {page === PRODUCTS_PAGE && (
        <Products products={products} addToCart={addToCart} />
      )}
      {page === CART_PAGE && <Cart cart={cart} setCart={setCart} />}
    </div>
  );
}

export default App;

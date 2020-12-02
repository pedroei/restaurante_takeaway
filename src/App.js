import { useState } from 'react';
import './App.css';
import productsList from './products.json';

const PRODUCTS_PAGE = 'products';
const CART_PAGE = 'cart';

function App() {
  const [products] = useState(productsList);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PRODUCTS_PAGE);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeProduct = (product) => {};

  const productsPage = () => (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h3>{product.name}</h3>
            <h4>{product.price}€</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </>
  );

  const cartPage = () => (
    <>
      <h1>Carrinho de compras</h1>
      <div className="products">
        {cart.map((product) => (
          <div className="product" key={product.id}>
            <h3>{product.name}</h3>
            <h4>{product.price}€</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeProduct(product)}>Remover</button>
          </div>
        ))}
      </div>
    </>
  );

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
      {page === PRODUCTS_PAGE && productsPage()}
      {page === CART_PAGE && cartPage()}
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header';
import Products from './components/pages/Products';
import Cart from './components/pages/Cart';

import ProductState from './context/ProductState';

function App() {
  return (
    <ProductState>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </ProductState>
  );
}

export default App;

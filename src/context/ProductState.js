import { useReducer } from 'react';
import axios from 'axios';
import ProductContext from './productContext';
import productReducer from './productReducer';

//import productsList from '../assets/products.json';

const ProductState = (props) => {
  const initialState = {
    products: null,
    cart: [],
    total: 0,
    error: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  //Get products
  const getProducts = async () => {
    try {
      const res = await axios.get('/api/produtos');

      dispatch({
        type: 'GET_PRODUCTS',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Add to cart
  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
    totalToPay();
  };

  //Remove from cart
  const removeProduct = (productToRemove) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: productToRemove,
    });
    totalToPay();
  };

  //Clear cart
  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    });
  };

  //Total to pay
  const totalToPay = () => {
    dispatch({
      type: 'TOTAL_PAY',
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        total: state.total,
        error: state.error,
        getProducts,
        addToCart,
        removeProduct,
        clearCart,
        totalToPay,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

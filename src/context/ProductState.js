import { useReducer } from 'react';
//import axios from "axios";
import ProductContext from './productContext';
import productReducer from './productReducer';

import productsList from '../assets/products.json';

const ProductState = (props) => {
  const initialState = {
    products: productsList,
    cart: [],
    total: 0,
    error: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

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
    totalToPay();
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

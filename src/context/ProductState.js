import { useReducer } from 'react';
//import axios from "axios";
import ProductContext from './productContext';
import productReducer from './productReducer';

import productsList from '../assets/products.json';

const ProductState = (props) => {
  const initialState = {
    products: productsList,
    cart: [],
    error: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  //Add to cart
  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  };

  //Remove from cart
  const removeProduct = (productToRemove) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: productToRemove,
    });
  };

  //Clear cart
  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        error: state.error,
        addToCart,
        removeProduct,
        clearCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

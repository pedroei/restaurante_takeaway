import { useReducer } from 'react';
import axios from 'axios';
import ProductContext from './productContext';
import productReducer from './productReducer';

const ProductState = (props) => {
  const initialState = {
    products: null,
    cart: [],
    total: 0,
    fatura: null,
    error: null,
    finalMessage: '',
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

  //Build fatura
  const buildFatura = (fatura) => {
    dispatch({
      type: 'SET_FATURA',
      payload: fatura,
    });
    addProductsToFatura();
  };

  //Change Payment
  const changePaymentMethod = (payment) => {
    dispatch({
      type: 'CHANGE_PAYMENT',
      payload: payment,
    });
  };

  //Change Payment
  const addProductsToFatura = () => {
    dispatch({
      type: 'ADD_PRODS_FATURA',
    });
  };

  //Create case in Bizagi
  const postFatura = async (fatura) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      await axios.post('/api/webOrder', fatura, config);

      dispatch({ type: 'CLEAR_ALL' });
    } catch (err) {
      console.log(err);
    }
  };

  // Clear message
  const clearMessage = () => {
    dispatch({ type: 'CLEAR_MESSAGE' });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        total: state.total,
        fatura: state.fatura,
        error: state.error,
        finalMessage: state.finalMessage,
        getProducts,
        addToCart,
        removeProduct,
        clearCart,
        totalToPay,
        buildFatura,
        changePaymentMethod,
        addProductsToFatura,
        postFatura,
        clearMessage,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

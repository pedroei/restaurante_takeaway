const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((prod) => prod !== action.payload),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'TOTAL_PAY':
      return {
        ...state,
        total: state.cart
          .map((prod) => prod.price)
          .reduce((acc, curr) => acc + curr),
      };
    case 'SET_FATURA':
      return {
        ...state,
        fatura: action.payload,
      };
    case 'CHANGE_PAYMENT':
      return {
        ...state,
        fatura: { ...state.fatura, metodoPagamento: action.payload },
      };
    default:
      return state;
  }
};
export default reducer;

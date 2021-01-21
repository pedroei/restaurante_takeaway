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
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
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
        total:
          state.cart.length === 0
            ? 0
            : state.cart
                .map((prod) => prod.price)
                .reduce((acc, curr) => acc + curr)
                .toFixed(2), // fix the number to 2 cases after 0.
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

    case 'ADD_PRODS_FATURA':
      return {
        ...state,
        fatura: {
          ...state.fatura,
          products: state.cart
            .map((p) => {
              return {
                id: p.id,
                unitPrice: p.price,
                quantity: p.quantity,
              };
            })
            .reduce(function (accumulator, cur) {
              var id = cur.id,
                found = accumulator.find(function (elem) {
                  return elem.id === id;
                });
              if (found) {
                found.quantity++;
                //found.price += cur.price; //Calculates the total price
              } else accumulator.push(cur);
              return accumulator;
            }, []),
        },
      };
    case 'CLEAR_MESSAGE':
      return {
        ...state,
        finalMessage: '',
      };
    case 'CLEAR_ALL':
      return {
        ...state,
        products: null,
        cart: [],
        total: 0,
        fatura: null,
        error: null,
        finalMessage: 'Compra concluida, aguarde a fatura...',
      };
    default:
      return state;
  }
};
export default reducer;

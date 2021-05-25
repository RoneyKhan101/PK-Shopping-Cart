/* eslint-disable no-unused-vars */
/* eslint-disable no-fallthrough */
const initialState = {
  products: [],
  totoalPrice: 0,
  totalQuantities: 0,
};
const CartReducer = (state = initialState, action) => {
  let findPro;
  let index;
  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;
      console.log(product.id, quantity);

      const check = state.products.find((pr) => pr.id === product.id);
      if (check) {
        return state;
      } else {
        const Tprice = state.totoalPrice + product.discountPrice * quantity;
        const Tquantities = state.totalQuantities + quantity;
        product.quantity = quantity;

        // product.quantity = quantity;
        return {
          ...state,
          products: [...state.products, product],
          totoalPrice: Tprice,
          totalQuantities: Tquantities,
        };
      }
    case "INC":
      findPro = state.products.find((product) => product.id === action.payload);
      index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      findPro.quantity += 1;
      state.products[index] = findPro;
      return {
        ...state,
        totoalPrice: state.totoalPrice + findPro.discountPrice,
        totalQuantities: state.totalQuantities + 1,
      };

    case "DEC":
      findPro = state.products.find((product) => product.id === action.payload);
      index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (findPro.quantity > 1) {
        findPro.quantity -= 1;
        state.products[index] = findPro;

        return {
          ...state,
          totoalPrice: state.totoalPrice - findPro.discountPrice,
          totalQuantities: state.totalQuantities - 1,
        };
      } else {
        return state;
      }
    case "REMOVE":
      findPro = state.products.find((product) => product.id === action.payload);
      const filtered = state.products.filter(product=>product.id !== action.payload)

      return{
        ...state,
        products:filtered,
        totoalPrice: state.totoalPrice - findPro.discountPrice * findPro.quantity,
        totalQuantities: state.totalQuantities - findPro.quantity
      }

    default:
      return state;
  }
};
export default CartReducer;

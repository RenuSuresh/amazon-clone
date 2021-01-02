export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      // logic for removing item from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exists in basket
        newBasket.splice(index, 1);
        // newBasket
      } else {
        console.warn("cant remove id");
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};
export default reducer;

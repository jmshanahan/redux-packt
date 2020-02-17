import { ADD_ORDER } from "../actions/types";
const initialState = [
  { id: 1, order: "Tea", amount: 3 },
  { id: 2, order: "Coffee", amount: 2 },
  { id: 3, order: "Pizza", amount: 1 }
];

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.payload];

    default:
      return state;
  }
};
export default orderReducer;

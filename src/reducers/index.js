import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import customerReducer from "./customersReducer";
export default combineReducers({
  orders: orderReducer,
  customers: customerReducer
});

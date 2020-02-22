import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import customerReducer from "./customersReducer";
import backlogReducer from "./backlogReducer";
export default combineReducers({
  orders: orderReducer,
  customers: customerReducer,
  backlog: backlogReducer
});

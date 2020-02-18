import { createStore } from "redux";
import rootReducer from "../reducers";
const store = createStore(rootReducer);

// function interruptDispatch(action) {
//   console.log("before dispatching");
//   store.dispatch(action);
//   console.log("after dispatching");
// }

// interruptDispatch({ order: "Tea", amount: 1 });
export default store;

import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./components/store";
import OrderCounter from "./components/order-counter";
import OrderForm from "./components/order-form";
import OrderList from "./components/order-list";
import Customers from "./components/customers";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <OrderForm />
        <hr />

        <OrderCounter />
        <OrderList />
        <Customers />
      </div>
    </Provider>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./components/store";
import OrderCounter from "./components/order-counter";
import OrderForm from "./components/order-form";
import OrderList from "./components/order-list";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <OrderForm />
        <hr />

        <OrderCounter />
        <OrderList />
      </div>
    </Provider>
  );
}

export default App;

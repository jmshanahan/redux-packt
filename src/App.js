import React from "react";
import "./App.css";
import OrderCounter from "./components/order-counter";
import OrderForm from "./components/order-form";
import OrderList from "./components/order-list";

function App() {
  return (
    <div className="App">
      <OrderForm />
      <hr />

      <OrderCounter />
      <OrderList />
    </div>
  );
}

export default App;

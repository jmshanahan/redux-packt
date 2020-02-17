import React, { Component } from "react";

export default class OrderCcounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        { id: 1, order: "Chocolate", amount: 1 },
        { id: 2, order: "biscuits", amount: 1 }
      ]
    };
  }
  render() {
    return (
      <div>
        <strong>Number of current orders ({this.state.orders.length})</strong>
      </div>
    );
  }
}

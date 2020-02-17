import React, { Component } from "react";

export default class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        { id: 1, order: "Choclate", amount: 1 },
        { id: 2, order: "buscuits", amount: 1 },
        { id: 3, order: "Coffee", amount: 2 }
      ]
    };
  }
  deleteOrder = e => {
    console.log(parseInt(e.target.getAttribute("data-id")));
  };
  loadOrders = orders => {
    let list = [];
    for (let i = 0; i < orders.length; i++) {
      list.push(
        <div key={i.toString()} className="d-flex flex-row px-3 order-row">
          <div className="flex-fill flex-shrink-1 py-2 px-4 ">
            {orders[i].amount}
          </div>
          <div className="flex-fill flex-shrink-1 p-1">
            <button
              className="btn btn-danger"
              data-id={orders[i].id}
              onClick={this.deleteOrder}
            >
              delete
            </button>
          </div>
        </div>
      );
    }
    return list;
  };
  render() {
    let orders = this.state.orders;
    return <div className="pt-3">{this.loadOrders(orders)}</div>;
  }
}

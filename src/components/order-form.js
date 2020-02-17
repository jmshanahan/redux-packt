import React, { Component } from "react";

export default class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: "",
      amount: 1
    };
    this.addOrder = this.addOrder.bind(this);
  }
  addOrder = e => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = e => {
    let newState = [];
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };
  render() {
    return (
      <form action="" onSubmit={this.addOrder}>
        <div className="form-group">
          <label htmlFor="order">Order:</label>
          <input
            type="text"
            className="form-control"
            name="order"
            onChange={this.handleChange}
            value={this.state.amount}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            className="form-control"
            name="amount"
            type="number"
            onChange={this.handleChange}
            value={this.state.amount}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Add
        </button>
      </form>
    );
  }
}

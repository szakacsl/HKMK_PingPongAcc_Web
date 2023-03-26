import React from "react";
import PropTypes from "prop-types";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.category = props.category;
    this.unit = props.unit;
    this.amount = props.amount;
    this.price = props.price;
    this.conversionRate = props.conversionRate;

    this.mode = "view";
  }

  switchMode = () => {
    if (this.mode === "edit") {
      this.mode = "view";
    } else {
      this.mode = "edit";
    }

    this.forceUpdate();
  };

  handleCategoryChange = (event) => {
    this.category = event.target.value;
    this.forceUpdate();
  };

  handleUnitChange = (event) => {
    this.unit = event.target.value;
    this.forceUpdate();
  };

  handleAmountChange = (event) => {
    this.amount = event.target.value;
    this.forceUpdate();
  };

  handlePriceChange = (event) => {
    this.price = event.target.value;
    this.forceUpdate();
  };

  render() {
    if (this.mode === "edit") {
      return (
        <>
          <table>
            <tbody>
              <tr>
                <td>
                  Category:{" "}
                  <select
                    value={this.category}
                    onChange={this.handleCategoryChange}
                  >
                    <option value="clothing">Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="food">Food</option>
                    <option value="furniture">Furniture</option>
                    <option value="metals">Metals</option>
                    <option value="toys">Toys</option>
                    <option value="wasted oil">Wasted Oil</option>
                  </select>
                </td>
                <td>
                  Unit:{" "}
                  <select value={this.unit} onChange={this.handleUnitChange}>
                    <option value="l">l</option>
                    <option value="kg">kg</option>
                    <option value="pcs">pcs</option>
                  </select>
                </td>
                <td>
                  Amount:{" "}
                  <input
                    type="number"
                    value={this.amount}
                    min={0}
                    onChange={this.handleAmountChange}
                  ></input>
                </td>
                <td>
                  Price:{" "}
                  <input
                    type="number"
                    value={this.price}
                    min={0}
                    step={0.1}
                    onChange={this.handlePriceChange}
                  ></input>
                </td>
                <td>
                  <button type="button" onClick={this.switchMode}>
                    Save
                  </button>
                </td>
                <td>
                  <button type="button">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      );
    }

    ///////////////////////
    /////  VIEW MODE  /////
    ///////////////////////
    return (
      <>
        <table>
          <tbody>
            <tr>
              <td>Category: {this.category}</td>
              <td>Unit: {this.unit}</td>
              <td>Amount: {this.amount}</td>
              <td>Price: {this.price}</td>
              <td>
                <button type="button" onClick={this.switchMode}>
                  Edit
                </button>
              </td>
              <td>
                <button type="button">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

Product.propTypes = {
  category: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  conversionRate: PropTypes.number.isRequired,
};

export default Product;

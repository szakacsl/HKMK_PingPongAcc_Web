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

  render() {
    if (this.mode === "edit") {
      return (
        <>
          <table>
            <tbody>
              <tr>
                <td>
                  Category: <input type="text" value={this.category}></input>
                </td>
                <td>
                  Unit:{" "}
                  <select value={this.unit}>
                    <option value="liter">l</option>
                    <option value="kg">kg</option>
                    <option value="pcs">pcs</option>
                  </select>
                </td>
                <td>
                  Amount:{" "}
                  <input type="number" min={0} value={this.category}></input>
                </td>
                <td>
                  Price:{" "}
                  <input type="number" min={0} value={this.category}></input>
                </td>
                <td>
                  <button type="button" onClick={this.switchMode}>
                    Save
                  </button>
                </td>
                <td>
                  <button type="button">Delete</button>
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
                <button type="button">Delete</button>
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

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

    this.mode = props.mode ? props.mode : "view";
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
          <table style={{ marginLeft: "10px" }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: "bold", padding: "0px 5px 0px 10px" }}>
                  Category:
                </td>
                <td>
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
                <td style={{ fontWeight: "bold", padding: "0px 5px 0px 10px" }}>
                  Unit:
                </td>
                <td>
                  <select value={this.unit} onChange={this.handleUnitChange}>
                    <option value="l">l</option>
                    <option value="kg">kg</option>
                    <option value="pcs">pcs</option>
                  </select>
                </td>
                <td style={{ fontWeight: "bold", padding: "0px 5px 0px 10px" }}>
                  Amount:
                </td>
                <td>
                  <input
                    type="number"
                    value={this.amount}
                    min={0}
                    onChange={this.handleAmountChange}
                    style={{ width: "50px" }}
                  ></input>
                </td>
                <td style={{ fontWeight: "bold", padding: "0px 5px 0px 10px" }}>
                  Price:
                </td>
                <td>
                  <input
                    type="number"
                    value={this.price}
                    min={0}
                    step={0.1}
                    onChange={this.handlePriceChange}
                    style={{ width: "50px" }}
                  ></input>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={this.switchMode}
                    style={{
                      width: "70px",
                      height: "25px",
                      textAlign: "center",
                      backgroundColor: "#4D6A6D",
                      border: "none",
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      marginTop: "5px",
                    }}
                  >
                    Save
                  </button>
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
        <table style={{ marginLeft: "10px" }}>
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold", padding: "0px 5px 0px 10px" }}>
                Category:
              </td>
              <td style={{ width: "50px" }}>{this.category}</td>
              <td style={{ fontWeight: "bold", padding: "0px 5px 0px 10px" }}>
                Unit:
              </td>
              <td style={{ width: "50px" }}>{this.unit}</td>
              <td style={{ fontWeight: "bold", padding: "0px 5px 0px 10px" }}>
                Amount:
              </td>
              <td style={{ width: "50px" }}>{this.amount}</td>
              <td style={{ fontWeight: "bold", padding: "0px 5px 0px 10px" }}>
                Price:
              </td>
              <td style={{ width: "50px" }}>{this.price}</td>
              <td>
                <button
                  type="button"
                  onClick={this.switchMode}
                  style={{
                    width: "70px",
                    height: "25px",
                    textAlign: "center",
                    backgroundColor: "#798478",
                    border: "none",
                    color: "white",
                    fontWeight: "bold",
                    marginLeft: "35px",
                    marginBottom: "5px",
                    marginTop: "5px",
                  }}
                >
                  Edit
                </button>
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
  conversionRate: PropTypes.number,
  mode: PropTypes.string,
};

export default Product;

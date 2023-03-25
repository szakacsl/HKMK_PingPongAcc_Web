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

    this.mode = props;
  }

  render() {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <td>Category: {this.category}</td>
              <td>Unit: {this.unit}</td>
              <td>Amount: {this.amount}</td>
              <td>Price: {this.price}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

Product.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  mode: PropTypes.string.isRequired,
};

export default Product;

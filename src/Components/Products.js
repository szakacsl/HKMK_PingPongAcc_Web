import React from "react";
import PropTypes from "prop-types";

import Product from "./Product";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.products = props.products;

    this.products = [
      {
        category: "cat A",
        unit: "kg",
        amount: 100,
        price: 0.12,
        conversionRate: 0.75,
      },
      {
        category: "cat B",
        unit: "g",
        amount: 100,
        price: 12,
        conversionRate: 0.75,
      },
      {
        category: "cat C",
        unit: "l",
        amount: 50,
        price: 0.52,
        conversionRate: 0.75,
      },
    ];
  }

  render() {
    return (
      <>
        {this.products &&
          this.products.map((p, index) => (
            <Product
              category={p.category}
              unit={p.unit}
              amount={p.amount}
              price={p.price}
              conversionRate={p.conversionRate}
              key={index}
            />
          ))}
      </>
    );
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default Products;

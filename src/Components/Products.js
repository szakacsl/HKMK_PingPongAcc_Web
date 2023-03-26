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
        unit: "l",
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

  addProduct = () => {
    this.products.push({
      category: "",
      unit: "",
      amount: 0,
      price: 0.0,
      conversionRate: 0.75,
      mode: "edit",
    });
    this.forceUpdate();
  };

  removeProduct = (index) => {
    this.products.splice(index, 1);
    this.forceUpdate();
  };

  render() {
    return (
      <>
        {this.products &&
          this.products.map((p, index) => (
            <div style={{ display: "flex" }} key={index}>
              <Product
                category={p.category}
                unit={p.unit}
                amount={p.amount}
                price={p.price}
                conversionRate={p.conversionRate}
                mode={p.mode}
              />
              <button
                type="button"
                onClick={() => this.removeProduct(index)}
                style={{
                  width: "70px",
                  height: "25px",
                  textAlign: "center",
                  backgroundColor: "#C9ADA1",
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                  marginLeft: "10px",
                  marginBottom: "5px",
                  marginTop: "8px",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        <button
          type="button"
          onClick={this.addProduct}
          style={{
            width: "100px",
            height: "25px",
            textAlign: "center",
            backgroundColor: "#798478",
            border: "none",
            color: "white",
            fontWeight: "bold",
            marginLeft: "20px",
            marginBottom: "5px",
          }}
        >
          Add Product
        </button>
      </>
    );
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default Products;

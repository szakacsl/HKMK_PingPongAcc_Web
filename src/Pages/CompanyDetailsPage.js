import React, { useState } from "react";

import Switch from "react-switch";

import CompanyLogo from "../Components/CompanyLogo";
import Section from "../Components/Section";
import Products from "../Components/Products";

//const CompanyDetailsPage = (props) => {
class CompanyDetailsPage extends React.Component {
  constructor(props) {
    super(props);

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
          <CompanyLogo />
          <Section name="Identification" />
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    Name:{" "}
                    <input type="text" value={this.props.companyName}></input>
                  </td>
                  <td>
                    Address:{" "}
                    <input
                      type="text"
                      value={this.props.companyAddress}
                    ></input>
                  </td>
                  <td>
                    Vouchers:{" "}
                    <Switch checked={this.props.vouchers} onChange={() => {}} />
                  </td>
                  <td>
                    Password:{" "}
                    <input type="password" value={this.props.password}></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button type="button" onClick={this.switchMode}>
            Save
          </button>

          <Section name="Products" />
          <Products products={this.props.products} />
        </>
      );
    }

    ///////////////////////
    /////  VIEW MODE  /////
    ///////////////////////
    return (
      <>
        <CompanyLogo />
        <Section name="Identification" />
        <div>
          <table>
            <tbody>
              <tr>
                <td>Name: {this.props.companyName}</td>
                <td>Address: {this.props.companyAddress}</td>
                <td>
                  Vouchers:{" "}
                  <Switch checked={this.props.vouchers} onChange={() => {}} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" onClick={this.switchMode}>
          Edit
        </button>

        <Section name="Products" />
        <Products products={this.props.products} />
      </>
    );
  }
}

export default CompanyDetailsPage;

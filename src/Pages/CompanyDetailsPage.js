import React from "react";

import Switch from "react-switch";

import CompanyLogo from "../Components/CompanyLogo";
import Section from "../Components/Section";
import Products from "../Components/Products";

//const CompanyDetailsPage = (props) => {
class CompanyDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.companyName = props.companyName;
    this.companyAddress = props.companyAddress;
    this.vouchers = props.vouchers;
    this.password = props.password;
    this.products = props.products;

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

  handleCompanyNameChange = (event) => {
    this.companyName = event.target.value;
    this.forceUpdate();
  };

  handleCompanyAddressChange = (event) => {
    this.companyAddress = event.target.value;
    this.forceUpdate();
  };

  handleVouchersChange = (value) => {
    this.vouchers = value;
    this.forceUpdate();
  };

  handlePasswordChange = (event) => {
    this.password = event.target.value;
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
                    <input
                      type="text"
                      value={this.companyName}
                      onChange={this.handleCompanyNameChange}
                    ></input>
                  </td>
                  <td>
                    Address:{" "}
                    <input
                      type="text"
                      value={this.companyAddress}
                      onChange={this.handleCompanyAddressChange}
                    ></input>
                  </td>
                  <td>
                    Vouchers:{" "}
                    <Switch
                      checked={this.vouchers}
                      onChange={this.handleVouchersChange}
                    />
                  </td>
                  <td>
                    Password:{" "}
                    <input
                      type="password"
                      value={this.password}
                      onChange={this.handlePasswordChange}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button type="button" onClick={this.switchMode}>
            Save
          </button>

          <Section name="Products" />
          <Products products={this.products} />
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
                <td>Name: {this.companyName}</td>
                <td>Address: {this.companyAddress}</td>
                <td>
                  Vouchers:{" "}
                  <Switch checked={this.vouchers} onChange={() => {}} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" onClick={this.switchMode}>
          Edit
        </button>

        <Section name="Products" />
        <Products products={this.products} />
      </>
    );
  }
}

export default CompanyDetailsPage;

import React from "react";
import PropTypes from "prop-types";

import Switch from "react-switch";

import CompanyLogo from "../Components/CompanyLogo";
import Section from "../Components/Section";
import Products from "./Products";

class EditCompanyDetails extends React.Component {
  constructor(props) {
    super(props);

    this.companyDetails = props.companyDetails;
  }
  render() {
    return (
      <>
        <CompanyLogo />
        <Section name="Edit - Identification" />
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  Name:{" "}
                  <input
                    type="text"
                    value={this.companyDetails.companyName}
                  ></input>
                </td>
                <td>
                  Address:{" "}
                  <input
                    type="text"
                    value={this.companyDetails.companyAddress}
                  ></input>
                </td>
                <td>
                  Vouchers:{" "}
                  <Switch
                    checked={this.companyDetails.vouchers}
                    onChange={() => {}}
                  />
                </td>
                <td>
                  Password:{" "}
                  <input
                    type="password"
                    value={this.companyDetails.password}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Section name="Edit - Products" />
        <Products products={[]} mode="edit" />
      </>
    );
  }
}

EditCompanyDetails.propTypes = {
  companyDetails: PropTypes.object.isRequired,
};

export default EditCompanyDetails;

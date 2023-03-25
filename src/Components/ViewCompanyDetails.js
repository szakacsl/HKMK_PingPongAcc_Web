import React from "react";
import PropTypes from "prop-types";

import Switch from "react-switch";

import CompanyLogo from "../Components/CompanyLogo";
import Section from "../Components/Section";
import Products from "../Components/Products";

class ViewCompanyDetails extends React.Component {
  constructor(props) {
    super(props);

    this.companyDetails = props.companyDetails;
  }

  render() {
    return (
      <>
        <CompanyLogo />
        <Section name="Identification" />
        <div>
          <table>
            <tbody>
              <tr>
                <td>Name: {this.companyDetails.companyName}</td>
                <td>Address: {this.companyDetails.companyAddress}</td>
                <td>
                  Vouchers:{" "}
                  <Switch
                    checked={this.companyDetails.vouchers}
                    onChange={() => {}}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Section name="Products" />
        <Products products={[]} />
      </>
    );
  }
}

ViewCompanyDetails.propTypes = {
  companyDetails: PropTypes.object.isRequired,
};

export default ViewCompanyDetails;

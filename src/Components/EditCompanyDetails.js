import React from "react";
import PropTypes from "prop-types";

import CompanyLogo from "../Components/CompanyLogo";
import Section from "../Components/Section";

class EditCompanyDetails extends React.Component {
  render() {
    return (
      <>
        <CompanyLogo />
        <Section name="Edit - Identification" />
        <Section name="Edit - Details" />
      </>
    );
  }
}

EditCompanyDetails.propTypes = {};

export default EditCompanyDetails;

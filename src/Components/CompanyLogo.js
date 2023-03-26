import React from "react";
import { PropTypes } from "prop-types";

class CompanyLogo extends React.Component {
  constructor(props) {
    super(props);

    this.imageSrc = props.imageSrc ? props.imageSrc : "/img/placeholder.png";
  }

  render() {
    return <img src={this.imageSrc} alt="" />;
  }
}

CompanyLogo.propTypes = {
  imageSrc: PropTypes.string,
};

export default CompanyLogo;

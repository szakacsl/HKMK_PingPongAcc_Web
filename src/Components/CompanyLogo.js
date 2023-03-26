import React from "react";
import { PropTypes } from "prop-types";

class CompanyLogo extends React.Component {
  constructor(props) {
    super(props);

    this.imageSrc = props.imageSrc ? props.imageSrc : "/img/placeholder.png";
    this.style = props.style;
  }

  render() {
    return <img src={this.imageSrc} alt="" style={this.style} />;
  }
}

CompanyLogo.propTypes = {
  imageSrc: PropTypes.string,
  style: PropTypes.object,
};

export default CompanyLogo;

import React from "react";
import { PropTypes } from "prop-types";

class Section extends React.Component {
  constructor(props) {
    super(props);

    const { name } = props;

    this.sectionName = name;
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#A0A083",
          paddingLeft: "20px",
          fontWeight: "bold",
        }}
      >
        {this.sectionName}
      </div>
    );
  }
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Section;

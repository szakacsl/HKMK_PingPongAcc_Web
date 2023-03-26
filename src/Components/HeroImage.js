import React from "react";
import PropTypes from "prop-types";

class HeroImage extends React.Component {
  constructor(props) {
    super(props);

    this.imageSrc = props.imageSrc ? props.imageSrc : "/img/placeholder.png";
  }

  render() {
    return (
      <img
        src={this.imageSrc}
        alt=""
        style={{
          backgroundColor: "yellow",
          width: window.innerWidth * 0.68,
          height: window.innerHeight,
        }}
      />
    );
  }
}

HeroImage.propTypes = {
  imageSrc: PropTypes.string,
};

export default HeroImage;

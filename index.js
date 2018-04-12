import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ViewPropTypes
} from "react-native";

const { width } = Dimensions.get("window");

export default class ImageOverlay extends Component {
  render() {
    const {
      blurRadius,
      children,
      containerStyle,
      contentPosition,
      height,
      overlayAlpha,
      overlayColor,
      rounded,
      source,
      title,
      titleStyle,
      ...props
    } = this.props;

    let justifyContent;
    if (contentPosition == "top") {
      justifyContent = "flex-start";
    } else if (contentPosition == "bottom") {
      justifyContent = "flex-end";
    } else if (contentPosition == "center") {
      justifyContent = "center";
    }

    return (
      <ImageBackground
        source={source}
        style={[
          styles.image,
          {
            borderRadius: rounded,
            height: height,
            justifyContent: justifyContent
          },
          containerStyle
        ]}
        blurRadius={blurRadius}
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: overlayColor,
            opacity: overlayAlpha
          }}
        />
        {!children &&
          title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        {children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: width,
    overflow: "hidden",
    alignItems: "center"
  },
  title: {
    margin: 20,
    color: "white",
    textAlign: "center",
    fontSize: 16
  }
});

ImageOverlay.propTypes = {
  rounded: PropTypes.number,
  source: Image.propTypes.source,
  height: PropTypes.number,
  title: PropTypes.string,
  titleStyle: Text.propTypes.style,
  overlayColor: PropTypes.string,
  overlayAlpha: PropTypes.number,
  contentPosition: PropTypes.oneOf(["top", "center", "bottom"]),
  containerStyle: ViewPropTypes.style,
  blurRadius: PropTypes.number,
  children: PropTypes.element
};

ImageOverlay.defaultProps = {
  height: 300,
  overlayColor: "#000000",
  overlayAlpha: 0.5,
  contentPosition: "center"
};

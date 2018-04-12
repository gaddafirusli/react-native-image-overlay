import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  View,
  Text,
  ViewPropTypes
} from "react-native";

const { width } = Dimensions.get("window");

export default class ImageOverlay extends Component {
  render() {
    const {
      rounded,
      image,
      imageHeight,
      containerStyle,
      blurRadius,
      overlayColor,
      overlayAlpha,
      children,
      title,
      titleStyle,
      contentPosition,
      subTitle,
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
        source={{ uri: image }}
        style={[
          styles.image,
          {
            borderRadius: rounded,
            height: imageHeight,
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
  image: PropTypes.string,
  imageHeight: PropTypes.number,
  title: PropTypes.string,
  titleStyle: ViewPropTypes.style,
  overlayColor: PropTypes.string,
  overlayAlpha: PropTypes.number,
  contentPosition: PropTypes.oneOf(["top", "center", "bottom"]),
  containerStyle: ViewPropTypes.style,
  blurRadius: PropTypes.number,
  children: PropTypes.element
};

ImageOverlay.defaultProps = {
  imageHeight: 300,
  overlayColor: "#000000",
  overlayAlpha: 0.5,
  contentPosition: "center"
};

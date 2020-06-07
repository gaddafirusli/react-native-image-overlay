import { Component } from 'react';
import { TextStyle, ViewStyle } from 'react-native';

interface ImageOverlayProps {
  source: string;
  overlayColor?: string;
  overlayAlpha?: number;
  title?: string;
  titleStyle?: TextStyle;
  rounded?: number;
  height?: number;
  contentPosition?: 'top' | 'center' | 'bottom';
  blurRadius?: number;
  containerStyle?: ViewStyle;
}

export default class ImageOverlay extends Component<ImageOverlayProps> {}

# react-native-image-overlay

React Native `ImageBackground` is useful. But you know what's even more useful? `ImageBackground` with overlay. This is exactly it.

## Get Started

### Installation

    $ npm install --save react-native-image-overlay

### Usage

    import  ImageOverlay  from  "react-native-image-overlay";

    export class MyApp extends Component {
        render () {
            return (
                <ImageOverlay
                  source={{ uri:="http://example.com/img/cool.jpg" }}
                  height={200}
                  overlayColor="cyan"
                  overlayAlpha={0.8}
                />
            );
        }
    }

## Props

| Prop              | Description                                                                                | Type                | Default     |
| ----------------- | ------------------------------------------------------------------------------------------ | ------------------- | ----------- |
| `blurRadius`      | The blur radius of the blur filter added to the image                                      | Number              | `undefined` |
| `containerStyle`  | Additional styling for the component                                                       | Style               | `undefined` |
| `contentPosition` | Position of `title` text or children component (if any). Either "top","center" or "bottom" | String              | `"center"`  |
| `height`          | The height of the whole component                                                          | Number              | `300`       |
| `overlayColor`    | The color to be used for the overlay on top of the image                                   | String              | `"#000000"` |
| `overlayAlpha`    | Opacity value of the overlay. From `0` to `1`                                              | Number              | `0.5`       |
| `rounded`         | Value for `borderRadius` to be applied to the component                                    | Number              | `undefined` |
| `source`          | The image source (either a remote URL or a local file resource).                           | ImageSourcePropType |             |
| `title`           | Text to be displayed over the image                                                        | String              | `undefined` |
| `titleStyle`      | Additional styling for the title text                                                      | Style               | `undefined` |

## Example

WIP

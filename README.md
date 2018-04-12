![Header image](image/header.png)

React Native `ImageBackground` is useful. But you know what's even more useful?

`ImageBackground` with overlay.

This is exactly it.

## Get Started

### Installation

    $ npm install --save react-native-image-overlay

### Usage

    import  ImageOverlay  from  "react-native-image-overlay";

    export class MyApp extends Component {
        render () {
            return (
                <ImageOverlay
                  source={{ uri:"http://example.com/img/cool.jpg" }}
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

### Simple overlay color

The most basic use-case of this module is to add colored overlay on top of your image.

    <ImageOverlay source={{ uri:"http://example.com/img/cool.jpg" }} />

Default overlay is color is `#000000` with `0.5` opacity. You can customize it to any color

    <ImageOverlay
        source={{ uri:"http://example.com/img/cool.jpg" }}
        overlayColor="cyan"
        overlayAlpha={0.8} />

### Overlay with title text

![Title text image](image/titledemo.png)

If you want to display a simple white text on top of the image, you can use the `title` prop.

    <ImageOverlay
        source={{ uri:"http://example.com/img/cool.jpg" }}
        title="This is the title" />

The title will be `center`-ed by default. You can move it to the `top` or `bottom` using the `contentPosition` prop

    <ImageOverlay
        source={{ uri:"http://example.com/img/cool.jpg" }}
        title="This is the title"
        contentPosition="bottom" />

Additionally, you can change the styling by passing the `titleStyle` along

    <ImageOverlay
        source={{ uri:"http://example.com/img/cool.jpg" }}
        title="This is the title"
        titleStyle={{ color: 'yellow', fontWeight: 'bold' }} />

### Overlay with child component

![Child component image](image/customdemo.png)

You can pass extra components to be displayed on top of your image.

    <ImageOverlay
      source={{ uri:"http://example.com/img/cool.jpg" }}
      height={400}>
        <View>
        	<Image style={styles.avatar} source={{uri:"adasd"}} />
        	<Text style={styles.name}>Amelia Edward</Text>
    	</View>
    </ImageOverlay>

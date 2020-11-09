# Background Images

HTML elements can have background images, with various options for how they are presented.

## Adding a background

Adding a background image to an element can be done with the `background-image` CSS property. The value for the property uses the `url()` CSS function to tell the browser where the image is. In this example, a header is given a background image:

```CSS
header {
  background-image: url("trees.jpg");
}
```

There's something to watch out for here though. That URL is a relative URL, telling the browser where the image is _relative_ to the CSS file. Consider the following simple website file structure:

```
site
  |
  |-[css]
  |   - style.css
  |
  |-[img]
  |   - trees.jpg
  |
  |-index.html
```

We need a URL that tells the browser how to get from `style.css` in the css folder, to `trees.jpg` in the img folder. This means we need to go up a level, and then into the img folder.

To go up a level in a URL, use `../`. So, the actual CSS to do this would be:

```CSS
header {
  background-image: url("../img/trees.jpg");
}
```

If your image doesn't load, check the URL very carefully.

This will display the image as the background of the element, at its native size.

## Background repeat

Background images can be repeated across the width of an element, the height of the element, or both. This can be useful if you want to fill a large area with a repeated pattern as it means you just load a single 'tile' and then repeat it.

Use the `background-repeat` property to control how the background image repeats.

| Value     | Description                                                                                                                                                                                        |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| repeat    | The background image is repeated both vertically and horizontally. The last image will be clipped if it does not fit. This is default                                                              |
| repeat-x  | The background image is repeated only horizontally                                                                                                                                                 |
| repeat-y  | The background image is repeated only vertically                                                                                                                                                   |
| no-repeat | The background-image is not repeated. The image will only be shown once                                                                                                                            |
| space     | The background-image is repeated as much as possible without clipping. The first and last images are pinned to either side of the element, and whitespace is distributed evenly between the images |
| round     | The background-image is repeated and squished or stretched to fill the space (no gaps)                                                                                                             |

Table from <https://www.w3schools.com/cssref/pr_background-repeat.asp>

For example, to stop a background image from repeating:

```css
header {
  background-image: url("../img/trees.jpg");
  background-repeat: no-no-repeat;
}
```

See what difference these values make here: <https://www.w3schools.com/cssref/playit.asp?filename=playcss_background-repeat>

## Background size

We often want to size a background image to fit the size of an element in some way. We can do this using the `background-size` property.

Using `background-size`, we can resize using length values or percentages.

For example, we can set the background image to be a specific size:

```css
header {
  background-image: url("../img/trees.jpg");
  background-repeat: no-repeat;
  background-size: 200px 100px;
}
```

When we give two values, the first is width and the second is height.

If we only give one value, this is the width and the height is automatically adjusted to maintain the images aspect ratio.

In order to set the size relative to the size of the element, we can use percent. For example, this will set the background image to be half the width of the element it is the background for:

```css
header {
  background-image: url("../img/trees.jpg");
  background-repeat: no-repeat;
  background-size: 50%;
}
```

There are two other values for `background-size` that are really useful.

Firstly though, here's a picture of a panda.

![Panda](https://thomcorah.github.io/dmu-multimedia/resources/img/background-images/panda.jpg)

Let's set this as the background image of a `<div>` that's 400px wide by 200px tall. This is the default behaviour - the image is its native size, which is larger than the `<div>`.

![Panda](https://thomcorah.github.io/dmu-multimedia/resources/img/background-images/default.png)

**Cover**  
If we set the value of `background-size` to cover, this will resize the image, making it as small as it can whilst maintaining its aspect ratio, so that the whole element is filled with the background.

This will likely mean that we lose some of the image off the right-hand or bottom edges of the element.

```css
header {
  background-image: url("../img/panda.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
```

Let's see what this does to our panda.

![Panda](https://thomcorah.github.io/dmu-multimedia/resources/img/background-images/cover.png)

**Contain**
This will resize the image, maintaining its aspect ratio, so that it is as large as possible whilst being fully contained within the boundaries of the element. While this means we will see the whole image, it likely means that not all of the element will be covered.

```css
header {
  background-image: url("../img/panda.jpg");
  background-repeat: no-repeat;
  background-size: contain;
}
```

![Panda](https://thomcorah.github.io/dmu-multimedia/resources/img/background-images/contain.png)

## Background position

By default, a background image (or the first iteration if it's repeated) will start from the top-left corner of the element. We might want to change this though. We can do this with the `background-position` CSS property.

It takes two values, one for placement horizontally, and the second for placement vertically.

If you only provide one value, the other will be centred.

If we wanted to place a background image towards the bottom-left of an element, we might do something like this.

```CSS
header {
  background-image: url("../img/panda.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 20% 80%;
}
```

The image will start 20% of the way along the element horizontally, and 80% of the way down the element vertically.

We can also use keywords. Horizontal placement can be specified with `left`, `center`, and `right`. Vertical placement with `top`, `center`, and `bottom`.

For example, this will place the image in the bottom-left corner of the element:

```CSS
header {
  background-image: url("../img/panda.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left bottom;
}
```

**Note:** American spelling here - center, not centre.

Looking back at our panda, if we wanted to cover the element, but move the image so that we see the panda's face, we might have some CSS that looks like this:

```css
div {
  background-image: url("img/panda.jpg");
  background-size: cover;
  background-position: center 75%;
}
```

Resulting in a lovely picture:

![Panda](https://thomcorah.github.io/dmu-multimedia/resources/img/background-images/centred.png)

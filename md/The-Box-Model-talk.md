# The Box Model

The box model describes how all elements are viewed by the browser - as rectangles with layers.

## The layers

There are four layers:

- Content: this is the middle bit. Where the text is in a `<p>` for example.
- Padding: this is spacing between the content and the edge of the element.
- Border: whether it has thickness or not, there is a border.
- Margin: the margin sits outside the border, providing space between neighbouring elements.

The bottom of the styles section of the Chrome Developer Tools gives a good view of the box model for a given element:

![Chrome's box model diagram](https://thomcorah.github.io/dmu-multimedia/resources/img/boxModel.png)

## Adjusting spacing

The padding and margin layers are crucial in ensuring that our designs have enough space. Padding can help to stop text feeling cramped inside a container, particularly if it has a visible border. Margins can give elements space between them.

You can change both of these things with css:

```css
p {
  margin: 5px;
  padding: 10px;
}
```

## Adjusting size

For many elements you can change the size using the `width` and `height` CSS properties. By default, the browser will take this as the width and height of the content area - the middle bit.

That means that padding and border will be added on to this. This can sometimes be problematic in layouts.

Imagine you have two images that you want to sit side-by-side, so you set the width of both to 50%. You then add a 2px border. Each image now has a width of 50% that of the container, plus an extra 2px on each side. The two images won't fit side-by-side.

We can change this default behaviour using the `box-sizing` CSS property. It's default value is `content-box`. If we set it to `border-box`, the browser will regard width and height as being to the edge of the border. Much easier to work with.

```css
.col {
  width: 25%;
  padding: 5px;
  box-sizing: border-box;
}
```

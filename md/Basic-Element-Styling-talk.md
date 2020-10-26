# Basic Element Styling

There are some things that you might often want to do to HTML elements, such as set a background colour.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=8132d24a-74eb-42f9-abcd-ac6001249d53&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Background Colour

The background colour of an element can be set using the `background-color` property. Note the American spelling. This will set all `<p>` elements to have a blue background.

```CSS
p {
  background-color: blue;
}
```

## Borders

In order to give an object a border, you need to tell the browser three things:

1. What colour is the border
2. What thickness is the border
3. What style is the border

These three things are provided as a single value to the `border` property. For example, a 1px solid black border would be drawn with the following CSS.

```CSS
p {
  border: 1px black solid;
}
```

We can also target each of the fours sides individually :

```CSS
p {
  border-top: 3px red dashed;
}
```

## Border Radius
Sometimes we might want rounded corners on things. This can be achieved with the `border-radius` property, with which we specify the radius of a circle that rounds the corner.

Setting all four corners to the same is easy:

```CSS
p {
  border-radius: 3px;
}
```

This will produce a fairly tight corner. We can also specify each corner independently. For example:

```CSS
p {
  border-top-left-radius: 15px;
}
```

However, we can also provide four values to the `border-radius` property, one for each corner. They start with the top-left and progress clockwise. If we wanted to have the top corners rounded, but the bottom corners straight, we might write:

```CSS
p {
  border-radius: 10px 10px 0 0;
}
```

## Padding

Padding on an element creates a gap between the contents and the element's border. This can help to inset text and avoid it butting right up against the edge of an element.

```CSS
p {
  padding: 10px;
}
```

## Margin

Margin is a gap applies around the outside of an element's border. It allows you to spread elements out, creating space between them.

```CSS
p {
  margin: 5px;
}
```

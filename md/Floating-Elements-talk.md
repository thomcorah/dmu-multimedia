# Floating Elements

We can make HTML elements sit side-by-side, or have them flow around each other, by floating them. Watch out though, there's a big snag to watch out for!

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=a08df481-90e4-4707-af56-ac7600b2d4af&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Floating an element

There are broadly two situation in which we might want elements to be able to sit side-by-side.

1. In order that text can flow around another image, usually an image.

![Float Example 1](https://thomcorah.github.io/dmu-multimedia/resources/img/floatExample1.png)

2. In order to have a horizontal layout - for example, to have two `<section>` elements sit next to each other for a two-column layout.

![Float Example 2](https://thomcorah.github.io/dmu-multimedia/resources/img/floatExample2.png)

In both cases, we can use the `float` CSS property to achieve this. In the first example, we float the image to the left. In the second example, we float both `<section>` elements to the left.

```css
section.column {
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
  float: left;
}
```

## Clearing the floats

We can run into a problem. When an element is floated, its size is no longer used when calculating the size of its parent. In the second example with two columns, everything was floated so the body had no height.

The upshot, is that if we put more content after the floated columns, it will appear on the page wherever it can find space, instead of starting on a new line underneath the two columns.

![Float Example 3](https://thomcorah.github.io/dmu-multimedia/resources/img/floatExample3.png)

This is even the case if the two floated columns are wrapped inside another block-level element, like a `<div>`. The `<div>` has no height.

To fix this, we need to tell the browser to include the height of the floated elements when calculating the height of their parent.

We need to do what's called clearing the floats. We do this by putting a little marker in after the floated elements to tell the browser that the `<div>` should actually pull right down to there and include any floated elements.

There's a little bit of CSS we can apply here that will actually insert some content into the document and apply the correct rules to it to do this.

It's the `<div>` we want to clear round the floated elements, so it's the `<div>` we start off with. In order to add some content at the end of the `<div>` we use the `::after` pseudo-selector. I've given the `<div>` a class name of `floatfix`.

```html
<div class="floatfix"></div>
```

We can then use CSS like so:

```css
.floatfix::after {
  content: "";
  display: block;
  clear: both;
}
```

The first two lines of that insert a block level bit of content. It's the third line `clear: both` that sets it up as a marker to clear the `<div>` round any floated elements.

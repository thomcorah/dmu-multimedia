# Positioning

There are a number of ways in which you can change the position of an element with CSS.

## Positioning Modes

There are four modes for positioning an element.

### Static

```CSS
div {
  position: static;
}
```

This is the default. An element appears where it would in the normal flow of the page and can't be repositioned.

### Relative

```CSS
div {
  position: relative;
}
```

An element can be repositioned, relative to where it should be in the normal flow of the page.

What does this mean? If we tell the browser to position an element so that its top is as 10 pixels, this will be 10px lower than it would otherwise be. If we told it the top should be at -20 pixels, this would be 20 pixels UP from where it would normally be.

All positions are relative to where the element would normally be.

### Absolute

```CSS
div {
  position: absolute;
}
```

An element can be repositioned, relative to its first non-statically positioned parent.

This just got a little confusing. If you position an element absolutely, the browser will first look at the element that it's in. For example, consider the following HTML:

```HTML
<section>
  <div class="imageSection">
    <img src="img/boss.jpg" alt="Cross-River Gorilla" />
    <p class="caption">Cross-River Gorilla</p>
  </div>
  <div class="info">
    <h1>The Cross-River Gorilla</h1>
    <p>Some text</p>
    <p>Some more text</p>
</section>
```

Lets say we wanted to position that `<img>` element absolutely.

```CSS
.imageSection img {
  position: absolute;
}

section {
  position: relative;
}
```

The browser would look first to its parent. In this case, that's the `<div>` with the `imageSection` class name. Is this a non-statically positioned element? No. The default positioning for any element is static, so unless we've changed it with some CSS somewhere, this `<div>` is statically positioned.

So, the browser will move up the tree. That `<div>`'s parent is the `<section>` element. Is this a non-statically positioned element? Yes. In our CSS, we've changed its positioning mode to `relative`.

This means we'll be able to specify the position of the `<img>` element relative to the `<section>`. What does this mean? It means that if we say the top of the `<img>` should be at 0 pixels, this will be at the top of the `<section>`.

All positions are relative to the `<section>`.

**Note:** When you position something absolutely, it becomes an inline element. Its width contracts to that necessary for its contents. Furthermore, it will be pulled out of the page flow and sit in front of following elements.

### Fixed

```CSS
div {
  position: fixed;
}
```

This will allow you to position an element relative to the browser window. This can be useful for pinning elements to the window, while the rest of the page contents are free to scroll behind.

**Note:** When you use fixed positioning, it becomes an inline element. Its width contracts to that necessary for its contents. Furthermore, it will be pulled out of the page flow and sit in front of following elements.

## Repositioning an Element

With the positioning mode sorted out, we can then go on to actually reposition an element, except if it's static.

We can do this using a combination of four CSS properties: `top`, `bottom`, `left`, `right`.

In each case, we can provide a length unit, generally pixels, percent, view widths, or view heights.

These will each position the given edge of the element, based on the positioning mode. For example, this will position the `<div>` 20 pixels down, relative to where it should be.

```CSS
div {
  position: relative;
  top: 20px;
}
```

This will position the `<div>` 20px down from the top of its parent, or more accurately, its first non-statically positioned parent.

```CSS
div {
  position: absolute;
  top: 20px;
}
```

This will position the `<div>` 20px down from the top of the window.

```CSS
div {
  position: fixed;
  top: 20px;
}
```

This will position the `<div>` 40px up from the bottom of the window.

```CSS
div {
  position: fixed;
  bottom: 40px;
}
```

| Property | Description                                                                                              |
| -------- | -------------------------------------------------------------------------------------------------------- |
| Top      | Distance from the top of the reference source. A positive value is down, negative is up.                 |
| Bottom   | Distance from the bottom of the reference source. A positive value is up, negative is down               |
| Left     | Distance from the left side of the reference source. A positive value is right, a negative value is left |
| Right    | Distance from the right side of the reference source. A positive value is left, negative is right        |

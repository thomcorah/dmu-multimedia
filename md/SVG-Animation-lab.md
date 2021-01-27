# SVG Animation

SVGs, Scalable Vector Graphics, offer a way of including imagery in your web work that can scale to any screen size or resolution without loss of quality. Moreover, they are more easily animated than raster images.

The following tasks will take you through some of the basics of working with SVGs and animating them in your work.

You might find the MDN SVG reference useful: <https://developer.mozilla.org/en-US/docs/Web/SVG/Element>

## Get Setup

Create a new html document with the usual start point: <https://thomcorah.github.io/dmu-multimedia/lab-reader.html?starting-a-project-short.md>

## Draw Some Shapes

### 1. Create an SVG element

In the `<body>`, create a new `<svg>` element. Set its viewbox to start at 0,0 and have a width and height of 600.

### 2. Draw a square

Inside your `<svg>` element, create a square using the `<rect>` element. Put it in the top left corner, and make it 300 pixels wide and tall. Make sure to give it a fill colour.

### 3. Draw a circle

In the top right corner, place a circle. Use the `<circle>` element for this. Make it 300 pixels wide.

### 4. Draw an ellipse

You see where this is going? Use the `<ellipse>` element to place an ellipse in the bottom left corner.

### 5. Draw a random shape

The `<polygon>` object allows you to provide a set of x,y coordinates for points, which are then connected and filled in. Use this to draw something in the bottom right corner.

## Explore Gradients

### 1. Create a Linear Gradient

Using the `<linearGradient>` object, create a linear gradient that's red at one end and blue at the other.

Make sure to give it an id so that you can attach it to a shape.

### 2. Apply Your Gradient

Use the fill attribute of one of your shapes to apply the gradient. For example:

```html
<rect x="10" y="10" width="180" height="180" fill="url(#myGradient)" />
```

### 3. Create a Radial Gradient

The `<radialGradient>` element works in the same way. Use this to apply a radial gradient to the circle.

## Explore Filters

### 1. Create a new `<filter>` element

As with gradients, this is created independently of any shape. Don't forget to give it an id.

### 2. Create a blur filter

Embed a `<feGaussianBlur>` element inside the filter element. The entry on MDN for it might be useful: <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feGaussianBlur>

### 3. Apply your filter

Add it to one of your shapes using the `filter` attribute. For example:

```html
<circle cx="300" cy="100" r="90" fill="blue" filter="url(#blurFilter)" />
```

## Experiment

Particularly with the filters, there are a lot of options. Look at the element reference on MDN. Anything that starts fe is a filter effect. These can be combined in a single `<filter>` object.

## Animation

SVGs have the ability to animate built in. If you look at the MDN reference there are three elements that are two do with animation.

## Create a Ball

### 1. Create a new HTML document

### 2. Draw a circle

We're going to make the ball fall and bounce, so create a viewbox that's tall, and place the circle at the top of it.

### 3. Give the circle a radial gradient

Make it look more ball like. Have the radial gradient be really light in the middle, and darker at the edge. You probably want it to originate near the edge of the ball though, rather than in the centre. You can use the `fx` and `fy` attributes on the `<radialGradient>` to move the start point of the radial gradient.

The MDN documentation on radial gradient might be useful: <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient>

## Make it fall

### 1. Embed an `<animate>` element in the circle

The animate element should target the `cy` property of the circle. You can use `from` and `to` attributes on the `<animate>` object to set the start and end values, and `dur` to set the duration.

### 2. Test it

Your ball should fall with linear motion from top to bottom. And then snap back up to the top.

### 3. Set the fill mode

The ball snaps back up because the final state of the animation doesn't stick. The `fill` attribute can change this. Set its value to `freeze`.

## Make it bounce

We want our ball to bounce a few times when it hits the bottom

### 1. Set multiple values

Instead of simply having a `from` and `to` value, you can use the `values` attribute to specify a series of value points over the course of the animation. For example:

```html
values="100; 900; 600; 900; 750; 900"
```

### 2. Test it

By default, the values are spaced evenly over the course of the animation. This, combined with the linear movement, isn't very realistic.

### 3. Add timings

You can change the distribution of those values using the `keyTimes` attribute. This takes a list of values between 0 and 1, one for each point listed in the `values` attribute. For example:

```html
keyTimes="0; 0.35; 0.55; 0.75; 0.87; 1.0"
```

This will take a little trial and error.

## Add easing

As with CSS animations, you can specify timing curves to make animation more natural than the default linear progression. It's not as straightforward as with CSS though.

### 1. Set the calc mode

Animations can have a `calcMode` attribute that tells the browser how to calculate the progression. There are several values for this, but the one we want is `spline`.

### 2. Set the curves

Having set spline as the `calcMode` we can now specify a timing curve for each portion of the animation motion. We do this using the `keySplines` attribute. This takes a semi-colon separated list of bezier curve points.

You can use an online calculator to work out the four values that represent a bezier curve. Here's one: <https://cubic-bezier.com>

So, each bezier curve needs four values. These are supplied with spaces between them. For ease of reference:

Ease-in: 0 0 .58 1
Ease-out: 0.42 0 1 1

We need to specify a curve for each portion of the animation, that is, each bit between the points we gave in the `values` and `keyTimes` attributes. The example we've been following might have something like this:

```html
keySplines="0.42 0 1 1; 0 0 0.58 1; 0.42 0 1 1; 0 0 0.58 1; 0.42 0 1 1"
```

### 3. Test it.

How does that look?

You should have a full `<animate>` element that looks something like this:

```html
<animate
  attributeName="cy"
  from="100"
  to="900"
  dur="2s"
  begin="click"
  fill="freeze"
  calcMode="spline"
  values="100; 900; 600; 900; 750; 900"
  keyTimes="0; 0.35; 0.55; 0.75; 0.87; 1.0"
  keySplines="0.42 0 1 1;
  0 0 0.58 1;
  0.42 0 1 1;
  0 0 0.58 1;
  0.42 0 1 1"
/>
```

## Experiment

You can embed more than one animation element in a shape

You can use `<animate>` elements to animate the values of filters and gradients

There's a very detailed run through of lots of SVG animation stuff on CSS tricks that's definitely worth a read if you want to take this further: <https://css-tricks.com/guide-svg-animations-smil/>

We also have an excellent book in the library and available electronically - SVG animations: from common UX implementations to complex responsive animation by Sarah Drasner.

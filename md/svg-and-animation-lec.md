# SVGs and Animation

---

## What is an SVG?

### Scalable Vector Graphic

Vector - comprised of numbers representing paths and fills - not pixels

---

## Why SVG?

* Crisp on any device size / resolution
* Supported in all modern browsers
* Fairly easy to make and edit
* Can manipulate with CSS and JS

---

## SVGs are XML

??  

XML = Extensible Markup Language  
HTML is based in this  
It means elements made of tags  

---

## An Example

```html
<svg width="200" viewBox="0 0 200 200">
  <rect x="10" y="10" width="180" height="180" fill="red" />
</svg>
```

---

## ViewBox?

```html
<svg width="200" viewBox="0 0 200 200">
```

This is like the viewport of mobile browsers.  
It is the window through which we view the SVG.  
The four numbers represent the top left x and y, and the width and height.  
The viewbox can then be scaled using the width and height attributes of the svg object.  

---

## Some SVG Elements

### Shapes

```html
<rect x="10" y="10" width="180" height="180" fill="red" />
<circle cx="300" cy="100" r="90" fill='blue' />
<ellipse cx="100" cy="300" rx="90" ry="50" fill='green' />
<polygon points="210,210 390,390 390,210 210,390" fill='yellow' />
```


### Gradients
```html
<linearGradient id="linGradient" gradientTransform="rotate(90)">
  <stop offset="5%"  stop-color="gold" />
  <stop offset="95%" stop-color="red" />
</linearGradient>
```
```html
<RadialGradient id="radGradient">
  <stop offset="5%"  stop-color="gold" />
  <stop offset="95%" stop-color="red" />
</RadialGradient>
```


### Filters
Use a `filter` element to composite a number of filter effects.

```html
<filter id='blurFilter'>
  <feGaussianBlur stdDeviation="5" />
</filter>
```
Filters include blur, lighting, drop shadow, distortion and more.

---

## Animation

There are several methods available.


### Using CSS

You can use CSS transitions and @keyframe animations.

Just give your SVG shapes class names or ids to select them with CSS.


### Using the SVG `animate` element

```html
<ellipse cx="100" cy="300" rx="90" ry="50" fill='green'>
  <animate attributeName="rx" values="90;50;90" dur="1s" repeatCount="indefinite" />
  <animate attributeName="ry" values="50;90;50" dur="1s" repeatCount="indefinite" />
</ellipse>
```

You can animate attributes of filters and gradients too.


### Using Greensock

Greensock can animate SVG elements as normal  
Includes attributes like `fill`  

Note: Greensock can also animate object properties, which can be useful to animating the points of a polygon or path.  

---

## Some SVG Help

There are third-party libraries for working with SVGs.    

Snap.svg <http://snapsvg.io>  
SVG.js <https://svgjs.com/docs/3.0/>  
SVGO <https://jakearchibald.github.io/svgomg/>  

---

## Further Resources  

<div style='text-align: left'>

Sarah Drasner (2017) SVG Animations: From common UX implementations to complex responsive animation  
Jake Giltsoff (n.d.) SVG On The Web - A Practical Guide <https://svgontheweb.com>  
Chris Coyier (2017) Animating SVG with CSS <https://css-tricks.com/animating-svg-css/>  
Mozilla (n.d.) MDN Reference on SVG <https://developer.mozilla.org/en-US/docs/Web/SVG>
 
</div>

---

## Recap
SVG = Scalable Vector Graphics  
Low filesize, high fidelity  
Stylable and Animatable  

---

# Thank You

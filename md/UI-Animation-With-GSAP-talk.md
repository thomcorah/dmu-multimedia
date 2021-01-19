# UI Animation With GSAP

GSAP is a suite of tools from Greensock that make it easier to create performant and complex animations on the web.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=af36d9a3-2c1e-4f7e-b3b4-acb4011a4368&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

- Greensock have been doing web animation for ages - originally for Flash
- They provide more complex easing than the standard CSS animations
- You can sync animations on a timeline
- Fixes some cross-browser issues with CSS animation
- More advanced functionality than CSS animation alone

## Including GSAP

Just include their js script

```HTML
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js">
</script>
```

Or download it from their website and load it locally.

Make sure your own code comes after this.

## A Simple Animation

With the Greensock script included, you now have access to the `gsap` object in your own JS.

The `gsap` object includes a `to()` method that can perform simple animations.

It needs to know what thing(s) you're animating, and what the parameters are.

```js
gsap.to(things - to - animate, parameters);
```

To specify the things, you can pass in...

- an element stored in a variable

```JS
let mainMenu = document.getElementById('mainMenu');

gsap.to(mainMenu, parameters);
```

- an array of elements

```js
let mainMenu = document.getElementById("mainMenu");

let heading = document.getElementById("title");

gsap.to([mainMenu, heading], parameters);
```

- a css selector for an element(s)

```js
gsap.to(".menu", parameters);
```

The **parameters** are passed as an object of key:value pairs.

They can be css properties to change as well as some special properties such as `duration`.

This example will select all members of the `menu` class, and change the value of their `x` properties to 100 over 1 second.

```js
gsap.to(".menu", { x: 100, duration: 1 });
```

**Animate From**

You can also animate from a given state.

This can be useful if you want to animate an element onto the screen.

This snippet will have the elements start with their `x` properties at 100 and then animate to their normal `x` value over 1 second.

```js
gsap.from(".menu", { x: 100, duration: 1 });
```

## Easing

Greensock features powerful easing algorithms. Use the 'ease' option and then choose from a range of timing functions.

<https://greensock.com/ease-visualizer>

These can add personality to your thing.

## Stagger

Greensock can stagger the start of an animation on a number of items.

For example, you want to animate the introduction of your menu items, having them come in one at a time.

Select them all together with their class name and stagger the animation.

Avoids writing lots of individual animations. These menu items will each have their animation start 0.2 seconds after the previous one.

```js
gsap.from(".menu", {
  x: 100,
  duration: 1,
  stagger: 0.2,
});
```

## Further Reading

The getting started guide from Greensock.  
<https://greensock.com/get-started/>

This post from Sarah Drasner.  
<https://css-tricks.com/how-to-animate-on-the-web-with-greensock/>

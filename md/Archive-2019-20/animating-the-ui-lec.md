# Animating the UI

---

## Animating the UI

* Recap Transitions
* Recap Animations
* Third-party animation tool - Greensock

---

## CSS Transitions

A transition tells the browser that if a property on an object changes, animate the change over time.

```css
.box {
  transition: width 1s;
}
```

---

## CSS Animation

More complex than transitions.  

We define an animation as a series of keyframes.

```css
@keyframes flash {
  0% {
    background-color: red;
  }

  100% {
    background-color: blue;
  }
}
```


And then apply the animation to an object

```css
.box {
  animation-name: flash;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
}
```

---

# Greensock
<https://greensock.com>  

---

## Greensock

* Greensock have been doing web animation for ages - originally for Flash
* They provide more complex easing than the standard CSS animations
* You can sync animations on a timeline
* Fixes some cross-browser issues with CSS animation
* More advanced functionality than CSS animation alone


## Including Greensock  
Just include their js script

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js">
</script>
```

Or download it from their website and load it locally


## A Simple Animation

With the Greensock script included, you now have access to the `gsap` object in your JS.  

The `gsap` object includes a `to()` method that can perform simple animations.  

It needs to know what thing(s) you're animating, and what the parameters are.  

```js
gsap.to(things-to-animate, parameters);
```


## Selecting the thing(s)  
You can pass in...

an element stored in a variable

```JS
let mainMenu = document.getElementById('mainMenu');

gsap.to(mainMenu, parameters);
```


an array of elements
```js
let mainMenu = document.getElementById('mainMenu');

let heading = document.getElementById('title');

gsap.to([mainMenu, heading], parameters);
```


a css selector for an element(s)
```js
gsap.to('.menu', parameters);
```


The parameters are passed as an object of key:value pairs.  

The can be css properties to change  

As well as some special properties such as `duration`.

```js
gsap.to('.menu', {x: 100, duration: 1});
```

---

## Animate From
You can also animate from a given state.  

This can be useful if you want to animate an element onto the screen.  

```js
gsap.from('.menu', {x: 100, duration: 1});
```

---

## Easing

Greensock features powerful easing algorithms.  

<https://greensock.com/ease-visualizer>  

These can add personality to your thing.

---

## Stagger

Greensock can stagger the start of an animation on a number of items.  

You want to animate the introduction of your menu items, having them come in one at a time.   

Select them all together with their class name and stagger the animation.   

Avoids writing lots of individual animations.  

```js
gsap.from('.menu', {
  x: 100,
  duration: 1,
  stagger: 0.2
});
```

---

## Further Reading

The getting started guide from Greensock.  
<https://greensock.com/get-started/>  

This post from Sarah Drasner.  
<https://css-tricks.com/how-to-animate-on-the-web-with-greensock/>

---

## Any Questions?

---

# Thank You

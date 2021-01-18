# CSS Keyframe Animations

Keyframe animations provide a more detailed way of moving objects on the screen than the more simple CSS Transitions.

## Creating an Animation

Animations are created separately to elements. They can then be applied to elements in different ways.

An animation is created using the `@keyframes` declaration, specifying a name for the animation, and then stating what changes over the course of the animation.

Those first two bits are quite simple. Here's how we would create a keyframe animation called 'colourShift'.

```css
@keyframes colourShift {
  /* We detail the changes in here */
}
```

## Keyframes

We describe what changes over the animation with what are called keyframes. A keyframe is any frame of an animation that marks a point of change. By detailing just these frames, we can let the browser fill in the rest.

For example, we might want an animation where an element starts off red, is green by two thirds of the way though, and then red again by the end.

We specify points in the duration of the animation as percentages, so the above would translate to:

```CSS
@keyframes colourShift {
  0% {
    background-color: red;
  }
  66% {
    background-color: green;
  }
  100% {
    background-color: red;
  }
}
```

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

We can also mix in other properties that we want to animate. We don't need to specify all properties in all keyframes - just the ones that mark points of change for that particular property.

```CSS
@keyframes colourShift {
  0% {
    background-color: red;
    font-size: 10px;
  }
  66% {
    background-color: green;
  }
  100% {
    background-color: red;
    font-size: 100px;
  }
}
```

## Applying an Animation

Now that we've got an animation defined, we need to apply it to an element. To do this, we need to tell the browser at least two things:

1. Which animation are we applying
2. How long will it last

We can do these two things using two CSS properties:

```CSS
div {
  animation-name: colourShift;
  animation-duration: 2s;
}
```

Or, we can combine into a single line with the shorthand `animation` property:

```CSS
div {
  animation: colourShift 2s;
}
```

## Animation Options

There are a number of other options we can set regarding this animation.

### Delay

As with transitions, we can set a delay before the animation starts. To do this, we can use the `animation-delay` property, or tag the delay length onto the end of the values for `animation`, making sure it comes after the duration so the browser knows which is which.

```CSS
div {
  animation: colourShift 2s 1s;
}
```

### Timing Function

We can specify a timing function, just as with a transition. This specifies the rate of change over the duration of the animation. As well as the preset curves, we can also specify our own using the bezier curve function, as the `steps` function which will play an animation in discrete steps rather than as a continuous progression.

You can use the `animation-timing-function` property, or add it to `animation`:

```CSS
div {
  animation: colourShift 2s 1s linear;
}
```

### Iteration Count

We can have our animation loop. To do so, we need to tell the browser how many times we want it to loop, or use the `infinite` keyword if you want it to just keep going. You can use the `animation-iteration-count` property, or add it to `animation`:

```CSS
div {
  animation: colourShift 2s 1s linear infinite;
}
```

### Animation Direction

You can have the animation play backwards, or in the case of a looping animation have it alternate with each loop creating a bounce effect. Use the `animation-direction` property or the `animation` shorthand:

```CSS
div {
  animation: colourShift 2s 1s linear infinite alternate;
}
```

Possible values are `normal`, `reverse`, `alternate`, or `alternate-reverse`. The default is `normal`.

### Animation Fill Mode

This is a little trickier. When you apply an animation, you are changing the value of one or more CSS properties of an element. However, those properties don't stay changed when the animation ends - the element reverts back to the CSS that's been applied normally.

By having the animation fill forward, you can persist the end state of the animation after the animation ends. Similarly, if your animation has a delay, you can pull the values at the start of the animation back to the beginning of the delay.

Use the `animation-fill-mode` property, or add the appropriate keyword to the `animation` property.

```CSS
div {
  animation: colourShift 2s 1s linear infinite alternate forwards;
}
```

Possible values are `forwards`, `backwards`, `both`, or `none`. The default is `none`.

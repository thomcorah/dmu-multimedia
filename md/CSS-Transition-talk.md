# CSS Transitions

CSS transitions let the browser change the value of a property over time. For example, the background colour can change from red to blue over two seconds, instead of immediately. This can be useful as a simple way of animating aspects of your user interface to add character and direction for your users.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=fea2fd7f-39dc-4a55-9985-acb100da004d&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## What is a Transition?

A transition lets you change the value of a CSS property over time. Or more specifically, tell the browser that if the value of the property changes, rather than happen immediately it should happen over a specified timescale.

For example, if the position of an element changes, this can happen over half a second, or the width, or the background colour.

There are two key things you need to tell the browser about a transition:

1. What property is transitioning.
2. Over how long should it transition.

## Setting up a Transition

A transition is achieved using the `transition` CSS property. You specify the property to transition and the duration as values.

```css
.menu {
  transition: width 1s;
}
```

Notice the unit of time here, s for second. You can have decimals here too, for example, 0.3s.

And that's it, if the width changes, it will happen over a second, rather than instantly.

## Delay a Transition

You can delay a transition. That is, when the value of the property changes, rather than start the transition immediate, you can have the browser wait some amount of time before starting.

You can do this by adding another duration onto the end of the values for the `transition` property:

```css
.menu {
  transition: width 1s 2s;
}
```

This will now wait for two seconds after the value changes to start the transition. The value for the delay has to come after that for the duration.

## Transition Timing Function

You can also specify a timing function to use for the transition. This is the rate of change over the course of the transition. For example, you might want your animation to start off quickly but then slow down towards the end. The transition timing function can have the following values:

| value                 | description                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------- |
| ease                  | specifies a transition effect with a slow start, then fast, then end slowly (this is default) |
| linear                | specifies a transition effect with the same speed from start to end                           |
| ease-in               | specifies a transition effect with a slow start                                               |
| ease-out              | specifies a transition effect with a slow end                                                 |
| ease-in-out           | specifies a transition effect with a slow start and end                                       |
| cubic-bezier(n,n,n,n) | lets you define your own values in a cubic-bezier function                                    |

That last one is interesting. There are various web tools that will let you plot a timing curve visually, and then give you the numbers to use for a cubic bezier curve. For example: <https://cubic-bezier.com>

You can add the function you want to the values for the `transition` property:

```css
.menu {
  transition: width 1s linear;
}
```

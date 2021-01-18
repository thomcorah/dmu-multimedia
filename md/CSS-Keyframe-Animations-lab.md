# CSS Keyframe Animations

Transitions just go from A to B. Keyframe animations can be much more involved. Let's create an animation that will gently fade the background colour of our site through a gradient.

There is an example here: <https://thomcorah.github.io/dmu-multimedia/resources/css-animation/backgroundGradient.html>

## 1. Create a new HTML document

## 2. Create a container element

This can just be a `<div>`. Make it full width, full height. You might want to use the `vh` unit to do this.

## 3. Give it a background gradient

You can generate the css code needed to add a background gradient here: <https://cssgradient.io/>

Load it in a browser, does it work?

## 4. Make the background massive

This is going to work by having the background bigger than the window and animating its position. Using the `background-size` property of the `<div>`, set its background size to 400% in both directions.

## 5. Start writing your animation

In order to create an animation with CSS, we use `@keyframes`. This is then followed by the name of the animation (you make this up) and then curly braces.

See this page on CSS Tricks for more on creating CSS animations: <https://css-tricks.com/almanac/properties/a/animation/>

## 6. Set your starting keyframe

The first keyframe is at 0%. We're going to animate the `background-position` property of the container. At the start of the animation, this should have a value of `0% 50%`.

Have a look at the page on W3Schools about the `background-position` property if you're not sure what you're doing here: <https://www.w3schools.com/cssref/pr_background-position.asp>

## 7. Set your midway keyframe

Halfway through the animation, we want the `background-position` property to have a value of `100% 50%`.

## 8. Set your finishing keyframe

This is just the same as the start point, so you can use the same values.

## 9. Add the animation to the container

In the css rules for the container, you now need to add the animation. You do this using the `animation` property. It needs to know at least two things:

1. The name of the animation to run
2. The duration of the animation

But we also want the animation to loop indefinitely, so add the `infinite` keyword on there too.

## 10. Test in the browser

Does it work?

# Experiment

There is unsurprisingly a lot more you an do with animation. You could use it to introduce a menu to your page for example: <https://thomcorah.github.io/dmu-multimedia/resources/css-animation/animation.html>

There's a great article on CSS Tricks with a few, well, tricks for CSS animations here: <https://css-tricks.com/css-animation-tricks/>

And this article on A List Apart about web animation generally is really interesting: <https://alistapart.com/article/web-animation-at-work/>

So, get stuck in, find some tutorials, have a play.

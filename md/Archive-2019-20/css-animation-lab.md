# Animation with CSS

There are two ways to make things move or change over time with CSS: transitions and animations.

## Transition

We're going to create a little menu button that expands to a full menu when hovered over, or clicked on mobile as there is no hover.

There is an example here: <https://thomcorah.github.io/dmu-multimedia/resources/css-animation/transition.html>

### 1. Create a new html document and set it up
Step-by-step on setting up a new project here: <https://thomcorah.github.io/dmu-multimedia/lab-reader.html?starting-a-project-short.md>

### 2. Create your html structure
We need a menu item, it could be a `<nav>`, with some menu items inside. These could be `<div>`s.

### 3. Style your menu
We want it to:
* take up 70% of the width of the screen
* be full height (tip: use 100vh for the height)
* have a background colour

Make your menu items look however you fancy.

### 4. Hide the menu
When not in use, we want the menu to be a little box in the corner. Copy and paste the rules you just did for the menu somewhere else, we're going to need them in a bit.

* Width and height should actually be small, like 50px
* Make the background colour something different

### 5. Hide the text
Now that the menu is small, the menu items spill out over the sides! The `overflow` css property of the menu can fix this, set it to hidden.

You might still be able to some of the menu item. Using css, set their `opacity` to 0.

### 6. Create the menu hover state
When the user hovers over the menu, you want to set those first rules you did. Big menu, different background color.

### 7. Create the menu items hover state
Similarly, you want to change the opacity of the menu items back to 1.

Careful though, this shouldn't happen when they hover over a menu item, but over the whole menu.

### 8. Add transitions
We want all those things to transition! Add transition rules for the menu and menu items to transition the width, height, background colour, and opacity rules respectively.

## Animations

Transitions just go from A to B. Animations can be much more involved. Let's create an animation that will gently fade the background colour of our site through a gradient.

There is an example here: <https://thomcorah.github.io/dmu-multimedia/resources/css-animation/backgroundGradient.html>

### 1. Create a new html document

### 2. Create a container element
Make it full width, full height.

### 3. Give it a background gradient
You can generate the css code needed to add a background gradient here: <https://cssgradient.io/>

### 4. Make the background massive
This is going to work by having the background bigger than the window and animating its position. Using the `background-size` property of the container, set its background size to 400% in both directions.

### 5. Start writing your animation
In order to create an animation with CSS, we use `@keyframes`. This is then followed by the name of the animation (you make this up) and then curly braces.

See this page on CSS Tricks for more on creating CSS animations: <https://css-tricks.com/almanac/properties/a/animation/>

### 6. Set your starting keyframe
The first keyframe is at 0%. We're going to animate the `background-position` property of the container. At the start of the animation, this should have a value of `0% 50%`.

### 7. Set your midway keyframe
Halfway through the animation, we want the `background-position` property to have a value of `100% 50%`.

### 8. Set your finishing keyframe
This is just the same as the start point, so you can use the same values.

### 9. Add the animation to the container
In the css rules for the container, you now need to add the animation. You do this using the `animation` property. It needs to know at least two things:
1. The name of the animation to run
2. The duration of the animation

But we also want the animation to loop indefinitely, so add the `infinite` keyword on there too.

### 10. Test in the browser
Does it work

## Experiment
There is unsurprisingly a lot more you an do with animation. You could use it to introduce a menu to your page for example: <https://thomcorah.github.io/dmu-multimedia/resources/css-animation/animation.html>

There's a great article on CSS Tricks with a few, well, tricks for CSS animations here: <https://css-tricks.com/css-animation-tricks/>

And this article on A List Apart about web animation generally is really interesting: <https://alistapart.com/article/web-animation-at-work/>

So, get stuck in, find some tutorials, have a play.

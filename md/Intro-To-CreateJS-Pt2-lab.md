# Intro to CreateJS - Part 2

This follows on from Part 1. If you've not completed that, you can find it here: <https://thomcorah.github.io/dmu-multimedia/lab-reader.html?Intro-To-CreateJS-lab.md>

In Part 1, we got setup with CreateJS, had it import all the assets for our Pong game, and showed the starting title screen.

Now we need to be able to show the credits screen, and do the actual gameplay.

## Showing the Credits

You should already have an empty function setup that will be called when the user clicks on the credits button.

The credits screen is just a full screen image. We want to position it off the right side of the canvas and then animate it in. We'll then listen for a click anywhere on it to get rid of it again, sliding it back off the right side.

### 1. Place the image

We've already loaded the image, it's called 'credits'. We saved it on the `graphics` object. We just need to set its x property to be equal to the width of the canvas so that it's just off the right-hand side.

```JS
graphics.credits.x = 480;
```

### 2. Add it to the stage

Yep, we need to add the graphic to the stage.

```JS
stage.addChild(graphics.credits);
```

### 3. Animate them in

CreateJS comes with Tween, making it a bit easier for us to do animation. There are two steps here, kind of. We need to use Tween to first get the credits image, and then move it to where we want.

```JS
createjs.Tween.get(graphics.credits).to({ x: 0 }, 300);
```

The `get()` part of this is quite self-explanatory. The `to()` however is a little different. It takes two arguments. The first is an object containing all the parameters we want to animate, and the value they should end up at. We just want to move sideways, so it's only x that we're interested in. The second parameter is how long to take for this animation. In this case, it's going to be 300ms.

### 4. Hide the credits

We need the user to be able to get rid of the credits screen so that they can return to the title screen and then play the game. For that, we're going to set up an event listener on the credits screen that will listen out for a click. Clicking anywhere on the screen will trigger this, and run a function to hide the credits screen.

```JS
graphics.credits.addEventListener("click", hideCredits);
```

The `hideCredits()` function needs to do the opposite of `showCredits()`.

1. animate the graphic off the canvas
2. remove the graphic from the stage

### 4.1. Animate the graphic off the canvas

You can use Tween again for this. However, this time we want to do something after the animation has finished. We can achieve this by adding another function call to the end of the chain, `call()`. We provide the name of a function to call after the animation has finished.

```JS
createjs.Tween.get(graphics.credits).to({ x: 480 }, 300).call(rmvCredits);
```

### 4.2. Remove the graphic

In the `rmvCredits()` function, we need to remove the credits graphic from the stage. We used `addChild()` to add it, we can use `removeChild()` to remove it.

```JS
stage.removeChild(graphics.credits);
```

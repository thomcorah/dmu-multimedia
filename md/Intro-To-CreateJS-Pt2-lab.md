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

## Enter Gameplay

We need to get rid of the title view, get set up for game play, and then do the gameplay.

## 1. Get rid of the title view

You should already have a function that's run when the player clicks the start button. In that function, we want to animate the title view off the top of the screen, and then run a function when the animation's finished.

```JS
createjs.Tween.get(TitleView).to({ y: -320 }, 300).call(addGameView);
```

Note that the TitleView container has everything **except** the background in it, so we keep that.

## 2. Setup for Gameplay

Create an `addGameView()` function.

We need to do a few things in here. First off is to remove the TitleView from the stage.

```JS
stage.removeChild(TitleView);
```

The TitleView and credits screen are still sat in memory though, and we don't need them anymore, so we can get rid of them completely.

```JS
TitleView = null;
graphics.credits = null;
```

We now need to position a few grapics - the player and CPU paddles, and the ball. In each case, we need to set the x and y positions.

```JS
graphics.player.x = 2;
graphics.player.y = 160 - 37.5;
graphics.cpu.x = 480 - 25;
graphics.cpu.y = 160 - 37.5;
graphics.ball.x = 240 - 15;
graphics.ball.y = 160 - 15;
```

We also want to show the player the score for them and the CPU as the game plays. For this, we can have CreateJS create a bit of text for us. To do this, we create a new instance of the Text object. We need to tell it three things: what the text is to start with, what style (variant, font size, font), and what colour.

We need to be able to refer to these bits of text from elsewhere too, so we need to save them as global variables.

So, up at the to of the file, create a variable for the playerScore and one for the cpuScore.

```JS
let playerScore;
let cpuScore;
```

Then in our function, we instantiate each of these and set their position.

```JS
playerScore = new createjs.Text("0", "bold 20px Arial", "#f5ed09");
playerScore.x = 211;
playerScore.y = 20;

cpuScore = new createjs.Text("0", "bold 20px Arial", "#f5ed09");
cpuScore.x = 262;
cpuScore.y = 20;
```

In both cases, the text will start off saying "0", be bold, 20px high, use Arial, and be a shade of yellow.

So, we've positioned the paddles and ball, and created and positioned the score text. Now we need to add it all to the stage. We can do so in one go.

```JS
stage.addChild(
  playerScore,
  cpuScore,
  graphics.player,
  graphics.cpu,
  graphics.ball
);
```

That's the gameplay screen all set up. Now we need to listen for a click on it to start things going.

```JS
graphics.bg.addEventListener("click", startGame);
```

### 3. Start the game

We need a function called `startGame()`, because that's what we put in the event listener above. This function will do two things:

1. remove that event listener
2. start an update timer going that will have everything moving

To remove the event listener, it's almost exactly the same as adding it.

```JS
graphics.bg.removeEventListener("click", startGame);
```

As for the update timer, we already have the Ticker, keeping a constant 30fps for us. We want to add an event listener to it that will run an update function we're about to create.

```JS
createjs.Ticker.addEventListener("tick", update);
```

## Update the game

Now we need to create that `update()` function and have it update everything every frame.

### 1. Move the things

We've got three things to move

1. the player's paddle
2. the ball
3. the computer's paddle

Moving the players paddle is easy. The player will be controlling it with the mouse, so we just need it to match the vertical position of the mouse.

```JS
graphics.player.y = stage.mouseY - 40;
```

We take 40 off it so that the middle of the paddle matches up with the mouse position.

Next we move the ball. The ball can move in any direction. We can represent movement in any direction with two numbers - one for distance in the x direction, and one for distance in the y direction. We therefore need two more global variables, xSpeed and ySpeed. Create these at the top of the file. Give them a starting value of 5 and 0 respectively.

```JS
let xSpeed - 5;
let ySpeed = 0;
```

Moving the ball is now just a case of adding these numbers on to the relevant property - x or y.

```JS
graphics.ball.x = graphics.ball.x + xSpeed;
graphics.ball.y = graphics.ball.y + ySpeed;
```

Now it's the CPU's turn to move. The CPU will always move towards the ball at a fixed speed. The faster this speed, the easier it is for the CPU to play, and the harder it is for the player. We need to create a global variable to keep track of this. So, do this at the top of the file and give it a value. 5 perhaps.

```JS
cpuSpeed = 5;
```

Now we need to see if the CPU paddle needs to move up or down. This will depend on whether it is already above or below the level of the ball. We can use an if statement here. If the CPU paddle is above the level of the ball, it needs to move down. As the y value starts from 0 at the top of the screen and gets bigger as we go down, this means we need to add the cpuSpeed onto the value of the CPU paddle's y property.

If the paddle is lower than the ball, we need to go up, so we subtract CPU speed from the y value of the paddle.

```JS
if (graphics.cpu.y < graphics.ball.y) {
  graphics.cpu.y = graphics.cpu.y + cpuSpeed;
} else if (graphics.cpu.y > graphics.ball.y) {
  graphics.cpu.y = graphics.cpu.y - cpuSpeed;
}
```

## 2. See if the ball has hit a wall

If the ball hits the top or bottom wall of the game area, it will bounce off. That first part is fairly easy, we just check the y position. If it's less than 0 it's hit the top wall, if it's greater than the height of our canvas - the height of the ball, its hit the bottom.

But then how do we make it bounce. Well, if it was travelling up, it needs to switch to travelling down, and visa versa. It's speed horizontally will remain the same. So, to bounce of the top or bottom wall, we need to invert the ySpeed value.

```JS
ySpeed = -ySpeed;
```

Given that this is the same whether we hit the top or bottom wall, we can have a single if statement with a condition that checks for both of these. We want something like:

```JS
if(top wall hit OR bottom wall hit){
  ySpeed = -ySpeed;
}
```

In conditional statements, we can represent OR with a double bar: ||

Incidentally, AND would be &&.

We also want to play a sound if we hit a wall too. We can do that using CreateJS's built in sound player. We've already loaded our sounds and given them names. The one we want is called "wall". We can play it using the `play()` function.

```JS
createjs.Sound.play("wall");
```

So, the whole thing to bounce of the top or bottom walls:

```JS
if (graphics.ball.y < 0 || graphics.ball.y + 30 > 320) {
  ySpeed = -ySpeed;
  createjs.Sound.play("wall");
}
```

### 3. See if the ball has gone off an end AKA somebody has scored

Let's start with the ball going off the left edge - the CPU has scored.

We can check for this easily - is the ball's x value less than 0.

If it is we need to update the CPU's score, play a sound, and reset the game ready for another round.

To update the score, we're actually going to grab the text out of the score display, convert it to a number, add 1 to it, and put it back. All in one go. We've got a variable that's holding the text display for us, we can access the text that's in it with its `text` property.

```JS
cpuScore.text = parseInt(cpuScore.text + 1);
```

We need to play the sound. The one we want for when the CPU scores is called "enemyScore".

```JS
createjs.Sound.play("enemyScore");
```

And then there are a bunch of things we need to do to reset the area ready for another round, so we'll put them in another function, and just call it from here. That means our bit of code for the CPU scoring looks like this:

```JS
if (graphics.ball.x < 0) {
  cpuScore.text = parseInt(cpuScore.text + 1);
  createjs.Sound.play("enemyScore");
  reset();
}
```

We've got something similar going on for the player scoring. We see if the ball has gone off the right of the canvas, update the player's score, and play the "playerScore" sound before getting ready for another round.

```JS
if (graphics.ball.x + 30 > 480) {
  playerScore.text = parseInt(playerScore.text + 1);
  reset();
  createjs.Sound.play("playerScore");
}
```

### 4. See if the ball has it a paddle

The last of our hit checks, we need to know if the ball has hit a paddle, and if it has, send it back in the opposite direction. Hitting a wall or edge was easy to detect - we just compared a single property. However, the ball and paddle are 2D shapes that have tops and bottoms, so things get a little complicated. Let's take hitting the CPU paddle as an example. We need to check if:

1. The right edge of the ball is beyond the left edge of the paddle, AND
2. The left edge of the ball is before the right edge of the paddle, AND
3. The bottom edge of the ball is below the top edge of the paddle, AND
4. The top edge of the ball is above the bottom edge of the paddle.

Maybe let that sink in a little.

This gives us a relatively complex if condition that uses x and y properties and width and heights and a few &&s.

And if we have hit the paddle, we reverse the ball in the x direction, and play a sound.

```JS
if (
  graphics.ball.x + 30 > graphics.cpu.x &&
  graphics.ball.x < graphics.cpu.x + 22 &&
  graphics.ball.y + 30  >= graphics.cpu.y &&
  graphics.ball.y < graphics.cpu.y + 75
) {
  xSpeed = -xSpeed;
  createjs.Sound.play("hit");
}
```

We do the same for the player paddle.

```JS
if (
  graphics.ball.x <= graphics.player.x + 22 &&
  graphics.ball.x + 30 > graphics.player.x &&
  graphics.ball.y + 30 >= graphics.player.y &&
  graphics.ball.y < graphics.player.y + 75
) {
  xSpeed = -xSpeed;
  createjs.Sound.play("hit");
}
```

### 5. Keep the paddle in the game

One thing you might have noticed is that because the canvas is likely shorter than the browser window, the paddle can go off the bottom of the canvas if the mouse does. This is a minor point, but we want to keep the paddle in the game area.

To do this, we just check if it's trying to go below the bottom of the canvas, and if it is, set it back to the bottom of the canvas.

```JS
if (graphics.player.y >= 249) {
  graphics.player.y = 249;
}
```

Alternatively, we could have checked the mouses y value earlier, and only applied this to the paddle if it was within the boundaries we wanted.

### 6. Detecting the end of the game.

The game will end when either the player or the CPU gets 10 points. All we're going to do is flash a "win" or "lose" graphic on the screen accordingly. However, we'll do that in another function. For now, we just need to know if either paddle has won, and run the function. We'll call the function `alert()`. We need to tell the `alert()` function which message to display, so we'll pass this in.

```JS
if (playerScore.text == "10") {
  alert("win");
}

if (cpuScore.text == "10") {
  alert("lose");
}
```

That's the end of the update function.

## Resetting the Game

Whenever either paddle scores, we need to reset the game ready for the next round. There are several things we need to do here:

1. Change xSpeed so the ball goes towards the player that scored
2. Reposition the paddles and ball back to their starting positions
3. Stop the Ticker from running the update function, and listen for a click to start the game again.

In our update function we told the browser to run a function called `reset()` when either paddle scores, so make sure you have that. All of these things will happen inside that function.

### 1. Change xSpeed so the ball goes towards the player that scored

This is just a case of inverting the value of xSpeed.

```JS
xSpeed = -xSpeed;
```

### 2. Reposition the paddles and ball back to their starting positions

Resetting the position of the paddles and ball just means putting them back where they started.

```JS
graphics.ball.x = 240 - 15;
graphics.ball.y = 160 - 15;
graphics.player.y = 160 - 37.5;
graphics.cpu.y = 160 - 37.5;
```

### 3. Stop the Ticker from running the update function, and listen for a click to start the game again.

We're going to wait for the player to click the screen before kicking play off again. We don't want our update function running in the meantime, so we need to remove the event listener from the Ticker, and add one to the screen that will start the game up when the user clicks it.

```JS
createjs.Ticker.removeEventListener("tick", update);
graphics.bg.addEventListener("click", startGame);
```

## Ending the Game

The game ends when either paddle scores 10 points. When this happens, we'll stop things running and show a "win" or "lose" message as appropriate. In the update function, we asked the browser to run a function called `alert()`, passing in "win" or "lose".

Note that this function needs to be able to accept that bit of data, so you'll need to create a variable to hold it.

```JS
alert = (outcome) => {

}
```

### 1. Stop things running

There are two things we need to stop. The first is the Ticker running the update function.

```JS
createjs.Ticker.removeEventListener("tick", update);
```

It might be the case that just before this `alert()` function was run, the `reset()` function got called and so there's now an event listener waiting for a click on the screen to play another round. We don't want that to happen, so we need to remove that event listener too.

```JS
graphics.bg.removeEventListener("click", startGame);
```

### 2. Show a message

We have both versions of the message as a graphic, so we need to position the appropriate graphic and show it. We use `if` to determine which one, based on what was passed into the function.

```JS
if (outcome == "win") {
  graphics.win.x = 140;
  graphics.win.y = -90;

  stage.addChild(graphics.win);
  createjs.Tween.get(graphics.win).to({ y: 115 }, 300);
} else {
  graphics.lose.x = 140;
  graphics.lose.y = -90;

  stage.addChild(graphics.lose);
  createjs.Tween.get(graphics.lose).to({ y: 115 }, 300);
}
```

## PHEW!!!

And that's it. If all is well, you should have a working game of Pong. If it's not working, pay attention to errors in the console, and get your debug hat on :)

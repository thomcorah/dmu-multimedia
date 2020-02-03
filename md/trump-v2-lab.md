# An Introduction to JavaScript
## Developing Get Trump

Last week you created a game where you had an object (Donald Trump) moving randomly about the screen. If you were able to click or tap on it, you were taken to another web page.

If you've not completed that lab, do so now. You can find it here: <https://thomcorah.github.io/dmu-multimedia/lab-reader.html?trump-v1-lab.md>

This week you're going to add to it. Here's what we want to happen:

1. The game will have a countdown timer. The player will only have 30 seconds, with the remaining time displayed on the screen.
2. Instead of the object being a link to another page, clicking it will score the player points.
3. When the timer runs out, a game over screen will tell the player how many points they scored.

You can see a completed example here: <https://thomcorah.github.io/dmu-multimedia/resources/trump/getTrumpv2.html>

## Countdown Timer

### 1. Add an HTML element to display the count down.
This can just be a `<p>` element. Make sure it has an id so you can refer to it from your JS. Put 30s inside it and use CSS to style it to your liking.

### 2. Create a function to update the time
In your JS, create a new function, whose job will be to update the time. For a reminder on creating functions, see here: <https://guide.freecodecamp.org/javascript/arrow-functions/>

### 3. Create a timer
Use `setInterval` to create a timer that runs that function every second.

### 4. Check it works
Put a `console.log()` inside the function to check it works.

### 5. Create a variable to track the time remaining
This shouldn't be in any functions, you want this to happen when the page first loads. Create the variable and set its value to 30.

### 6. Update the variable with each second
Inside the function that updates the remaining time, take 1 off that variable.

### 7. Show the user the remaining time
Get a reference to the `<p>` on the page and update its content to show the time remaining.

### 8. Check it works

## Keeping Score

### 1. Get rid of the `<a>` around Trump
We no longer want to go to another page when the user clicks trump, so we just need the `<img>` on its own, no `<a>` element.

Make sure the `<img>` has the id that the `<a>` had so the code that moves him around still works. Make sure your CSS still makes him small enough too.

### 2. Add an HTML element to display the score.
This can just be a `<p>` element. Make sure it has an id so you can refer to it from your JS. Put 0 inside it and use CSS to style it to your liking.  

### 3. Create a variable to track the score
Initialise the score variable with 0.

### 4. Create a function to update the score
Just put a `console.log()` in there for now.

### 5. Add an event listener to Trump that runs the function when clicked
You'll need to get a reference to the Trump image, and then add an event listener that's listening for a click, and runs your updateScore function when it hears one. You refer to W3Schools for some help with Event Listeners: <https://www.w3schools.com/js/js_htmldom_eventlistener.asp>

### 6. Check it works.
Your function should log something to the console whenever you click trump.

### 7. Update the score variable
Inside the function to update the score, add 1 to the score variable.

### 8. Show the player their score.
Get a reference to the new `<p>` on the page and update its content to show the score.

## Game Over Screen

This is going to work by having a full screen fixed element that's hidden to start with, but is shown and updated with the score when the time left reaches 0.

### 1. Create the screen
Create an HTML element and give it an id. This will be the screen. Put a heading in there that says 'Game Over', as well as an empty `<p>` with an id that you'll put the final score in later.

### 2. Style the screen
Using CSS, set the screen's position to fixed, use the `top` and `left` properties to pin it to the top left corner. Set its width and height to that of the screen. Give it a background colour.

Refresh your browser. Your game should completely covered by the game over screen.

Style your 'Game Over' text however you want.

### 3. Hide the screen
When you're happy with how your game over screen looks, hide it. Set it's `display` property to `none` to do this.

### 4. Detect the end of the game
We know its the end of the game when the countdown timer reaches 0. We need a way to detect this and react to it. This is where conditional logic comes in. We're not covering it this year, but it's necessary for this to work.

Find your function that updates the time left variable. Inside that function, but after the other things that are in there, add this code:

```JS
if( timeLeft === 0 ) {
  // Code here will happen if the time is on 0
}
```

In this example, `timeLeft` is the name of the variable that's keeping track of the time remaining. Update this if you called your variable something different.

### 5. Show the game over screen
Inside this `if` block, you want to show your game over screen. You need to get a reference to it and then set its `display` property to `block`.

```JS
document.getElementById('gameOverScreen').style.display = 'block';
```

### 6. Update the score
Still in the `if` block, and just before you show the game over screen, we want to fill in that `<p>` in the game over screen with the final score.

### 7. Test it out.
To test it, you probably want to start off with just 5 seconds on the clock rather than 30.

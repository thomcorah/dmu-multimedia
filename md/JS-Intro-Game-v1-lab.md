# An Introduction to JavaScript

## Making "Get Trump"

In order to introduce you to JavaScript, we're going to make a simple game. Donald Trump turned up at one of his rallies. You're a reporter trying to pin him down to give some honest answers.

You can see a finished version here: <https://thomcorah.github.io/dmu-multimedia/resources/trump/getTrump.html>

You'll need two images for this to work, so download these:  
![Political Rally](https://thomcorah.github.io/dmu-multimedia/resources/trump/img/rally.jpg)  
![Donald Trump](https://thomcorah.github.io/dmu-multimedia/resources/trump/img/trump.png)

## Set the Scene

### 1. Start a new project

Follow the steps here: <https://thomcorah.github.io/dmu-multimedia/lab-reader.html?starting-a-project-short>

### 2. Create your background

You'll need a container that's the full size of the screen. Use `vh` and `vw` units to do this.

Set the background image to the rally.jpg image.

Use `background-size: cover` to size the background image appropriately.

Remove the margin on the body so the background goes right up to the edge.

### 3. Create Trump

Put the trump.png image in using an `img` element. Size it to about 100px wide.

Wrap it in an `<a>` element that will take the user to <https://www.washingtonpost.com/graphics/politics/trump-claims/> when clicked.

### 4. Test it

You should have a full screen background with Donald Trump sat in the top left corner. Try clicking him. Do you go to the other site? Note that it's much easier to get him on mobile!

## Adding the mechanics

This is where we get into JavaScript

### 1. Add your `<script>` element

This goes at the bottom of your page, just before your closing `</body>` tag. Don't forget the closing `</script>` tag. All your JS code will go in between the `<script>` and `</script>` tags.

### 2. Create a moveTrump function

Just an empty function for now.

There's a little guide to creating functions on Free Code Camp: <https://guide.freecodecamp.org/javascript/arrow-functions/>

### 3. Make a timer

Use `setInterval` to run your moveTrump function every 500ms.

There's a page on W3Schools about setInterval: <https://www.w3schools.com/jsref/met_win_setinterval.asp>

### 4. Check it works

Put a `console.log("working")` inside the function. If you refresh your browser you should see "working" written to the console every half a second.

### 5. Get a reference to the trump element

The `<a>` element that the trump picture is inside of will need an id.  
With `document.getElementById()` you can use this id to grab a reference to the element. Save it into a variable though.

### 6. Generate a random horizontal position

In JS, you can create a random number between 0 and 1 with `Math.random()`.

If you multiply this by another number, say 10, you'll have a random number between 0 and 10.

We want a random number between 0 and however wide the screen is.

You can find out how wide the screen is with `window.innerWidth`.

You need a variable that gets assigned a random number between 0 and the width of the screen. (For good measure, you could take 100 off the width of the screen to accommodate for the width of the trump picture).

So, we need: someVariable = randomNumber \* widthOfScreen - 100;

### 7. Generate a random vertical position

This is just the same as above, but using `window.innerHeight` instead.

### 8. Move trump to the new location

You can use JS to set CSS rules on an element. For example, if we'd stored the `<a>` element in a variable called trump:

```JS
trump.style.backgroundColor = 'red';
```

To move something, we can use its transform property.

You can read about transform here: <https://www.w3schools.com/cssref/css3_pr_transform.asp>

We want to set the value of the transform property on the `<a>` element to `translate(x, y)` where x and y are the horizontal and vertical random values we worked out. You need to put `px` on the end of each value for it to work.

You can add some text to a number using +. For example:

```JS
let x = 30;
let newX = x + "px"; // newX will be "30px"
```

### 9. Animate the change

In your CSS, using the transition rule to make sure that any time the transform property on the `<a>` changes the change is animated over 0.2s.

### 10. Check it all works

You should do this as you go along really.

## Going Further

If you got this far, well done. Getting started with JavaScript is a big deal. You could take this game further in a number of ways:

- Make Donald's size dependent on how far up he is so he gets smaller as he gets further away
- Add some sounds
- Have him linger at each location for a random amount of time
- Have him start off moving quickly, but slow down over time.

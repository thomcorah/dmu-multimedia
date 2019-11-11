# Maths Game V2

If you completed the first version of the maths game you have a series of HTML pages that link together to make a quiz. If the player gets any question wrong along the way they get the game over screen. If they make it to the end they win.

We're going to make this work a little better with some JavaScript. We want the player to answer every question, and then be told their score at the end.

This means we need to be able to do a few things:

* Run some JavaScript in response to clicking a button
* Keep track of the player's score between pages
* Show them their score on the final page

One step at a time.

You can see a finished example at <https://thomcorah.github.io/dmu-multimedia/resources/mathsGameV2/q1.html>

## Get Set Up

### 1. Create your project
If you finished the previous version, duplicate it into a new folder.
If you didn't, you can download a finished version here: <https://thomcorah.github.io/dmu-multimedia/resources/mathsGameV1.zip>

Make sure to extract the zip file and then copy to your public_html.

### 2. Open the project up in Atom
Use Open Folder to open the whole project.

## Respond to a button click

### 1. Make a place for your JS
While we're working this out, let's keep things simple and include the JavaScript in the HTML page.

For that you'll need a `<script>` element at the end of the `<body>`.

### 2. Create a function
In order to tell the browser what to do when somebody clicks a button, we need to create a function. We will then tell the browser to run this function.

For now, just create a function that logs something to the console.

There's a little guide to creating functions on Free Code Camp: <https://guide.freecodecamp.org/javascript/arrow-functions/>

In order to log to the console, use `console.log('Hello');`

### 3. Create an Event Listener
To be able to get something to happen when the player clicks a button, we need to add an event listener to it. There are several steps here:

* In your HTML, give the button an id
* In your JS, get a reference to it with `document.getElementById()`
* Tell it to add an event listener
* Tell the event listener what event to listen for ('click'), and what to do when it hears it - the name of your function.

There's a short guide on adding event listeners on W3Schools: <https://www.w3schools.com/js/js_htmldom_eventlistener.asp>

Don't forget, if your buttons are `<a>` elements with a href attribute from V1, remove this as we don't want to leave this page just yet.

### 4. Check it works.
Refresh the browser, click the button, look in the console.

### 5. Right and wrong answers
Now you've got the basic mechanism working, you'll actually need two functions - one for the correct answer and one for the incorrect answers. Create these and add event listeners as appropriate.

### 6. Check it works
Refresh the browser, click all the buttons, look in the console.

## Keeping Score and moving on

### 1. Setting the score
We need a way to store a variable between pages. We can use the browser's local storage for this. We can store data in name-value pairs and they'll be available to any page of our website.

You can read a little about localStorage on this page from MDN: <https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage>

For our first question, we want to set the score to 1 for the correct answer, or 0 for the wrong answer.

### 2. Check it works
You can either log out the value stored in localStorage, or use the Application tab in the Chrome developer tools to dig in to what's been stored in localStorage.

### 3. Navigating to another page
With the score update, we need to go to q2.html. We can do this using the location object in JavaScript. Take a look at this page from W3Schools for pointers: <https://www.w3schools.com/jsref/prop_loc_href.asp>

## Q2 Onwards - Updating the score
When we get to question 2, we need to do things a little differently if the play gets the correct answer:

1. Get the current score
2. Add 1 to it
3. Save the new score

Furthermore, locastorage data is all stored as strings, not numbers, so there's actually a further step in there:

1.5. Convert the score to a number.

### 1. Set up your event handlers and listeners
In q2.html, create your event handlers and listeners: one function for a correct answer, one for a wrong answer, and an event listener on each button.

### 2. Get the score
In the function for the correct answer, before we can update the score we need to find out what it is. We need to retrieve it from localStorage. Refer back to the MDN page to see how to do it: <https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage>

Note: assign this to a variable, it'll make things easier.

### 3. Convert to a number
Before we can do any maths on it, we need to convert this score to a number. Here's a nice little page about converting strings to numbers in JS: <https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/>

### 4. Add 1 to it.
Yep, add 1 to it.

### 5. Save the new score
This is just the same as saving it in the first place for q1.

### 6. Go to question 3
Now put in a line to go to q3. You'll need this in the function for the incorrect answers too.

### 7. Check it works
Do you go to q3? Does the score in localstorage update when it should?

### 8. And repeat
Do the same for q3, q4, and q5. The only exception though is that from q5 the player will be taken to some end screen, rather than another question.

### 9. Check it all works
As for point step 7.

## Results!
All that's left is to create the final screen that tells the player their score.

### 1. Create the HTML
This can really be anything you want, though it would be nice if it does more than just give them a number. Perhaps stick it in a sentence, like "You scored 4 points".

You don't know the points yet though, so use an empty `<span>` with an id so you can put the score in there when you've fetched it.

### 2. Fetch the score
You know how to find out the score already, so do that.

### 3. Print it to the screen
You know how to get a reference to an element on the screen, so do that to get a reference to that `<span>`. You then want to write the value of the score variable into it. There's a question on stack overflow with an accepted answer that covers this: <https://stackoverflow.com/questions/41764061/adding-text-to-an-existing-text-element-in-javascript-via-dom>

### 4. Check the whole thing works
Fingers crossed....Yay!

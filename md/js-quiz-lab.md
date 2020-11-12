# Browser-Based Quiz

This lab will walk you through the creation of a browser-based quiz game. This will see the player presented with a series of multiple-choice questions, leading to their final score at the end. Here's what we want to achieve:

- All questions are delivered on a single HTML page
- There are no page reloads or separate pages for each question
- They come sequentially, one at a time
- Once all questions have been asked, we get a screen with the score

You can see a completed example here: <https://thomcorah.github.io/dmu-multimedia/resources/mathsGameV3/game.html>

## The Bigger Picture

Central to this is how we store the questions. In order to achieve the above points, we need to store them in some kind of JavaScript variable.

This will be a list of questions, so an array makes sense here.

However, it's not just the questions we're storing, it's the possible answers, as well as something that says which answer is correct.

So, for each question, we actually want to store a few things:

question: the text of the question
answers: a list of possible answers
correctAnswer: a number that points to which of the possible answers is correct

This sounds like a job for an object. This means we're going to end up with an array of objects, one object for each question.

With that in mind, let's get started.

## Create the HTML

### 1. Start off a new project as usual

There's a step-by-step guide here: <https://thomcorah.github.io/dmu-multimedia/lab-reader.html?starting-a-project-short.md>

### 2. Create your HTML

This will mostly be placeholders. You should add:

- A heading of some sort
- An element to contain the question number
- An element to contain the question
- An element to contain the answers

Those last three all need an id so you can reference them with the JavaScript in order to write things into them.

## Set up your variables

### 1. Create the questions array

Remember, each question is going to be an object:

```js
{
  question: string,
  answers: array,
  correctAnswer: number
}
```

Your questions array will be an array with five of these object in it.

### 2. Create a current question variable

This variable will store the array index of the current question. It should start at 0.

### 3. Create a score variable

This should start at 0.

## Ask a Question

The first thing we'll want to do when the page loads is ask a question. This is actually going to happen five times, and each time the same thing happens, so we put all of this in a function.

### 1. Create an empty function

There's a nice tutorial on arrow functions for beginners on codeburst.io here: <https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc>

### 2. Get the current question

We have a variable storing the current question number. We have an array of questions. It'll make things easier if we create a new variable and pull the current question out of the array right now.

### 3. Update the display (a little)

There are two bits of the display that are easy to update right off - the question number and the question text. You can get each using their id, and change their textContent properties to update the display.

### 4. Loop over the answers array

Things are a little different when displaying the possible answers, as there are a few of them. We're going to loop over, inserting a button into the page for each one.

Create a loop that will run once for each item in the answers array. (The answers array by the way is in that object you pulled the current question into two steps ago).

### 5. Add a button

We're going to create actual HTML elements in JavaScript. This requires a few steps.

Before getting in to that though, here's a quick example of using a `for` loop to iterate over an array:

```js
let pets = ["steve", "maggie", "snoops"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
// results in:
//  steve
//  maggie
//  snoops
```

**5.1. Create a button**  
The document object has a method called createElement(). You should use this to create a new `<a>` element. There's an entry on MDN for it: <https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement>

**5.2. Give it a class name**  
In JavaScript, HTML elements have a className property. Set this to a suitable class name so you can style your buttons with CSS.

**5.3. Create a label**  
In order to add some text to the button, we need to create a text note. The document object has a method for this too: createTextNode(). There's a page on W3Schools about it here: <https://www.w3schools.com/jsref/met_document_createtextnode.asp>

Create a text node with the answer for this button in it. Remember, you use square brackets to access the item at a particular index in an array.

**5.4. Add the label to the button**  
HTML elements have an appendChild() method that you can use to tell the button to add the label to itself.

**5.5. Add an event listener to the button**  
This is just the same as if we'd pulled the button off the page. You're listening for a click event. You've not created the function that will check if it's the correct answer or not, but you will. Perhaps it will be called checkAnswer?

**5.6. Add a custom attribute to the button**  
All three answers will lead to the same function when clicked. That function will need to have a way to know which button was actually pressed. When a function is run as the result of an event listener, it's passed information about the event, including the element that triggered it - the button. If we store the array index of this answer in an attribute on the button, the event function will be able to get at it easily and check if it's the correct answer.

So, to create a custom attribute on the button, you can use the setAttribute() method on it. Here's the MDN entry: <https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute>

**5.7. Add the button to the page**  
The final bit inside the loop - get the answer container element and tell it to append the button.

## Check the Answer

### 1. Create a checkAnswer function

Create a function with whatever name you used in the event listener. Stick a console.log() line in it and check it gets called when you click an answer in the browser.

### 2. Get the current question

Create a variable and assign it the current question from the question array. You can access the current question using square brackets and the currentQuestion variable you created back at the start.

### 3. Find out which answer was clicked

This comes in two parts:

**3.1. Get the event object**  
An event object gets passed to your function from the event listener. You just need to grab it in order to use it. To do so, create a variable as part of your function definition. Here's an example:

```js
checkAnswer = (evt) => {
  // evt is now an object that contains the event information
};
```

**3.2. Find out which button triggered the event**  
You can find out which HTML element triggered an event via the target property of that event object.

**3.3. Get the custom attribute from the target**  
Remember that custom attribute you created on each of your buttons that contains the array index of that answer. Well, now you've got the button that was clicked from the event target, you can get that attribute value with getAttribute().

### 4. Check it against the correct answer

You need some conditional logic here. If the correct answer and the one that was selected are the same, you need to add one to the score.

### 5. Trigger the next question.

To keep things tidy, we're going to create another function to go onto the next question. So, all we do from here is call it. Perhaps it'll be called nextQuestion().

## Go onto the next question

### 1. Add one to the current question number

The first thing to do is increment the variable that's storing the number of the current question.

### 2. Make sure there is another question

It could be that we've just advanced beyond all the available questions. So, more conditional logic required. Remember, the currentQuestion variable is the array index of the current question so it starts at 0. If it's new value is less than the number of questions in the array, we're all good, the question we want exists. In this case, you can run the askQuestion() function that you already created.

However, if the currentQuestion number isn't less than the number of items in the question array, we've reached the end of the quiz. We could update the whole page, but instead we're going to go to a different page for the game over screen. This means we'll need to store the final score in localStorage so the other page can get at it.

In a few distinct steps, this goes:

**2.1. Create an if else block**  
This should check if the currentQuestion number is less than the number of questions.

**2.2. As a new question**  
If it is, run the function that asks a new question.

**2.3. Store the score**  
If it's not, store the score in localStorage.

**2.4. Navigate to the game over screen**  
You can set the href property of the location object to something like end.html. You've not created this page yet, that's coming up.

## End the Game

### 1. Create a gameover html page

Call it whatever you decided just above and start it off with the usual HTML.

### 2. Add some element to display the score

You could put this into a context, a sentence for example.

### 3. Get the final score

With JavaScript, fetch the final score out of localStorage.

### 4. Update the display

Write this final score to the appropriate element on the page.

## That's it!!

Well, if everything's working at this point, well done. Give yourself a pat on the back.

Now you've got all this, it's completely adaptable to any quiz. You can change the styling with CSS. You can change the questions and answers by changing the array. Everything else will adapt to that. Lovely.

If you want to take this further, there are some things you could try, in no particular order.

- Avoid navigating to a new page for the game over screen, replace the current page and provide a button to allow the user to try again.
- Have the question array contain more than 5 questions, but the quiz selects 5 randomly.
- Have the quiz progress in a random order each time.
- Adapt the questions array so that each question also has a points value, more points for more difficult questions, then use those points to increase the score.

Have fun.

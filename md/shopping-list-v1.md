# Shopping List App

This simple web app uses an array to store a list of shopping items, and displays them on the screen. When the user adds an item, it's pushed to the end of the list and the display updates.

You can see a finished example here: <https://thomcorah.github.io/dmu-multimedia/resources/shoppingListV1/home.html>

### 1. Start your project
You can find a handy guide to setting up your folder and file structure here: <https://thomcorah.github.io/dmu-multimedia/lab-reader.html?starting-a-project-short>

### 2. Create your HTML structure

* You'll need a heading.
* Then you'll want a form with an input element to accept some text input, and a button the user can tap to add the new item to the list.
* Then you'll need an empty container to put the list into.

Style the page however you want.

### 3. Start your scripting
Create an empty `<script>` element just before the closing body tag.

### 4. Prepare your list
You're going to use an array to store the list, so first off, create an empty array called shoppingList.

### 5. Hook up your button
When the user taps the button, we want to run a function that adds a new item to the array. So, create a function (called addItem perhaps) and add an event listener to the button that runs it on clicks.

### 6. Check your event listener works
Put a `console.log()` line in your function to check it runs when the button is clicked.

### 7. Add item to shoppingList
Inside your addItem function, you need to:

* Get the contents of the `<input>` element
* Add this to the end of the shoppingList array

Note: You can get the contents of an `<input>` element from its `value` property.

### 8. Check it works
Use `console.log()` to check that new items are being added to the array.

### 9. Create an updateDisplay function
Create another function called updateDisplay, whose job will be to update the display after the shoppingList array has been changed.

Add a call to it at the end of addItem() so that once an item has been added to the array, the display then gets updated.

### 10. Get ready to make some html
What you're going to do, is build up a string of html by looping through each element in the shoppingList array.

So, to start with, you need an empty string variable.

### 11. Loop round the shoppingList
Use a for loop, with a counter that starts at 0, and carries on looping as long as it's less than the length of the list.

You can check it works using `console.log()` inside the loop.

### 12. Create a list item
Inside the loop you need to create a line of html. There are a few ways you can do this, but perhaps the simplest is just to enclose the shopping list item in a `<div>`. You can do this by adding strings together, something like:

```js
'<div>' + shoppingList[i] + '</div>'
```

### 13. Add your item to the building string
Add this single item line of html to the string that you're building with each loop.

### 14. Add to the display
After the loop, get a reference to your list container element, and then set its innerHTML property to your built up string of html.

### 15. Test it works
Refresh the browser and see if it works.
It probably doesn't.
Maybe your new item flashes briefly before the screen refreshes to an empty list again?
This is because the browser is refreshing the page when you click the `<button>`. This is the default behaviour when a button is clicked in a `<form>`.

### 16. Prevent the default action
We can stop this. When the event listener on the button calls your addItem function, it passes it an object of information about the event. We want to use this, but in order to do so, we need to create a variable to hold it. We do this when we create the function:

```js
addItem = evt => {
  // lines of code
}
```

This creates a variable called `evt` that will be given the event object.

We can then use this event object to prevent the default action (page refresh) from taking place:

```js
addItem = evt => {
  evt.preventDefault();
  // lines of code
}
```

## Going Further
Well done if you've got this far.

You could however take this further.

What about allowing the user to enter an item and a quantity. Rather than storing a simple string for each item in the shoppingList array, you'd need to store an object that contains the name of the item, and the quantity.

There's a page on w3schools about object here: <https://www.w3schools.com/js/js_object_definition.asp>

# Making a Todo App

This session will see you using arrays and loops in order to make a very simple todo app.  

The app should allow the user to add items to a list. These items will be displayed alongside a checkbox. When the user clicks the checkbox, the item is removed from the list, and the list is redrawn.  

You can see an example at <https://thomcorah.github.io/dmu-multimedia/resources/ToDo>

I'm not going to tell you step by step in detail how to make this, but here are some pointers.  

## HTML Structure

Your interface will need two sections.  

The first will be a simple form for the user to add new ToDos to the list. This form will need an `<input>` element for the user to type into, and a `<button>` for them to submit the item.

The second section will be for the list of todos. This should just be an empty `<div>` as it'll be filled out by the JavaScript code.  

## HTML ToDo Template  

Your ToDo list will be populated with HTML by your JavaScript based on the list of ToDos it needs to 'draw'. You could create these HTML elements entirely in JavaScript using `document.createElement()`. Or, you could create an empty string and then create the HTML to be inserted into the document as text. However, let's try something different.  

Let's try creating a simple HTML template in our HTML file, that the JavaScript will pick up, duplicate, and use as required.  

You can put this anywhere in your page, as we're going to hide it anyway. The HTML for each list item can be simple:

```HTML
<div><input type="checkbox" /><label></label></div>
```

The `<div>` wraps around the whole thing. The checkbox `<input>` provides a way for the user to mark it as done. The `<label>` will be filled with the text of the ToDo. 

You'll need a way for the code to be able to grab this, so wrap it in a `<div>` and give it an id.

```HTML
<div id="TodoTemplate">
    <div><input type="checkbox" /><label></label></div>
</div>
```

However, we don't want this template to be visible, so use CSS to hide it by setting its `display` property to `none`.

Ok, that's the HTML done. 

## JavaScript

Now it's time to add the JavaScript that will make this work. Here's what we need:

1. An array that will store the list of ToDo items.
2. A function that will be run when the user adds a ToDo item.
3. A function that will be run to 'draw' the list of ToDos to the document.
4. A function that will be run to remove a ToDo item from the list.

### 1. Create an Array

This is quite straightforward - just a single line to create an empty array.

### 2. A function to add a ToDo

This is going to be run anytime the user clicks that 'Add' button, so you'll need an event listener, and then a function to run.

One thing to watch out for though - that `<button>` is in a form, so the browser might try to 'submit' the form. We don't want that default behaviour to happen. We can stop that happening by grabbing the event, and using the `preventDefault()` function on it. 

```JS
function addTodo(evt){
    evt.preventDefault();
}
```

Now we need to find out what the user has written into the `<input>` element. You can do that using its `value` property. We can then add that to our array with its `push()` method. 

And that's it for adding a ToDo to the list. With that done, you'll need to redraw the list, but we've not written that function yet. 

### 3. Drawing the list  

We need a function that can draw the list. This is going to be called after a new item is added or removed.

Here's what it should do:
1. Get a reference to your list container `<div>` and empty it, perhaps by setting its `innerHTML` property to nothing.
2. Get a reference to the ToDo item template HTML. You want the `<div>` that's inside the one with the id. You could use `document.querySelector()` to get it.
3. Create a loop that will go over each item in the todo array. A `for` loop will work nicely.

But what should happen inside that loop?

1. Create a copy of the ToDo item template. You could use `cloneNode()` to do this. There's a page in the W3School reference about `cloneNode()` - <https://www.w3schools.com/jsref/met_node_clonenode.asp>
2. Get a reference to the `<label>` element inside the template. You could use `querySelector()` to do this. 
3. Set the label's `textContent` property to be the value of the current item in the todo array.
4. Add this new bit of HTML to the list container `<div>`. You could use `appendChild()` to do this.

All being well, any time the user fills in the box and hits the Add button, the list should update with the new item.

### 4. Removing an item

What we want is for the user to be able to click the checkbox next to an item, and that item disappears from the list. 

In order to achieve this, we'll need an event listener on each checkbox. You'll need to go to the function you just made to draw the list, inside the loop that creates the items from the template, and add an event listener to the checkbox at that point. 

Create the function that will be called when the click event happens. Make sure it's working by using `console.log()` inside the function. Whenever you click a checkbox, you should see something pop up in the console. 

This function to remove a ToDo needs to know which one was clicked. Whenever a function is run from an event listener, it's given information about the event, including which element triggered it i.e. which checkbox. 

In order to get that info, we need to create a variable to receive it. In this example, it's called `evt`.

```JS
function removeTodo(evt){
    console.log(evt);
}
```

That event object contains a `target` property. That's the checkbox.  

But how are we going to know which todo item this checkbox corresponds to? Perhaps the easiest way is to add an attribute to the checkbox when it's created that provides the array index of the todo item. When the checkbox is clicked, we can grab the value of that attribute and we know which item to remove from the array, and then redraw the list.

You can set an attribute on an element with `setAttribute()`. We want to do this when the HTML for the item is created inside the loop in the function to draw the todos. You can use any name for the attribute, but we want its value to be the index in the array of the todo that's being added. 

```JS
checkbox.setAttribute('data-todo-index', i);
```

In the function to remove the todo, we can pick this up with `getAttribute()`.

```JS
let todoIndex = evt.target.getAttribute('data-todo-index');
```

We can then use the `splice()` method of the array to remove that item. Here's the reference page for `splice()` on W3Schools: <https://www.w3schools.com/jsref/jsref_splice.asp>

With the item removed from the array, we can now redraw the list by calling the function that draws it. 

## Going Further

If you've got that done, there are a few things you can do to take this further. 

- You could use CSS to make everything look better.
- Instead of removing the item from the list, you could add a strikethrough to the label. For this to work, you'd need a way to record whether an item has been completed or not. Here are two ideas:
    - Make the array an array of objects, so that each object records not just the text of the todo, but also whether it's been completed or not. This will then be used when the list is redrawn to style appropriately.
    - Have an array for todos, and another array for completed todos. When the user clicks the checkbox, the item is removed from one array and added to the other. When the list is drawn, create the uncompleted todos as normal, and then do it again with the completed todos but styled with a strikethrough.


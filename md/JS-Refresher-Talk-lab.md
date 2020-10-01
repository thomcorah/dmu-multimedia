# JavaScript Refresher

This is a refresher on the key principles of JavaScript.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=ed396732-6c79-405d-916a-ac460155d3e1&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Where To Write It

To include JavaScript in your page, you will need a `<script>` element. This should be placed at the end of your HTML document, just before the closing `</body>` tag. You then have two options:

### 1. Write your JavaScript inside the `<script>` element

Doing this is quick, but means that your script is only available on this page.

```HTML
<body>
  <!-- the rest of your page's html -->
  <script>
    document.getElementById('someInput').style.backgroundColor = 'red';
    // some other code
  </script>
</body>
```

### 2. Include an external JavaScript file

You might want to do this if you'd like to use the same script across multiple pages, or just keep your resources a bit more organised.

Additionally, if you use somebody else's script, you can simply include it as is, rather than copy and paste it into your own files. Sometimes, third-party services will provide a url that points to the JavaScript file.

In either case, you still use the `<script>` element, and its `src` attribute to point to the file.

```HTML
<script src="https://cloudflare.org/33883867"></script>
<script src='js/myScript.js'></script>
```

## Variables

Variables are holders for some data. They are created using one of two keywords:

- `let` is for creating a variable that can change.
- `const` is for creating a variable that won't change.

```js
let myScore = 0;
myScore = 5;
```

## Functions

Functions allow you to package together a number of lines of code and give them a name. This can be useful if you have some code that you want to reuse a number of times. Sometimes you need to be able to refer to a chunk of code too, such as when creating event listeners.

The function declaration starts with the name of the function, and then assigns a function to it like so:

```js
myFunction = () => {
  // do something
};
```

In order to run your function from somewhere else in your code, use its name followed by `()`:

```js
myFunction();
```

Functions can accept data. In order to do so, you need to create a variable to hold the data. In this example, a variable called `jeff` has been created:

```js
myFunction = jeff => {
  // do something
  console.log(jeff);
};
```

When you then want to run that function and pass something in:

```js
myFunction("brown");
```

Functions can also return data. For example:

```js
addTen = num => {
  let newNumber = num + 10;
  return newNumber;
};
```

When you call this function, it's return value can be used:

```js
let newTotal = addTen(5); // newTotal will be 15
```

## Selecting Elements

The easiest way to select an element is using its id attribute. You can do this using the `document` object:

```js
let myElement = document.getElementById("someBox");
```

You can also select multiple elements based on their class name:

```js
let links = document.getElementsByClassName("link");
```

This however will give you a list of elements, even if there's only one element that matches. That means that you need to loop over the list in order to do anything to each individual element.

There are also two methods that mean you can use CSS selectors to select elements in JavaScript:

```js
let myElement = document.querySelector("#someBox");
```

That will give you a single element. If there is more than one element on the page that matches that selector, you'll get the first one.

However, you can also get all elements that match:

```js
let links = document.querySelectorAll(".link");
```

This will give you a list of elements that you'll need to loop over.

## Events

Events happen all the time on a webpage. They might include things like the mouse moving, clicking, leaving or entering spaces, network activity, keyboard strokes etc etc.

In order to be able to respond to an event, we need to listen for it. To do this, the browser needs to know three things:

1. Where is the event happening
2. What event are we intrested in
3. What should happen when the event is heard

We can tackle the first by selecting the element where the event will happen. For example, the button that we're expecting to be clicked:

```js
document.getElementById("submitBtn");
```

We then use this element to create an event listener. The event listener needs to know points 2 and 3 - what event are we interested in, and what should happen when it's heard. We provide both of these as arguments to the `addEventListener` method:

```js
document.getElementById("submitBtn").addEventListener("click", handleClick);
```

In this example, handleClick is the name of a function that we've defined elsewhere.

When a function is called by an event listener, it is given information about the event. This can be useful. Perhaps we want to know where the mouse was, or which element was clicked to trigger the event.

In order to get the data, we create a variable in the function definition to hold it. In this example, that variable is called `evt`:

```js
handleClick = evt => {
  // do something with evt
};
```

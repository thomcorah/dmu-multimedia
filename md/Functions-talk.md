# Functions

Functions are an integral building block of JavaScript, allowing you to build out more complex code, make your code more readable, and respond more easily to events.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=80de23b8-83b9-45a7-97dc-ac62011f9813&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## What is a function

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

## Passing in data

Functions can accept data. In order to do so, you need to create a variable to hold the data. In this example, a variable called `jeff` has been created:

```js
myFunction = (jeff) => {
  // do something
  console.log(jeff);
};
```

When you then want to run that function and pass something in:

```js
myFunction("brown");
```

## Returning data

Functions can also return data. For example:

```js
addTen = (num) => {
  let newNumber = num + 10;
  return newNumber;
};
```

When you call this function, it's return value can be used:

```js
let newTotal = addTen(5); // newTotal will be 15
```

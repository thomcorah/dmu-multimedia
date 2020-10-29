# Variables

A variable is a container for some data.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=43327e65-fcb0-4195-91da-ac620115c06a&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## What is a variable

A variable is a container that can hold on to some data or information. For example, we might want to keep track of, and update, a users score. Or, we might want to hang on to a reference to an element on the screen so we can do a few things to it.

## Creating a variable

There are two things we need to do to create a variable:

1. Tell the browser that's what we're doing
2. Give it a name so we can refer to it later

We tell the browser we're creating a variable using a keyword. Almost always, we that keyword is `let`.

We then follow the keyword with the name we want to give it.

If we want to create a variable called 'score', we would write:

```js
let score;
```

We can also assign a value to this variable when we create it.

```js
let score = 0;
```

We can change that value of score later on.

```js
score = 10;
```

We can do some maths on the variable.

```js
score = score + 10;
```

## Data Types

JavaScript has different types of data. We've just seen numbers. There are a few others.

### Numbers

Numbers can be integers or decimal. You can do maths on numbers.

```js
let remaining = total * 0.8;
```

### Strings

Any sequence of characters, such as "Sequence of characters". Strings are enclosed in quote marks. You can splice and chop them.

```js
let name = "Harry";
```

### Booleans

Either true or false.

```js
let alive = true;
```

### Arrays

An array is an indexed list of things. An array is written inside square brackets, with each element separated by a comma.

```js
let fruit = ["banana", "strawberry", "apple"];
```

Each element in an array has an index - its position in the array. This starts at 0 - banana in the example above.

You can get the value of whatever is at position n in an array by using square brackets.

```js
let favourite = fruit[1]; // strawberry
```

### Objects

Objects store name:value pairs, separated by commas. They are like arrays, except that instead of indices, each item has a label. They use curley braces.

```js
let person = { firstName: "Harry", lastName: "Jones", age: 22 };
```

# Objects

Objects are a data type in JavaScript that provide us with a flexible way to store associated data and functionality.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=cd4bd095-cb0e-40b7-a9e0-ac710106e29f&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## What is an Object

Objects are another datatype.

Instead of holding a single piece of data or a list of single items like an array they can do way more.

They can contain different types of data, and functionality.

data = properties  
functionality = methods

We've already seen objects in JS.

The document object for example.

It has **properties**

- activeElement
- head

It has **methods**

- getElementById()
- addEventListener()

We access properties and methods using **dot notation**.

```js
document.getElementById();
document.addEventListener();
document.activeElement;
document.head;
```

## Creating Objects

We can create our own objects:

```js
let person = {};
```

Curly braces here denote an object.

We provide properties in `name: value` pairs.

```js
let person = { firstname: "Geoff", lastname: "Geoffreys" };
```

Or written slightly differently..

```js
let person = {
  firstname: "Geoff",
  lastname: "Geoffreys",
};
```

We can create methods too:

```js
let person = {
  firstname: "Geoff",
  lastname: "Geoffreys",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};
```

Note the use of the `function` keyword method here. Arrow functions can't be used as methods of objects.

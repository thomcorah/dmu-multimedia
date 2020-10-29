# Referencing HTML Elements (with JS)

Often, the reason we want to use JavaScript is to do something with what's on the screen. For this, we need to be able to get a reference to it.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=71cbde89-c534-4be1-abf8-ac6200f959fe&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Using id

The easiest way to select an element is by using its id attribute. You can do this using the `document` object:

```js
let myElement = document.getElementById("someBox");
```

## Using class name

You can also select multiple elements based on their class name:

```js
let links = document.getElementsByClassName("link");
```

This however will give you a list of elements, even if there's only one element that matches. That means that you need to loop over the list in order to do anything to each individual element.

## Using CSS selectors

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

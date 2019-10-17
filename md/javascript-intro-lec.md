# Introduction to JavaScript

---

# This Week

* Variables
* Referencing HTML Elements
* Functions
* Events

---

# Including JavaScript

Including on the page

**Only for debugging / quick prototyping**

```HTML
<script>
  console.log('Hello There');
</script>
```


Importing an external file

```HTML
<script src='js/fun.js'>
</script>
```


Put all `<script>`s at the end of your `<body>`

```HTML
  <script src='js/fun.js'>
  </script>
</body>
```

---

# Variables

A variable is a container for some data  

We can change that data  <!-- .element: class="fragment" -->  

We can make it a number, for example  <!-- .element: class="fragment" -->  

```JavaScript
let myBag = 5;
```
<!-- .element: class="fragment" -->


Or it could be a word (string)

```JavaScript
let myBag = 'brown';
```


# Demo

---

# Getting HTML Elements

You might want to do something to an element on the page  

To do this, you need a reference to that element <!-- .element: class="fragment" -->  

This is where id is very useful <!-- .element: class="fragment" -->


# The Document Object

We use the document object  

What's an object? <!-- .element: class="fragment" -->


# What's an Object

An object in JavaScript is really just another variable.  

Or rather, variables are a type of object. <!-- .element: class="fragment" -->  

Objects can contain data - properties. <!-- .element: class="fragment" -->  

Objects can do things - methods. <!-- .element: class="fragment" -->  

We will discuss more another week. <!-- .element: class="fragment" -->


# The Document Object

We use the document object to get a HTML element  
It has a method to get an element with a given id  

```JavaScript
document.getElementById('navbar');
```

We can store this reference in a variable

```JavaScript
let menu = document.getElementById('navbar');
```

So that we can do other things to it.


# Demo

---

# Functions

A function is a defined chunk of code

```JavaScript
addThese = () => {
  // one or more lines of code
}
```


If we want it to run, we call it

```JavaScript
addThese()
```


We can pass data into a function

```JavaScript
updateDisplay = (score) => {
  console.log('Score', score);
}

updateDisplay(15);
```


We can get data back from a function

```JavaScript
shotRock = (score) => {
  let newScore = score + 10;
  return newScore;
}

console.log('New Score', shotRock(15));
```


# Demo

---

# Events

We can detect a range of events.

* Form element change
* Mouse over
* Key up
* Mouse drag
* Mouse out
* Key down
* Form element focussed
* Form element lost focus
* Data loaded
* error

notes: Reference list of events: <https://developer.mozilla.org/en-US/docs/Web/Events>


# Responding

We first get a reference to the element

Then we add an event listener <!-- .element: class="fragment" -->

```JavaScript
document.getElementById('buyButton').addEventListener();
```
<!-- .element: class="fragment" -->


We need to tell the event listener two things.
1. What event are we listening for  <!-- .element: class="fragment" -->
2. What to do when the event occurs  <!-- .element: class="fragment" -->

```JavaScript
document.getElementById('buyButton')
.addEventListener('click', addToCart);
```
<!-- .element: class="fragment" -->


# Demo

---

# This Week

* Variables
* Functions
* Referencing Elements
* Events

---

# Any Questions?

---

# Thank You

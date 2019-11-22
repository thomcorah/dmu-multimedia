# Objects

---

## Datatypes

So far we've seen a number of datatypes in JavaScript

* number
* string
* boolean
* array

---

## Objects

Objects are another datatype.

Instead of holding a single piece of data

or a list of single items like an array

they can do way more

---

## Objects

They can contain different types of data

and functionality

data = properties  
functionality = methods

---

## Objects

We've already seen objects in JS

The document object for example

It has **properties**

* activeElement
* head

It has **methods**

* getElementById()
* addEventListener()

---

## Objects

We access properties and methods using **dot notation**.

document.getElementById()  
document.addEventListener()  
document.activeElement  
document.head  

---

## Creating Objects

We can create our own objects:

```js
let person = {};
```
Curly braces here denote an object.


We provide properties in `name: value` pairs.

```js
let person = {firstname: 'Geoff', lastname: 'Geoffreys'}
```


Or written slightly differently..

```js
let person = {
  firstname: 'Geoff',
  lastname: 'Geoffreys'
}
```


We can create methods too:
```js
let person = {
  firstname: 'Geoff',
  lastname: 'Geoffreys',
  getFullName: () => {
    return this.firstname + ' ' + this.lastname;
  }
}
```

---

# Any Questions

---

# Thank You

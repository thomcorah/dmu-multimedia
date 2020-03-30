# Arrays and Loops

---

# What is an Array?

* An array is a datatype <!-- .element: class="fragment" -->
* Like a number <!-- .element: class="fragment" -->  
* Or a string <!-- .element: class="fragment" -->
* An array is a list <!-- .element: class="fragment" -->


**An array is a list**

Each item has an index  

```  
0: bananas  
1: tomatoes  
2: milk  
3: sausages
```

notes: The index starts at 0 for the first item.

---

# Creating an Array
We can create an array like any other variable  

```javascript 
let shoppingList = [];  
```

Square brackets are used to denote an array.  


# Creating an Array
We can populate our array when creating it  

```js  
let shoppingList = ['bananas, tomatoes, milk, sausages'];  
```

---

# Manipulating an Array
We can add to an array.

```js  
shoppingList.push('lemon');  
```

The `push()` method adds to the end of an array.


We can add to the beginning of an array

```js  
shoppingList.unshift('lemon');  
```

---

# Reading from an Array
We can get the value at a given index

```js  
console.log(shoppingList[0]); // bananas  
```

---

# Array length
We can find out how many things are in an array

```js  
console.log(shoppingList.length); // 5  
```

---

# For Loop
Sometimes we want to loop over some code x times

For can do this, based on a condition  

```js  
for(condition) {
  // Do this stuff
}
```


# For Loop
What's the condition?   

With a for loop, it's based on a counter

We need to:

* Create the counter variable  
* Change its value each loop  
* Check its value each loop to see if we keep going


```js  
for(initialiser; test; modifier) {
  // Do this stuff
}
```

```js  
for(let i = 0; i < 10; i++) {
  console.log(`loop number ${i}`);  
}
```
<!-- .element: class="fragment" -->

---

# While Loop
The while loop is simpler   

It doesn't create and modify a counter  

It just has a condition  

```js  
while(condition) {
  // do something
}
```


# While Loop

What's the condition?

Something that evaluates to either true or false


This could be a boolean variable

```js  
let usernameTaken = true;  
..
..
while (usernameTaken) {
  // generate a random username
  // check if it's been taken
  // set usernameTaken accordingly
}
```


Or it could be a statement

```js  
let counter = 0;  
..
..
while (counter < 10) {
  console.log(`loop number ${counter}`);  
  counter++;  
}
```  

---

# For and Arrays
Loops can be used to cycle through an array  

A for loop can do something to every item in an array

Like increase everyone's pay by 10%   

```js  
let payrates = [8.20, 11.5, 15.75, 22.8];  
..
for(let i = 0; i < payrates.length; i++) {
  payrates[i] *= 1.1
}
```  
<!-- .element: class="fragment" -->

---

# ForEach

Arrays can do their own version of for  

forEach  

You can access every item in an array  

You specify what to do by providing a function  


```js  
let payrates = [8.20, 11.5, 15.75, 22.8];
..
payrates.forEach( element => {
  console.log(element)
})
```

notes: `element` here is a copy of what what is the array. Changing element, by multiplying it for example, wont change what's in the array. You need to overwrite the index it came from if you want to do that.
See <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach> for more on forEach.

---

# Recap

* Arrays are lists  
* Each item has an index  
* The indices start at 0
* We can loop code
* This can be particularly useful for arrays

---

# Any Questions?

---

# Thanks

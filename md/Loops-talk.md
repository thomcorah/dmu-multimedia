# Loops

Loops in JavaScript enable us to perform the same code repeatedly.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=a81b8099-6524-42ce-9a99-ac710109915d&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## For Loop

Sometimes we want to loop over some code x times

For can do this, based on a condition

```js
for(condition) {
  // Do this stuff
}
```

What's the condition?

With a for loop, it's based on a counter

We need to:

- Create the counter variable
- Check its value each loop to see if we keep going
- Change its value each loop

We do these three things inside the parenthesis that follows the `for` keyword, in this order:

```js
for (initialiser; test; modifier) {
  // Do this stuff
}
```

If we wanted to have a loop that used a counter starting with a value of 0, adding 1 to it each time, and repeating as long as the counter is less than 10, we would write this:

```js
for (let i = 0; i < 10; i++) {
  console.log(`loop number ${i}`);
}
```

## While Loop

The while loop is simpler

It doesn't create and modify a counter

It just has a condition

```js
while (condition) {
  // do something
}
```

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

## For and Arrays

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

## ForEach

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

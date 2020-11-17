# Conditional Logic

It is possible to have code execute based on a condition. If something is true, a thing will happen, otherwise it wont.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=89ab0fd0-d9b6-4de0-abef-ac76011734a0&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## If

We have conditional logic in real life:

> If it's raining, I'll take an umbrella

> If I'm tired I'll have a sleep

> If I'm hungry, I'll have a snack, otherwise I'll wait until dinner

In all cases, we use "if". The same is true in JavaScript. If we want something to happen based on a condition, we use if.

```js
if
```

We then need to provide a condition, something that is either true or false, and then the code that will be run if it's true.

```js
if (raining) {
  // Take an umbrella
}
```

## Comparison Operators

For the condition, we could compare two values and arrive at either true or false. Again, we have have this in life:

> If the temperature is above 25deg, I'll wear shorts

Ok, so we'd actually just say that if it's hot we wear shorts, but you get the point.

We can compare two values using comparison operators. These return true or false, depending on the two values and the kind of comparison you're interested in.

| Comparison | Example | Description                     |
| ---------- | ------- | ------------------------------- |
| <          | a < b   | a is less than b                |
| >          | a > b   | a is greater than b             |
| <=         | a <= b  | a is less than or equal to b    |
| >=         | a >= b  | a is greater than or equal to b |
| ==         | a == b  | a is equivalent to b            |
| ===        | a === b | a is strictly equal to b        |
| !=         | a != b  | a is not equivalent to b        |
| !==        | a !== b | a is not strictly equal to b    |

For example:

```js
if (temp > 25) {
  // wear short
}
```

## Combining Conditions

We can combine conditions using OR and AND. For example:

> If it's hot AND not raining, I'll wear shorts.

> If I'm thirsty OR bored I'll get a coffee.

We can combine conditions with AND by using a double ampersand `&&`. For example, this if statement checks if the value of a variable called 'score' is between 10 and 20:

```js
if (score > 10 && score < 20) {
  // do something
}
```

With AND, both conditions must be true for the whole thing to be true.

With OR however, only one side or the other need be true. We combine conditions with OR by using a double bar `||`.

```js
if (score < 10 || lives == 0) {
  // that wasn't a very good game
}
```

## NOT

We can apply the NOT boolean operator to conditions. This effectively flips the condition. We can do this using an exclamation mark `!`.

You may have noticed this in the table of comparison operators. If you want to test if something is NOT equal to something else, use `!=`. For example:

```js
if (mode != "easy") {
  // make baddies harder to kill
}
```

We can also prepend a boolean variable with `!`. For example:

```js
if (!running) {
  // it's not running
}
```

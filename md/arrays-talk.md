# Arrays

Arrays are used in JavaScript to keep lists of data

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=4a91466a-2d12-400f-999f-ac700102e218&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## What is an Array?

- An array is a datatype
- Like a number
- Or a string
- An array is a list

**An array is a list**

Each item has an index

```
0: bananas
1: tomatoes
2: milk
3: sausages
```

The index starts at 0 for the first item.

## Creating an Array

We can create an array like any other variable

```javascript
let shoppingList = [];
```

Square brackets are used to denote an array.

We can populate our array when creating it

```javascript
let shoppingList = ["bananas, tomatoes, milk, sausages"];
```

## Modifying an Array

We can add to an array.

```js
shoppingList.push("lemon");
```

The `push()` method adds to the end of an array.

We can add to the beginning of an array

```js
shoppingList.unshift("lemon");
```

## Reading from an Array

We can get the value at a given index

```js
console.log(shoppingList[0]); // bananas
```

## Array length

We can find out how many things are in an array

```js
console.log(shoppingList.length); // 5
```

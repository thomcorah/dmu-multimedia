# Asynchronous JavaScript

---

## Synchronous Code
So far we've been used to synchronous code  
It happens one line after another  

```JS
console.log('line 1');
console.log('line 2');
```
Results in

```JS
line 1
line 2
```

Notes: a queue at the bar is a good example. You don't get asked for your order until you reach the front of the queue. The server goes off an gets your order, and then serves the next person when they're finished with you.

---

## Asynchronous Code

### asynchronous  
/əˈsɪŋkrənəs,eɪ-/ adjective  

not existing or occurring at the same time.

---

## An Example

```js
sayLine2 = () => {
  console.log('line 2');
}

console.log('line 1');
setTimeout(sayLine2(), 1000);
console.log('line 3');
```
Results in

```JS
line 1
line 3
line 2 // 1 second later
```

Notes: This is like a restaurant. You don't have to wait for the table before you to order, get, and eat their meal before your order is taken. Things can happen concurrently.

---

## Asynchronous Events

There are lots of things that might happen asynchronously.

* Fetching something from the server
* Timers  
* Reading a file  
* Mouse events  

---

## Mouse Events

We've seen these.

```JS
document.getElementById('signUp').addEventListener('click', registerUser);
```

We provide `addEventListener` with a function to run when the event occurs.  

i.e. at some point in the future.  

This is called a **Callback Function**

---

## Callback Functions

We've seen these in other places too...

```JS
setTimeout(stopTimer, 5000);  
setInterval(moveTrump, 500);
```

A callback function tells the browser what to do when the time comes.  


## Inline Callback Functions

Callback functions are often written inline.  

```JS
setInterval(() => {
  // some code here
}, 500);
```


## Callback Hell

Imagine you have a series of asynchronous steps that each relies on the result of the previous step.  

```JS
startButton.addEventListener('click', () => {
  setInterval(() => {
    //do some stuff
    fetchNewImage( img => {
      placeImage(img);
    })
  }, 500)
})
```

It becomes easy to lose your way, and it's hard to make changes.  

---

# Avoiding Callback Hell

---

## 1. Extract and Name Functions

```js
handleNewImage = (img) => {
  placeImage(img);
}

startImageFetch = () => {
  fetchNewImage(handleNewImage)
}

startTimer = () => {
  setInterval(startImageFetch, 500);
}

startButton.addEventListener('click', startTimer);
})
```

---

## 2. Use Promises (where available)

Promises attempt to avoid callback problems.  

A function returns a promise to do something later.  

The promise object includes a `then()` method that will be run when the promise completes.  


## Example: Server Calls
You might want your application to load something from your server *after* the page has loaded.

`fetch()` is a built-in method that can load a resource.  

```js
fetch("stuff.html");
```


It immediately returns a promise, rather than the actual thing it is fetching.

The promise will run the function provided to `then` when it completes.

```js
fetch("stuff.html").then( response => {
  return response.text();
}).then( html => {
  //consume the html
})
```

Multiple promises can be chained together in this way, avoiding deep nesting.


Promises can also catch errors:

```js
fetch("content/stuff.html")
  .then(response => {
    return response.text();
  })
  .then(html => {
    //consume the html
  })
  .catch(error => {
    console.log(error);
  });
```

---

## 3. Using Async/Await

Async/Await is a more modern method for handling asynchronous actions.  

It comprises of two steps:  
1. Mark a function as asynchronous  
2. Tell the browser to wait for the result of something in that function...  
...kind of


## Example: Server Calls

`fetch()` also works with async/await.   

Create an asynchronous function

```js  
fetchStuff = async () => {

}
```


Using await, we can now use fetch as though it were syncronous   
```js  
fetchStuff = async () => {
  let response = await fetch('content/stuff.html');
}
```


And then do something with it in the next line.  
```js  
fetchStuff = async () => {
  let response = await fetch('content/stuff.html');
  let html = await response.text();
}
```
This doesn't block anything. The browser can go and do other things while it waits.   

---

## Further Reading

<div style='text-align: left'>

Article on Callback Hell  
<http://callbackhell.com>

Page on JavaScript.info on Async/Await  
<https://javascript.info/async-await>  

Article on Pluralsight about asynchronous JavaScript generally  
<https://www.pluralsight.com/guides/introduction-to-asynchronous-javascript>  

MDN entry on `fetch()`  
<https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch>

</div>

---

## Recap

Asynchronous code means things don't happen in the order they are written.  
There are a number of techniques to handle this:  
* callbacks
* promises
* async/await  

---

## Any Questions?

---

# Thanks

# Events

Events happen all the time on a webpage. They might include things like the mouse moving, clicking, leaving or entering spaces, network activity, keyboard strokes etc etc.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=dcca105b-326b-4ec2-ac78-ac6201203742&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Responding to events

In order to be able to respond to an event, we need to listen for it. To do this, the browser needs to know three things:

1. Where is the event happening
2. What event are we interested in
3. What should happen when the event is heard

## Event Context

We can tackle the first by selecting the element where the event will happen. For example, the button that we're expecting to be clicked:

```js
document.getElementById("submitBtn");
```

## Adding an Event Listener

We then use this element to create an event listener. The event listener needs to know points 2 and 3 - what event are we interested in, and what should happen when it's heard. We provide both of these as arguments to the `addEventListener` method:

```js
document.getElementById("submitBtn").addEventListener("click", handleClick);
```

In this example, handleClick is the name of a function that we've defined elsewhere.

## Event information

When a function is called by an event listener, it is given information about the event. This can be useful. Perhaps we want to know where the mouse was, or which element was clicked to trigger the event.

In order to get the data, we create a variable in the function definition to hold it. In this example, that variable is called `evt`:

```js
handleClick = (evt) => {
  // do something with evt
};
```

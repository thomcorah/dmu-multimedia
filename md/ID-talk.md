# id

We can assign an element an ID, a unique identifier that we can then apply style rules to.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=506ccbea-b9ab-409a-b51f-ac6900d04050&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## What is id

An id is an identifier that is unique to one element. This allows us to apply styles to a single element.

Unlike class, only one element can have a particular id, and an element can only have one id. This is like your student id number. You are the only student with that id number, and you've only got one.

## Assigning id

We can assign an id to a HTML element using the `id` attribute.

```HTML
<h1 id="mainHeading">Let's talk cake</h1>
```

An id cannot have a space in it, otherwise the browser would regard that as two ids, and that's no good. For multi-word ids, use camelCase or hyphens to distinguish individual words.

## Applying styles

We can then apply styles to an element based on its id. To do this, we need to tell the browser two things:

1. That this is an id
2. What the id is

We tell the browser that what we're providing is an id by prefixing it with a hash. We then provide the id.

```CSS
#mainHeading {
  color: red;
  font-size: 1.2em;
}
```

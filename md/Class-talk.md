# Class

You can create classes that elements belong to, and then apply styles to the class. This is a powerful way to group and select elements.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=3833cde5-5a0e-4e79-9aea-ac6900cddbb5&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## What is class?

A page of HTML features a wide range of different elements. Although you can apply styles based on the different types of HTML elements, and to an extent their structural relationships, sometimes you need something more flexible than this.

To achieve this, you can put elements in a class. An element can be in multiple classes, and a class can contain as many elements as you like. This is like classes at university. As a student, you are in multiple classes, and each class has multiple students in it.

## Assigning class

We can put any HTML element into a class by using its `class` attribute. You don't need to do anything special to create a class. Just putting an element in it will create it.

```HTML
<p class="highlight">Paragraph of text</p>
```

You can assign more than one by listing them with spaces. Do not use multiple `class` attributes.

```HTML
<p class="highlight shadow">Paragraph of text</p>
```

Class names cannot have spaces in them, otherwise they'll be seen as two different class names. Use camelCase or hyphens for multiword class names.

## Applying styles

We can then apply styles to all members of a class, by selecting based on class name. To do this, we need to tell the browser two things:

1. That this is a class name
2. What the class name is

We tell the browser that what we're providing is a class name by prefixing it with a dot. We then provide the class name.

```CSS
.highlight {
  color: red;
  font-size: 1.2em;
}
```

# Headings

Headings on your page provide titles for sections, helping the user to better navigate your page and understand its meaning.

## Heading Elements

There are six heading elements, from `<h1>` to `<h6>`. No other type of HTML element uses this kind of numbering.

```HTML
<h1>Article Title</h1>
```

## Levels of Importance

The numbers represent the relative importance of the heading. You should think of these as defining sections and subsections. For example, let's imagine we want the following structure for a page about cake:

- Why Cake?
  - Health Benefits
  - Homemade or Shop Bought?
    - Homemade
    - Shop Bought

This might translate to headings like so:

```HTML
<h1>Why Cake?</h1>

<h2>Health Benefits</h2>
<p>Something about cake lifting the soul</p>

<h2>Homemade or Shop Bought?</h2>
<h3>Homemade</h3>
<p>Something about homemade cakes</p>
<h3>Shop Bought</h3>
<p>Something about shop bought cakes</p>
```

The browser would then decide how to render this. Usually, more important headings are larger and bolder.

![Browser Screenshot](https://thomcorah.github.io/dmu-multimedia/resources/img/html-headings-example.png)

**Do not** fall into the trap of using the heading elements in order to add your desired amount of size and bold to text. Always use HTML elements to describe the purpose of your content, and use CSS to change the appearance.

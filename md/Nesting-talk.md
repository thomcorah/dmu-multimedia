# Nesting

Nesting is the action of putting HTML elements inside each other.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=31b36b71-4051-463d-bf58-ac5301020f11&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## What is Nesting

Most HTML elements can have some content. Often, that content can be other HTML elements. This is called nesting. For example:

```HTML
<section>
  <h2>Early Releases</h2>
  <p>The band self-released a number of limited run eps and singles in their early years. These were characterised by their handmade approach, both in terms of the recording and the packaging itself.</p>
  <img src='img/nylon.png' />
</section>
```

Above we see a `<section>` with three elements inside it. This nesting defines the structural relationships between these elements. For example, the `<h2>` is a child of the `<section>`. Conversely, the `<section>` is the parent of the `<h2>`. Furthermore, the `<h2>`, `<p>`, and `<img>` are siblings.

## Why Nest?

Describing the structure of our content through nesting brings several benefits.

1. It helps screen readers to better understand the structure of our page, and therefore be of better use to those trying to navigate it with them.
2. It helps search engines to better understand our content, and therefore provide more appropriate search suggestions.
3. It provides us with structure that we can then use to visually style our page, helping us to provide visual clarity and order.

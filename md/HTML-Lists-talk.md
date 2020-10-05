# HTML Lists

There are two types of list you can create with HTML, ordered (numbered) and unordered (bullet points).

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=9f90fe07-6083-4059-a355-ac47011d7bf1&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Ordered Lists

Ordered lists are usually numbered, though you can also have order provided with letters (uppercase or lowercase) and roman numerals (uppercase or lowercase).

To create an ordered list, use the `<ol>` element.

## Unordered Lists

Unordered lists are bulleted. The items still appear in the order in which they are specified in your HTML, it's just that bullet points don't convey order in the same way numbers do.

To create an unordered list, use the `<ul>` element.

## List Structure

Whichever type of list you use, you populate your list with list items. Use `<li>` elements nested inside your list element to do this. For example, here's a list of fruits:

```HTML
<ul>
  <li>Strawberries</li>
  <li>Bananas</li>
  <li>Blueberries</li>
</ul>
```

Make sure not to forget any of those closing tags.

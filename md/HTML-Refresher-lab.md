# HTML Refresher

This video provides a little refresher of some key concepts around writing HTML.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=fc611efe-05b0-450e-9747-ac4400e15a26&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Tags -> Elements

In HTML, everything is represented as an element, and elements are comprised of tags, and usually, content.

We have opening tags:

```HTML
<h1>
```

and we can have content:

```HTML
<h1>My Dogs
```

and then we have closing tags:

```HTML
<h1>My Dogs</h1>
```

Sometimes elements don't actually have content, so we pop a `/` in before the end of the opening tag to tell the browser we've not forgotten a closing tag, there shouldn't be one:

```HTML
<img src='img/me.jpg' />
```

## Attributes

Attributes provide information about an HTML element. They are written inside the opening tag, and almost always follow the format `name="value"`. We saw an example just now...

```HTML
<img src='img/me.jpg' />
```

That `<img>` element has a `src` attributes that tells the browser where the image file is that this `<img>` element should display.

## Nesting and structure

Nesting just means putting HTML elements inside each other. But, the important bit is why. Consider this bit of code:

```HTML
<section>
  <h1>Brief History</h1>
  <img src='calla.jpg' />
  <p>blah blah blah blah</p>
  <p>blah blah blah blah</p>
</section>
```

We can clearly see here that the heading, image, and two paragraphs belong together. What's more, the browser and screen readers will be able to clearly see this too. We've used HTML to structure the relationship of our elements, to describe how they relate to each other.

Structuring our HTML with nesting also helps us out with styling, as quite often we want to apply style based on structural groupings. For example, we could give all our sections a margin and a background colour, helping to add visual structure to our page and clearly grouping related content for our readers.

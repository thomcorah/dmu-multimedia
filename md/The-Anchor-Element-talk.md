# The Anchor Element

Usually used for adding links to pages, the anchor element provides navigation and interlinking on the web.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=ecd4d448-641e-4b45-98fd-ac53013e5ac8&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## What is it?

The anchor element lets you display something on the page, which if clicked, will take the user somewhere else. That could be to another website, a different page on the same website, or a different place on the same page.

## Linking to Another Website

An anchor element is created with the `<a>` tags. We use the `html` attribute to tell the browser where to navigate to when clicked. The contents of the `<a>` element are what's displayed on the page for the user to click. For example:

```HTML
<a href='https://dmu.ac.uk'>DMU Website</a>
```

This results in: <a href='https://dmu.ac.uk'>DMU Website</a>

## Linking Within A Site

The above example used an absolute URL to link to another website. We can also link to other pages on the same site, usually with a relative URL. For example, if we wanted a link to our About page, we might write:

```html
<a href="about.html">About</a>
```

## Linking Within a Page

Finally, we can send the user to a different point on the same page. Firstly, this requires that we have something in our HTML to act as a marker at the point we want to navigate to.

We create this marker by giving an HTML element an id. For example, suppose we had a section about cake frosting we wanted to be able to jump straight to. The section might have its own subheading:

```HTML
<h2>Cake Frosting</h2>
```

This `<h2>` element is the point we want to be able to jump to. In order to do so, we first give the `<h2>` an id.

```HTML
<h2 id="cake-frosting">Cake Frosting</h2>
```

The id doesn't have to be the same as the heading text, but something that makes sense is useful. It can't have any spaces in it though, and you can only use each id once.

To create a link to this point, we use an `<a>` element almost the same as before. However, this time we use a `#` at the start of the URL to tell the browser this is actually the id of an element on the page. For example:

```HTML
<a href="#cake-frosting">Jump To Cake Frosting</a>
```

## Other Types Of Link

We can also provide an email address as a link, and the browser will tell the computer/tablet/phone to open up its default email program and start off a new email addressed to the email address we provide. We just prefix the email address with `mailto:`.

```HTML
<a href="mailto:tcorah@dmu.ac.uk">Email Thom</a>
```

We can do the same with a telephone number, particularly useful for those browsing on mobile phones, by prefixing the phone number with `tel:` (note full international dialling number):

```html
<a href="tel:+441162078088">Call Thom</a>
```

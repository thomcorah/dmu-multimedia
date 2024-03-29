# The Image Element

The image element is used to tell the browser to place an image on the page.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=f091c377-0185-450e-ba5c-ac530148ac70&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## What does it look like?

To place an image on the page, use the `<img>` element. Unlike many HTML elements though, it has no contents. We just use it to tell the browser two things.

1. Where is the image
2. What is the image

## Attributes

We do this with two attributes. We provide a URL that points to the location of the image using the `src` attribute. This can be a relative or absolute URL, though as the image is normally in your own website folder structure, this will likely be a relative URL.

We tell the browser what the image is with the `alt` attribute. This is a very important attribute. Not only does it provide a short description to the browser, to be displayed if there's a problem loading your image, but it's also what a screen reader will speak to a partially-sighted user.

Finally, because the `<img>` element has no content, it has no closing tag. We still need to tell the browser that we've completed the element though, so we do this with a `/` just before the end of the opening tag.

For example:

```HTML
<img src="img/dogs.jpg" alt="A pack of dogs" />
```

## Images on Mobile

When we include images in our website, they might be too wide for the screen. It's therefore a good idea to limit the width of the image to 100%, so that it can't be any wider than the thing it's in.

```HTML
<img src="img/dogs.jpg" alt="A pack of dogs" style="max-width: 100%"/>
```

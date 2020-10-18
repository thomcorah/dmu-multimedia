# The Picture Element

The `<picture>` element lets us deliver an image to a device that's suitable for the devices size, instead of always delivering a large image to be scaled.

### The Video is Coming!

## What's the problem with `<img>`?

The `<img>` element is great for displaying an image, obviously. However, it's not ideal to have mobile devices load large imaged intended for the desktop, to then simply scale them down.

We could include multiple `<img>` elements, each loading a suitably sized version of the image, and then use media queries to set `display:none` on all but the approriately sized version. However, many browsers will still download images that have `display:none` set, meaning we're actually adding to the payload with unnecessary content.

## Introducing `<picture>`

The `<picture>` element lets you specific a number of different image sources, each loaded at a different screen size. This means you can have your site only deliver the most appropriate image file.

Here's an example.

```HTML
<picture>
  <source media="(max-width: 700px)" srcset="logo-sm.png" />
  <source media="(max-width: 1000px)" srcset="logo-md.png" />
  <img src="logo-lg.png" alt="Main Logo" />
</picture>
```

The way the `<picture>` element works is a little like the `<audio>` and `<video>` elements.

A browser that supports the `<picture>` element (all modern browsers, apart from IE and Opera Mini) will go down those `<source>` elements in order, and use the first one that matches based on viewport width. If none of them match, it will use the `<img>` element included at the end.

If the browser doesn't support the `<picture>` element, it will just use the `<img>` element. As this tends to be older desktop browsers (and IE) we want this to be the larger image.

The `<source>` elements then go in order from smallest. In the above example, a viewport with a width of 600px will use the first image, `logo-sm.jpg`. A viewport with a width of 800px meanwhile will use `logo-md.jpg`. Any viewport over 1000px will use the large version.

## Targeting Resolution

Mobile devices, and increasingly desktop devices, can have varying screen resolutions. So, while two mobile devices might have the same width, one might actually be at a higher resolution than the other. We might therefore want to take advantage of this and serve a higher resolution version of an image to a device that can support it.

The `<picture>` elements allows us to do this as well. Had you noticed that those `<source>` elements use a `srcset` attribute, rather than just `src`? You can use `srcset` to specify a range of image resolutions. For example:

```html
<picture>
  <source
    media="(max-width: 700px)"
    srcset="logo-sm-1x.png 1x, logo-sm-2x.png 2x"
  />
  <source
    media="(max-width: 1000px)"
    srcset="logo-md-1x.png 1x, logo-md-2x.png 2x"
  />
  <img src="logo-lg.png" alt="Main Logo" />
</picture>
```

In this example, as well as selecting an image based on three different screen size thresholds, we are also offering two versions of each. One file is for screens with a normal pixel density, the second is for those with double the pixel density.

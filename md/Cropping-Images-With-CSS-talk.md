# Cropping Images With CSS

Sometimes it can be useful to crop an image.

### The Video is Coming!

## When to crop

Consider these two use cases:

1. On smaller screens we want to crop down to the focus of the image and take up less space.
2. A grid or slideshow of images needs the height of all images to be the same.

In both cases, there are other solutions. In the first, we could provide two different image files, one cropped, and use the `<picture>` element to serve the version appropriate to the screen size. In the second, we could use photoshop to make sure that all the heights are the same.

But maybe we want the user to be able to tap the picture to see the full image. We'd end up having to deliver two images instead of one. And if you've got a lot of images to layout into a grid, that could be a lot of Photoshopping.

## Using a `<div>`

We could use a `<div>` with its background image set to crop an image. After all, we can use the `background-size` and `background-position` rules to position and resize the image within the boundaries of the `<div>`. However, we miss out on the opportunity to explicitly tell the browser or screen reader that this is an image, and to provide an `alt` attribute accordingly.

Wouldn't it be good if we could use an `<img>` element for this?

## Using an `<img>`

Well, we can.

By default, if you resize an image element with CSS the image will be resized to fit the image element. This can lead to squishing and squashing unless you maintain the aspect ratio of the original image.

It doesn't have to be that way. There are two CSS rules that make the `<img>` act more like a `<div>` with a background image and the `background-size` and `background-position` rules implemented.

The first is `object-fit`. Here's some CSS:

```CSS
img {
  width: 200px;
  height: 400px;
  object-fit: cover;
}
```

Notice the use of `cover` as the value here. This works the same as for the `background-size` rule. It will resize the image, maintaining its aspect ratio, such that the entire `<img>` element is filled.

Note: the other values for `object-fit` include

- fill (the default)
- contain (resizes the image to fit in the `<img>`, maintaining aspect ratio)
- none (it's not resized)

Here's a picture of the Lake District, full size.

<img style="width: 100%" src="https://thomcorah.github.io/dmu-multimedia/resources/CroppingImagesEx/img/landscape.jpg" alt="The Lake District" />

And then here's the same picture, but with those style rules applied, using `cover` as the value for `object-fit`.

<img style="width: 200px; height: 400px; object-fit: cover" src="https://thomcorah.github.io/dmu-multimedia/resources/CroppingImagesEx/img/landscape.jpg" alt="The Lake District" />

By default, the image will be centred, so this has taken a slice out of the centre.

We can change the positioning of the image behind the 'window' using `object-position`. This works the same as `background-position`. We provide two values. The first is the position along the x-axis, the second is the position along the y-axis.

Lets add that to our rules:

```CSS
img {
  width: 200px;
  height: 400px;
  object-fit: cover;
  background-position: left top;
}
```

This positions the image at the left hand side, resulting in:

<img style="width: 200px; height: 400px; object-fit: cover; object-position: left top" src="https://thomcorah.github.io/dmu-multimedia/resources/CroppingImagesEx/img/landscape.jpg" alt="The Lake District" />

For more on the `object-fit` and `object-position` rules, their respective W3Schools reference pages are a good start:

object-fit: <https://www.w3schools.com/cssref/css3_pr_object-fit.asp>  
object-position: <https://www.w3schools.com/cssref/css3_pr_object-position.asp>

## What about video?

I'm glad you asked, as this also works for the `<video>` element. Neat!

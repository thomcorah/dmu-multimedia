# Inserting an Image

## The `<img>` element

We use the `<img>` element to insert an image.

It takes two attributes:

* src: this is the location of the image file
* alt: this is a short description of the image

## The image location

This is the location from the HTML file we're putting the image into.

Often your images will be inside a folder, so you need to tell the browser to go into the folder first.

Let's say we've got the following folder structure:

![simple folder structure](https://thomcorah.github.io/dmu-multimedia/resources/simpleFolderStructure.png)

Inside that img folder is an image called DMU-logo.jpg.

Consider this img element:

```html
<img src='DMU-logo.jpg' alt=''/>
```

This is telling the browser that it should find an image called DMU-logo.jpg in the same place as the html file we want to put the image into. However, look at the folder structure. From where we are in that html file, we can't see DMU-logo.jpg.

We need to go into the img folder first. So, our element actually needs to look like this:

```html
<img src='img/DMU-logo.jpg' alt=''/>
```

## The alt attribute

Once we've got the image location sorted out, we need to provide a short description in the alt attribute.

There are several things this is used for:

* It's read out by screen readers for the blind and partially sighted
* It's used by Google etc to better understand what the image is
* It gets displayed if the image can't load

So, we might end up with something like

```html
<img src='img/DMU-logo.jpg' alt='De Montfort University logo' />
```

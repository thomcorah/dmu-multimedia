# File Locations

It is important to understand how to properly point to the location of a file.

## When Would You Need To

Surprisingly often. For any image you want to include in your site, you need to tell the browser where the image is. The same for any video or audio file. If you want to link to another page, or another website you'll need to provide the location. To include style rules that work across your website, you'll need to link in a separate file.

Lots of reasons.

## Uniform Resource Locator

In order to provide the location of a file, we use a URL, or Uniform Resource Locator.

This is a standardised way of describing the location of something. There are two types of URL:

1. Relative
2. Absolute

## Relative URLs

A relative URL describes the location of a file, relative to where you're starting from. This is like you telling somebody that Jeff lives in the house next to yours, instead of providing Jeff's full address. As long as they start from your house and follow your instructions, they'll find Jeff. However, if they started from any other house and followed your instructions, no Jeff.

Consider the following file and folder structure:

```
[Website]
    |
    |-[img]
    |   |-background.jpg
    |   |-faces.jpg
    |   |-logo.png
    |
    |-[css]
    |   |-style.css
    |
    |-index.html
    |-about.html

```

In the example above, `Website`, `img`, and `css` are folders.

If we wanted to get from `index.html` to `logo.png`, we'd need a URL that went something like `img->logo.png`.

Actually, the way we write the URL is pretty close to that. A relative URL in `index.html` that points to `logo.png` would look like this:

`img/logo.png`

Don't forget the file extension, or the browser won't find it.

You can see we used a `/` to go into the `img` folder. Sometimes we need a URL to navigate up a level. What if we needed a URL in `style.css` that pointed to `background.jpg`. We can't do the same thing as before:

`img/background.jpg`

This will have the browser trying to find a folder called `img` _inside_ the `css` folder. That wouldn't work.

We need to tell the browser to go up a level first. We do that with `../`. So our full relative URL becomes:

`../img/background.jpg`

Relative URLs are really good for linking to things that are in your own website. If you move your website, upload it to a server for instance, although your website has moved, all the relative URLs will still work because your file structure is still the same.

## Absolute URLS

If somebody asked you where Jeff lived and you gave them Jeff's full address, that would be an absolute URL. They'll be able to find Jeff wherever they start from.

This is how absolute URLs work - they provide the location of a file in such a way that it'll work from anywhere, almost.

Absolute URLs have three parts.

1.  The Protocol, such as `https://`, tells the browser how to communicate with the server.
2.  The Domain Name, such as `dmu.ac.uk` tells the browser which website to go to.
3.  The Path, such as `study/courses.html`, tell the browser where to go inside the website.

These together give us an absolute URL.

`https://dmu.ac.uk/study/courses.html`

You could pop this into any internet connected browser in the world and it would load the same thing.

Absolute URLs are usually used when linking to things on other websites.

Note that if the path doesn't end with a file name, the browser will look in the folder it ends up for `index.html`. For example,

`https://dmu.ac.uk`

Will actually make the browser look for:

`https://dmu.ac.uk/index.html`

## A Word Of Warning

We also have absolute URLs on our computer, that refer to a file location somewhere on one particular machine. For example:

`file:/Users/tcorah01/Developer/dmu-multimedia/resources/ResponsiveSite/mobileOnly/css/style.css`

While this might work on your computer, as soon as you put it up on a server, it wont. The browser will be looking for a `Users` folder, and that just won't exist.

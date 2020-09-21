# Mobile Friendly

## Mobile First?

It's really important that our webpages work on mobile. Mobile web browsing is growing rapidly, and many people browsing the web on their smartphone will leave a site if it's difficult to use or read because it's only been designed for larger desktop computers.

When creating webpages, it's best practice to create the mobile version first, and then adapt to larger screen sizes from there. This is easier than building for desktop first and then stripping things out.

## Desktop is default

Annoyingly, browsers will assume a webpage is for desktop only, unless told otherwise. This means the browser will create a 'fake' window about 960 pixels wide, and then shrink it down to fit the actual screen width. This window is called the Viewport.

## Publish for mobile

We can include a little HTML in our webpage that tells the browser not to do this. We can tell the browser to create the Viewport at the same width as the device's screen or browser window.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

This is information **about** the page, not content to display **on** the page, so it goes inside the `<head>` element.

This is a crucial step to making sure our webpages are compatible with mobile devices. Just put this line in the `<head>` section of every page.

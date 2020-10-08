# Sizing for Mobile

There are a couple of important steps to take when developing your websites to make sure they are sized properly on mobile.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=47232cde-5376-4ec4-a796-ac4e00aee472&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Problems when viewing on a small screen

(if you try to push a site designed for desktop)

- Layouts get cramped
- The automatic flow of things can break a layout
- Images are larger than necessary
- Images take too long to download
- Images bleed off the
- User's information priority may be different

## How do we fix all of this?

## Mobile first

We build for the small screen first.

1. Set the viewport
2. Size content to the viewport
3. Use relative units

## The ViewPort

The viewport is the window through which the user sees our website.

We must tell the browser how to handle our page’s  
_dimension_  
_scaling_  
within the viewport.

## Viewport Dimension

Mobile browsers attempt desktop screen size

Usually 980px

And then scale content

What does that look like?

<https://thomcorah.github.io/dmu-multimedia/resources/ResponsiveExamples/noviewport.html>

## Viewport Dimension

We can fix this with a meta tag

```HTML
<meta name="viewport" content="width=device-width" />
```

## Viewport Scaling

When switching to landscape, some mobile browsers simply zoom in.

You may lose the benefit of the wider screen

## Viewport Scaling

We can fix this with a meta tag

```HTML
<meta name="viewport" content="initial-scale=1" />
```

## Dimension & Scaling!

Both together?

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

<https://thomcorah.github.io/dmu-multimedia/resources/ResponsiveExamples/withviewport.html>

---

## Size Content To Viewport

With the view width set to the device width…

We might accidentally make something too wide!

What does that look like?

<https://thomcorah.github.io/dmu-multimedia/resources/ResponsiveExamples/toowide.html>

## Relative Units

Avoid fixed pixel sizes

Make everything relative

There are a number of relative units

## Relative Units

| Unit | Description                              |
| ---- | ---------------------------------------- |
| em   | relative to the font size of the element |
| %    | usually relative to the parent element   |
| vw   | relative to 1% of the viewport width     |
| vh   | relative to 1% of the viewport height    |

# Responsive Design
## The How

---

## Remember this?


## Problems when viewing on a small screen

(if you try to push a site designed for desktop)

* Layouts get cramped  
* The automatic flow of things can break a layout  
* Images are larger than necessary  
* Images take too long to download  
* Images bleed off the   
* User's information priority may be different  


## How do we fix all of this?

---

## Mobile first

We build for the small screen first.

1. Set the viewport
2. Size content to the viewport
3. Use relative units
4. Use CSS media queries

---

## The ViewPort

The viewport is the window through which the user sees our website.  

We must tell the browser how to handle our page’s  
*dimension*  
*scaling*  
within the viewport.

---

## Viewport Dimension

Mobile browsers attempt desktop screen size  

Usually 980px

And then scale content  

What does that look like?  

notes: <https://thomcorah.github.io/dmu-multimedia/resources/ResponsiveExamples/noviewport.html>  



## Viewport Dimension

We can fix this with a meta tag

```HTML
<meta name="viewport" content="width=device-width" />
```

---

## Viewport Scaling

When switching to landscape, some mobile browsers simply zoom in.

You may lose the benefit of the wider screen


## Viewport Scaling

We can fix this with a meta tag

```HTML
<meta name="viewport" content="initial-scale=1" />
```

---

## Dimension & Scaling!

Both together?

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

notes: <https://thomcorah.github.io/dmu-multimedia/resources/ResponsiveExamples/withviewport.html>

---

## Size Content To Viewport

With the view width set to the device width…

We might accidentally make something too wide!

What does that look like?

notes: <https://thomcorah.github.io/dmu-multimedia/resources/ResponsiveExamples/toowide.html>

---

## Relative Units

Avoid fixed pixel sizes

Make everything relative

There are a number of relative units


## Relative Units

|  Unit   |  Description   |
|---------|----------------|
| em      | relative to the font size of the element |
| %       | usually relative to the parent element |
| vw      | relative to 1% of the viewport width |
| vh      | relative to 1% of the viewport height |

---

## Media Queries

@media queries in CSS apply styles conditionally

For example, when printing you can add styles that remove
navigation, dark backgrounds, ads…

```css
@media print {
 body {
 background: #fff; /* white */
 }
 nav,
 footer,
 .promo {
 display: none;
 }
}
```


## Media Queries

Apart from the default all (which you can ignore) there are
three kinds of CSS @media queries:

| @media | for: |
|--------|------|
| print  | printers |
| screen | computer screens, tablets, phones… |
| speech | screenreaders that speak the page content |


## Media Queries

We can add conditions beyond the output type.

* min-width
* max-width
* min-height
* max-height
* orientation

In practice, we just use min-width and orientation


## Media Queries

These are added to the output type

```css
@media screen and (min-width: 500px) {
  /* Rules here will be applied on screens 500px or wider */
}
```


## Media Queries

We can use these to start from mobile display and add sensible breakpoints for larger screens.

```css
body {
 margin: 0;
 /* more mobile/global body styles */
}
/* more mobile/global styles here < 499px */
@media screen and (min-width: 500px) {
/* override mobile styles screens > 499px */
}
@media screen and (min-width: 1000px) {
/* override previous styles for screens > 999px */
}
```

---

## Testing It
We have various testing options:

* Resizing the browser window!
* Using the browser’s Responsive Design Mode
* Safari lets you use the web inspector to inspect a page on an iPhone
* Using a third-party service like browserstack
* Put it on a server and use your phone

---

## Further Reading

<div style='font-size: 80%'>

**Ethan Marcotte: Responsive Web Design**   
<https://abookapart.com/products/responsive-web-design>

**Google: Responsive Web Design Basics**  
<https://developers.google.com/web/fundamentals/design-and-ui/responsive/>

**Fastcode: RWD Explained in GIFs**  
<https://www.fastcodesign.com/3038367/9-gifs-that-explain-responsive-design-brilliantly>

**This is Responsive: Patterns and Resources**   
<http://bradfrost.github.io/this-is-responsive/>

</div>

---

# Any Questions?

---

Thank You

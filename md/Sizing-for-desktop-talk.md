# Sizing for Desktop

Once you've created a site that work well on mobile, it's time to think about scaling it up to desktop. This means introducing Media Queries.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=4baa94a9-3aa2-442c-b8cf-ac4f00a5e685&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

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

| @media | for:                                      |
| ------ | ----------------------------------------- |
| print  | printers                                  |
| screen | computer screens, tablets, phones…        |
| speech | screenreaders that speak the page content |

## Media Queries

We can add conditions beyond the output type.

- min-width
- max-width
- min-height
- max-height
- orientation

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

## Testing It

We have various testing options:

- Resizing the browser window!
- Using the browser’s Responsive Design Mode
- Safari lets you use the web inspector to inspect a page on an iPhone
- Using a third-party service like browserstack
- Put it on a server and use your phone

## Further Reading

**Ethan Marcotte: Responsive Web Design**  
<https://abookapart.com/products/responsive-web-design>

**Google: Responsive Web Design Basics**  
<https://developers.google.com/web/fundamentals/design-and-ui/responsive/>

**Fastcode: RWD Explained in GIFs**  
<https://www.fastcodesign.com/3038367/9-gifs-that-explain-responsive-design-brilliantly>

**This is Responsive: Patterns and Resources**  
<http://bradfrost.github.io/this-is-responsive/>

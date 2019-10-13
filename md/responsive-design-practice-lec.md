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

---

## Size Content To Viewport

With the view width set to the device width…

We might accidentally make something too wide!

What does that look like?

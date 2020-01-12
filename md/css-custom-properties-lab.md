# CSS Custom Properties

The aim of this lab is to introduce you to using CSS custom properties. It will also take in a little responsive CSS with a basic manual grid setup.

## The Manual Grid

You can see an example of this here: <https://thomcorah.github.io/dmu-multimedia/resources/css-custom-properties/grid-trad.html>

### 1. Create a new html document
Make sure to include the usual starting html, including the viewport meta tag.  
There's a short guide here: <https://thomcorah.github.io/dmu-multimedia/lab-reader.html?starting-a-project-short.md>

### 2. Create the following html structure
We're going to use a 12 column grid to create a simple structure with a full width header and then two columns. Here's the html that you want:

```html
<header>
  The header
</header>
<article>
  Main content
</article>
<aside>
  Sub content
</aside>
```

### 3. Give your elements some height and color
Give each one a different background colour so you can see them more easily.

### 4. Float your elements
We need columns to sit next to each other horizontally. Create a column class, add all your elements to it, and then use css to float them all left.

### 5. Set your column widths
Grids are useful design tools as they promote alignment. Each area of content will take up a number of columns of width. A 12 column grid layout is particularly flexible as it can be subdivided by 2, 3, 4 and 6.  
For this to work, you create 12 classes - .col-1, .col-2, .col-3 and so on up to .col-12. Each of these has its width property set to the appropriate percentage. For example, a 1 column width is just 8.333% wide.
Write the width rule for each column class.

### 6. Assign the correct column class to your elements
The header should have .col-12 for instance as it's full width.

### 7. Make it responsive
We only want these columns when on a larger display. On mobile, we just want everything full width. How you can adapt your CSS to make that work?

Hint, you want all the grid stuff to only happen above a certain screen size.

Note: Using the class names col-1 etc makes it easy to see at a glance how many columns a given element is taking up.


## CSS Custom Properties
You're now going to do the same thing, but with CSS custom properties. You can see an example here: <https://thomcorah.github.io/dmu-multimedia/resources/css-custom-properties/grid-props.html>

### 1. Duplicate the manual grid html page you just made.
This will form the starting point.

### 2. Get rid of the CSS from it.
Keep the height and colour bits though.

### 3. Use a custom property to describe the widths
Instead of have a list of 12 classes, use a custom css property on each element to describe how many columns it should take up. For example:

```css
header {
  --width: 12;
}
```

### 4. Use the custom property to set the width
Make all three elements members of the col class.

At the bottom of your css, create a rule for the col class that will automatically work out the percentage width based on the --width custom property for that element.

This will use the calc css function.

Float them left too.

```css
.col {
  float: left;
  width: calc(var(--width) / 12 * 100%);
}
```

### 5. Make it responsive
As before, use a media query so that this only takes effect above a certain screen size.

### 6. Have a little play around
Rather than everything be full width on mobile, can you make the article and aside half width? How does that change your css?

# Floating Elements

You've seen elements stacking vertically - most do this by default. Sometimes we want them side-by-side though, or we want text to flow around an image. Floating an element can help you with this.

## Exercise 1 - Embedded Image

You're going to explore wrapping text around an image. There is a completed example here: <https://thomcorah.github.io/dmu-multimedia/resources/floating/floating.html>

Feel free to copy the image and/or text from there. You can also inspect the code if you get stuck.

### 1. Set up your project

- Create a folder, open it in Atom.
- Create a `css` folder, and create a `style.css` file inside it.
- Create your `html` file.
- Fill it with the starting HTML (html -> `tab`)
- Add the viewport meta tag to the `<head>` section:
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
- Link the stylesheet in (`<link>` element)
- Open your page in Chrome - https://my.tech.dmu.ac.uk/~pNumber
- Open the inspector and switch to responsive mode.

There's a short guide to inserting a stylesheet here: <https://thomcorah.github.io/dmu-multimedia/lab-reader.html?linking-a-css-file-short.md>

### 2. Get an image

Create an `img` folder, find an image, and put it in.

### 3. Insert the image

Add the image to your html page. Refresh the page in Chrome to make sure this has worked.

There's a short guide to images in html here: <https://thomcorah.github.io/dmu-multimedia/lab-reader.html?The-Image-Element-talk.md>

### 4. Set the image width

Using CSS, set the width of the image to 25%, with a minimum width of 100px.

### 5. Put in a paragraph of text

After the image. Make it a good long paragraph too.

### 6. Preview it

Refresh your browser, in mobile view. You should have the paragraph of text sat below the image, not to the side of it. Enter float...

### 7. Float the image

Using CSS, set the image to float left.

### 8. Preview it

Refresh your browser. You should now see the text wrap around the image. If you don't have enough text to go round and underneath the image, put some more in that paragraph.

You might notice that the text is very tight in on that image. Maybe give the image some margin to push the text away a little.

### 9. Wrap both in a `<section>`

Yep, wrap both the image and the paragraph into a single section.

### 10. Duplicate the `<section>` twice

Just copy and paste it below the original. And then do it again.

### 11. Make two paragraphs smaller

Delete most of the text, leaving just a single sentence, for the two paragraphs you just created.

### 12. Preview it

Refresh your browser. A weird thing should have happened.

### 13. Inspect it

Find and mouse-over one of the `<section>`s in the inspector. The blue highlight on the webpage shows you where it is. Notice that it's only as high as the paragraph of text, and not the image!

That's right. When you float an object, it's no longer taken into account for the height of its container.

### 14. Clear it

We need to do what's called clearing the floats. We do this by putting a little marker in after the paragraph to tell the browser that the section should actually pull right down to there and include any floated elements.

There's a little bit of CSS we can apply here that will actually insert some content into the document and apply the correct rules to it to do this.

It's the `<section>`s we want to clear round the floats, so it's the section we start off with. In order to add some content at the end of the section we use the `::after` pseudo-selector. Here's what we need:

```css
section::after {
  content: "";
  display: block;
  clear: both;
}
```

The first two lines of that insert a block level bit of content. It's the third line `clear: both` that sets it up as a marker to clear the `<section>` round any floated elements.

### 15. Preview it

Refresh your browser. Hopefully, all is well.

## Exercise 2 - Horizontal Layout

Another reason you might want to use float is to get elements to sit next to each other horizontally. For a menu for example. You can do this at the top of the page you just created.

### 1. Create the HTML structure for the menu

Just do a two item menu. Start off with a `<nav>`. Inside that you might want a pair of `<div>`s. Put a label in each, like Dogs and Cats.

### 2. Preview it

Refresh your browser. Not very horizontal.

### 3. Float them

Use CSS to float both of those divs left.

### 4. Preview it

Their width has shrunk to to the size of the text, and the content now wraps up the right hand side of them. Not ideal.

### 5. Set their width

We've got two menu buttons, and we want the menu full width, so set the width of those divs to 50%.

### 5. Preview it

Refresh your browser. Ok, that's done it.

### 6. Style the buttons

Centre the text and give the `<div>`s a background colour.

### 7. Padding

Give them some padding so they can breath a little.

### 8. Preview it

Uh oh, that's broken it. By default, the browser considers the width and height of an element to just mean the contents, so when you set the width to 50%, any padding you then apply is on top of this. This is a silly way to think of the size of an element, much better to think of its border as defining its size instead.

### 9. Box-Sizing

We can change the way the browser considers width and height with some CSS. Set the `box-sizing` property of the `<div>`s to `border-box`. Now that 50% includes the padding, whatever you set it to.

### 10. Some margin

We want those buttons to have a little space between them. Set the margin on the `<div>`s to 2%;

### 11. Preview it

That's broken it again.

### 12. Fix it

You've got two `<div>`s with 50% width each, and then added four lots of 2% margin, so there's just not room for everything.

To keep the 2% margin, we need to reduce the width of the `<div>`s. For each `<div>` there's a margin on each side, so that's a total of 4%. Take 4% off 50% and you're left with 46% for the width.

### 13. Preview it

Refresh your browser. Did that do it? It should of :)

## And Relax

# Endangered Species Website

This lab task will have you practice good HTML structure and CSS styling to produce a simple content page. You will use semantic HTML elements to help describe the structure of the page, as well as a full-page background image.

You can see a completed example here: <https://thomcorah.github.io/dmu-multimedia/resources/EndangeredAnimals/>

As you'll see, this page presents five critically endangered animals. Each section includes its name, a couple of paragraphs of information, an image, and some key facts.

All content has been taken from the information on the World Wildlife Fund website.

You can download a zip of the images (including the background image) here: <https://thomcorah.github.io/dmu-multimedia/resources/EndangeredAnimals/img.zip>

You can copy and paste the content from the example site.

## Start Your Site

### 1. Create a new folder for your website

### 2. Create an index.html page

Make sure to populate it with the usual start code. In Atom, type `html` and hit `tab`.

Add the viewport `<meta>` tag to the `<head>` section:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### 3. Create a folder of images

Put the unzipped downloaded images in it.

### 4. Create a CSS file

This should empty for now, and be in a css folder.

### 4. Link your CSS file

Use the `<link>` element in your HTML file to link in your CSS file.

## Add Your Content

There's a lot of content here, but it's in a repeating structure.

```
article
  header
    nav
  section
    aside
  section
    aside
  section
    aside
  section
    aside
  section
    aside
  footer
```

### 1. Start with an article

Create an empty `<article>` element inside your `<body>`. Everything will be contained inside this.

### 2. Create a header

Inside the `<article>`, create a `<header>` element.

This `<header>` will contain both the main heading, and the navigation.

For the main heading, use a `<h1>`.

For the navigation (a list of links so the user can jump down the page to any of the animals) you should use a `<nav>` element with an `<a>` for each link.

Those `<a>` elements are going to be slightly different to any you've done that take the user to a different page - they need to link to other elements on the same page. You may need to remind yourself how to do that.

### 3. Create your first section

With your `<header>` done, it's time to put a `<section>` underneath it.

Inside this `<section>`, you're going to put a `<h1>` for the section heading. This seems odd, shouldn't it be a `<h2>`? Well, as we're now working with sections, the importance of a heading is also based on its location within the `<section>`. Using a `<h1>` here says that this is the most important heading in this section, but because it's in a section it's not as important as the main heading in the `<header>`.

You'll also need to put a couple of paragraphs and an image in the section. Refer to the completed example for structure and to copy the text.

Under the second paragraph we're going to include an `<aside>` for some tangentially related information. That's the little list of facts.

Each line of info is in a `<p>` element. However, we want to make the label bold. We can do this by wrapping each label in a `<span>` element, and giving them all the same class name. Later on, you'll use CSS to make all those labels bold.

```html
<p><span class="label">Population:</span> Less than 400</p>
```

You should have something structured like this:

```html
<section>
  <h1></h1>
  <p></p>
  <img />
  <p></p>
  <aside>
    <p><span class="label"></span></p>
    <p><span class="label"></span></p>
    <p><span class="label"></span></p>
  </aside>
</section>
```

Inspect the code in the completed example if you're stuck with this.

### 4. Repeat

Copy and paste the section, changing the content for each animal.

Note that the section for the Orangutan will need a list.

### 5. Add a footer

Once you're this far, adding a `<footer>` after the last `<section>` should be fine.

## Style Your Page

Load your page in the browser. It probably looks pretty bland.

### 1. Add a background image

We want the whole page to have a background image. We can do this by setting a background image on the `<body>` element, as this encompasses everything.

We want the background image to completely cover the `<body>` element, so use the `background-size` property to do this.

### 2. Change the font

You can change the font through the whole page by setting it on the `<body>` element.

### 3. Background colours

We want the text to be legible, so we're going to set background colours for the different sections.

In the example, the `<header>` and `<footer>` have a dark grey background colour, while the `<section>`s have a white background.

Change the text colour for the `<header>` and `<footer>` to white so it can be read on the dark background.

### 4. Inset contents

We want our `<header>`, each `<section>`, and the `<footer>` to all have a gap around them. We can do this by applying a margin to all of them together.

To apply the same rules to multiple selectors, list the selectors separated by commas. For example:

```css
header,
section,
footer {
  margin: 20px;
}
```

We also want the text inside these elements to have a bit of a gap around it. We don't want it to be right up to the edge. We can do this by setting some padding on those same elements.

```css
header,
section,
footer {
  margin: 20px;
  padding: 10px;
}
```

### 5. Resize the images

We want the images to be the full width of their containers. Set the width of all images to 100%.

You could also give them slightly rounded corners using `border-radius`. This looks nice.

### 6. Make the labels bold

Each section has some key facts at the end. For example:

**Population:** Less than 400

We want those labels to be bold. In the HTML, we've wrapped them in `<span>` elements and given all those `<span>` elements the same class name.

Now in our CSS, we can use that class name to make them all bold.

## Going Further

By this point, you should have a simple but effective looking page. You could go further though. What about setting a background image behind the header of each section? What about rounding the corners of the sections and headers? What about adding a drop-shadow to the images?

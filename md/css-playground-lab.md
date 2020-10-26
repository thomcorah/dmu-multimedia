# CSS Playground

This worksheet is about experimenting with CSS to change font, colour, and appearance.

You are provided with the HTML for a page and an empty stylesheet. You are to use CSS to style the page to an acceptable level, and then take it from there.

You can see a completed example at <https://thomcorah.github.io/dmu-multimedia/resources/cssPlayground/cssPlayground.html>

You will find starter code at <https://thomcorah.github.io/dmu-multimedia/resources/cssPlayground-starter-code.zip>

## Getting Started

### 1. Download the starter code and open it in Atom

Make sure to open the folder, not just the HTML file.

### 2. View it in the browser

Use responsive mode in Chrome or your own phone.

### 3. Look through the HTML

Do you know what everything is? Can you relate the HTML to what you see on the page? Can you understand the structure of the content?

### 4. Look at the completed example

Note what's different.

### 5. Create a CSS file

Create a folder for your CSS files and create a css file. Use the `<link>` element in your HTML to link it in.

### 6. Check the style works

Make sure you've linked your CSS file to your HTML file properly. In your CSS file, do something like make the background of the `<body>` red. Does this change show up in the browser? If not, what have you missed? Did you include all three required attributes in the `<link>` element? Did you spell the folder and file names exactly right in the `href` of the `<link>` element?

## Changing things

### 1. Sort out the image

We really want all images to be 100% the width of their container. Use CSS to set the width of all images to 100%;

### 2. Change the font

The default serif font isn't very appealing. You can change the font for the whole page by applying a css rule to the `body` element. This will then cascade down to everything else. The rule you want for this is `font-family`. There's an entry on W3Schools for it here: <https://www.w3schools.com/cssref/pr_font_font-family.asp>

### 3. Header

Give the header a background colour. Preview in the browser.

That doesn't look right. We want the background colour right to the edges of the screen, but we don't want the text right to the edge. How can we fix that?

Here's a clue - the body has a default margin on it, stopping the `<header>` from touching the sides.
Another clue - we might want to pad the `<header>`.

### 4. Padding

Removing the margin from the `<body>` means all the text is right up against the edge of the screen. It's not just the `<header>` that needs padding.

### 5. Rounded corners

The picture might look nice with slightly rounded corners. We want `border-radius` for that.

### 6. Drop shadow

The image might also look good with a gentle drop shadow. This is called a box shadow. You can find out about it here: <https://www.w3schools.com/cssref/css3_pr_box-shadow.asp>

You can find online generators for shadows, such as this one: <https://www.cssmatic.com/box-shadow>

### 7. Key Facts

The Key Facts section is a little different. It feels like it should be in a box with a border. Use a combination of `margin`, `border`, and `background-color` to set it out.

### 8. Group related items

The headings and subtext pairs in the key facts box are a little far apart from each other. That's because both the `<h1>` elements and the `<p>` elements have default margin on the bottom and top respectively. Change this to bring each pair closer together.

### 9. The footer

Give the footer a dark background, and smaller white text. The default colour for the link doesn't work on a dark background either, so change this.

## Going Further

So this is a great start, this looks tidy and styled. But, you could go further. Explore CSS, seeing what you can do to personalise and change this page.

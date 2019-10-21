# Responsive Design

This worksheet will guide you through the creation of a responsive mobile-first one-page website. It does not tell you how to do everything, but seeks to point you in the right direction.

The website will be photography gallery, containing a responsive grid of images.

## Set Up Your Files

### 1. Create a folder for your website
Do this in the file explorer, inside your `public_html` folder.

### 2. Open the folder in Atom
You can do everything in Atom now.

### 3. Create a folder for images

### 4. Get the images
You'll find them at <https://thomcorah.github.io/dmu-multimedia/resources/animalImages.zip>  
They've already been cropped to all be the same size. Put them in your images folder. You might want to rename them to make writing those urls easier!

### 4. Create your html file
Just make sure you've got the boilerplate html in there.

### 5. Add the viewport `<meta>` tags
Add meta tags to the head section to tell the device to scale the site to the viewport properly.

This page on the MDN has some useful info about setting the viewport: <https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag>

## Add the content

### 1. Create heading and some intro text

### 2. Add all the images

### 3. Preview on mobile
Do this both in responsive mode in the browser, but also on your actual mobile device. How does it look? Are the animal images wider than the screen?

### 4. Resize the images
Generally speaking, we never want an image to be wider than its container. In this instance, we want those images to actually fill the width of the screen, so use CSS to set the `width` of all images accordingly.

### 5. Preview again, fix/improve anything else
Maybe change the fonts, background colour, spacing....

## Make it responsive
Now you've got it looking great on mobile, what happens when you use a larger screen?

### 1. Increase the screen size
Use responsive design mode to see what happens as you increase the screen size. At what point do those images start to look a little large? At what point might they be better displayed in two columns?

### 2. Add a media query at that breakpoint
The screen width you've identified is your first breakpoint. Use a media query to bring in some rules on those images at that point that:

1. Make them half the width of the page
2. Gets them sitting next to each other

There's a grid-orientated section on media queries on the W3Schools site here: <https://www.w3schools.com/css/css_rwd_mediaqueries.asp>

Or there's a more technical and thorough page about media queries on MDN: <https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries>

### 3. Add a further breakpoint
Keep expanding the width to identify where to split again to three columns.

### 4. Add a further media query at that breakpoint
This time, the images are already stacking next to each other, so you just need to resize them to 1/3 of the screen width.

## Recreate the BBC site
Visit <https://www.bbc.co.uk/> in responsive mode. Expand and contract the screen and notice how the layout adapts.

Attempt to mirror this with media queries. Remember, start with mobile first. Just the top bit - the three main stories.

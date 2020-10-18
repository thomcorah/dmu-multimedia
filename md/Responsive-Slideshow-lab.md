# Responsive Slideshow

The aim of this lab is to create an image slideshow. It should have several characteristics:

1. The image loaded for each slide should be appropriate to the size of the display. Load a smaller image for smaller screens.
2. The images can be of any aspect ratio. However, the slideshow should crop them to equalise aspect ratios - they will all be the same height - without squashing or stretching.
3. The navigation buttons should show on hover where hover is available, but be permanently out where it is not.

Two resources are provided, a zip file of images, and some starting HTML and JavaScript.

You can find the images at <https://thomcorah.github.io/dmu-multimedia/resources/SlideshowExample/badgers.zip>

The start code is included at the bottom of this lab sheet. Copy and paste it into a new document.

You can see a completed example of the slideshow at <https://thomcorah.github.io/dmu-multimedia/resources/SlideshowExample/>

## Setup your site.

Create a new folder for the slideshow. Create a new HTML file in there and paste the starter code in. Create an 'img' folder and put the unzipped images in there.

## Some Styling to Start.

There is no CSS in the starting code at all. What this means is that you've got a `<div>` with a series of images, each displaying at their native size.

The JavaScript will kick off and hide all but the first one.

You've also got two buttons, one to move to the next slide, and one to move back. They're underneath the image though. And not styled at all.

So, here are a couple of things you need to do with CSS to start with:

1. Fix the width of the slideshow images - they should all be 100% width.
2. Move the navigation buttons. They should overlay the image, one on the left, the other on the right. They should also be bigger. Have a look at the finished example if you're not sure.

Feel free to do any other styling you want.

## Load the correct image

The first task is to make sure that the browser loads an image of an appropriate size. In the starter code, all the full size images are included with `<img>` elements. However, if you look at the unzipped images you'll see there's a second version of each with '-sm' suffixed on the file name. These are smaller versions of each image.

You need to add `<picture>` elements around each `<img>` so that if the browser is narrower than 600px, it loads the smaller image.

You can test it's doing this by

- open the page in the browser
- reduce the browser width to below 600px (use Chrome Dev Tools in mobile view?)
- right-click the image and select Save As. The name that comes up to save it as in the dialogue will tell you which file has been served.

Alternatively, the Network tab of the Developer tools will tell you which files have actually been loaded. With the browser width below 600px, you should see that the full size versions were cancelled.

## Fix the Aspect Ratios - Crop the images

The images have different aspect ratios. One of them is even a portrait orientated picture! If just let the slideshow run with this its height would change with each image, leading the content that follows to jump up and down with each new image. That's no good. However, we can crop the image using the `object-fit` CSS rule on the images.

Now, here's a funny thing. Even though you've actually got `<picture>` elements displaying the image, choosing the file that matches the `media` attribute you provided, you can still style whatever image gets loaded as though it were that `<img>` element you've got nested in it. For example:

```HTML
<picture>
  <source media="(max-width: 600px)" srcset="img/badger1-sm.jpg" />
  <img class="slideImg" src="img/badger1.jpg" alt="A badger" />
</picture>
```

If you write some style rules that target the `slideImg` class, they will apply to this image, whether it's `badger1.jpg` or `badger1-sm.jpg` that actually gets loaded.

Anyhow, as we're thinking mobile first here, you might want to have the slideshow be the full width of the screen. The height can then be specified using the `vw` unit to make it relative to the screen width, and therefore the slideshow width.

For example, setting the height of the images to `70vw` will mean they are 70% the width of the window.

## Make the Buttons Appear on Hover

It would be good if the navigation buttons weren't visible until the user wanted to interact with them i.e. moved the mouse over the slideshow.

Make the buttons invisible by default - use opacity as this can be animated with a CSS transition.

Add some CSS so that when the user hovers the mouse over the slideshow, the navigation buttons become visible.

Hint: You're going to need a way of selecting a navigation button that's inside a slideshow that's been hovered.

That's all well and good - but what about folks on mobile devices that can't hover.

Use a media query to make the buttons permanently visible on devices that don't have the hover functionality.

## And That's It

If you've got this far, you've done a lot yourself, well done.

You have a slideshow that serves image files based on screen size, crops them to maintain aspect ratio, and has a nice hover effect that only works where hover is available.

From here, you could:

- carry on styling your slideshow
- add a timer to automatically transition the slides every two seconds
- make the 'hit' area of those buttons larger on devices that have 'coarse' pointer ability
- try adapting the slideshow to include a video or two - the cropping works with them too

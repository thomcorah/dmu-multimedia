# UI Animation With GSAP

This lab sheet sets you three challenges to accomplish using the GSAP animation tool from Greensock. In each case, you are provided with an example, so use that for reference if you get stuck.

In each case, you'll need to include the GSAP JavaScript file from Greensock. Visit their website to grab it, and access helpful documentation: <https://greensock.com>

## 1. Staggered Menu

Your task here is to create a menu where each menu item is animated onto the page in a staggered fashion - that is, one after the other.

Here's an example: <https://thomcorah.github.io/dmu-multimedia/resources/animation/menu.html>

Without animation, the menu should sit in the top left of the page. You should use GSAP to animate it in **from** off the page. Use GSAP's stagger function to stagger each item's introduction.

## 2. Bouncing Ball

Create a ball that falls and bounces to a stop in a fairly realistic way.

Here's an example: <https://thomcorah.github.io/dmu-multimedia/resources/animation/ball.html>

There are two things to get right here. First is the use of border radius, radial gradient, and background position offset on a `<div>` to make it look like a ball. Use W3Schools for reference on the using a radial gradient for the background image (not the colour) and background position to offset it.

The second part is then using GSAP to give the ball a bounce.

## 3. Flipping Elephants

Your third and final task is to create an image that's introduced the page with a spin from the left.

Have a look at this: <https://thomcorah.github.io/dmu-multimedia/resources/animation/photo.html>

There's a little styling on the image and its container, but mostly this is about using GSAP to animate several properties at once. As with the menu, have the image styled to be on the page by default, and then animate it **from** off the page. This means that if somebody is viewing your page without JavaScript, they'll still see the image.

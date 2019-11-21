# Flexbox

The Flexible Box Model, or Flexbox, provides a convenient and powerful way to achieve a range of layouts for your webpage. The following tasks will guide you through an exploration of some of the more basic things it can do.

You will find a really useful resource when working with Flexbox is this artical from CSS Tricks: <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>

## Get Setup
Setup for a new project. You'll find a handy little step-by-step guide here: <https://thomcorah.github.io/dmu-multimedia/lab-reader.html?starting-a-project-short>

## Horizontal Menu
One of the things flex box can do is spread some items neatly across a container’s width. This can be really handy for creating a menu for example. So, this is your first task. Create a horizontal menu with four items, all with centred text and spread out evenly.

![Horizontal Layout](https://thomcorah.github.io/dmu-multimedia/resources/flexbox/img/t1.png)

* The menu is three `<a>` elements inside a `<nav>`
* The `<nav>` has been set up as a flexbox container - use the `display` css property
* The `<a>` elements have been told to grow, all by the same amount.

The rest of the styling is up to you.

You can see this completed example here: <https://thomcorah.github.io/dmu-multimedia/resources/flexbox/t1.html>

Can you change it so that the menu items are grouped in the centre?

![Horizontal Layout](https://thomcorah.github.io/dmu-multimedia/resources/flexbox/img/t1v2.png)

You'll need to stop the `<a>` elements from expanding, and you'll have to tell the `<nav>` how to justify its contents. Refer to that CSS tricks page for pointers.

You can see this completed example here: <https://thomcorah.github.io/dmu-multimedia/resources/flexbox/t1v2.html>

## Vertical Centring
Flexbox can be used to centre things vertically, as well as horizontally. Can you put a square in the middle of the page?

![Centred square](https://thomcorah.github.io/dmu-multimedia/resources/flexbox/img/t2.png)

* The red square is a `<div>` with height and width set to 50px
* This is inside a `<div>` set up as a flexbox, but with its height set to `100vh` to make it the full height of the browser window.
* The red square has its margin set to `auto` on all sides.

You can see a completed example here: <https://thomcorah.github.io/dmu-multimedia/resources/flexbox/t2.html>

## Flexible Grid
We can use flexbox to create a grid of elements - photos for example - that automatically adapts to screen size. Have a look at this video:

<video controls>
  <source src='https://thomcorah.github.io/dmu-multimedia/resources/flexbox/video/flexgrid.webm' type='video/webm' />
  <source src='https://thomcorah.github.io/dmu-multimedia/resources/flexbox/video/flexgrid.mp4' type='video/mp4' />
  Sorry, your browser does not support HTML5 video. You can download it <a href='../resources/flexbox/video/flexgrid.mp4'>here</a>.  
</video>

Can you achieve this?

There's a completed example at: <https://thomcorah.github.io/dmu-multimedia/resources/flexbox/t3.html>

* Each of the squares is a div with the same classname. All have their height and width set to 50px and background colour to maroon.
* They are inside a `<div>` that's set up as a flexible container.
* The container is told to wrap its contents using the `flex-wrap` property.
* The `justify-content` property is used on the container to control how the items are spaced across it.

## Going Further
If you've finished that, you may want to keep experimenting with Flexbox. There's a lot more it can do, just take a look through some of the properties and examples on the css tricks page and try some things out.

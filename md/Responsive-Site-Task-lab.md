# Responsive Site Task

Once you've optimised your website for mobile, media queries are a powerful tool to allow it to adapt to larger screen size.

Your task is to take a mobile optimised site and use media queries to make better use of wider screen sizes.

Here's what it looks like on mobile.

![Mobile View](https://thomcorah.github.io/dmu-multimedia/resources/img/callSiteSmall.png)

You can see the mobile version in your browser here: <https://thomcorah.github.io/dmu-multimedia/resources/ResponsiveSite/mobileOnly/>

Make sure to view it at mobile size.

You can download the code here: <https://drive.google.com/file/d/1YWpQBOvnwmAZxngvEZMHJSn5aX3Yc0VE/view?usp=sharing>

Your task is to use media queries to adapt the code work at tablet sized display first, and then full desktop.

## Tablet View

There are just a few changes that are necessary for tablets, mostly concerning the menu.

![Tablet View](https://thomcorah.github.io/dmu-multimedia/resources/img/callaSiteMedium.png)

### 1. Add a media query

At the bottom of the CSS file, add a media query that will kick in when the browser width is 800px or wider.

### 2. The Logo Image

There are two logo images in use. One is just the initials of the band, an image more suitable for mobiles. However, when we get to tablet size we can use the full logo instead.

To achieve this, you could have two `<img>` elements there, one for each version. Use the `display` CSS property to hide the larger one on mobile, and then hide the smaller one when the screen size enters tablet territory.

### 3. The Menu

There are a few things to do to change the menu from one that appears in response to a touch on the hamburger menu to one that sits horizontally under the logo.

#### 3.1. Hide the Hamburger

To start with, hide the hamburger. Use the `display` css property to do this.

#### 3.2. Adapt the Menu Container

The menu items are contained in a `<nav>`. On mobile this is full width, full height, and lays the menu buttons out vertically. Once we get to tablet we need to make a few changes:

1. Change its positioning so that it's no longer fixed in place
2. Change its height so that it's just a tall as it needs to be
3. Set its left position to 0
4. Use flexbox so that it lays its contents out horizontally and centred

#### 3.3. Change the Menu Items

In mobile view, the nav has a dark background, so the text of the menu items is white. However, the menu is now on a white background so change the text color to black.

### 4. Change the Photo

On mobile, the photo is full width. However, on tablet and above we want it smaller and inset. Change its width to some suitable percentage, and then float it to the right so that the text wraps around it.

### 5. Fix the Float

Floating the image means that as the screen gets wider, the image will start overlapping the newsletter section as its size isn't included in the height of its section. This is because it's being floated.

We can fix this by clearing the floating elements, telling the section to include the size of any floated elements when calculating its own height.

This can be done by inserting a marker at the end of the section, and applying the `clear: both` css rule to it.

## Desktop View

The changes at desktop size are more wide ranging, particularly in terms of layout.

![Desktop View](https://thomcorah.github.io/dmu-multimedia/resources/img/callaSiteLarge.png)

### 1. Change the Header

#### 1.1. Text Alignment

We don't want the header contents aligned centrally, so change the text alignment to left.

#### 1.2. Background Colour
The layout changes mean some colour changes. Change the background colour of the header.

#### 1.3. Horizontal Alignment

Rather than have the menu underneath the logo, there's some space on the right for it. Use flex box on the header so that the logo is on the left and the menu on the right.

### 1.4. Reallign the Menu Items

We don't want the menu items centred in the `<nav>` anymore. Change the `<nav>` so that it justifies its items to the right hand side. Hint: as it's a flexbox, you can use the `justify-content` rule for this.

You can also use `align-items` so that the menu items are centred vertically.

### 2. Contents Layout

We now want our content in two columns. You can achieve this by creating two classes, one for the left column and one for the right column. The left column has a width of 65% and is floated left, the right a width of 35% and is floated right.

### 3. Show the Albums

Now we've got more space, we can include a row of album covers that each links to its own page. This is already in the HTML, but the default CSS rules removed it by setting its `display` property to `none`. So, change this. Set it up as a flexbox so that it lays the images out evenly across its width.

### 4. Set a Maximum Width

As the screen gets wider, the layout starts to get a little stretched. In the example screenshot, the width of the content areas has been restricted to 1200px, while allowing the background colour of the `<header>` and `<footer>` to extend right across the page.

To achieve this, both of those elements have a secondary container inside them. It's this secondary container that needs its width restricted to 1200px.

The `<article>` element that contains all the contents needs its width restricting too.

## And That's About It.

There may be a few niggles, or things that you'd like to do differently, so if you've got this far, feel free to have a play with it.

If you'd like to see a fully completed version, head to <https://thomcorah.github.io/dmu-multimedia/resources/ResponsiveSite/responsive/>

There's also a comprehensive reference guide to media queries on the CSS Tricks website here: <https://css-tricks.com/a-complete-guide-to-css-media-queries/>

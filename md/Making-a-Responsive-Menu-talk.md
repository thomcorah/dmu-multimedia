# Making a Responsive Menu

Website menus are commonly a horizontal container of page names. However, when building for mobile there often isn't the width to contain the menu and keep it legible. This is where a popover menu comes in handy.

## Popover Menu

A popover menu is one that slides over the content at the press of a button. When not in use the only impact on the page is a button, but when it's needed the user gets a big, easy to interact list of options.

<video width="50%" muted autoplay loop src="https://thomcorah.github.io/dmu-multimedia/resources/vid/popoverMenuExample.mp4"></video>

This is great for narrow mobile screens. However, when we view this on tablets or desktop, a standard horizontal menu might be more appropriate, so we also need to use media queries to switch over.

You can find a live version of the example used for this tutorial here: <https://thomcorah.github.io/dmu-multimedia/resources/ResponsiveSite/responsive/>

## Start With Mobile

### 1. Write the HTML

First off, we need the contents of the menu. This will consist of an image (or use fontawesome: <https://fontawesome.com>) for the hamburger icon, and an `<a>` for each menu option. Wrap these up in a `<nav>`.

```html
<nav id="mainMenu">
  <i class="fas fa-bars" id="menuButton"></i>
  <a class="menuItem" href="index.html">Home</a>
  <a class="menuItem" href="tour.html">Tour</a>
  <a class="menuItem" href="records.html">Records</a>
  <a class="menuItem" href="contact.html">Contact</a>
</nav>
```

### 2. Style the `<nav>`

In the example here, the menu button is always present, fixed to the top-left corner. When the menu comes out, it is full screen, and has a darkened background.

It is also positioned off the left of the screen by 90% of the screen's width, but do this bit last. Style your `<nav>` in the 'out' position first.

Hold off on any kind of darkened background for the moment too.

```css
nav {
  text-align: left;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  padding: 20px;
}
```

### 3. Style the Menu Button

The menu button needs to sit in the top-right corner of the `<nav>` element.

```css
nav #menuButton {
  position: relative;
  left: calc(90vw - 5px);
  color: black;
}
```

### 4. Style the Menu Items

Lastly, style your menu items. In the example here, where `<a>` elements have been used, these need changing a little so that they present full width, providing a nice big touchable area for the user. They also need the default blue colour and underline changing.

```css
.menuItem {
  padding: 20px;
  display: inline-block;
  width: 100%;
  font-size: 1.5em;
  color: white;
  text-decoration: none;
}
```

### 5. Hide the Menu

With the menu looking how you want when it's out, it's time to hide it. Well, most of it. You still want the menu button showing. Add a CSS rule to the `<nav>` element that positions it most of the way off the left of the screen.

### 6. Showing the Menu

We're going to write a little JavaScript that will detect a touch on the menu button, and add the `active` class to the `<nav>` element in response. We can then have some CSS rules set up so that a `<nav>` with the `active` class is visible.

The full complete code is given at the end of these steps.

#### 6.1. Create the Event Listener

We're going to create a function called toggleMenu, so create an event listener that will run this function when it detects a `click` on the menu button.

#### 6.2 Create the toggleMenu Function

For now, just have it log something to the console. Check it works.

#### 6.3 Get a Reference to the Menu

Use an id to get and store a reference to the `<nav>` element.

#### 6.4 Change Its Class List Accordingly

We want a little code that will add the `active` class if it's not already there, and remove it if it is.

You can access an element's class list with `element.classList`. This gives you an array of the classes the element is a member of. You can then see if that array contains the `active` class using the array's `contains` method. This method accepts a string, and returns `true` or `false` accordingly.

For example:

```js
menu.classList.contains("active");
```

This will return true if the class list or `menu` contains 'active', and false if it doesn't. You can then use this in an `if` statement to add or remove the class name accordingly.

#### Full Code

Here's the finished code:

```js
toggleMenu = () => {
  let menu = document.getElementById("mainMenu");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
};

document.getElementById("menuButton").addEventListener("click", toggleMenu);
```

#### Check It Works

So far, we've not applied any style rules to the active menu to make it appear, but we can check to see if this has worked by clicking the menu button and then inspecting the menu to see if the 'active' class has been added.

### 7. Finish Styling

The main thing we need to do now is make the menu come out when it's got the 'active' class applied.

As we hid it by positioning it off the left side of the screen, we can show it by changing its `left` CSS property.

```css
nav.active {
  left: 0vw;
  background-color: rgba(0, 0, 0, 0.8);
}
```

We've also changed its background colour to darken the page behind.

We want the menu to slide out, rather than just appear. We can use a CSS transition on the `<nav>` element to do this.

You might want to do some further styling from here. For example, the black hamburger button doesn't show up so well on the darker background. You could change that:

```css
nav.active #menuButton {
  color: white;
  background-color: rgba(0, 0, 0, 0);
}
```

## What About Desktop

Good question. That was a lot of work to get the popover menu working on mobile. What do we need to do to get a standard menu on wider screens? Well, not too much.

### 1. Add a Media Query

Work out the screen width at which a switch to a normal menu is most appropriate and add a media query at the end of your CSS. The following should all be done inside that media query.

### 2. Hide the Menu Button

We don't need this anymore. You can remove an element from the page with the `display: none` CSS rule.

### 3. Restyle the Menu

We no longer want the menu to be off the screen and full height. We want it to be a horizontal container, perhaps one that lays its contents out spaced nicely in the centre.

```css
#mainMenu {
  position: relative;
  height: auto;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 0;
}
```

### 4. Restyle the Menu Items

The menu items might be on a white background now, and a different font size might be appropriate. They might also need their width changing so they sit together a bit more.

```css
.menuItem {
  color: black;
  font-size: 1.2em;
  width: auto;
}
```

### 5. Keep Styling

That's the essential's covered. There's a good chance you'll need to do some more styling to get it working with your website. Maybe you've got things set up to expand to tablet size first, and then desktop, and the menu needs to do different things at each point? Maybe you want different colours? Maybe you want a vertical menu on desktop? Just keep playing.

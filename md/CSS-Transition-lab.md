# Transitions with CSS

We're going to create a little menu button that expands to a full menu when clicked on.

There is an example here: <https://thomcorah.github.io/dmu-multimedia/resources/css-animation/transition.html>

### 1. Create a new html document and set it up

Step-by-step on setting up a new project here: <https://thomcorah.github.io/dmu-multimedia/lab-reader.html?starting-a-project-short.md>

### 2. Create your html structure

We need a menu item, it could be a `<nav>`, wih some menu items inside. These could be `<div>`s.

Make sure your `<nav>` has the 'menu' class.

```HTML
<nav class="menu">
```

### 3. Style your menu

We want it to:

- take up 70% of the width of the screen
- be full height (tip: use 100vh for the height)
- have a background colour

Make your menu items look however you fancy.

### 4. Hide the menu

When not in use, we want the menu to be a little box in the corner. Copy and paste the rules you just did for the menu somewhere else, we're going to need them in a bit.

- Width and height of the `<nav>` should actually be small, like 50px
- Make the background colour something different

### 5. Hide the text

Now that the menu is small, the menu items spill out over the sides! The `overflow` css property of the menu can fix this, set it to hidden.

You might still be able to see some of the menu item. Using css, set their `opacity` to 0.

### 6. Create the menu out state

When the user clicks the menu, you want to the menu to take on those first rules you did. Big menu, different background colour.

To do that, we're going to introduce a little JavaScript.

```HTML
<script>
  toggleAnimation = (evt) => {
    evt.target.classList.toggle("out");
  };
  document
    .querySelector(".menu")
    .addEventListener("click", toggleAnimation);
</script>
```

Copy and paste this code into your page, just before the closing `</body>` tag. This code will find your menu `<nav>` using the class name - this is why it's important you give it the 'menu' class name. It registers an event listener so that when the user clicks on it, it adds the 'out' class to it. If the menu already has the 'out' class, it removes it.

So, now that the `<nav>` will have 'out' added as a class name, you can use this to apply those styles that set its width to 70% and so on.

Check this works. It probably doesn't. If you dig in with the Inspector, you might notice that the 'out' class isn't being added to the `<nav>` at all, but instead to the first menu item! Rats!

This is because the menu items are sitting 'on top' of their container, so they're stealing that click. We can fix this with a little bit of CSS that will tell the browser to ignore clicks on the menu items.

```CSS
.menuItem {
  pointer-events: none;
}
```

You'll then need to make sure that you allow pointer events on the menu items when the menu is out.

```CSS
.menu.out .menuItem {
  pointer-events: all;
}
```

### 7. Create the menu items out state

Similarly, you want to change the opacity of the menu items back to 1 when the menu is out.

### 8. Add transitions

We want all those things to transition! Add transition rules for the menu and menu items to transition the width, height, background colour, and opacity rules respectively.

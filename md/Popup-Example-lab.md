# Popup Example.

This is just about the simplest popup you could make. Tapping an image opens a full-screen popup. See the completed example here: <https://thomcorah.github.io/dmu-multimedia/resources/popup/simplePopup.html>

## Create the HTML

This example has an image on the page. Tapping it opens a full-screen popup. The image and the popup are both on in the HTML to begin with, but the popup is hidden.

### 1. Create an image

Use the `<img>` element to place an image. Or anything else that you want the user to tap to be honest. To keep it simple for now, just have one thing. This can be expanded later to be an image with a title and a little text. Don't forget that this image will need an `id` so that it can be referred to with your JavaScript. As you might have more than one of these things, I've given it a classname for styling.

```html
<img
  src="img/boulder.jpg"
  class="imgThumbnail"
  alt="Boulder being dropped in the sea"
  id="greenpeaceImage"
/>
```

The only styling I've done is to set the width.

### 2. Create the popup

At its simplest, the HTML for the popup will be single container with some contents. However, I want to have a contents panel that's slightly inset, and then grey out the page behind it. This means we've got an outer container that needs to be the full size of the screen, and then an inner container with a white background.

The contents then go inside this. In this case, that's a title, an image, and some text.

```HTML
<div id="greenpeaceInfo" class="popup">
  <div class="inside">
    <div id="greenpeaceCloseBtn" class="closeBtn">X</div>
    <h1>Building a Boulder Barrier</h1>
    <img src="img/boulder.jpg" alt="Boulder being dropped in the sea" />
    <p>
      To stop destructive bottom trawlers from operating in the Offshore
      Brighton Marine Protected Area we needed to create a physical barrier,
      for this we turned to natural materials in the form of granite
      boulders. We chose granite because it’s an inert material and won’t
      react with the water at the seabed.
    </p>
  </div>
</div>
```

There are few key things we need to do with the style. The whole thing needs to be positioned to cover the page, so we

- set the positioning of it to absolute,
- position it at the top,
- set the width to 100%,
- set the height to 100%, and at least the full height of the window.

I've also set the background to a semi-transparent black, and added a little padding to inset the inner container a little.

```CSS
.popup {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  padding: 5%;
}
```

The inner container needs a little style too. We need to

- set the background to white
- give it a little padding

```CSS
.popup .inside {
  background-color: white;
  padding: 2%;
}
```

Finally, the image and close button need sorting a little:

```CSS
.closeBtn {
  float: right;
}
.popup img {
  max-width: 100%;
}
```

When you're happy with how this looks, hide the popup by setting its display property to none.

### 3. Showing the popup

We want to show the popup when somebody clicks on the image. That means we need to add an event listener to the image that runs a function to show the popup.

In a `<script>` element just before your closing `</body>` tag, use `document.getElementById()` to get the image, and then add an event listener to it that will listen out for a 'click' and run a function. In this case, I'm going to call the function 'showGreenpeace' because this is what the story is about.

```JS
document
  .getElementById("greenpeaceImage")
  .addEventListener("click", showGreenpeace);
```

Now we need to create the function. All this function needs to do is show the popup. It's going to do this by changing its display property from "none" to "block".

```JS
showGreenpeace = () => {
  document.getElementById("greenpeaceInfo").style.display = "block";
};
```

### 4. Hide the popup

Hiding the popup is similar. We add an event listener to the close button, which runs a function that sets the popup's display property to "none";

```JS
hideGreenpeace = () => {
  document.getElementById("greenpeaceInfo").style.display = "none";
};

document
  .getElementById("greenpeaceCloseBtn")
  .addEventListener("click", hideGreenpeace);
```

## Adding more popups

If you wanted to add more popups for more images, you would need to duplicate all of this code. Note that you can't use the same id twice, and you can't use the same function name twice. That's why I've made these ids and function names really specific to this particular popup.

If I had an image that was about polar bears getting fatter in the Canadian Arctic (<https://arcticwwf.org/newsroom/stories/good-news-for-polar-bears-in-canadas-central-arctic/>) then I might give that popup an id of "polarBearsInfo", and its close button an id of "polarBearsCloseBtn". The functions would be called "showPolarBears" and "hidePolarBears" too.

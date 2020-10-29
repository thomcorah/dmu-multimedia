# Including JavaScript

There are two ways to get some JavaScript into your webpage.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=beb37231-5a93-44ee-b66c-ac6200f63f1c&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## On-Page

At the bottom of your page, right before the closing `</body>` tag, add a `<script>` element. You can write JavaScript inside this element. For example:

```html
  <script>
    console.log('Hello there');
  </script>
</body>
```

## External File

You can use the `<script>` element to load an external JavaScript file. JavaScript files have the .js extension. This can be a file that you've written, in your project, or one that's completely external and hosted elsewhere. In either case, the process is the same - use the `src` attribute of the `<script>` element to provide a url for the JavaScript file.

For example, if we had a file called `game.js` in a folder called `js`, we might write

```html
<script src="js/game.js"></script>
```

Some third party plugins host their JS files for you. In these cases, you can link straight to it on their server:

```html
<script src="https://kit.fontawesome.com/a89069ad2d.js"></script>
```

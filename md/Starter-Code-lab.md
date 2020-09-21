# Starter Code

There are some key elements that you need to have in your HTML file whenever you start a new page.

## Declare a DOCTYPE

We first need to tell the browser what kind of file this is. We do this with the special DOCTYPE tag. Just include this as the first line of your HTML file.

```HTML
<!DOCTYPE html>
```

## Create an html element

It's not enough to tell the browser that this is an HTML file, we also need to tell the browser when we start writing HTML. We do this by wrapping our whole page inside an `<html>` element.

```html
<!DOCTYPE html>
<html></html>
```

## Add the head

Every webpage has a head section. This element contains information about the page, such as the page title.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
</html>
```

### A note about the title

The `<title>` isn't the same as a main heading displayed on the page. The text that you put in the `<title>` element is usually used by the browser as the wording that goes in the tab, and by search engines as the text that's used as the name of the page.

## Add the body

Everything that you want to show on the page goes in a `<body>` element.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <!-- Everything on your page goes here -->
  </body>
</html>
```

**Note: Every webpage has just one `<head>` element, and one `<body>` element.**

### Bonus Tip

If you're using Atom to write your code, it has a shortcut that's useful when starting a new HTML file.

1. Create a new file with a `.html` extension.
2. In that file, type `html` and hit the `TAB` key.
3. Atom will give you the code to start any page with.

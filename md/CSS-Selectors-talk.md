# Selecting Elements to Style

Unless we are specifying style rules inline, we need to be able to tell the browser which element(s) to apply a set of rules to. This is where CSS selectors come in.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=cd81a94b-f123-406c-8eb0-ac60011d5442&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## On-Page and External CSS

As well as writing style rules inline using the style attribute, we can also specify them in the `<head>` section, and as a separate file. In both cases, we are able to apply rules to multiple elements at once, reducing the amount of work required to style a site, and making it easier to maintain.

## On-Page

We can include style rules in the `<head>` section of a page using the `<style>` element. Once inside the `<style>` element, our CSS follows a strict format:

```
selector {
  property: value;
  property: value;
}
```

The selector tells the browser which element(s) to apply the styles to. The style rules are then expressed as a list of `property: value` pairs between curley braces, each separated with a semi-colon.

Placing style rules in the `<head>` section means that we can apply the same set of style rules to a group of elements - all `<p>` elements for example - in one go. This can be much easier than writing the same style rules out repeated using the `style` attribute of each `<p>` element, and keeps our HTML looking tidier.

## Selectors

In both cases, you need to use a CSS selector to tell the browser which element(s) to apply the styles to.

If you want to apply styles based on the type of HTML element, just use the name of the element. For example, to make the text of all `<p>` bold, you might write:

```CSS
p {
  font-weight: bold;
}
```

This will select all `<p>` elements, and apply the rule provided.

You can apply the same rules to more than one selector, by separating them with a comma. For example:

```CSS
h1, h2, h3, h4, h5, h6 {
  margin: 12px;
}
```

This will apply the same rule to all heading elements, from `<h1>` to `<h6>`.

You can also select elements based on their relationship, or the structure of your HTML. For example:

```CSS
footer p {
  font-size: 0.8em;
  color: white;
}
```

In this case we have two selectors but separated by a space. This will pick up any `<p>` elements that are inside a `<footer>` element.

You can find a comprehensive list of the different kinds and formats of selector you can use on W3Schools here: <https://www.w3schools.com/cssref/css_selectors.asp>

## External

We can also place our rules in a separate file, and then link that file into every page in our website. This means we can write style rules for `<p>` elements in one place, and have them applied across our whole website.

The format of the rules is the same as for On-Page, but you don't need a `<style>` element.

To link the stylesheet into your HTML file, use the `<link>` element in the `<head>` section.

A `<link>` element needs to know three things:

1. Where is the CSS file. Use the `href` attribute for this
2. What type of file is it. Use the `type` attribute. CSS files have a MIME type of "text/css", so this is the value.
3. How does it relate to the HTML file. Use the `rel` attribute here. The CSS file is the stylesheet, so this is the value here.

For example, imagine we have a CSS file - `style.css` - in a folder called `css`. Our `<link>` element would look like this:

```HTML
<link href="css/style.css" rel="stylesheet" type="text/css" />
```

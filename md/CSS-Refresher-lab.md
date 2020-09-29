# CSS Refresher

Here are some key points about CSS to help get you back up to speed.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=3dcecaf9-e5ec-479a-bf09-ac4400e7c34a&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Where To Write It

There are three places you can write your CSS style rules.

### 1. Inline

This is where you define the rules using the `style` attribute in the opening tag of the element you want to apply the rules to. For example, if you wanted to make the text of a specific paragraph blue, you might do this:

```HTML
<p style="color: blue">Some paragraph text</p>
```

This approach isn't recommended as it can lead to lots of work when you want to change things, digging through lines of HTML to find your style rules.

### 2. On-Page

You can define style rules for a page using a `<style>` element in the `<head>` section of your HTML.

```HTML
<head>
  <!--- other elements like a title and meta elements -->
  <style>
    p {
      color: blue;
    }
  </style>
</head>
```

This will make the text of all paragraphs on the page blue. This is better than inline because you've got one place on your page that defines the style. This is restricted to just this page though, so this can become cumbersome when done across a whole site.

### 3. In a separate CSS file

You can define all the rules for your whole site in a separate CSS file, and then link that single file into every HTML page. This is particularly useful if you want a consistent style across your site as a single style rule for headings will apply across your whole site, for instance.

To link the CSS file into your HTML file, you need to use a `<link>` element in the `<head>` section of your HTML.

```HTML
<head>
  <!--- other elements like a title and meta elements -->
  <link href="css/style.css" rel="stylesheet" type="text/css" />
</head>
```

The `<link>` element takes three attributes:

1. href is the location of the CSS file. In the example above, it's called `style.css` and in a folder called `css`.
2. rel defines how the file you are linking relates to the file the `<link>` element is in i.e. it is it's stylesheet.
3. type defines the mime type of the file you are linking in. This is always `text/css` for CSS files.

## Selecting Elements

If you're writing your CSS on-page or in a separate CSS document, you'll need a way to tell the browser which element(s) to apply a set of rules to. This is done with a CSS Selector. For example, if you wanted to make the text of all paragraph elements blue, you need to select all paragraph elements:

```css
p {
  color: blue;
}
```

The `p` here is the CSS selector.

You can combine selectors to apply the same set of rules based on multiple selectors:

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  color: blue;
}
```

This will make the text of all headings blue. Note that the individual CSS selectors are separated with commas.

You can select elements based on their relationship to each other:

```CSS
footer p {
  color: white;
}
```

This will select all `<p>` elements that appear inside a `<footer>` element.

You can also select based on class. This allows you to create your own groupings of elements or select particular elements to apply style rules to. For example, imagine you have the following HTML:

```HTML
<p>First paragraph</p>
<p>Second paragraph</p>
<p>Third paragraph</p>
```

If we just wanted to select the first paragraph, we could give it a class name:

```HTML
<p class="first">First paragraph</p>
<p>Second paragraph</p>
<p>Third paragraph</p>
```

And then target that in CSS by prepending the classname with a `.`:

```CSS
.first {
  color: black;
}
```

You can have as many elements in a single class as you want, and they don't have to be the same kind of element.

You can also use id to select a single element:

```HTML
<p id="first">First paragraph</p>
<p>Second paragraph</p>
<p>Third paragraph</p>
```

And then target that in CSS by prepending the id with a `#`:

```CSS
#first {
  color: black;
}
```

In practice, you might want to avoid using id for applying styles as you can just as easily have a class of just one element.

## CSS Rules

The CSS rules themselves are always written in the format we've seen above, namely:

```CSS
selector {
  rule-name: value;
}
```

Sometimes the value actually has multiple components. For example, to apply a border the browser will need to know the line thickness, colour, and type:

```CSS
p {
  border: 1px black solid;
}
```

The format is still the same.

## Extra Resources

The W3Schools site has a really good CSS reference section that lists every rule and how to use it:

<https://www.w3schools.com/cssref/default.asp>

They also have a handy table of all the different formats and types of CSS selector:

<https://www.w3schools.com/cssref/css_selectors.asp>

For some deeper CSS learning, you might want to have a look at the CSS Tricks website. They provide some really great guides on a range of CSS things, and it can generally be quite interesting to dive into to see what's possible with CSS:

<https://css-tricks.com>

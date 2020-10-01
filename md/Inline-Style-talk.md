# Inline Style

We can quickly change the appearance of HTML elements by applying in-line style.

## Style Rules

When we talk about the appearance of webpages, we're talking about style. That style is expressed as rules. Style rules always follow the same format:

```html
rule-name: value;
```

For example, if we wanted to change the text colour of an element, the rule for that is the `color` rule. Note the American spelling. So, to make the text red, the full rule would be:

```html
color: red;
```

## The style attribute

We apply these rules to an element using the element's `style` attribute. So, if we wanted to make the text of a paragraph blue, we might write:

```html
<p style="color: blue">Some paragraph of text</p>
```

We can combine multiple rules together by separating them with a semicolon:

```html
<p style="color: blue; background-color: red">Some paragraph of text</p>
```

Note that some rules names are multi-word, such as that for the background colour. In these cases, a `-` separates each word.

A useful reference for all things CSS can be found on the W3Schools website: <https://www.w3schools.com/cssref/default.asp>

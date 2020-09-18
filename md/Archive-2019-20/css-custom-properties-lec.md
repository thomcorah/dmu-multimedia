# CSS Custom Properties

---

We've seen CSS properties.

```css
font-size: 14px;
color: red;
```


Custom Properties are like variables.

We can assign a value to a name.


## But How?

To create a custom property, we do three things.

1. Define the scope
2. Set the name
3. Assign a value

```css
.cast {
  --text-size: 1.5em;
}
```

Note the double hyphen that starts the property name.


## Using a Property

You can now use this property inside any member of the .cast class (including descendants).

```css
.cast p {
  font-size: var(--text-size);
}
```


If you want a property to be available everywhere, you can declare it on the :root pseudo class:

```css
:root {
  --text-size: 1.5em;
}
```

---

## Invalid Values

Consider this CSS

```css
.cast p {
  color: red;
  color: blue;
}
```

What colour would the text be?

notes: It would be blue as this is the last time the color property is assigned a valid value i.e. it's further down the sheet.


What about now?

```css
.cast p {
  color: red;
  color: 1.5em;
}
```

notes: It would be red. Trying to assign 1.5em as a colour is invalid, so the browser simply ignores this attempt, leaving the valid line setting the color red as the only option.


What about now?

```css
.cast {
  --main-color: blue;
}

.cast p {
  color: red;
  color: var(--main-color);
}
```

notes: It would be blue. This is the valid way to use a custom property, and the value of that custom property is a valid value for the color property.


What about now?

```css
.cast {
  --main-color: 1.5em;
}

.cast p {
  color: red;
  color: var(--main-color);
}
```

notes: It would be black, the default value for the color property. The browser doesn't simply ignore the attempt the use 1.5em as invalid in this case, because the way we've used a custom property is correct. The value of the custom property however is not, but this isn't discovered by the browser until it tries to compute the value of the custom property and assign it to color. In this case, as in all cases where the actual value of a custom property is invalid, the browser first looks to see if there is another value that can be inherited, and then falls back to the default value for this property.

---

## Providing a Fallback

We can provide a fallback value to be used in case the custom property doesn't exist.

```css
.cast p {
  color: var(--main-color, red);
}
```

---

# In Use

---

## Repeated Use of a Value

Your website might have a set colour palette, and so you might have the same colours being used throughout your site, and therefore throughout your css.

Specifying these colours as a custom property in one place means changes are easier to make.


We can go from this:

```css
section.cast {
  background-color: rgb(117, 200, 102);
  ...
}

.infoBox {
  background-color: rgb(117, 200, 102);
  ...
}
```


To this:

```css
:root {
  --light-background: rgb(117, 200, 102);
}

section.cast {
  background-color: var(--light-background);
  ...
}

.infoBox {
  background-color: var(--light-background);
  ...
}
```

---

## Custom Properties with Media Queries

Custom Properties can be set in media queries too.

```css
.cast {
  --img-width: 100%;
}

@media screen and (min-width: 600px) {
  .cast {
    --img-width: 40%;
  }
}

.castImg {
  width: var(--img-width);
}
```

---

## Custom Properties as Multipliers

Let's say we want to set padding based on screen size. On desktop, it should be twice as much for example.

```css
:root {
  --padding-multiplier: 1;
}

@media screen and (min-width: 600px) {
  :root {
    --padding-multiplier: 2;
  }
}

.castInfo {
  padding: calc(10px * var(--padding-multiplier));
}
```

---

## calc()??

CSS has a few built in functions. We've seen some, like rgb().

calc() will perform a live calculation.

```css
.castInfo {
  width: calc(100% / 3);
}
```


But rather importantly, you can mix units.

```css
.castInfo {
  width: calc(100% / 3 - 10px);
}
```
Which can be really useful to responsive widths combined with fixed pixel margins.

---

## To Recap

* CSS custom properties are like variables
* They need a scope, name, and value
* The name starts with a double hyphen
* We use them with the var() function
* They work with media queries and calc()

---

## Any Questions?

---

## Thanks

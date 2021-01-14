# CSS Custom Properties

Custom properties in CSS are like variables - we can assign a value to a name, and then reference that value by name throughout our CSS.

This can have a number of uses. For example, your website might have a set colour palette, and so you might have the same colours being used throughout your site, and therefore throughout your css.Specifying these colours as a custom property in one place means changes are easier to make, and can help to ensure consistency through your site.

## Creating a Custom Property

To create a custom property we need to do three things:

1. Define the scope
2. Set the name
3. Assign a value

In this example, the scope is any member of the .cast class. The custom property is called --text-size, and its value is 1.5em. Note that custom property names always start with a double hyphen.

```css
.cast {
  --text-size: 1.5em;
}
```

## Using a Custom Property

With the custom property created, we can now use it in any element that inherits from the scope we defined. We do so using the `var()` CSS function.

```css
.cast p {
  font-size: var(--text-size);
}
```

In this example, we defined the custom property within any member of the .cast class. It is therefore available to any member of that class, and any elements that are nested inside members of that class.

## Providing a Fallback

We can provide a fallback value to be used in case the custom property doesn't exist.

```css
.cast p {
  color: var(--main-color, red);
}
```

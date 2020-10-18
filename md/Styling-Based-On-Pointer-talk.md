# Applying Styles Based on Pointer Ability

Some internet browsing devices have a pointer on the screen, such as desktop computers. Some don't, such as mobile phones. Sometimes we might want to adjust styles based on the precision of the pointer, and the ability to hover.

## Why would we do this

It can be tempting to build functionality around the ability to detect the user hovering the mouse over an element. A dropdown menu for example might be expanded on hover. However, when the user doesn't have a pointer to hover over the element, this can break. We might also use hover state for styling that communicates something to the user, such as highlighting that something is clickable. Again, this would break on mobile.

Similarly, it's easy to forget that when people are using their tablet or mobile phone to browser, the accuracy with which they can tap an element is reduced compared to desktop use, as a finger is much bigger than a mouse-operated pointer. This means that some clickable elements might need to be bigger on mobile, to make it easier for the user to interact with them. Checkboxes and radio buttons are a good example of this.

## Media Queries to the rescue

We can detect and react to both of these situations using media queries. Here's a reminder of a media query used to apply styles based on viewport width.

```css
@media screen and (min-width: 600px) {
  #mainMenu {
    position: relative;
    display: flex;
  }
}
```

## Styles based on hover

We use the same syntax. The hover media feature can have two values, `hover` or `none`. The following CSS applies an animation to an element if the device isn't capable of hover.

```CSS
@media screen and (hover: none) {
  @keyframes non-hover-highlight {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.8;
    }
  }

  .non-hoverable {
    animation: non-hover-highlight 0.5s alternate infinite;
  }
}
```

## Styles based on pointer

Unlike the hover media feature, pointer can have three values: `fine`, `course`, or `none`. Devices with a mouse pointer count as `fine`, those relying on a finger report `course`. The following CSS will expand buttons when it's a finger that's going to be used to tap them.

```CSS
@media screen and (pointer: coarse) {
  button {
    font-size: 1.6em;
    padding: 10px;
  }
}
```

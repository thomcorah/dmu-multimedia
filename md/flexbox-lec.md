# Flexbox
The Flexible Box Model

---

Flexbox is used to make layout easier/better/more responsive



<https://thomcorah.github.io/dmu-multimedia/resources/flexbox/t1.html>
<https://thomcorah.github.io/dmu-multimedia/resources/flexbox/t1v2.html>
<https://thomcorah.github.io/dmu-multimedia/resources/flexbox/t2.html>
<https://thomcorah.github.io/dmu-multimedia/resources/flexbox/t3.html>

---

Flexbox works by defining two types of element

1. A container
2. Its items

These can be divs, navs, as, ps, imgs etc etc

---

### The Container

By default, a container is horizontal and lays its items out left to right.

The container *contains* the items.


### Some terminology

**Main Axis:** the main direction of item flow.  
**Cross Axis:** perpendicular to the main axis.  
**Main Size:** length/height along the main axis.  
**Cross Size:** length/height along the cross axis.  

We also have some set points - main start, main end, cross start, and cross end.


This terminology is the same whether the container is  
horizontal or vertical,   
left to right or right to left.

---

### CSS Rules

Flex box uses a number of CSS rules.  
Some are applied to the container.  
Some are applied to the items.


Set up your container as a flex container
```css
.flex-container {
  display: flex;
}
```

Block element by default, but it can be inline
```css
.flex-container {
  display: inline-flex;
}
```


You can change the direction of the flex container
```css
.flex-container {
  flex-direction: row; /* this is the default */
}
```
or
```css
.flex-container {
  flex-direction: row-reverse;
}
```


The container can be vertical
```css
.flex-container {
  flex-direction: column;
}
```
or
```css
.flex-container {
  flex-direction: column-reverse;
}
```

---

You can change how the container distributes its children across its main axis.

```css
.flex-container {
  justify-content: flex-start; /* this is the default */
}
```
Start at the start, progress towards the end.


Aligned to the main end.
```css
.flex-container {
  justify-content: flex-end;
}
```


Centred.
```css
.flex-container {
  justify-content: center;
}
```


Start at the start, end at the end, equal space between.
```css
.flex-container {
  justify-content: space-between
}
```


Equal space between, including before the first item and after the last.
```css
.flex-container {
  justify-content: space-around;
}
```

---

The items can expand to fill the space.
```css
.flex-item {
  flex-grow: 1;
}
```
All items will grow by the same amount.


The middle item will grow by twice as much.
```css
.flex-item {
  flex-grow: 1;
}

#middle-item {
  flex-grow: 2;
}
```

There are no units for flex-grow because the values are relative to each other.


This is just the same.
```css
.flex-item {
  flex-grow: 100;
}

#middle-item {
  flex-grow: 200;
}
```

---

Some other useful container properties.  
* **flex-wrap**: allow items to wrap onto a new line.   
* **align-items**: cross axis alignment along the main axis. For example, if the container is horizontal, left to right, this is their vertical alignment along the horizontal axis.
* **align-content**: like justify-content, but on the cross axis where there is more than one line of items.

---

## Recap
Flexbox is a powerful tool for layout  
It can help you fill spaces  
It can be responsive  

---

## Further Reading

This post on CSS Tricks is the best resource for flexbox:
<https://css-tricks.com/snippets/css/a-guide-to-flexbox/>

---

## Any Questions?

---

## Thank you.

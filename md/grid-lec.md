# CSS Grid Layout

---

The most comprehensive module for CSS layout.

---

## Layout up to now has used


## Tables

```html
<table>
  <tr>
    <td colspan="5">My Lovely Website</td>
  </tr>
  <tr>
    <td class='menu-cell'><a href='home'></td>
    <td colspan="4"></td>
  </tr>
  ...
</table>
```


## Positioning

```css
.top-corner {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 75px;
  height: 30px;
}

```


## Float

```css
.left-column {
  float: left;
  width: 33.3%;
  box-sizing: border-box;
  padding: 8px;
}
```


## Manual Grid

```css
.col-1 {
  width: 8.333%;
}

.col-2 {
  width: 16.666%;
}

```


## So what is a grid?

---

CSS Grid Layout is a powerful module for two dimensional layout.  

Two dimensional means columns and rows.

---

Grid works by defining two types of items:

1. A container
2. Its items

These can be divs, navs, as, ps, imgs etc etc

---

### CSS Rules

Grid uses a number of CSS rules.  
Some are applied to the container.  
Some are applied to the items.


Set up your container as a grid container
```css
.container {
  display: grid;
}
```


Block element by default, but it can be inline
```css
.container {
  display: inline-grid;
}
```


Set the number and size of columns
```css
.container {
  grid-template-columns: 20% auto 50px;
}
```


There is a handy repeat function
```css
.container {
  grid-template-columns: repeat(5, 20%);
}
```
is the same as
```css
.container {
  grid-template-columns: 20% 20% 20% 20% 20%;
}
```


Set the number and size of rows
```css
.container {
  grid-template-rows: 40px 80px 40px;
}
```


We have an extra unit, the fr.  
This is like flex-grow for flex box.  
It allows you to proportionally allocate free space to a row or column.  
```css
.container {
  grid-template-columns: 50px 1fr 1fr 1fr;
}
```


This can be useful with repeat
```css
.container {
  grid-template-columns: repeat(6, 1fr);
}
```

---

By default, items are laid out left to right, top to bottom.  
But you can place an item in the grid.
```css
.info-box {
  grid-column: 3;
  grid-row: 2;
}
```


Content can take up more than one row / column  
```css
.info-box {
  grid-column: 3;
  grid-row: 1 / 4;
}
```

---

Or you can define areas in your template, and place items in those areas.  
```css
.container {
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "header header header header"
    "nav main main main"
    "footer footer footer footer"
}
```


And then to place an item:
```css
.mainTitle {
  grid-area: header;
}
```

---

You can put gaps between your rows / columns

```css
.container {
  grid-row-gap: 20px;
  grid-column-gap: 10px;
}
```


Or the shorthand
```css
.container {
  grid-gap: 20px 10px;
}
```

---

You can change the way items are aligned in their cells.

Horizontal alignment
`justify-items`: start | end | center | stretch  

Vertical alignment
`align-items`: start | end | center | stretch

---

Sometimes the content of your grid might be smaller than the grid itself.  
You can change how the columns / rows are aligned within the container.

Horizontal alignment
`justify-content`: start | end | center | stretch | space-around | space-between | space-evenly

Vertical alignment
`align-content`: start | end | center | stretch | space-around | space-between | space-evenly

---

There are few more bits to grid.  
You can read more here: <https://css-tricks.com/snippets/css/complete-guide-grid/>

---

## Any Questions

---

## Thank you.

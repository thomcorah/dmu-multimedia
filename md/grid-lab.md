# Grid

CSS Grid Layout provides a powerful way of working with a grid based layout.

You create a grid container and can specify the number and width of columns and rows. You then have two broad approaches:

1. Place items according to the columns and rows they will span  
2. Define template areas to place items into

The following tasks will help familiarise you with CSS Grid.  

You can find a handy visual guide to CSS Grid Layout on the CSS Tricks website here: <https://css-tricks.com/snippets/css/complete-guide-grid/>

## Tiled Grid Layout

There are some websites that make quite obvious use of a grid, such as the BBC News website.

![BBC News website with grid overlay](https://thomcorah.github.io/dmu-multimedia/resources/grid/img/bbcGrids.png)  

Can you recreate this using CSS Grids.

### You'll need a 10 column grid
The BBC website has this contained within a max-width container. Maybe go for 800px.  

Within that you want to create 10 columns of equal width. `repeat` is your friend.

```css
.stories {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}
```

### Auto size your rows
Rather than state how many rows you'll have from the off, just make sure any new row is the same size.  

Do this with `grid-auto-rows`. Set it to something quite small, like 40px perhaps.

### Place your content
You can place your content according to which columns and which rows it should span.  

`grid-column: 1 / 5` for example will start at the beginning of column 1 and end at the start of column 5.
`grid-row: 1 / 4` will start at the beginning of the first row, and end at the beginning of the fourth.  

### Add gaps
CSS Grid Layout can give you gaps between your columns and rows. You've got three options here:

`grid-row-gap: 10px` will give you 10px between each row.  
`grid-column-gap: 20px` will give you 20px between each column.  
`grid-gap: 10px 20px` is the shorthand and will give you 10px between each row and 20px between each column. If you only supply a single value it gets used for both column and row gap size.  

### Check your grid
The Chrome inspector can show you your grid. Bring up the inspector and in the elements pane, select or hover over your grid container. Very useful.

## Template Layout
CSS Grid Layout can also be used to set up a template with defined areas that you can then place content into by name. For example, you might have a layout where the whole of the first row is designated as 'header', as in this 12 column layout:  

![Basic site layout with grid overlay](https://thomcorah.github.io/dmu-multimedia/resources/grid/img/gridLayout.png)

Can you set this up and then place content into it?

### Set your row height
As with the previous exercise, you probably want to set the row heights to something like 40px using `grid-auto-rows`.

### Create your areas
The `grid-template-areas` rule lets you create named content areas. For example, this bit of CSS will create a layout with three columns and three rows. Named areas span these cells.

```css
.container {
  display: grid;
  grid-auto-rows: 40px;
  grid-template-areas:
    "header header header"
    "nav main main"
    "footer footer footer";
}
```

### Place content
When you then create your content, you can place it in a named area using `grid-area`. For example, to place an element in the header area we created above:  

```css
.heading {
  grid-area: header;
}
```

Of course, if you place an element in the 'main' template area, you can then set it up with its own grid and place content in that using the method in the previous exercise.

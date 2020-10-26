# Basic Text Styling

There are a number of style rules for text that are useful to know about.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=3c3f6dd8-3eea-4b00-9066-ac6001249d0e&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Font

Websites work with font families, rather than specific fonts. This means you provide a number of font options, in order of preference. The browser will start at the start of your list, and pick the first font it has access to.

```CSS
p {
  font-family: Helvetica, Arial, sans-serif;
}
```

The browser will use Helvetica if it has it, then try Arial, ending up with the system sans-serif font if neither are available.

## Font Weight

The font weight is the thickness of the type. You can specify this using a number of keywords, or a numerical value.

The keywords you can use are `lighter`, `normal`, `bold`, `bolder`, in order of thickness. Numerical values are 100 to 900 in 100 step increments.

400 is the same as normal, 700 is the same as bold.

```css
p {
  font-weight: lighter;
}
```

## Font Size

We can specify the font size as a length. CSS has a number of units for doing this. The ones most appropriate for text are:

| Unit | Description                                                    |
| ---- | -------------------------------------------------------------- |
| px   | Pixels                                                         |
| pt   | Points                                                         |
| em   | Size relative to what it would normally be for this element.   |
| rem  | Size relative to the font size of the root element             |
| %    | Size relative to the font size of the element's parent element |

You can see a full list of CSS length units in the W3Schools reference materials: <https://www.w3schools.com/cssref/css_units.asp>

```CSS
p {
  font-size: 1.2em;
}
```

## Text Colour

You can change the colour of text. The CSS property to do this is simply `color`. Note the American spelling. For example:

```css
p {
  color: white;
}
```

This will make the text of `<p>` elements white.

## Text Align

Text can be aligned left, centrally, right, or justified

```CSS
p {
  text-align: center;
}
```

Note the American spelling of `center`;

## And More...

There are lots more style rules that apply to text. Have a look a the W3School CSS reference and look at any rule beginning with 'font' or 'text'.

<https://www.w3schools.com/cssref/default.asp>

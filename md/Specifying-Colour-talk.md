# Specifying Colour

There are a number of ways of specifying a colour with CSS.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=ac5ceb09-1430-4a73-bbf4-ac6001231a53&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Colour Name

There are 140 colours that can be identified by name. A full list can be found on W3Schools here: <https://www.w3schools.com/cssref/css_colors.asp>

## Hexadecimal Value

You can also use a hexadecimal value, giving the red, green, and blue components with two digits each. This is done in the format `#RRGGBB`. For example:

```
#ff0000
```

This is pure red. Hexadecimal values are prefixed by a hash - # - and each pair can go up to 255 (ff);

## RGB

You can provide RGB values using CSSs built in rgb function.

This is red:

```
rgb(255, 0, 0);
```

Each value goes up to 255.

## Adding Transparency

You can introduce alpha transparency using rgba. This is a semi-transparent red:

```
rgba(255, 0, 0, 0.5);
```

## HSL and HWB

You can also use HSL (Hue, Saturation, Lightness) and HWB (Hue, Whiteness, Blackness) in the same way.

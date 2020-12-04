# Positioning

Your task this week is to implement some fixed positioning to make a header that remains fixed to the top of the window as the user scrolls.

You can see a completed example here: <https://thomcorah.github.io/dmu-multimedia/resources/positioning/>

## Setup

So, create a new folder for your website, open it in Atom.

Create a new HTML file, with the necessary HTML in it, including the viewport meta tag.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Create a folder for your images. You can save the images from the example site into this folder.

Insert the HTML contents. We need enough content that the page scrolls. I've included the HTML for this page at the bottom of this lab sheet, so just copy and paste it from there. Note that it relies on your image folder being called 'img'.

Open the page in the browser. All good? Carry on...

## Fix the image sizes

We're on mobile, and those images are wider than a mobile screen. Set their width to 100%;

## Give the header some style

In the example, the header:

- a background colour
- a margin of -8px to pull it over the margin of the `<body>` element i.e. to make it go to the edges of the screen
- a fixed height of 90px;
- a line height of 45px to put the text in the vertical centre.
- central text alignment

Check it in the browser. Happy? Carry on...

## Fix the header

You can fix it to the window by giving its `position` css property a value of `fixed`.

```css
header {
  position: fixed;
}
```

This will immediately introduce a couple of problems.

## Fix the width

Making the element fixed means that its width is now determined by its contents. We want the width to be 100%, so set this with CSS.

## Add some space

The page content has now risen up behind the header, so we can't ever see the beginning of the page. We need to knock the top of the first `<section>` element down so that it starts after the header.

We've two options for this.

1. The easiest, is to place an empty `<div>` after the `<header>` and give it the same height as the `<header>`. This `<div>` will then be what's sat behind the fixed `<header>`.
2. Give the first `<section>` a top margin of 100px to push it down under the `<header>`. This can sometimes go a little wrong.

## And that's it.

On mobile, fixed positioning is the one you're most likely to use, as there's little call to reposition things otherwise.

Why not go a little further and see if you can implement a footer that's fixed to the bottom of the page.

Here's the HTML to start you off.

```HTML
<article>
  <header>
    <h1>Amazon Deforestation</h1>
  </header>

  <section>
    <h1>Introduction</h1>
    <p>
      The Amazon is the world’s largest rainforest and the largest river
      basin on the planet. More species are found here than anywhere else.
    </p>

    <p>
      The region is believed to be home to 10% – 1 in 10 – known species on
      Earth. Of plant species found in this region, 75% are unique to the
      Amazon, and there are 3,000 species of fish, the largest number of
      freshwater fish species in the world.
    </p>
    <img src="img/rainforest.jpg" alt="Rainforest" />

    <p>
      Today, the Amazon is facing a multitude of threats as a result of
      unsustainable economic development; 20% of the Amazon biome has
      already been lost and the trend will worsen if gone unchecked.
    </p>
    <p>
      WWF estimates that 27 per cent – more than a quarter – of the Amazon
      biome will be without trees by 2030 if the current rate of
      deforestation continues.
    </p>
  </section>
  <section>
    <h1>Trends and Causes</h1>
    <p>
      Deforestation rates in the Amazon have declined over the last decade,
      but continue at an alarming rate. Brazil is responsible for half of
      the deforestation in the Amazon, but deforestation in the Andean
      Amazon countries – namely Bolivia and Peru – is increasing.
      Deforestation is concentrated in particular in 25 “sub-fronts” that
      span across multiple countries.
    </p>

    <img src="img/logs.jpg" alt="logs" />

    <p>
      The areas showing the greatest deforestation rates are those that have
      more roads. The strong correlation between the location of
      deforestation fronts and the presence of existing roads or projections
      of new roads suggests that in the near future there will be isolated
      deforestation fronts becoming connected along major infrastructure
      development routes.
    </p>
    <p>
      Other factors exacerbating pressure in the region include an increase
      in cattle ranching and soy plantations, particularly in Bolivia; the
      South American energy and transport integration that was started with
      banks and a group of governments; and hydropower dams.
    </p>
  </section>
</article>
```

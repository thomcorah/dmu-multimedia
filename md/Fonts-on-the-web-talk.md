# Fonts On The Web

To this point you've been likely been changing the fonts used on your webpages using the `font-family` css property. This is fine, though you need to specify a few fonts as you're relying on what each user has installed on their computer. If they've not got your top choice, you can specify some alternatives.

This works well to keep load times down as you're using a font file already on the user's computer instead of making them download one.

However, it has obvious limits.

There is another way. Well, three ways that we're going to discuss here.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=660059fb-b3ed-4cbf-a4aa-acab013902ba&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## 1. Including Font Files

You can include a font file with your website, and point to it within your CSS. Make sure you're allowed to share the font you're using.

There are two parts to this:

1. Point to the font file
2. Give it a name

You can then use this name just the same as any other font name in your CSS with the `font-family` rule.

In order to tell the browser that you're specifying a new font, you need to use the `@font-face` rule. It goes like this:

```css
@font-face {
  font-family: "someCoolName";
  src: url("fonts/someCoolFont.tff");
}
```

And then you can use it as normal:

```CSS
div {
  font-family: someCoolName;
}
```

You can use TTF, OTF, and WOFF fonts. More recent browsers are also compatible with WOFF2 format fonts.

## 2. Google Fonts

Rather than include the font-file yourself, you can point to a font from Google, safe in the knowledge that you're allowed to use it.

Go to <https://fonts.google.com>

You'll see a page of fonts, with options to filter based on a range of parameters.

Select a font - you can see all the styles it's available in, as well as other info. If you want, you can download directly from here with the download button towards the top-right of the page. This is useful if you want to use it in a print project.

You can also link to it on Google's servers. From the list of styles available, select any that you'd like to include in your site using the 'Select this style' buttons. Once you do so, you'll notice a sidebar pop in from the right, with some code to copy into your project.

![Google Fonts](https://thomcorah.github.io/dmu-multimedia/resources/img/googleFonts1.png)

You have two options here. Select `<link>` and you'll have something to paste into the `<head>` section of your website along with the `<link>` element to your own stylesheet.

If you select `@import` however, you'll have some code you can paste right at the top of your CSS file. The code it gives you wraps the `@import` statement in a `<style>` element, so remove the `<style>` tags if you want to pop it in your CSS file.

Notice too, that it tells you what CSS to use to assign this font to an element. You use the `font-family` rule as normal.

## 3. Adobe Fonts

Adobe have a similar offering to Google - a catalogue of fonts you can link to for free. There are a couple of hundred available to those without a paid Creative Cloud account, and a lot more to those with.

Go to <https://fonts.adobe.com/?ref=tk.com> and sign in with your Adobe Id.

As with Google, you get a number of filters to narrow down to the font you want. Selecting a font will show you all the styles available.

Above the list of font styles, to the right, is a button to 'Add to Web Project'. Clicking this opens a dialogue, from which you can select the font styles you'd like to include.

You are also asked to give your project a name. You can add several different fonts to the same project and have a single download code for all fonts - which is nice.

![Adobe Fonts Add to Project](https://thomcorah.github.io/dmu-multimedia/resources/img/adobeFontsAddToProject.png)

With a name provided and fonts selected, click 'Create'. The dialogue with progress to a page that gives you a code snippet to include. As with Google, you can include a `<link>` element in the `<head>` section of your pages, or an `@import` statement in your own CSS file.

It also lists all the fonts you've just selected, providing the CSS properties and values for each variation.

![Adobe Fonts Confirmation Screen](https://thomcorah.github.io/dmu-multimedia/resources/img/adobeFontsConf.png)

If you want to get back to the code you need to include, it's saved with your project. Click 'My Adobe Fonts' in the top right and select the 'Web Projects' tab. You'll see your embed code right there. Excellent.

![Adobe Fonts Project Screen](https://thomcorah.github.io/dmu-multimedia/resources/img/adobeFontsProjectScreen.png)

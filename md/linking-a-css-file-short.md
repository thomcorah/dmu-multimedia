# Linking a CSS file to our Web Page

## The `<link>` element

We use the `<link>` element to link in a style file to our webpage. It goes in the `<head>` section of our html.

It takes three attributes:

* href: this is the location of the style file
* rel: this describes how the style file relates to our webpage
* type: this is the mime type of the style file

## The href attribute

This is the location of the css file from the HTML file we're linking it into.

Often your CSS file will be inside a folder, so you need to tell the browser to go into the folder first.

Let's say we've got the following folder structure:

![simple folder structure](https://thomcorah.github.io/dmu-multimedia/resources/simpleCSSFileLayout.png)

Inside that css folder is an CSS file called style.css.

Consider this link element:

```html
<link href='style.css'.... />
```

This is telling the browser that it should find an file called style.css in the same place as the html file we want to link the file into. However, look at the folder structure. From where we are in that html file, we can't see style.css.

We need to go into the css folder first. So, our element actually needs to look like this:

```html
<link href='css/style.css'.... />
```

## The rel attribute

The rel attribute tells the browser how this file that we're linking in relates to the html file we're linking it to. The css file is its stylesheet. This is always the value of this attribute.

```html
<link href='css/style.css' rel='stylesheet' />
```

## The type attribute

The type attribute tells the browser what type of file we're linking in. It does this using the agreed mime type for this file. Mime types have two parts:

General type / Specific type

An mp4 video for example has a mime type of 'video/mp4'

CSS files have a mime type of 'text/css', so this is always the value of the type attribute, giving us a finished `<link>` element looking like this.

```html
<link href='css/style.css' rel='stylesheet' type='text/css'/>
```

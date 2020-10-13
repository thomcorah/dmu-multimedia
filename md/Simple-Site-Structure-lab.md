# Simple Site Structure

In this exercise you're going to make a simple three page website. In doing so, you'll practice a little organisation:

1. Organising your site files
2. Providing logical navigation for your site
3. Nesting elements to create page structure

You will also be including images in your site.

You will be creating a simple website about a cake maker. It will have three pages, although there wont be much on two of them, with links between all three and images on the home page.

You can see an example of the finished site here: <https://thomcorah.github.io/dmu-multimedia/resources/SiteStructure/>

This lab sheet doesn't tell you the detail of how to complete every step, you'll need to work a lot of that out. Refer to the videos provided, search for solutions on the internet, or ask.

## Get Setup

### 1. Create a folder for your site

Open this folder in Atom.

### 2. Create an img folder

Inside your main folder, create one called `img`. This will contain your images. You'll need two images of cake, ideally one tall and one short. Go and find them and put them in this folder.

## Create your home page

### 1. Create your homepage

Create a file called index.html at the root level of your website.

### 2. Start with the standard code

Fill in the usual start code.

If you're in Atom, you can type `html` and hit tab, and then add in the viewport meta tag.

```HTML
<meta name='viewport' content='width=device-width' />
```

### 3. Map the structure

Start by mapping out your content and structure. Here's a wireframe showing the structure of the page.

![Page Structure](https://thomcorah.github.io/dmu-multimedia/resources/img/Simple-Site-Structure-Layout.png)

Look at the completed example, note how that relates to this wireframe.

We have three main areas:

1. Header - contains the main heading and a menu
2. Content - contains two sections, each with a subheading, text, and an image
3. The footer - this has some text and a link

### 4. Create the header

In `html`, there exists a `<div>` element. This is a generic container element. Unlike `<p>` and `<img>` for example, it has no meaning. It exists to help create structure, to group elements together into related sections.

Create a `<div>` element for the header.

Inside the `<div>`, create a `<h1>` for the main heading, and three `<a>` elements for the menu links. Give them content as appropriate.

The `<a>` elements will need to tell the browser where to go when clicked. The first one, your link to the home page, should point to `index.html`.

The second one, that links to the about page, should point to `about.html`. You've not created that file, but you will.

The third should point to `contact.html`. Again, this file doesn't exist yet.

### 5. Create the content area.

The content area goes a step further in terms of grouping content.

Create a `<div>` element to contain the whole content area. Inside it, create another `<div>` This is going to be the first section. Put a `<h2>`, a couple of `<p>` elements, and an `<img>` and set their content as appropriate.

The `<img>` element will need its `src` and `alt` attributes setting appropriately.

Repeat this process to place a second second second inside your main content area `<div>`.

### 6. Create the footer

Put a `<div>` in after your main content area `<div>`. Use a `<p>` element to add a little text, including an `<a>` element for a link to another website.

## Create the other two pages.

### 1. Make the about page

In Atom, right-click on the index.html file and select `duplicate`. Atom will ask you for a name - call it `about.html`. Replace the contents of the main content `<div>` with a paragraph of text.

You now have an about page that has the same header and footer, but with its own content.

### 2. Make the contact page

Follow the same process as in step 1 and duplicate one of the other two pages. Change the content to something appropriate for the contact page.

## And that's it

You now have a three page website.

- Each page has a clear structure, described using `<div>` elements to group things together.
- You have images, both in an `img` folder to keep your files organised.
- You have links to pages in your site, and one to an external site.

From here you could start to play around with some styling. Try aligning the heading and menu text centrally. Add a background colour to the different elements. You might want to look at the `padding` and `margin` CSS rules to add some spacing to your content.

Have a look at the W3Schools CSS reference for a list of all the CSS rules you could use: https://www.w3schools.com/cssref/default.asp

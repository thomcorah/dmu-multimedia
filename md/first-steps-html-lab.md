# First Steps With The Web

Today's lab is all about getting started with the practical job of creating web pages. There are some preparatory steps to go through first though. Here's what you're going to do.

1. Open a text editor to write some code
2. Write some web code to make a page
3. Set up your public server space and upload your code.
4. View your work on mobile

## 1. Open a text editor to write some code

The first thing we need to do is get set up with some kind of development environment. For us this simply means a text editor. You can use any text editor to work with computer code. We’re going to use Atom, but you could also use Notepad, Text Wrangler, or one of countless others. What you can’t use is Word, or any other word processing application. These applications don’t deal with plain text, they add all sorts of hidden characters in there that we don’t want.

The first thing to do is get hold of Atom. If you’ve got your own computer, you can download this from <https://atom.io>. If you’re on one of the lab machines it should be installed. Ask your lab tutor if you’re not sure how to find this and launch Atom.

The folks behind Atom have provided some great documentation that includes a getting started guide. You can find this at <http://flight-manual.atom.io>. Take a look if you want.

## 2. Write some web code to make a page

A website isn't like a Photoshop file where everything is contained in one file. Webpages are generally made out of a number of different files:

- HTML files
- CSS files
- Images
- Videos
- and on
- and on

So, to make things easier, all of this goes into a single folder for the website.

Make a folder now, in a suitable location. Remember - keep your files organised.

Now you want to open this folder in Atom.

> **Start With a Folder**  
> When opening your project in Atom, it's always best to open the folder that contains all your project files. This way, Atom can show you your file structure in the left hand pane, making things easier.

So, go to `File > Open Folder..` and find and select the `week2` folder you just created.

Note: if you're on a Mac, there is no `Open Folder` menu option, just `Open`. This is fine, you can still select a folder with it.

You'll see this folder appears in the pane on the left.

![Atom Screenshot](https://www.dropbox.com/s/uoakr34mx5by0t4/atomStart.png?raw=1)

Now you've got a folder, it's time to create a file.

`right-click` on that folder in Atom and select `New File`. Atom will ask you to enter the path for the new file. This means the location and file name. Well, we want it right in that folder, so just add the filename. Call it `first.html`.

That `.html` on the end is really important. It tells the system what kind of file this it. For Atom, that means it'll know how to colour in and help you out with what you're typing. For a browser, it'll mean it knows it should display it as a webpage.

It's time to write some code!

There’s some HTML that we’ll want for every page we start, so pop this in. Atom can do this for you using a Snippet. Type ‘html’ and hit Tab. As long as Atom knows it’s a html file (it’s saved with the .html extension) it’ll add this for you.

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

  </body>
</html>
```

Notice there's a `<title>` element inside the `<head>` section. Make the title relevant to the page. We’re going to create a short page about dogs being used in data-entry positions in the financial sector. Your title should reflect the content of the page, so something like “Dogs become valuable employees at major bank” should do nicely.

We want to create a heading. We can do this by using a `<h1>` element. You can make the heading the same as the page title.

```HTML
<h1>Dogs Become Valuable Employees at Bank</h1>
```

Save your file and view it in a browser, preferably Chrome. You can do this by simply opening it in Chrome. On a Mac, you have the File menu, so you can use File -> Open. On a PC, try holding the Control key and pressing `O`.

Hopefully you should see your title.

We’re going to add some text content underneath the title. Copy the following code:

```HTML
<p>It was revealed this morning that a major high street bank has <strong>begun employing clever canines</strong> to perform basic data-entry tasks in several of its UK data centres. In a statement earlier today a spokesperson for the bank said that training had gone well with the <strong>first intake of ten pooches</strong> and that overall they were just happy to be involved.</p>
```

Let’s add another bit of extra detail here, a quote from a dog called Larry. We could just put this in a `<p>` element, but let’s give the browser a bit more info by using the `<blockquote>` element. Put the following in after your paragraph of text.

```HTML
<blockquote>
  <p>"I've made new friends, we have a great canteen, and in a few months I'll have earned enough for a deposit on my own kennel"</p>
  <footer>Larry the dog</footer>
</blockquote>
```

Save the page and refresh your browser window. Chances are the quote is indented, which is nice of your browser.

Notice that we've just put a `<p>` element inside a `<blockquote>` element. This is called nesting, and is perfectly fine. Many HTML elements can have other HTML elements inside them. This helps to describe the structure of the contents. By putting that `<p>` inside the `<blockquote>`, we've told the browser something about their structural relationship - the `<p>` belongs to the `<blockquote>`.

> **Family Relationships**  
> These relationships are described using familial terms. In this case, the `<blockquote>` is the parent, and the `<p>` is the child. To take this further, the `<p>` and the `<footer>` are siblings, as they share a parent.

All of this had got you using HTML elements, even nesting them.

## 3. Set up your public server space and upload your code

Now that you've got a functioning webpage, it's time to share it with the world. One service we can use to do this is GitHub. Putting your code on GitHub also means that your tutors can see it, comment on it, and edit it, so it can be a useful tool when you need help.

You can find instructions on how to do this here: <https://thomcorah.github.io/dmu-multimedia/lab-reader.html?Setting-Up-Github-lab.md>

## 4. View your work on mobile

We're designing for mobiles, so it would be good to get into the habit of viewing your work as though it's on a mobile. You've got two options here:

### 4.1. Use a mobile!

If you've put your work on a server, you can just open a browser on your phone and navigate there like any other webpage.

### 4.2. Simulate a mobile in the browser

Chrome has a good mobile simulator. Here's how to get it.

1. With your page loaded up, right click anywhere.
2. Select `Inspect`
3. This opens up the developer tools panel. Click the little button that looks like a phone in front of a tablet.

![Responsive Mode Button in Chrome](https://www.dropbox.com/s/a0cjytdubaaey3d/responsive-mode.png?raw=1)

From here you can change the size of the display and a couple of other things. Have a play!

## And That's It

If you’ve got time left in your lab, you can take your page further. For a start, you could head over to the w3schools website and browse the long list of HTML elements. Try out any that take your fancy.

<http://www.w3schools.com/tags/default.asp>

While you’re there, it’s worth having a bit more of a look around. W3Schools is a great resource packed with information about developing for the web.

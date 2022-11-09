# First Steps With The Web

Today's session is all about getting started with the practical job of creating web pages. There are some preparatory steps to go through first though. Here's what you're going to do.

1. Open a text editor to write some code
2. Write some web code to make a page
3. View our page in a browser
4. View your work on mobile

## 1. Open a text editor to write some code

The first thing we need to do is get set up with some kind of development environment. For us this simply means a text editor. You can use any text editor to work with computer code. We’re going to use Virtual Studio Code or Notepad++, but you could also use Text Wrangler, Brackets, or one of countless others. What you can’t use is Word, or any other word processing application. These applications don’t deal with plain text, they add all sorts of hidden characters in there that we don’t want.

The first thing to do is get hold of a text editor. 

<div class="todo">
If you’ve got your own computer, you can download VS Code from <a href="https://code.visualstudio.com">https://code.visualstudio.com</a>.
</div>

Microsoft (who maintain VS Code) have provided some great documentation that includes a getting started guide. You can find this at <https://code.visualstudio.com/docs>. Take a look if you want.

## 2. Write some web code to make a page

A website isn't like a Photoshop file where everything is contained in one file. Webpages are generally made out of a number of different files:

- HTML files (describing the content and structure)
- CSS files (describing the style and layout)
- Images
- Videos
- and on
- and on

So, to make things easier, all of this goes into a single folder for the website.

<div class="todo">
Make a folder now, in a suitable location. Remember - keep your files organised.
</div>

Now you want to open this folder in your code editor.

**Start With a Folder**  
When opening your project, it's always best to open the folder that contains all your project files. This way, your code editor can show you your file structure in the left hand pane, making things easier.

<div class="todo">
Chances are, you can go to <code>File > Open Folder..</code> and find and select the folder you just created. Or maybe just <code>File > Open..</code>, depending on which editor you're using.
</div>

You'll see this folder appears in the pane on the left or right.

Now you've got a folder, it's time to create a file.

<div class="todo">
<code>right-click</code> on that folder in your code editor and select <code>New File</code>. Call it <code>index.html</code>.
</div>

That `.html` on the end is really important. It tells the system what kind of file this it. For Atom, that means it'll know how to colour in and help you out with what you're typing. For a browser, it'll mean it knows it should display it as a webpage.

It's time to write some code!

<div class="todo">
There’s some HTML that we’ll want for every page we start, so pop this in. 
</div>

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

Notice there's a `<title>` element inside the `<head>` section. This is not a title to display on the page. Rather, it is information about the page that's used by the browser and search engines.  

Make the title relevant to the page. We’re going to create a short page about dogs being used in data-entry positions in the financial sector. Your title should reflect the content of the page, so something like “Dogs become valuable employees at major bank” should do nicely.

<div class="todo">
Write your page title inbetween the opening and closing title tags.
</div>

We want to create a heading. We can do this by using a `<h1>` element. You can make the heading the same as the page title.

<div class="todo">
Add a heading to your page.
</div>

```HTML
<h1>Dogs Become Valuable Employees at Bank</h1>
```

<div class="todo">
Save your file and view it in a browser, preferably Chrome. You can do this by simply opening it in Chrome. On a Mac, you have the File menu, so you can use File -> Open. On a PC, try holding the Control key and pressing <code>O</code>.
</div>

Hopefully you should see your title on the page tab and your heading in the browser window.

We’re going to add some text content underneath the title. 

<div class="todo">
Copy the following code:
</div>
```HTML
<p>It was revealed this morning that a major high street bank has <strong>begun employing clever canines</strong> to perform basic data-entry tasks in several of its UK data centres. In a statement earlier today a spokesperson for the bank said that training had gone well with the <strong>first intake of ten pooches</strong> and that overall they were just happy to be involved.</p>
```

Let’s add another bit of extra detail here, a quote from a dog called Larry. We could just put this in a `<p>` element, but let’s give the browser a bit more info by using the `<blockquote>` element. 


<div class="todo">
Put the following in after your paragraph of text.
</div>
```HTML
<blockquote>
  <p>"I've made new friends, we have a great canteen, and in a few months I'll have earned enough for a deposit on my own kennel"</p>
  <footer>Larry the dog</footer>
</blockquote>
```


<div class="todo">
Save the page and refresh your browser window. 
</div>

Chances are the quote is indented, which is nice of your browser.

Notice that we've just put a `<p>` element inside a `<blockquote>` element. This is called nesting, and is perfectly fine. Many HTML elements can have other HTML elements inside them. This helps to describe the structure of the contents. By putting that `<p>` inside the `<blockquote>`, we've told the browser something about their structural relationship - the `<p>` belongs to the `<blockquote>`.

**Family Relationships**  
These relationships are described using familial terms. In this case, the `<blockquote>` is the parent, and the `<p>` is the child. To take this further, the `<p>` and the `<footer>` are siblings, as they share a parent.

All of this had got you using HTML elements, even nesting them.

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

Well done so far! Next up, you'll be adding lists and headings to help add structure to your page. 

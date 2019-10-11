# First Steps With The Web

Today's lab is all about getting started with the practical job of creating web pages. There are some preparatory steps to go through first though. Here's what you're going to do.

1. Set up your public server space
2. Open a text editor to write some code
3. Write some web code to make a page
4. Learn how to view your work...
5. ...as though on a mobile (and/or actually on a mobile)

## 1. Set up your server

DMU have given you some publically viewable server space - somewhere to put your web work so that anybody can view it in their browser. It will actually exist as a special folder inside your `My Documents` folder on your student drive. 

However, you need to create it first, and it's a special folder so there's a special way of creating it. 

On the desktop of any lab PC you will find an icon with the title `Make my public_html`. Double click this. It will run the scripts necessary to create this special folder. 

Once you’ve got your `public_html` folder set up, find it and add a folder to it for TECH1015, and then in there, a folder for Coursework1.

Don’t use any spaces in your folder names. These folder names will be translated into a URL for viewing your work over the web, and any spaces will be substituted with %20, which ends up looking pretty messy. 

This public_html folder is accessible from anywhere with an internet connection and a browser. Fire up Chrome and go to:

`https://my.tech.dmu.ac.uk/~p12345678`

where you substitute in your own P number. You need to keep the ~ in there.

You should see a listing showing you the TECH1015 folder. Click on that and you should see your Coursework1 folder. Anything you put in here is accessible. Any webpages you put in will be rendered as web pages. 

## 2. Open a text editor to write some code

The first thing we need to do is get set up with some kind of development environment. For us this simply means a text editor. You can use any text editor to work with computer code. We’re going to use Atom, but you could also use Notepad, Text Wrangler, or one of countless others. What you can’t use is Word, or any other word processing application. These applications don’t deal with plain text, they add all sorts of hidden characters in there that we don’t want. 

The first thing to do is get hold of Atom. If you’ve got your own laptop, you can download this from <https://atom.io>. If you’re on one of the lab machines it should be installed. Ask your lab tutor if you’re not sure how to find this and launch Atom.

The folks behind Atom have provided some great documentation that includes a getting started guide. You can find this at <http://flight-manual.atom.io>. Take a look if you want.

## 3. Write some web code to make a page

Anytime we create a webpage, it's actually going to be in a folder for the project. Webpages are generally made out of a number of different files:

* HTML files
* CSS files
* Images
* Videos
* and on 
* and on

So, to make things easier, all of this goes into a folder for the website. Create a `week2` folder inside the `TECH1015` folder in your `public_html` folder. 

> public_html > TECH1015 > week2

Now you want to open this folder in Atom.

> **Start With a Folder**  
> When opening your project in Atom, it's always best to open the folder that contains all your project files. This way, Atom can show you your file structure in the left hand pane, making things easier. 

So, go to `File > Open Folder..` and find and select the `week2` folder you just created.

Note: if you're on a Mac, there is no `Open Folder` menu option, just `Open`. This is fine, you can still select a folder with it.

You'll see this folder appears in the pane on the left. 

![Atom Screenshot](https://www.dropbox.com/s/uoakr34mx5by0t4/atomStart.png?raw=1)

We need an image for this page. Create an `images` folder inside your `week2` folder. You can do this in Atom by right-clicking `week2` and selecting `New Folder`. Visit the url below, `right-click` the image, and save it into the images folder you've just created. 

<https://www.therapydogs.com/wp-content/uploads/2017/06/dogwork.jpg>

![Dog at work](https://www.therapydogs.com/wp-content/uploads/2017/06/dogwork.jpg?raw=1)

Now that you’ve got the resources you’ll need in place let’s create our page. 

`right-click` on that `week2` folder and select `New File`. Atom will ask you to enter the path for the new file. This means the location and file name. Well, we want it right in that folder, so just the filename is fine. Call it `first.html`. 

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

Notice there's a `<title>` element inside the `<head>` section. Make the title more relevant to the page. We’re going to create a short page about dogs being used in data-entry positions in the financial sector. Your title should reflect the content of the page, so something like “Dogs become valuable employees at major bank” should do nicely. 

We want to create a heading. We can do this by using a `<h1>` element. You can make the heading the same as the page title. 

```HTML
<h1>Dogs Become Valuable Employees at Bank</h1>
```

Now we want to put the image in. Images are inserted using an <img> element. This tag is one of the rare ones that doesn’t have a corresponding closing tag, it’s self closing. However, we need to be able to tell the browser some information about this image, such as where to find it. We do this using attributes. Attributes define information about an element. To display our image, add the following line underneath your header line. 

```HTML
<img src='images/dogwork.jpg' />
```

> Attributes almost always have two components: the name of the attribute and its value. In this case we're assigning the value “images/DogPicture.jpg” to the src attribute, specifying the source of the image. This URL is relative to the page that’s loading the image, so in this case it will look inside the images folder and grab the dog picture. 

Save your file and view it in a browser. Hopefully you should see your title and the happy dog. If you don’t see the picture of the dog something’s gone wrong. Try to work out what. 

We’re going to add some text content underneath the picture. Copy the following code:

```HTML
<p>It was revealed this morning that a major high street bank has <strong>begun employing clever canines</strong> to perform basic data-entry tasks in several of its UK data centres. In a statement earlier today a spokesperson for the bank said that training had gone well with the <strong>first intake of ten pooches</strong> and that overall they were just happy to be involved.</p>
```
We’re going to add a caption to the image. Now, we could do that by simply using a <p> tag underneath it and maybe styling it to have smaller text. However, there’s nothing about this that tells the browser that our caption is associated with the image above it. Instead we can set both image and caption up as a single figure element. Change your <img> element to put this code around it:

```HTML
<figure>
  <img src="images/dogwork.jpg" />
  <figcaption>Larry loves his new job more than squirrels.</figcaption>
</figure>
```

What we have here is nesting. We’ve created a `<figure>` element, within which we have an image and a caption. The `<img>` and `<figcaption>` are nested inside the `<figure>`. This means the browser knows they go together. Save your file and refresh your browser to see the effect this has. 

Let’s add another bit of extra detail here, a quote from Larry. We could just put this in a `<p>` element, but let’s give the browser a bit more info by using the `<blockquote>` element. Put the following in after your paragraph of text.

```HTML
<blockquote>
  <p>"I've made new friends, we have a great canteen, and in a few months I'll have earned enough for a deposit on my own kennel"</p>
  <footer>Larry the dog</footer>
</blockquote>
```

Save the page and refresh your browser window. Chances are the quote is indented, which is nice of your browser. 

All of this had got you using HTML elements, even nesting them. 

There are two more things to add to this page:  

1. A list of benefits
2. A link to more information

It's up to you to try to work out how to do these things. You'll find pointers and answers online, so try searching for a solution to each. 

The list of benefits should look like this:

>
>A spokesperson for the bank confirmed that the dogs get a range of benefits in their new employment including:
>
> * A competitive salary
> * Regular toilet breaks
> * A generous retirement package
> * Two months paid maternity leave
> * Free dental care

The link should go to <http://en.wikipedia.org/wiki/Working_dog>.

## 4. Learn how to view your work...

So you've already worked how to get your work in the browser. You've actually got two options:

1. Put it onto a server, such as in your `public_html` folder, and then navigate to it like any other webpage. 
2. Go to `File > Open` in your browser and then find the file in your file system. This is the same as double-clicking the file in the file system

Option 2 can be a quick way to check if it's working. However, there are some differences in the way the file system and the server work. Ultimately, your work will be viewed by navigating to the server, so you should **always** make sure it works as expected using option 1.

## 5. ...as though on a mobile (and/or actually on a mobile)

We're designing for mobiles, so it would be good to get into the habit of viewing your work as though it's on a mobile. You've got two options here:

### 1. Use a mobile!
If you've put your work in your `public_html` folder, you can get to it from your phone. Just open your browser and go to `https://my.tech.dmu.ac.uk/~p1234567`, substituting in your own student number.

### 2. Simulate a mobile in the browser
Chrome has a good mobile simulator. Here's how to get it. 

1. With your page loaded up, right click anywhere.
2. Select `Inspect`
3. This opens up the developer tools panel. Click the little button that looks like a phone infront of a tablet.

![Responsive Mode Button in Chrome](https://www.dropbox.com/s/a0cjytdubaaey3d/responsive-mode.png?raw=1)

From here you can change the size of the display and a couple of other things. Have a play!

## And That's It

If you’ve got time left in your lab, you can take your page further. For a start, you could head over to the w3schools website and browse the long list of HTML elements. Try out any that take your fancy.

<http://www.w3schools.com/tags/default.asp>

While you’re there, it’s worth having a bit more of a look around. W3Schools is a great resource packed with information about developing for the web.

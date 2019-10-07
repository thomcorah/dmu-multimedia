# First Steps With The Web

Today's lab is all about getting started with the practical job of creating web pages. There are some preparatory steps to go through first though. Here's what you're going to do.

1. Set up your public server space
2. Open a text editor to write some code
3. Write some web code to make a page
4. Learn how to view your work...
5. as though on a mobile (and/or actually on a mobile)

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

This is handy. Now `right-click` on that `week2` folder and select `New File`. Atom will ask you to enter the path for the new file. This means the location and file name. Well, we want it right in that folder, so just the filename is fine. Call it `first.html`. 

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

Let’s have a look at a couple of bits though. First off, there’s that <!DOCTYPE> element right at the top that also says html. This is a special element that defines what type of document this is. After this, we’ve got the <html> element with a lang attribute. This tells the browser what language the page is in. The “en” is  language code for English. “es” would specify Spanish, “fr” French and so on. 



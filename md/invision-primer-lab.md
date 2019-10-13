# Invision Primer
## First Steps With Online Prototyping

Online prototyping of your app or website means you can

* test it on the actual target device
* easily share it with others

There are lots of services that let you do this...

[Framer X](https://www.framer.com/)  
[Proto](https://proto.io/)  
[Marvel](https://marvelapp.com)

... for example, and some desktop apps...

[Adobe XD](https://www.adobe.com/uk/products/xd.html)  
[Just in Mind](https://www.justinmind.com)

Or, you could write your own prototypes straight into HTML, CSS, and JavaScript.

The principle in all cases is broadly similar. You create image mockups of the screens of your apps in their various states, and then use the software to stitch them together with hotspots that trigger transitions between them.

We're going to use Invision (https://www.invisionapp.com). It's been well tested and used by big brands, and has a free tier that gives you a single project.

This lab won't teach you how to use Invision, but will guide you through the process of finding out how to create a simple prototype. It's a really simple reminders app.

### 1. Sign Up
Head to <https://www.invisionapp.com> and create an account.

### 2. Resources
You'll find the screen images as well as the PSD they all came from here -> <https://thomcorah.github.io/dmu-multimedia/resources/ReminderAppScreens.zip>

Right-click and save to your computer, then unzip.

### 3. Functionality
Here's what the app can do:

* Display a list of reminders.
* Add a new reminder.
* Edit an existing reminder.
* Mark a reminder as complete.

Take a look at screens. The names and the images should indicate what's going on.

### 4. Get started in Invision
* Start a new prototype
* Give it a name and set the type (iPhone)
* Add the jpg files

### 5. Order the screens
Invision has loaded the screens in alphabetical order by file name. However, when we test our prototype it'll start with the first one after the loading screen, which is currently the edit screen.

* Drag the screens to rearrange into a logical order

### 6. Create hotspots
* View a screen
* Switch to Build Mode (use the icons at the bottom of the screen)
* Create hotspots to link the pages together

### 7. Test your prototype
* Switch to Preview Mode to check your hotspots work and everything links together.
* Download the invision app to your smartphone, sign in, and try it on your phone
* Get the embed url to be able to share your prototype
  * Go back to the view that shows you all your screens
  * Click the ... that's on the right of the menu above the screens
  * Select 'Embed Prototype'
  * And there's the URL

### 8. Link from your public_html
* Create a html page in a `week3` folder in your public_html
* This html page should just have a link to your prototype

### 9. Continue experimenting
You've got the PSD that these screens were created from, so you could edit the designs, customise them, add to them, create more screens, and add all this to your prototype.

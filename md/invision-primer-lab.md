# Invision Primer

## First Steps With Online Prototyping

Online prototyping of your app or website means you can

- test it on the actual target device
- easily share it with others

There are lots of services that let you do this...

[Framer X](https://www.framer.com/)  
[Proto](https://proto.io/)  
[Marvel](https://marvelapp.com)

... for example, and some desktop apps...

[Adobe XD](https://www.adobe.com/uk/products/xd.html)  
[Just in Mind](https://www.justinmind.com)

Or, you could write your own prototypes straight into HTML, CSS, and JavaScript.

The principle in all cases is broadly similar. You create image mockups of the screens of your apps in their various states, and then use the software to stitch them together with hotspots that trigger transitions between them.

We're going to use Invision (https://www.invisionapp.com). It's been well tested and used by big brands, and they offer free education accounts.

This lab will guide you through the process of finding out how to create a simple prototype. It's a really simple reminders app.

## Getting Set Up

### 1. Sign Up

Head to <http://www.invisionapp.com/education-signup> and create an account. Make sure you toggle Student rather than Faculty, and use your DMU email address. You'll be asked for an activation code - this can be found on Blackboard alongside the link to this labsheet.

### 2. Choose Your Platform

Invision has a capable browser-based prototyping tool that loads full static screen shots of your app and allows you to stitch them together with hotspots and a variety of interactions and transitions.

They also have a desktop app for both Mac and Windows called Studio. This is more capable, as it gives you more control over animation transitions, as well as a range of authoring tools. If you can, use Studio.

You can download it from here: <http://bit.ly/download-invision-studio>

If it asks for your email address during download or installation, be sure to enter the DMU one you used to sign up.

### 3. Resources

You'll find the screen images as well as the PSD they all came from here -> <https://thomcorah.github.io/dmu-multimedia/resources/ReminderAppScreenDesigns.zip>

Right-click and save to your computer, then unzip.

### 4. Functionality

Here's what the app can do:

- Display a list of reminders.
- Add a new reminder.
- Edit an existing reminder.
- Mark a reminder as complete.

Take a look at screens. The names and the images should indicate what's going on.

What follows here is a guide for each platform. Follow the one that applies to you.

## Using the Invision Web-Based Builder

The Invision web-builder uses image files for whole screens, rather than allowing you to build the screen designs in Invision.

You can see a version of this prototype completed with the web tools here: <https://invis.io/N6UCRLXTYA8>

### 1. Get started in Invision

- Start a new prototype
- Give it a name and set the type (iPhone)
- Add the jpg files

### 2. Order the screens

Invision has loaded the screens in alphabetical order by file name. However, when we test our prototype it'll start with the first one after the loading screen, which is currently the edit screen.

- Drag the screens to rearrange into a logical order

### 3. Create hotspots

- View a screen
- Switch to Build Mode (use the icons at the bottom of the screen)
- Create hotspots to link the pages together

## Using Studio

You'll be building the screens up from individual components in Studio, so you wont need the finished jpg files directly. However, they're useful for reference. If you're able to open the Photoshop file it's also possible to copy and paste graphic resources from Photoshop to Studio. This might be useful for any custom icons, such as the calendar icon and the iOS date picker.

You can see a completed example of this app prototype produced with Studio here: <https://projects.invisionapp.com/prototype/RemindersApp-ckgkue6ee00pi13012ah4rf4u/play/97248fd5>

We're going to limit the functionality slightly and remove the ability to edit a reminder for the Studio version. There's enough to do without it.

### 1. Launch and Create New Project

- Select the iPhone XS sized project.

### 2. Create the Home Screen

The first screen will list the already entered reminders. This is called MainScreen.jpg.

It consists of a header at the top, and then a list of reminders. Some pointers:

1. Keep your layers named sensibly, and organised logically. This will make things easier when you come to animate changes between screens.
2. Make use of the resource libraries available in Studio

- Click the rocket ship button to enter the App Store
- Select Assets
- Have a scroll. The iOS design kit includes some status bars for example.

3. Use tools to line things up:

- The align tools are useful for aligning two objects
- Use `SHIFT` and nudge to move an object 10px at a time

### 3. Create the New Reminder Screen

This is NewReminderScreen.jpg in the screen shots.

You can duplicate a screen.

1. Select it by clicking the artboard's name.
2. While holding `OPT` (Mac) or `ALT` (Win) click and drag the artboard to duplicate it.

You can then delete all the reminders and you've got a screen with an identical header.v

Edit the header to remove the + button and add 'Cancel' and 'Save' buttons.

Create the text and boxes for the screen.

### 4. Link the screens together

We want to have it so that when the user is on the Home screen and they tap the + button, they're taken to the screen to add a new reminder.

Select the + button on the Home screen. Press 'C' to create a new connection. Click on the New Reminder screen and select the appropriate options in the dialogue that comes up. In short, you want a preset transition, either push or slide left.

Select the Home screen and press the preview button in the top-right of the Studio window to launch a preview of your app so far. You should be able to click on the + button and see the app navigate to the New Reminder screen.

Create transitions from the Save and Cancel buttons back to the Home screen.

### 5. Exploring Motion transitions

On the New Reminder screen there are two input boxes for text and one for a date. When the user taps either of the two text boxes, a keyboard should pop up from the bottom of the screen.

We can achieve this with a Motion transition.

Duplicate the New Reminder screen. Get an iOS keyboard, possibly from the iOS Design UI Kit asset pack, and place it at the bottom of the screen.

Put another one on the New Reminder screen, but off the bottom of the visible portion of the screen.

Select one of the text input boxes and create a new connection. Instead of using a Preset, select Motion.

A Motion transition tries to animate changes from one screen to another. It used the layer names of elements to match them up between screens, which is why organised naming is really important.

The only thing that changes between the two screens is the vertical position of the keyboard, so this should slide up.

Do the same for the date field - duplicate the New Reminder screen and add a date picker to both screens. This time, the date picker appears in an expanded box, rather than coming on from the bottom. Refer to the example prototype to see how this works.

### 6. Timed Transition

In reality, when somebody has the keyboard up they would type something, hit return, and the keyboard would disappear. However, we can put in a timed transition to automatically go back to the New Reminder screen after a couple of seconds.

Select the whole text entry screen and press 'C'. You can now create a connection back to the New Reminder screen. Switch the trigger to a timer.

### 7. Check a Reminder

Create a screen that shows the app state after somebody checks one of the reminders as done. Use a Motion transition to animate the change. In the example, the checked reminder (the first one on the list is the active one) moves to the top of the 'done' section and the other reminders move up.

## Test your prototype

- Switch to Preview Mode to check your hotspots work and everything links together.
- Download the Invision mobile app to your smartphone, sign in, and try it on your phone
- Get the embed url to be able to share your prototype

## Continue experimenting

You've got the PSD that these screens were created from, so you could edit the designs, customise them, add to them, create more screens, and add all this to your prototype.

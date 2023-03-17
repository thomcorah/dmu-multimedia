# Intro to CreateJS - Part 1

CreateJS is a third-party JavaScript library that helps you out with making games. It's actually made up of four components:

- EaselJS: A JavaScript library that makes working with the HTML5 Canvas element easier.
- TweenJS: A JavaScript library for tweening and animating HTML5 and JavaScript properties.
- SoundJS: A JavaScript library that lets you more easily and efficiently work with audio on the web.
- PreloadJS: A JavaScript library that lets you manage and co-ordinate the loading of assets and data.

You can find out more here: <https://createjs.com>

We're going to use it to make a copy of the arcade classic, Pong.

You can see a completed example of what we're going to make here: <https://thomcorah.github.io/dmu-multimedia/resources/pong/pong.html>

All the JavaScript in that example is in a separate JS file in the 'js' folder.

This lab was originally based on a tutorial on tutsplus: <https://code.tutsplus.com/tutorials/learn-createjs-by-building-an-html5-pong-game--active-11845>

For Part 1, we're going to get everything set up, load and process the images and sounds, and show our starting screen.

## Get The Resources

You'll need a number of images and sounds for this game. You can download them all from here: <https://thomcorah.github.io/dmu-multimedia/resources/pong/assets.zip>

Feel free to edit the graphics if you want a different feel.

## Create the HTML

Start a new project, open it in your code editor. Create a new HTML file and fill in the normal starting stuff - `<head>`, `<body>` etc.

CreateJS works by drawing into a `<canvas>` element, so we'll need one in the `<body>`. It'll need an id so that we can pass the `<canvas>` to CreateJS. We'll also set its width to 480px and its height to 320.

```HTML
<canvas id="PongStage" width="480" height="320"></canvas>
```

And that's it for the HTML. Everything else is going to be done in JavaScript.

## Add CreateJS

With CreateJS, you can download just the sub-library that you need, or the whole lot in one go. Or, you can do the same but by linking to the JS files on a CDN instead of downloading them. You can find the links on the CreateJS site by following the Download button.

## Set Up The Game

There are a few things we need to do to setup for the game. 

### 1. Create an setup function

Just an empty function is ok for now. Make sure that you're also running the function when the page loads.

```JS

start();

function start(){
  console.log('Started');
}
```

### 2. Set the Stage

CreateJS has a stage object that will handle the graphics of your game. We need to give it the `<canvas>` element. So, first off, we get a reference to the `<canvas>`.

```JS
canvas = document.getElementById("PongStage");
```

When we create the stage, we want to assign it to a variable so that we can refer to it later. We want this to be globally available though, not just available inside the setup function. So, we need to create the variable outside of any function.

We're going to have a few variables like this, so it makes sense to create them all at the top of your JavaScript.

To create a new stage, we actually create a new instance of CreateJS' Stage object, and pass in the `<canvas>`. We then assign it to the stage variable.

```JS
let stage;

setup = () => {
  canvas = document.getElementById("PongStage");
  stage = new createjs.Stage(canvas);
}
```

### 3. Defining Assets

CreateJS can handle the loading of all our assets for us, keeping track of what's loaded, allowing us to process them as they load, providing us with feedback as they load, and giving us the ability to only start our game when every file has loaded into memory.

Central to this is the manifest - a list of all the assets. For each file, we need to tell CreateJS what the file name is, and what id we're going to use to refer to it in our code. To do this, we create an object for each file:

```JS
{ src: "bg.png", id: "bg" }
```

The manifest is an array with one of these objects for each file we'll need. Again, we'll want to be able to access the manifest variable from outside of the setup function, so create it at the top. Then, in the setup function, populate it with an object for each asset.

```JS
manifest = [
  { src: "bg.png", id: "bg" },
  { src: "main.png", id: "main" },
  { src: "startBtn.png", id: "startBtn" },
  { src: "creditsBtn.png", id: "creditsBtn" },
  { src: "credits.png", id: "credits" },
  { src: "paddle.png", id: "cpu" },
  { src: "paddle.png", id: "player" },
  { src: "ball.png", id: "ball" },
  { src: "win.png", id: "win" },
  { src: "lose.png", id: "lose" },
  { src: "playerScore.mp3", id: "playerScore" },
  { src: "enemyScore.mp3", id: "enemyScore" },
  { src: "hit.mp3", id: "hit" },
  { src: "wall.mp3", id: "wall" },
];
```

### 4. Loading Assets

CreateJS comes with a loader that will take our manifest file and load everything in it. We create a new one by creating a new instance of CreateJS' LoadQueue method. We'll assign this to a variable, and one that we can access from outside of the setup function so create it up top.

When we create this new queue, we want to set two properties. Firstly, we need to tell it to use normal HTTP for the requests. This isn't really something to get into here, except to say that we pass in `true` for the first parameter. The other things we want to do is set the base path for the assets - that is, where the loader can find them all. It's got the file names in the manifest, but it doesn't yet know to look in the assets folder, so we need to tell it.

```JS
preloader = new createjs.LoadQueue(true, "assets/");
```

There are a number of event listeners we could add to the preloader so that we can monitor and respond to progress:

- complete: fired when a queue completes loading all files
- error: fired when the queue encounters an error with any file.
- progress: Progress for the entire queue has changed.
- fileload: A single file has completed loading.
- fileprogress: Progress for a single file has changes. Note that only files loaded with XHR (or possibly by plugins) will fire progress events other than 0 or 100%.

We want to do a little processing on each file once it loads, so we'll need to add an event listener to catch the fileload event. We could use the complete event to kick the game off when all files have loaded, but because we're doing a little extra processing, we'll do our own check on the load progress to make absolutely sure everything's ready.

```JS
preloader.addEventListener("fileload", handleFileLoad);
```

With any listeners setup for events we're interested in, we can now tell the preloader to load the files in the manifest. We do this using its `loadManifest()` function:

```JS
preloader.loadManifest(manifest);
```

### 4. Set Up The Framerate

CreateJS comes with a Ticker object. This will provide a central heartbeat to our game, keeping a constant frame rate - or trying to.

We need to do two things:

1. Set the framerate of the Ticker
2. Tie the Ticker to our stage to keep it refreshing.

The first is straightforward, we just set the `framerate` property of the Ticker:

```JS
createjs.Ticker.framerate = 30;
```

For number two, we set up an event listener on the Ticker to listen out for a `tick`, and then give it our stage object.

```JS
createjs.Ticker.addEventListener("tick", stage);
```

This will keep the stage refreshing the `<canvas>` element as 30fps, or as close as the CPU will allow.

## Process The Assets

We need to process each of the files defined in the manifest as they load. We've already set up an event listener on the preloader to run a function called `handleFileLoad()` for each file that's loaded.

### 1. Create The Function

Create a function called 'handleFileLoad'. This will be passed information about the event, so you need to make sure you set it up to receive that data. You could put a `console.log()` in here to check things are working so far.

```JS
handleFileLoad = (evt) => {
  console.log(evt);
}
```

### 2. React to File Type

We're loading two types of file: images and sounds. The way we handle each file will depend on its file type, so we need some conditional logic here. We could use `if`, but `switch` is more appropriate in this case. `switch` is a good choice if we want to match one of a defined number of discrete options. In this case, the file is either an image or a sound file.

We write a `switch` block like this:

```JS
switch(/* variable we're looking at */) {
  case /* value */ :
    // do stuff here
    break; // defines the end of this case
  case /* some other value */ :
    // do stuff here
    break;
  default:
    // we can have some code run if the
    // value doesn't match any we're interested in.
    break;
}
```

We can get the file type from the event information.

```JS
evt.item.type
```

So, our `switch` block will start like this:

```JS
switch (event.item.type) {
  case "image":
    // process the image
    break;
  case "sound":
    // process the sound
    break;
}
```

### 3. Process The Image

With our images, we want to

- create a new Image element in JavaScript,
- have it load up the image we've just loaded,
- and add it to somewhere in memory we can get to it later.

To create a new Image object in JavaScript, we instantiate a new instance of the `Image()` object, and assign it to a variable.

```JS
let img = new Image();
```

We then tell it where the image is that we want it to load:

```JS
img.src = event.item.src;
```

We want to know when this loading is complete, so we can keep a tally of loaded files and start our game when we've got them all.

```JS
img.addEventListener("load", handleLoadComplete);
```

We also want to make sure that we keep this image around in memory so that it's instantly available, and we've got a way to refer to it later. That means assigning it to a globally available variable - one that's not created inside a function.

We could create a variable for each graphic at the top of our file matching the id values in the manifest. The thing is, although we can access that id value here, we can't directly use it to try to refer to a global variable.

```JS
event.item.id = //this image.
```

That would set the id property of the item that was loaded, not the variable with the same name as the **value** of the id.

What we can do though is use the value of a variable to refer to an item in an associative array, or more plainly, an object. We can do this using square brackets. For example, we create an object.

```JS
let person = {fname: "Thom", lname: "Corah"};
```

If we want to access one of its properties, we can use dot notation:

```JS
person.fname = "Thomas";
```

Or, we can use square brackets:

```JS
person["fname"] = "Thomas";
```

Notice that with square brackets, we had to provide the name of the property as a string. If we had omitted the quote marks:

```JS
person[fname] = "Thomas";
```

...the browser would think we were looking for a property with the same name as the **value** of some variable called fname.

Almost always, this isn't what we want. In this case, that's exactly what we want. If we create a globally available variable, we can use square brackets to assign our images to it based on the value of the id variable.

So, up at the top of the file, create a new empty object:

```JS
let graphics = {};
```

You can now add to this:

```JS
graphics[event.item.id] = // new image
```

We don't want to assign the new Image object directly. We want CreateJS to create a bitmap of this image to hold in memory

```JS
graphics[event.item.id] = new createjs.Bitmap(img);
```

So, putting that all the image stuff together:

```JS
case "image":

  let img = new Image();
  img.src = event.item.src;

  img.addEventListener("load", handleLoadComplete);

  graphics[event.item.id] = new createjs.Bitmap(img);

  break;
```

### 4. Process The Sound

Compared to an image, processing a sound is very straightforward. We just need to register it with CreateJS, passing in the location of the file and the id we want to refer to it by:

```JS
createjs.Sound.registerSound(event.item.src, event.item.id);
```

We then run our function that will keep track of how many files have loaded. The total code for our sound is therefore:

```JS
case "sound":
  createjs.Sound.registerSound(event.item.src, event.item.id);
  handleLoadComplete();
  break;
```

### 5. Keep Count of What's Loaded

Finally, we need to keep a count of how many assets have loaded, and compare that to how many we're expecting so that we can kick off the game when everything's ready.

This is the `handleLoadComplete()` function we pointed to previously.

So, create a new function - `handleLoadComplete()`.

We need a variable to keep track of how many items have loaded. This needs to be global, so create it at the top of the file.

```Js
let totalLoaded = 0;
```

Now in our `handleLoadComplete()` function, we need to add one to it.

```JS
totalLoaded++;
```

We now want to see if we've loaded everything - does the value of totalLoaded equal the number of things in the manifest. If it does, we want to run a function that will start displaying our game. In this case, it's the title view.

```JS
if (manifest.length == totalLoaded) {
  addTitleView();
}
```

## Add The Title View

Our game starts off with a title screen. This will have the title (unsurprisingly) and two buttons - one to start the game and one to show the credits screen.

### 1. Create The Add Title View Function

The first thing is to create the function that will do this, the one that we've told the browser to run when all the files have loaded.

### 2. Set The Location Of The Buttons

We need to set the x and y properties of the two buttons to put them in the correct place.

These buttons have been stored on the `graphics` object, using the id we provided in the manifest as the property name.

```JS
graphics.startBtn.x = 240 - 31.5;
graphics.startBtn.y = 160;

graphics.creditsBtn.x = 241 - 42;
graphics.creditsBtn.y = 200;
```

We want to group these two buttons with the title text into a single view, so that when the game starts we can remove them all together. CreateJS gives us a handy way to do this using Containers. We need to create a container that will be available globally, so it's back to the top of the file.

```JS
let TitleView = new createjs.Container();
```

Then in our addTitleView() function, we want to add the title and the two buttons to this container. The title is a full screen PNG graphic called main. To add anything to a Container, we use its addChild() method. We can add multiple things at once. They stack in the order we add them.

```JS
TitleView.addChild(graphics.main, graphics.startBtn, graphics.creditsBtn);
```

We then need to add the background and our new title view to the stage. Again, we use the addChild() method.

```JS
stage.addChild(graphics.bg, TitleView);
```

Finally, we need to add an event listener to each of those buttons.

```JS
graphics.startBtn.addEventListener("click", tweenTitleView);
graphics.creditsBtn.addEventListener("click", showCredits);
```

Go ahead and create tweenTitleView() and showCredits() as empty functions, except for maybe a console.log() in each so you can check things work.

## Wrapping Up

That's it for part one. You've used CreateJS to load all your assets, process them, and create and show your start screen.

In part two, we need to:

- add the credits screen and animate it in and out
- add our gameplay screen
- add a game over state of some sort

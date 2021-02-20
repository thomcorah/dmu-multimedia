/* We start off by creating all the variables we'll need.
 * We're creating these here so that they're globally available.
 * In most cases we're not assigning values to them yet, that will come
 * later.
 */

let canvas; //Will be linked to the canvas in our index.html page
let stage; //This grabs hold of the canvas and allows us to add children and what not.

/* Graphics
 * We're loading all our graphics and sounds in JavaScript, so
 * we create an empty object that's going to hold them all.
 */

let graphics = {};

// Score

let playerScore; //The main player score
let cpuScore; //The CPU score
const cpuSpeed = 6; //The speed of the CPU paddle; the faster it is the harder the game is

// The initial speed of the ball.
let xSpeed = 5;
let ySpeed = 5;

/*
 * CreateJS comes with a preloader - this will be given a
 * manifest, that is a list of the resources to load.
 * We need to keep track of how many of those things have loaded
 * so that we know when we're ready to start the game.
 */
let preloader;
let manifest;
let totalLoaded = 0;

// Create a new container view.
let TitleView = new createjs.Container();

/* CreateJS will run a function called start when the page first loads.
 * This is where you do all your setup, such as preloading assets.
 */
start = () => {
  /* We need to get a reference to the canvas element on the page,
   * and then hand that to CreateJS to use as the stage.
   */
  canvas = document.getElementById("PongStage");
  stage = new createjs.Stage(canvas);

  /* Here we create our manifest. This is a list of
   * all the assets we'll need. These are all in the
   * assets folder, so we'll be able to find them
   * later with just the file name. We also specify
   * an id for each one.
   */
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

  /* We need to create a preload queue. We use the LoadQueue method for this.
   * The first parameter should be true - this has to do with the method used
   * for loading the assets. The second parameter is the base path for
   * all our assets. In this case, everything is in the assets folder, so
   * that's what we put here. It saves us having to put it at the start
   * of the filenames in the manifest.
   */
  preloader = new createjs.LoadQueue(true, "assets/");

  /* We want to know when a bunch of things happen as our assets are loaded.
   * these event listeners on the preloader will do that.
   * This first one will fire every time there is a progress update on
   * an individual file.
   */
  preloader.addEventListener("fileprogress", handleProgress);

  /* This fires when the whole list has been loaded. */
  preloader.addEventListener("complete", handleComplete);

  /* This fires when an individual file has fully loaded */
  preloader.addEventListener("fileload", handleFileLoad);

  /* With the event listeners in place, we can now kick off the
   * loading. We use the preloader's loadManifest() method, and
   * give it our manifest. This starts the preloading process.
   */
  preloader.loadManifest(manifest);

  /* CreateJS provides a Ticker. This provides a constant 'heartbeat',
   * enabling you to keep the action running at a fairly constant rate.
   * We set a target frame rate. Note that the actual frame rate will
   * be lower if there's not enough CPU capacity to maintain our target.
   * Use the framerate property to set the target frame rate.
   */
  createjs.Ticker.framerate = 30;

  /* We then want to add an event listener to the ticker so that
   * we can use it to update our display on each tick. One option
   * here is to give the event listener the name of a function we've
   * written. However, when using CreateJS's stage, we can simply pass
   * this in to have the stage update with every tick.
   * This will cause CreateJS to look for a function called update, and
   * run that with every tick. Our update() function is much further down.
   */
  createjs.Ticker.addEventListener("tick", stage);
};

/* These are the functions that are run from the event listeners
 * on the preloader. We don't do much with the first two.
 */

handleProgress = (event) => {
  //console.log("Load Progress", event);
};

/* We could use this to kick off our game when everything's loaded. However,
 * we want to do a little extra processing on the files so we're going to
 * manually monitor the load progress in the handleFileLoad function.
 */
handleComplete = (event) => {
  //console.log("Load Complete", event);
};

/* This function is run whenever an individual file finishes loading.
 * We want to know which file. This is passed in in the event information,
 * so we need to pick that up.
 */
handleFileLoad = (event) => {
  //console.log("File Loaded", event);

  /* We're loading two types of file - images and audio. We need to treat
   * each differently, so we use switch to perform a different action based
   * on the type of file that's loaded. We could also have used if here too:
   * if(event.item.type === "image"){
   *    // process the image
   * } else if(event.item.type === "sound") {
   *   // process the sound
   * }
   * switch is often a better choice when we want to pick out one from
   * a limited selection of defined options.
   */
  switch (event.item.type) {
    /* When we're doing a switch block, we use the case keyword to define
     * each value we're interested in.
     */
    case "image":
      /* When we load an image, we need to create a new image object
       * from it, and then hand it over to CreateJS.
       */
      let img = new Image();
      img.src = event.item.src;

      /* We want to know when this loading process is complete. This is
       * part of our system that keeps a tally of the number of
       * assets that have fully loaded.
       */
      img.addEventListener("load", handleLoadComplete);

      /* In order to be able to use the image instantly in
       * the game, we have CreateJS convert it to a bitmap and then
       * we save it in the graphics object we created earlier. This is a bit funky.
       * We need a way of being able to refer these variables
       * using the id that comes with the actual image. We can use
       * the value of a variable to refer to a property of something, if we
       * use square brackets. As these variables are all going to be
       * properties of the graphics object, we can do this.
       */
      graphics[event.item.id] = new createjs.Bitmap(img);

      /* When using switch, we use the break keyword to tell the browser that
       * this is the end of this case.
       */
      break;

    case "sound":
      /* We handle sounds differently, we just register them with
       * createJS. We need to tell it two things - where is the file,
       * and what id are we using to refer to it. Both of these things
       * come out of the event info.
       */
      createjs.Sound.registerSound(event.item.src, event.item.id);
      // with the sound registered we can toggle this as loaded */
      handleLoadComplete();
      break;
  }
};

/* Every time a file is fully loaded, this function is run. It
 * keeps a running total of the number of files that have been loaded,
 * comparing this with how many are in the original manifest each
 * time. When the two are equal, it starts the game by running
 * the function that shows the title view.
 */
handleLoadComplete = (event) => {
  console.log("handleLoadComplete");
  totalLoaded++;

  if (manifest.length == totalLoaded) {
    addTitleView();
  }
};

/* This adds the title view. It consists of the title and two buttons,
 * one to start the game and another to view the credits.
 */
addTitleView = () => {
  console.log("addTitleView");

  /* We position the two buttons button */
  graphics.startBtn.x = 240 - 31.5;
  graphics.startBtn.y = 160;

  graphics.creditsBtn.x = 241 - 42;
  graphics.creditsBtn.y = 200;

  /* We then add them to the title view, along with the
   * rest of the title page graphics. Have a look at the actual
   * graphics file to understand what this is
   */
  TitleView.addChild(graphics.main, graphics.startBtn, graphics.creditsBtn);

  /* We then add the the main background image, and this new title view
   * to the stage, and force the stage to update with these new images.
   */
  stage.addChild(graphics.bg, TitleView);
  stage.update();

  // We then add an event listener to both buttons.
  graphics.startBtn.addEventListener("click", tweenTitleView);
  graphics.creditsBtn.addEventListener("click", showCredits);
};

/* This function is run if the player clicks the credits button. */
showCredits = () => {
  // Show Credits
  console.log("Credits");

  /* We position the credits image off the right hand side of the stage.
   * We're going to animate its introduction.
   */
  graphics.credits.x = 480;

  // We add the graphic screen to the stage, and force an update.
  stage.addChild(graphics.credits);
  stage.update();

  /* Now we want to slide that credits screen in. We can use CreateJS to
   * do this using its Tween functions.
   */
  createjs.Tween.get(graphics.credits).to({ x: 0 }, 300);

  /* We then add an event listener to the screen so that a click
   * anywhere on it will run the function that hides the
   * credits again.
   */
  graphics.credits.addEventListener("click", hideCredits);
};

hideCredits = () => {
  console.log("hide credits");

  /* We use CreateJS to animate the credits screen off the stage again.
   * This time however we need to know when this is complete so that
   * we can remove the graphic from the stack. We can do this by
   * string a call() function onto the end of the tween code and
   * providing the name of a function to call when the animation is
   * complete.
   */
  createjs.Tween.get(graphics.credits).to({ x: 480 }, 300).call(rmvCredits);
};

/* This function is called when the credits screen has been moved off the stage.
 * We tell the stage to remove the graphic from the stack.
 */
rmvCredits = () => {
  stage.removeChild(graphics.credits);
};

/* This function is run when the player clicks the start button
 * on the title screen.
 */
tweenTitleView = () => {
  console.log("Start Game");

  /* We use CreateJS to tween the title screen off the top of the stage.
   * When this animation is finished, we want to add the graphics for the
   * game, so we call addGameView() when the animatiion has finished.
   */
  createjs.Tween.get(TitleView).to({ y: -320 }, 300).call(addGameView);
};

/* This function will run when the title screen has animated
 * out of the way.
 */
addGameView = () => {
  // Destroy Menu & Credits screen

  /* We no longer need to keep the title screen and credits screen in memory.
   * We'll be recreating them if the game restarts. We remove the title screen
   * from the stage, and then set both to null to remove them completely
   * from memory.
   */
  stage.removeChild(TitleView);
  TitleView = null;
  graphics.credits = null;

  // Add Game View
  /* We then need to position the various graphic elements of the game
   * screen.
   */
  graphics.player.x = 2;
  graphics.player.y = 160 - 37.5;
  graphics.cpu.x = 480 - 25;
  graphics.cpu.y = 160 - 37.5;
  graphics.ball.x = 240 - 15;
  graphics.ball.y = 160 - 15;

  // Score

  playerScore = new createjs.Text("0", "bold 20px Arial", "#f5ed09");
  playerScore.x = 211;
  playerScore.y = 20;

  cpuScore = new createjs.Text("0", "bold 20px Arial", "#f5ed09");
  cpuScore.x = 262;
  cpuScore.y = 20;

  /* And then add them all to the stage. */
  stage.addChild(
    playerScore,
    cpuScore,
    graphics.player,
    graphics.cpu,
    graphics.ball
  );

  // and finally, force an update on the stage to show the graphics.
  stage.update();

  /* We're not goint to start the game playing until the user
   * clicks on the screen, so we add an event listener.
   */
  graphics.bg.addEventListener("click", startGame);
};

/* When the game actually starts, we need to do two things.
 * 1. Remove the event listener that's watching for a click on
 *    the screen. We don't want it restarting if the player
 *    accidentally clicks on the screen.
 * 2. Use the Ticker to run our own update function with
 *    every tick.
 */
startGame = () => {
  graphics.bg.removeEventListener("click", startGame);

  createjs.Ticker.addEventListener("tick", update);
};

/* When a point is scored, we reposition the paddles
 * and ball back into their start position, and wait for
 * a click on the screen to start things moving again.
 */
reset = () => {
  graphics.ball.x = 240 - 15;
  graphics.ball.y = 160 - 15;
  graphics.player.y = 160 - 37.5;
  graphics.cpu.y = 160 - 37.5;

  createjs.Ticker.removeEventListener("tick", update);
  graphics.bg.addEventListener("click", startGame);
};

/* We'll run this when the game is over, showing either the
 * win or lose graphic accordingly.
 */
alert = (e) => {
  createjs.Ticker.removeEventListener("tick", update);
  graphics.bg.removeEventListener("click", startGame);

  if (e == "win") {
    graphics.win.x = 140;
    graphics.win.y = -90;

    stage.addChild(graphics.win);
    createjs.Tween.get(graphics.win).to({ y: 115 }, 300);
  } else {
    graphics.lose.x = 140;
    graphics.lose.y = -90;

    stage.addChild(graphics.lose);
    createjs.Tween.get(graphics.lose).to({ y: 115 }, 300);
  }
};

/* Once gameplay is running, this function gets called with every tick
 * of the Ticker. We use it to update the position of everything.
 */
update = () => {
  /* The y position of the player's paddle, it's position up and down the
   * stage is based on the mouse position. We can get this from the stage
   * object.
   */
  graphics.player.y = stage.mouseY - 40;

  /* The direction and speed of the ball is controller by two variables,
   * one contains a number representing the speed in the horizontal, and
   * the other in the vertical. Combined, these can give us any speed in
   * any direction.
   */
  graphics.ball.x = graphics.ball.x + xSpeed;
  graphics.ball.y = graphics.ball.y + ySpeed;

  /* The CPU paddle will move towards the vertical position of the ball.
   * We use the cpuSpeed variable to determine how quickly it can move
   * towards the position of the ball.
   */
  if (graphics.cpu.y < graphics.ball.y) {
    graphics.cpu.y = graphics.cpu.y + cpuSpeed;
  } else if (graphics.cpu.y > graphics.ball.y) {
    graphics.cpu.y = graphics.cpu.y - cpuSpeed;
  }

  /* If the ball hits a wall (top or bottom of the stage) it needs to bounce
   * off it, with a little sound. We check the vertical position (y) of the
   * ball to see if it's at the boundaries of our stage.
   * if it is, we need it to bounce off. To do that, we invert the vertical
   * speed of the ball - the value of the ySpeed variable.
   * We use CreateJS to play the appropriate sound.
   */

  if (graphics.ball.y < 0) {
    ySpeed = -ySpeed;
    createjs.Sound.play("wall");
  } //Up

  if (graphics.ball.y + 30 > 320) {
    ySpeed = -ySpeed;
    createjs.Sound.play("wall");
  } //down

  /* If the ball manages to go off the left side of the stage, it's
   * got past our paddle so the CPU scores a point. Damn It!
   * We're going to invert the value of xSpeed so that when the game
   * restarts the ball will start off moving towards the CPU end.
   * We update the score text on screen.
   * Reset ready for another round.
   * Play the appropriate sound.
   */
  if (graphics.ball.x < 0) {
    xSpeed = -xSpeed;
    cpuScore.text = parseInt(cpuScore.text + 1);
    reset();
    createjs.Sound.play("enemyScore");
  }

  /* Player score is the same, but the other way around. */
  if (graphics.ball.x + 30 > 480) {
    xSpeed = -xSpeed;
    playerScore.text = parseInt(playerScore.text + 1);
    reset();
    createjs.Sound.play("playerScore");
  }

  /* We need to know if the ball hits the paddles. We'll start with
   * the computer's paddle. This is trickier than a wall, because it's
   * a 2D thing in space. This means we've got relatively complex if
   * condition that has to check if ball is past the front AND beyond the back
   * AND below the top AND above the bottom of the paddle.
   * If all that is true, we bounce the ball by inverting its horizontal
   * speed and play the appropriate sound.
   */

  if (
    graphics.ball.x + 30 > graphics.cpu.x &&
    graphics.ball.x + 30 < graphics.cpu.x + 22 &&
    graphics.ball.y >= graphics.cpu.y &&
    graphics.ball.y < graphics.cpu.y + 75
  ) {
    xSpeed *= -1;
    createjs.Sound.play("hit");
  }

  /* We do the same for the player's paddle */

  if (
    graphics.ball.x <= graphics.player.x + 22 &&
    graphics.ball.x > graphics.player.x &&
    graphics.ball.y >= graphics.player.y &&
    graphics.ball.y < graphics.player.y + 75
  ) {
    xSpeed *= -1;
    createjs.Sound.play("hit");
  }

  /* Stop Paddle from going out of canvas */

  if (graphics.player.y >= 249) {
    graphics.player.y = 249;
  }

  /* Check for Win */

  if (playerScore.text == "10") {
    alert("win");
  }

  /* Check for Game Over */

  if (cpuScore.text == "10") {
    alert("lose");
  }
};

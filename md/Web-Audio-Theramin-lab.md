# Web Audio Theramin

The Web Audio API allows you to do a whole host of lovely audio stuff in the browser, going way beyond the simple file playback of the `<audio>` element. This lab will have you use it to create sound, indeed, create a musical instrument that plays in the browser.

Note that the web audio API works in every major browser except Internet Explorer.

What you're going to make is a theramin.

![Theramin](https://thomcorah.github.io/dmu-multimedia/resources/img/theramin.jpg)

Well, a browser based one.

Here's a completed example.

<https://thomcorah.github.io/dmu-multimedia/resources/Theramin/index.html>

## Create The UI

The user interface for this is quite simple. Really, we just need an area over which we can monitor the mouse position, and a button to start and stop things.

We might as well stick the word 'Theramin' in the middle too.

![Theramin interface](https://thomcorah.github.io/dmu-multimedia/resources/img/theraminScreenshot.jpg)

Some key points:

1. The pale part is a `<div>` set to the full width and height of the window, minus the 8px of margin the `<body>` is beign given. This `<div>` will be what we monitor the mouse position over in order to change the pitch and volume of the theramin.
2. The word 'THERAMIN' in the middle uses a nice font from Google fonts.
3. I've used Flexbox to position the title and button in the middle of the `<div>`.
4. The button is, unsurprisingly, a `<button>` object that has been styled to look nicer.

## Code the Theramin

With the UI created, it's time to start using the Web Audio API to make some sound.

The way that all things work with this API is by chaining objects (nodes) together.

For example, we're going to have an oscillator, connected to a gain node, connected to an output.

Oscillator -> Gain -> Output

An oscillator is a sound maker, a basic building block. It plays a waveform repeatedly. There are different preset shapes of waveform - sine, square, triangle, and sawtooth. We're going to use sine for a smooth singular sound. You can try the others too though.

A gain node is used for changing the volume of a sound.

### Setting the Context

All of this exists within something called a `context`, or specifically, an `AudioContext`. So, this is our starting point - we want to create a new `AudioContext` and assign it to a variable so that we can refer to it.

```JS
let context = new AudioContext();
```

Except there's a little problem with this. Safari needs you to prefix the `AudioContext` with `webkit`. We can achieve this by using this nifty bit of code instead:

```JS
let context = new (window.AudioContext || window.webkitAudioContext)();
```

If there is such a thing as `webkitAudioContext` this will be used, otherwise it'll use the normal `AudioContext`.

### Create an Oscillator

Now we can create an oscillator. We use the context to do this.

```JS
let oscillator = context.createOscillator();
```

We need to set the type of waveform that it'll use.

```JS
oscillator.type = 'sine';
```

We don't really need to do this, as `sine` is the default, but now you can see how to change the waveform.

### Create a Gain Node

Similarly, we need to create a gain node.

```JS
let gain = context.createGain();
```

With the gain created, we can plug the oscillator into it.

```JS
oscillator.connect(gain);
```

And then we connect the gain node to an output. This output is provided by the `AudioContext`.

```JS
gain.connect(context.destination);
```

Cool, that's our chain sorted:

Oscillator -> Gain -> Output

### Tracking State

Within our theramin, we're going to want to keep track of two things:

1. Is the theramin currently being played
2. Has the oscillator been started

In the case of the first, the start button is going to change to a stop button when the theramin is running, giving the user the option to turn it off again! That's just good manners.

On the second point though, this is a curiosity of the Web Audio API. In order to get the oscillator making any sound, we need to start it. You would think we could stop it, and then start it again later, but no. It can only be started once. So, when the user hits stop, rather than actually stopping the oscillator, we're actually just going to turn it down to 0. However, when they hit start again, we don't want to restart the oscillator - we can't do that - so we need to know if it's already been started.

For both of these things a boolean will do.

```JS
let playing = false;
let started = false;
```

### Check In

So, this is a good point to just check what you've got so far. Here's what it should look like:

```JS
let context = new (window.AudioContext || window.webkitAudioContext)();

let oscillator = context.createOscillator();
oscillator.type = "sine";

let gain = context.createGain();

oscillator.connect(gain);
gain.connect(context.destination);

let playing = false;
let started = false;
```

You should also refresh your browser and make sure no errors are appearing in the console.

### Starting and Stopping

We want to do something when the user clicks on that button. So, it'll need an id and an event listener.

```JS
document
  .getElementById("startStopButton")
  .addEventListener("click", toggleAudio);
```

This will run a function called `toggleAudio` whenever the button is clicked. This function should go above the event listener line you've just created.

What do we need that function to do?

```JS
toggleAudio = (evt) => {
  // Get the current time - we'll need this later

  // If the oscillator is playing, we need to stop the theramin...

    // Remove the event listener from our big div that
    // was responding to mouse movements on it.

    // Change the button label to 'Start'

    // Turn the volume down to 0

    // set the playing variable to false

  // But if the theramin isn't currently playing...

    // If it's not been started before..
      //start the oscillator
      // set the started variable to true


    // Add an event listener to the big div to respond
    // to mouse movements over it

    // Change the button label to 'Stop'

    // Turn the volume up

    // Set the playing variable to true
}
```

Let's step through each of those.

**// Get the current time - we'll need this later**

Audio requires exact timing, and requires us to provide an exact time in a couple of cases. The AudioContext can give us a solid timestamp to use for this.

```JS
let now = context.currentTime;
```

The if statements should be straightforward, I'll skip those.

**// Remove the event listener from our big div that  
// was responding to mouse movements on it.**

Removing an event listener is just the same as adding it, except we use the `removeEventListener()` method instead of `addEventListener()`. In this example, the big `<div>` has an id of 'theramin', and we're going to go on to create a function called `updateTheramin` that will respond to changes in mouse position over it.

```JS
document
  .getElementById("theramin")
  .removeEventListener("mousemove", updateTheramin);
```

**// Change the button label to 'Start'**

We need to get a reference to the button, and then use its `textContent` property to change the label text. We could us its id to grab it, or the event information passed into this function.

```JS
evt.target.textContent = "Start";
```

**// Turn the volume down to 0**

We've got a gain node called gain. Gain nodes have a gain property that stores the current volume, between 0 and 1. To change it, we use the `setValueAtTime()` method. This method needs to know two things:

1. What value to set it to
2. When - this is why we need the time.

```JS
gain.gain.setValueAtTime(0, now);
```

**// set the playing variable to false**

This bit should be simple.

```JS
playing = false;
```

So we end up with the following if the theramin is currently playing:

```JS
if (playing) {
  document
    .getElementById("theramin")
    .removeEventListener("mousemove", updateTheramin);

  evt.target.textContent = "Start";

  gain.gain.setValueAtTime(0, now);

  playing = false;
}
```

Onto the next bit, when it's not already playing.

**// If it's not been started before..**

This is important. We're only allowed to start the audio in response to a user interaction, but we only want it to happen the first time the button is clicked. That's why we need this bit.

**//start the oscillator**

Oscillators have a `start()` method.

```JS
oscillator.start();
```

**// set the started variable to true**

```JS
started = true;
```

The rest of what follows in this section is the same as turning the theramin off, but the other way round.

In all, you'll end up with this.

```JS
toggleAudio = (evt) => {
  let now = context.currentTime;
  if (playing) {

    document
      .getElementById("theramin")
      .removeEventListener("mousemove", updateTheramin);

    evt.target.textContent = "Start";

    gain.gain.setValueAtTime(0, now);

    playing = false;

  } else {

    if (!started) {
      oscillator.start();
      started = true;
    }

    document
      .getElementById("theramin")
      .addEventListener("mousemove", updateTheramin);

    evt.target.textContent = "Stop";

    gain.gain.setValueAtTime(1, now);

    playing = true;
  }
};
```

Try it out. What happens. Anything? Probably just an annoying constant tone? Or an error because you haven't created the function the event listeners are trying to call when the mouse moves!

### Changing Pitch And Volume

Now we need to create that function. What does it need to do?

```JS
updateTheramin = (evt) => {
  // Work out the volume based on the horizontal position of the mouse
  // Work out pitch based on the vertical position of the mouse
  // Get the current time
  // Set the volume of the gain node
  // Set the frequency of the oscillator
}
```

We can get the position of the mouse from the event information. `evt.clientX` will give us the horizontal position, and `evt.clientY` will give us the vertical position.

In the case of the volume, we need a number between 0 and 1, so divide the horizontal position by the width of the window. We can get the width of the window using `window.innerWidth`.

For the pitch, we want to end up with a number between about 50 and 1000.

But to start with, lets take the vertical position, and scale it to be between 0 and 1 as we did with for the volume.

Screen coordinates start with 0 at the top, not the bottom. However, we want 0 at the bottom so that pitch goes up as we move the mouse up. Once we've got our number scaled to be between 0 and 1, we can subtract it from 1 to invert it.

Now we need to scale it to our 50 - 1000 range. To do that, first multiply it by the size of the range (950) and then add the lower value (50).

```JS
let volume = evt.clientX / window.innerWidth;
let pitch = 1 - evt.clientY / window.innerHeight;
pitch = 950 * pitch + 50;
```

We've seen how to get the current time.

```JS
let now = context.currentTime;
```

And how to change the volume of a gain node.

```JS
gain.gain.setValueAtTime(volume, now);
```

We can change the frequency of an oscillator in much the same way.

```JS
oscillator.frequency.setValueAtTime(pitch, now);
```

So your finished function should look like...

```JS
updateTheramin = (evt) => {
  let volume = evt.clientX / window.innerWidth;
  let pitch = 1 - evt.clientY / window.innerHeight;
  pitch = 950 * pitch + 50;
  let now = context.currentTime;
  gain.gain.setValueAtTime(volume, now);
  oscillator.frequency.setValueAtTime(pitch, now);
};
```

## Check it Out

Does it work?? If not, check the console in the developer tools. Are you getting any errors? What do they say? How does your code compare to the completed code in the example?

## Going Further

Ooh, the possibilities. What about

- trying out those different waveform types?
- giving the user a dropdown to select waveform?
- changing the background colour based on mouse position?
- layering multiple oscillators at once?

The Web Audio API can also handle sound files, and streaming sound from a devices microphone for example. There's a great article on CSS Tricks about it here: <https://css-tricks.com/introduction-web-audio-api/>

Or, if you're feeling really brave, you can view the documentation on MDN: <https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API>

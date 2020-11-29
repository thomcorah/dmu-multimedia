# Cardflip Game

In this lab we’re going to bring a few things together to make a card flip game where the player has to remember the location of cards to match up pairs. Just to make things a bit trickier (for us) we’re going to randomise the order of the cards each time.

You can see a completed example here: <https://thomcorah.github.io/dmu-multimedia/resources/CardFlip/>

This is quite a trick one, so once you've had a play, open up the source code to refer to if you need to.

![Card Flip Game](https://thomcorah.github.io/dmu-multimedia/resources/img/cardFlip.png)

There are a number of steps we’re going to run through to achieve this.

1. Make a card that flips over when the user clicks on it.
2. Create a deck of twelve cards containing six pairs in a random order.
3. Set up the logic to handle card clicks and pair checking.

## A Card That Flips

This bit’s quite straightforward as we’re going to borrow what somebody else has done. If you have a look at the pen at http://codepen.io/tjegan/pen/zrMdEO you’ll see that this does a nice card flip, so we're going to grab that.

- Create a new HTML document with the normal boilerplate stuff in it.
- Create a CSS file and link it in.
- Copy the HTML from the pen and put that in the <body> of your HTML.
- For the CSS, what’s shown in CodePen is slightly different to standard CSS, it’s SCSS. However, if you click the little arrow button at the top-right of the CSS panel you can select to view compiled CSS. Do this, and then copy all the CSS into your CSS file.

![CodePen Screenshot](https://thomcorah.github.io/dmu-multimedia/resources/img/codePen.png)

The last bit is to add the JavaScript.

- Create a JS file and link that in to your HTML file.
- Copy the JavaScript off CodePen and pop that in your JavaScript file.

With this all in place, load up your HTML file in the browser. Hopefully it works nicely. You can click the card and it flips over. Click it again and it flips back.

However, it’s not showing a picture of an animal! There are six animal pictures we want to use. You can find them all zipped up here:

<https://thomcorah.github.io/dmu-multimedia/resources/CardFlip/img.zip>

There's also an image for the back of the card in there.

We want our card to have the card back image on one side and an animal on the other.

If you have a look at the HTML you’ve got at the moment, you’ll see there’s a deep nesting structure going on with the card. First we’ve got a `<div>` with class ‘card—container’. Inside this there’s a `<div>` with class ‘card—flipper’. Then you’ve got two `<div>`s next to each other within this, with class ‘side—a’ and ‘side—b’ respectively. Inside these two `<div>`s you’ve then got the content for each of the two faces of the card. This is what we want to replace.

You can strip out all this contents and just include an `<img>` element for each image, one for side a and one for side b. One tweak here is to make sure the image takes on the full size of its container, so just set up some CSS to the height and width of images to 100%. You might want to add a border radius to the images too.

So this is good. You’ve sorted out what HTML you need to have a single card flipping over. How can we build that up into a grid of cards? Well, we want to have three rows of four cards, spaced out evenly across the row. We can do that with three horizontal flex box containers. You’ll need a `<div>` for each row, inside each of which you’ll have four cards.

Before you start writing out loads of HTML though, we're going to do all of that in JavaScript!

## Create the Deck

Okay, it’s JavaScript time. We need to create a deck of cards with two of each card in it. We can do this with an array. So, create an array that just lists the animals. It’ll be easier if you match what’s been used for the file names exactly. Remember that we want two of each animal.

```JS
let animals = [
  "elephant",
  "elephant",
  "gorilla",
  "gorilla",
  "leopard",
  "leopard",
  "rhino",
  "rhino",
  "turtle",
  "turtle",
  "orangutan",
  "orangutan",
];
```

Now we need to shuffle the deck. A quick Google search turns up a good answer on Stack Overflow that seems to do the job quite nicely (<http://stackoverflow.com/a/2450976>). We can just copy and paste this function into the bottom of our JavaScript file and use it rather happily.

```JS
let cardOrder = shuffle(animals);
```

If you write animals to the console, you'll see that they're in a different order each time you refresh the page.

Now we've got a random order of cards, it's time to build the HTML that will show them on the page.

Broadly speaking, we need some code that will create this kind of structure:

1. You start off with an opening `<div>` tag with a class name.
2. Then you have four cards.
3. Then you have a closing `</div>` tag.
4. You start off with an opening `<div>` tag with a class name.
5. Then you have four cards.
6. Then you have a closing `</div>` tag.
7. You start off with an opening `<div>` tag with a class name.
8. Then you have four cards.
9. Then you have a closing `</div>` tag.

However, we're going to create our HTML by stepping through our animals array, one entry at a time. Going through the array, we want to do something like this:

**Card 0:** Put in an opening `<div>` tag. Put in a card.  
**Card 1:** Put in a card.  
**Card 2:** Put in a card.  
**Card 3:** Put in a card. Put in a closing `</div>` tag.  
**Card 4:** Put in an opening `<div>` tag. Put in a card.  
**Card 5:** Put in a card.  
**Card 6:** Put in a card.  
**Card 7:** Put in a card. Put in a closing `</div>` tag.  
**Card 8:** Put in an opening `<div>` tag. Put in a card.  
**Card 9:** Put in a card.  
**Card 10:** Put in a card.  
**Card 11:** Put in a card. Put in a closing `</div>` tag.

We can see from the above that we need to put a card in for every entry in the array. Obviously. In addition to this though, for cards 0, 4, and 8 we need to put in an opening `<div>` tag. For cards 3, 7, and 11 we need a closing `</div>` tag.

With that in mind, we can now loop over the array of cards using a `for..in` loop and create the necessary HTML. To do this we’re just going to start off with an empty string.

```JS
let html = "";
```

We’ll then enter the loop and..

1. If index == 0 or index == 4 or index == 8 add the opening `<div>`
2. Add the card. This will be the same for every card except we need to substitute the name of the animal in a couple of places - see below.
3. If index == 3 or index == 7 or index == 11 put in a closing `</div>` tag.

```JS
for(i in cardOrder) {
  if(i == 0 || i == 4 || i == 8){
    // add the opening <div> tag to the html string
  }

  // add the html for the card, substituting in the animal name from the cardOrder array when needed

  if(i == 3 || i == 7 || i ==11) {
    // add the closing </div> tag
  }
}
```

**Using Modulo**

Those `if` conditions look a bit lengthy.

```JS
if(i == 0 || i == 4 || i == 8)
```

And what if we want to expand this in the future to four rows? We'd need to go back and add yet another condition to this:

```JS
if(i == 0 || i == 4 || i == 8 || i == 12)
```

Really what we want to know here is if `i` is 0 or a whole multiple of 4. We can do that with the modulo operator - %.

For example:

```JS
let x = a % b;
```

This will work out `a` divided by `b`, and then give you the remainder.

If a is 10, and b is 5, the remainder is 0. If a is 10 and b is 4, the remainder is 2. 4 goes into 10 twice (to make 8), with 2 left over.

So, if we divide `i` by 4, we want to check if the remainder is 0. We can therefore shorten this first `if` condition to:

```JS
if(i % 4 == 0)
```

And this will work for any number of rows, as long as we always want four columns.

Similarly, the last `if` condition can be simplified:

```JS
if(i == 3 || i == 7 || i ==11)
```

We want to know when the remainder is 3. This can become:

```JS
if(i % 4 == 3)
```

**Adding the Card**

This bit is a little tricky. We already know the HTML to use for a card - we've got in in our page already:

```HTML
<div class="card--container" data-card="ANIMAL-NAME">
  <div class="card--flipper">
    <div class="side--a">
      <img src="img/cardBack.png" />
    </div>
    <div class="side--b">
      <img src="img/ANIMAL-NAME.jpg" />
    </div>
  </div>
</div>
```

We need to substitute in the name of the animal at each index in the array, and then add this as a string to our `html` variable.

Making it a string is easy, just wrap it in single quotes. All the quote marks in the HTML are double quote marks, so we can wrap the whole thing in single quotes and it'll be fine.

Substituting in the animal name is a little trickier. In the loop we've got a counter variable called `i`. We can use this to access the `cardOrder` array at each index in turn.

```js
cardOrder[i];
```

We then need to add this into the string at the relevant points. To do that, we need to end the string with a single quote, + the value from the array, then + the rest of the string.

For example, just taking the `<img>` element out of that string we'd have something like this:

```JS
'<img src="img/' + cardOrder[i] + '.jpg" />'
```

We can extrapolate this to the whole chunk of HTML for the card, and add it to our `html` variable:

```JS
html +=
  '<div class="card--container" data-card="' +
  cardOrder[i] +
  '"><div class="card--flipper"><div class="side--a"><img src="img/cardBack.png"></div><div class="side--b"><img src="img/' +
  cardOrder[i] +
  '.jpg"></div></div></div>';
```

**Putting It All Together**

All of that together, means that our bit of JavaScript for building the html necessary to place all the cards on the screen is:

```JS
let html = "";

for (i in cardOrder) {

  if (i % 4 == 0) {
    html += '<div class="cardRow">';
  }

  html +=
    '<div class="card--container" data-card="' +
    cardOrder[i] +
    '"><div class="card--flipper"><div class="side--a"><img src="img/cardBack.png"></div><div class="side--b"><img src="img/' +
    cardOrder[i] +
    '.jpg"></div></div></div>';

  if (i % 4 == 3) html += "</div>";
}

document.getElementById("game-container").innerHTML = html;
```

That last line gets a reference to an empty `<div>` on the page and puts our completed string of HTML into it.

Phew!

## Handling Clicks

Now that the cards are on the table, we need a way to respond to the user clicking on them. To do that we need to do a couple of things:

1. Get a reference to all the cards
2. Go through them one by one, and..
3. Add an event listener to each one.

To get a reference to all of them, we can use the class name. All the cards have the `card--container` class name.

We can use the document object's `querySelectorAll` to create a list of all the cards.

```JS
let cards = document.querySelectorAll(".card--container");
```

We can then use `forEach` to loop over each card, adding an event listener to each one.

```JS
cards.forEach((thisCard) => {
  thisCard.addEventListener("click", handleCardClick);
});
```

This page on MDN provides some useful guidance on `forEach`: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach>

Now it's time to write the function that will run when a card is clicked.

Here’s what we need to achieve.

- Flip the card over.
- If this is the first of a pair to be flipped, leave it flipped over and store a reference to it.
- If this is the second of a pair to be flipped, well..
  - If the cards match
    - Leave them as is
    - Remove the click event listener from them
    - Record that a pair has been found
    - If this is the last pair to be flipped, that’s the end of the game OR it's not the last pair, so get ready for another guess
  - If the cards don’t match
    - Wait a little while and then turn them both back over

You might have noticed that the JavaScript from the original CodePen example flips the card by adding and removing the `flip` class.

```JS
document.querySelector('.card--container').addEventListener('click', (evt) => {
  evt.currentTarget.classList.toggle('flip')
})
```

This code however will find the first instance of a member of the `card--container` class, and add the event listener to that. We can use the event information that's passed into our handleCardClick function to make sure we only flip the card that’s been clicked.

```JS
handleCardClick = (evt) => {
  evt.target.classList.add("flip");
}
```

Now we need a way to know if this is the first card of a pair or not. We’re going to need a global variable for this. So, up at the top of your JavaScript file create a variable and set it to null.

```JS
let firstCard = null;
```

If this is the first card we’ll store a reference to it in this variable. If it’s the second card we’ll do all the matching check stuff and set this variable back to null ready for another guess. Therefore, if this variable == null then this is the first card. If it already holds a card then this must be the second card.

In the case of this being the first card, we only need to do one thing then, we need to stash this card in the global variable.

```JS
if (firstCard == null) {
  firstCard = evt.target;
}
```

If this isn’t the first card, we need to do loads of other stuff, so stick an else on the end of that and we’ll crack on.

If this isn’t the first card, it’s the second, so now’s a good time to log that an attempt has been made. We’re going to use a global variable here again. As with the first card variable, create this at the top of your JavaScript but start it off with a value of 0. Now you just need to add 1 to it.

Now we want to see if the animal on the card just flipped matches that on the first card. You can get both using the `getAttribute()` method to get the value of that `data-card` attribute we created.

```JS
let firstAnimal = firstCard.getAttribute("data-card");
let secondAnimal = evt.target.getAttribute("data-card");
```

We’re going to go a little back to front here, and deal with what happens if they don’t match first, as that’s easier. All we need to do is wait a little bit and then flip them both back over. We can use JavaScript’s setTimeout() function to do this. It takes two parameters. The first is what to do after the delay, and the second is the length of the delay in ms.

We need to do two things after the delay. The first is to flip both cards back over. The second is to set the first card variable back to null ready for the next guess.

```JS
if (firstAnimal != secondAnimal) {

  setTimeout(function () {
    firstCard.classList.remove("flip");
    evt.target.classList.remove("flip");

    firstCard = null;
  }, 500);
}
```

This is what happens if the two animals don’t match. Stick an else on the end of that to handle the case where they do match.

If the two cards do match we need to do four things. Remembering our list from above:

1. Leave them as is
2. Remove the click event listener from them
3. Record that a pair has been found
4. If this is the last pair to be flipped, that’s the end of the game OR it's not the last pair, so get ready for another guess.

Leaving them as is is easy. We just don’t flip them back. So that’s done.

Removing the click event listener is straightforward. We use the `removeEventListener()` method.

```JS
firstCard.removeEventListener("click", handleCardClick);
evt.target.removeEventListener("click", handleCardClick);
```

Recording that a pair has been found is also quite straightforward. We’ve already used a global variable to store the number of attempts, so we’ll do the same thing to store the number of matches. Create a variable at the top of your JavaScript and set it to 0, and then just add 1 to it if it matches.

Checking if the game has now finished is also trivial. We just need to check if the number of matches is equal to the number of pairs! We'll show the Game Over screen. More on that in a sec.

There’s one more thing. If this isn’t the last pair we need to be ready for another pair to be guessed, so we need to set that first card variable back to null.

## Game Over

The game ends when all pairs have been found. The challenge is to do so in as few attempts as possible. The Game Over screen then should tell the player how many attempts they've made.

This bit is relatively simple. We'll have a bit of HTML that will completely cover the screen. When the game starts, it's opacity will be 0. When the game ends, some text will be updated with the number of attempts, and it's opacity will be set to 1.

The HTML is quite simple - a container with two items.

```html
<div id="game-over-container">
  <h1>Well Done</h1>
  <h2 id="attemptsDisplay"></h2>
</div>
```

We need bits of CSS to set this up.

```CSS
#game-over-container {
  /* Make it full screen, on top of the game */
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;

  /* We don't want it registering clicks - we want the clicks to pass through to the cards underneath. */
  pointer-events: none;

  text-align: center;
  background-color: rgba(255, 255, 255, 0.6);
  color: black;

  /* Centre the content horizontally and vertically */
  display: flex;
  flex-direction: column;
  justify-content: center;

  opacity: 0;
  transition: opacity 1s;
}
```

With it set up, we need to update it and show it when all pairs have been found.

```JS
if (matched == pairs) {
  document.getElementById("attemptsDisplay").textContent =
    "You took " + attempts + " attempts";
  document.getElementById(
    "game-over-container"
  ).style.opacity = 1;
}
```

And that’s it!!

## Going Further

Phew! There were a few bits of detail that I missed out of the code snippets throughout this, so if you’re in a fiddle, have a look at the completed code. All being well though you’ve got a working card flip game. You could take this further by extending the UI. Add a title, tell the user how many attempts and matches they’ve made as they play.

How about making it easy to have any number of cards, rather than just the six we’ve got here. It would be good if you could just include the images in the folder, and then just add the filenames to that animals array we created earlier and have the code work out everything else, namely laying the cards out in a suitable grid and knowing when the game’s finished.

You could take this further - let the user decide how many cards to use, up to a maximum.

Each of the photos used was taken from UnSplash. It would be cool if the images got some kind of overlay when paired that gave the name of the photographer and a link to their unsplash profile. The URLs are:

Gorilla - <https://unsplash.com/@jcotten>  
Orangutan - <https://unsplash.com/@darmfield>  
Rhino - <https://unsplash.com/@henniestander>  
Turtle - <https://unsplash.com/@olgatsai>  
Elephant - <https://unsplash.com/@hebertkostan>  
Leopard - <https://unsplash.com/@soberanes>

Why not go further - these animals were all chosen for their endangered status. You could include a link to further info about each animal on the WWF website - <https://www.worldwildlife.org/species/directory?direction=desc&sort=extinction_status>

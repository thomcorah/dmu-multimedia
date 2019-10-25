# A Simple Maths Game
## An introduction to JavaScript

This lab has you diving into some of the fundamentals of JavaScript by making a simple maths game. The user will be presented with a maths question and three buttons, each with a possible answer, one of which will be correct. If they get the correct answer, they’ll be taken to the next question. If they get it wrong they’re taken to a game over screen. If they get through 5 questions, they win and get taken to a ‘Well Done’ page.

### The Mechanics
In order to make this work, you’re going to need to understand variables, functions, and events. Each question will be in a new HTML file, so you’ll want to have your CSS in a separate .css file that each page links to. The game over and well done pages will also be separate HTML files.

On each question page you need to display the question, along with three buttons.

Each of these buttons will need an event listener. Two of these will point to a function that loads the game over screen. One of them will point to a function that directs them to the next question page, or the well done page if it’s the last question.

### The Steps

As ever, create a new folder for this, and open it in Atom.

#### 1.  Do the HTML for your first question page.
Start with the standard boilerplate, add the viewport meta tag. At the very least this page needs to have a `<p>` for the question and then a `<button>` for each answer.

#### 2. Create a .css file.
Link this into your html page, and make your page look good. You might want to go back to the HTML at this point to add structural elements, like wrapping the three buttons in a `<div>` so that you can put a border around them for example.

#### 3. Create your Game Over page.
Again, this can be quite simple, with just a single `<p>` containing some kind of text. Link in the .css file you’ve already got and style your page up. You need consistency with your question page, but you also need to set this page out as something bad or sad.

#### 4. Write your application logic.
Back in your question page, put in a `<script>` element and write the JavaScript that will respond to the button press. Whichever button they press, you’ll need to send them to another URL. You’ll have to search for a way to do this with JavaScript.

#### 5. Copy your question page four times.
Give each a different filename, a different question, and order the buttons differently. Otherwise it’s pretty much the same.

#### 6. Create your Well Done page.
If the user gets to the fifth question and gets that question correct, they should be taken to the Well Done page. As with the Game Over page, link in your .css file and style up the page.

#### 7. Test it
If it all works, you’re done.

### Going Further
If you want to take it further there are a number of things you can do, but you’re going to have to do some searching find out how.

How about keeping track of their score somehow. You can then display this on the Game Over page if they don’t make it to the end. You could use url variables or browser cookies for this.

Either that or you could do everything on the same page:
 * You'll could store all the questions in a js object
 * You could have your individual html pages and load them in with AJAX when required

For something a little less heavy, you could add a timer to each page, giving a limit on how long the player can take to work out the answer. You’d have to display the countdown on the page, and then tell them the timer’s run out before going to the Game Over screen.  

What about some element of the style changing for each question?  

For something very heavy, how about randomising the order of the questions. The difficulty with this is making sure the same question doesn’t come up twice, so you'd need to maintain a list (an array) of asked questions (or unasked) that you check against when deciding which one should come next. The beauty of this is that you could have a bank of 20 questions from which you draw five, making for a different experience each time.  

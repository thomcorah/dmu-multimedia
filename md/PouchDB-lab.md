## Storing Data With Pouch DB

This task will have you creating a simple system to save data between sessions. To create and manage that data store we’re going to use PouchDB, an open source JavaScript database manager. PouchDB saves its data to local storage for persistence between sessions, and can optionally sync to a server-based database. This means that it saves its data in the browser. If you load the same site on a different computer, or even a different browser on the same computer, it will have its own instance of the database. This is quite limiting, but makes it simpler to explore the basics of using a database.

Using this we’re going to create a system for saving details of pizzas. Each pizza will have a name, a price, and a list of toppings. You might think of each document therefore as having the following structure:

```JS
{
  name: 'string',
  price: float,
  toppings: ['string', 'string', 'string']
}
```

You can see a finished example of this here: <https://thomcorah.github.io/dmu-multimedia/resources/pizzas.html>

Be sure to inspect the code if you get stuck.

## Functionality

Our system should allow the user to add the details of a pizza to the database using a form. For the purposes of simplicity we’ll assume that any pizza can have a maximum of three toppings. That’ll just make the form easier.

It should then also list the details of all pizzas.

We could go further than this, as we’ll discuss at the end.

## Creating your UI

The first thing to do is to get your project folder created and an HTML page made. Straightforward enough.

The UI needs to have two parts. One will be the form for adding a new pizza. The other will list all the pizzas in the database. You don’t need to worry about styling if you don’t want, we’re more concerned about the mechanics.

We need a form. We can create a form easily enough with HTML using the `<form>` element. We then populate the element with inputs. The kind of things you can put in a form include single line text input boxes, drop down selectors, multi-line text input, checkboxes and radio buttons. We just need the first one, single line text input boxes.

To create many of these types of input, we use the `<input>` element. We can then use its 'type' attribute to determine what kind of input it is. For a single line text box, we want the 'text' type. You can find a list of all the different types on the w3schools website -> <http://www.w3schools.com/html/html_form_input_types.asp>

```HTML
<input type="text" id="name" />
```

We also want to provide text labels for these boxes so the user knows what to enter in each one. We could just use `<p>` elements, but the `<label>` element provides a bit more context and meaning to robots and screen-readers.

We need to make sure each of those `<input>` elements has an id so that we can reference each with JavaScript in order to pull out the value.

We will also need a button on our form. We can achieve this with the `<button>` element. What you’ll end up with is something like this:

```html
<form>
  <label for="name">
    Name
    <input type="text" id="name" />
  </label>
  <label for="price">
    Price
    <input type="number" id="price" />
  </label>
  <label for="toppings">
    Toppings
    <input type="text" id="topping1" />
    <input type="text" id="topping2" />
    <input type="text" id="topping3" />
  </label>
  <button id="addPizzaButton">Add Pizza!</button>
</form>
```

Resulting in a webpage something like this:

![Screenshot of the pizza store](https://thomcorah.github.io/dmu-mutlimedia/resources/img/pizzaStore1.png)

We also need somewhere to list the pizzas. For this, we'll use a `<table>` element underneath the form. You could put a heading in if you like.

`<table>` elements are used for displaying a table of data. The can contain quite a range of other elements to describe that data. We want a single header row, and then a body to contain a row for each pizza.

So, inside the `<table>` element, create a `<thead>` element. This will contain each of the header cells. You should then use a `<th>` element for each heading:

| Name | Price | Topping 1 | Topping 2 | Topping 3 |
| ---- | ----- | --------- | --------- | --------- |


You'll also need a `<tbody>` element that we'll stuff with rows of pizzas using JavaScript.

Oh, and give the `<table>` an id so you can refer to it from your JS later.

Your `<table>` should look something like this:

```html
<table id="listOfPizzas">
  <thead>
    <th>Name</th>
    <th>Price</th>
    <th>Topping 1</th>
    <th>Topping 2</th>
    <th>Topping 3</th>
  </thead>
  <tbody></tbody>
</table>
```

That’ll do for the UI for now. Let’s take a look at how to do something with this.

## Installing PouchDB

PouchDB is a fully JavaScript database manager, so installing it is just a case of including its single JavaScript file. You can either download this and host it locally, or link to the version on their CDN. You can find details of both options, and all about PouchDB on their website

<https://pouchdb.com>

Once you’ve included the code, you need to create an instance of PouchDB to work with in JavaScript. So, either in a separate .js file or in a `<script>` element, create a new PouchDB instance and assign it to a variable. When you do this, you need to give PouchDB the name of the database. If the database already exists, it’ll just return that one to you.

```JS
let db = new PouchDB("pizzas");
```

## Saving the Pizza

Now that you’ve got your form set up, and PouchDB installed and ready to use, it’s time to bring the two together.

The first thing you’ll need to do is to be able to react to a click on that button, so add an event listener to it. That should be fine by now.

Within the function that gets run as a result of that event listener, we need to put together a new document based on the contents of the form, and then put this into the database. We create a document as a JavaScript object, and we’re not limited to just strings as the values. We can include arrays, numbers, even other documents.

The one rule here is that you need to include a unique \_id field. It might make sense to use the current date and time at the point the record is created, to ensure that they are both unique, and ordered by creation time.

You’ll end up with something like this:

```JS
let newPizza = {
  _id: new Date().toISOString(),
  name: document.getElementById("name").value,
  price: document.getElementById("price").value,
  toppings: [
    document.getElementById("topping1").value,
    document.getElementById("topping2").value,
    document.getElementById("topping3").value,
  ],
};
```

We then need to add this to our database. This is really straightforward. We just use the `put()` method that PouchDB provides, passing in this new object.

```JS
db.put(newPizza);
```

Note here that `db` is what we called the variable that holds reference to the database earlier on.

And that’s it. You can use the web inspector to check that this has worked and your pizza has in fact been saved.

## Getting Data Out

We also want to be able to retrieve data from our database. PouchDB provides us with a method to get everything out of a database:

```JS
db.allDocs();
```

This method takes two parameters:

1. An options object.
2. A function to run when it's got results

By default, PouchDB will give us a list of all the documents in the database, but won't give us the objects themselves. We can use an option to get the documents along with the listing for each. We can also get them in descending order so that we get the newest pizza first.

For the second parameter, we'll provide the name of a function we're yet to write.

```Js
db.allDocs({ include_docs: true, descending: true }, showPizzas);
```

But when do we want to run this? Well, ideally any time the contents of the database changes. To do this, we need to do two things:

1. Pop it in a function
2. Use PouchDB's `changes` method.

This first is easy.

```JS
loadPizzas = () => {
  db.allDocs({ include_docs: true, descending: true }, showPizzas);
};
```

For the second bit, just include the following JS underneath all your functions:

```JS
db.changes({
  since: "now",
  live: true,
}).on("change", loadPizzas);
```

Now it's time to write that `showPizzas()` function. This function will be given two things by PouchDB - details of any error, and the results if successful.

```JS
showPizzas = (err, doc) => {

}
```

That `doc` object will have the results in if there wasn't an error. If you log the object the console and dig in, you'll see that the actual records are in a `rows` property, so it's `doc.rows` that we're interested in.

So, we want to loop over each entry in that `rows` array:

```JS
showPizzas = (err, doc) => {
  doc.rows.forEach( row => {
    // we get each row here
  })
}
```

Within each row, the actual document is contained within a `doc` property.

```JS
showPizzas = (err, doc) => {
  doc.rows.forEach( row => {
    let thisPizza = row.doc;
  })
}
```

Now we can do something with it. What we're going to do is build up a HTML string of table rows, and then insert that into the `<tbody>` element. We need to create the empty string before the loop starts, and then add to it with the appropriate HTML and data from the pizza object with each loop.

Once we've finished looping, we can insert the string into the `<tbody>` element by setting its `innerHTML` property.

```JS
showPizzas = (err, doc) => {
  let tableRows = "";
  doc.rows.forEach((row) => {
    let thisPizza = row.doc;
    tableRows +=
      "<tr><td>" +
      thisPizza.name +
      "</td><td>" +
      thisPizza.price +
      "</td><td>" +
      thisPizza.toppings[0] +
      "</td><td>" +
      thisPizza.toppings[1] +
      "</td><td>" +
      thisPizza.toppings[2] +
      "</td></tr>";
  });
  document.querySelector("#listOfPizzas tbody").innerHTML = tableRows;
};
```

## Going Further

This is simple example of saving and viewing documents. You could however go further in a number of ways.

You could allow the user to search for a particular pizza by name or topping. Or delete a pizza, or edit an existing pizza.

And of course, you could just make the whole thing look a lot better :)

## Conclusion

What we’ve seen here really only scratches the surface of databases, but it’s useful to get a handle on the issues to do with client-side and server-side data storage. There are pros and cons to each and being able to quickly spin up a database in either situation can be rather useful.

# Making a Weather App

Your task in this lab is to draw on three separate API and combine their outputs into something usable.

This is a simple web app that finds out a visitor’s location based on their IP address and then displays the weather and an image for that location.

To do that we’re going to use three different free API.

**ipinfo.io** This can give us the latitude and longitude of a user based in their IP.  
**openweathermap.org** We’ll use Open Weather Map to find out the weather given the location.  
**flickr.com** Flickr have a very rich database of user-submitted photos that we can query by location and tags.

You can see a fully completed version of this here: <https://thomcorah.github.io/dmu-multimedia/resources/WeatherApp/weather.html>

## jQuery

We're going to make use of a third-party JavaScript library to handle calls to these services - jQuery.

To include it, head to <https://jquery.com>, and click the big Download jQuery button.

Scroll down to the section called Other CDNs, and click on Google CDN. This will give you a list of versions of jQuery, and a `<script>` element to use for each one. Use the one for version 3. This should be pasted into your HTML page, before the closing `</body>` tag. Your own script will go in another `<script>` element after the jQuery insert, but before the closing `</body>` tag.

```html
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
      // Your JavaScript
    </script>
  </body>
</html>
```

The way that jQuery works may look a little odd to you. The jQuery library contains lots of functions. They are all accessed through a master jQuery object, \$.

For example, jQuery has a getJSON function. To access it, you would use:

```js
$.getJSON();
```

## Setting up the Interface

![Weather App Screenshot](https://thomcorah.github.io/dmu-multimedia/resources/img/weatherApp.png)

Before we get into the mechanics, we need to set up our page. This is pretty straightforward, as you can see from the screenshot above.

The image is popped in as a background image to the <body> element. However, we’re going to want to apply some styling to the body element to get rid of its margin/padding, and make sure it sizes the background image properly. We also need to set the height of the <body> to 100% so that it stretches the full height of the window. We can also set up our fonts here so that they cascade down to the other elements. Something like this should suffice.

```css
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  font-size: 2em;
  color: #fff;
  background: #888;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
```

We need somewhere to pop the name of the location and the weather information. We can do this with a `<h1>` for the name of the location, and `<p>`s and `<span>`s for the weather information. We might as well wrap all of these in a `<section>` and pop something in there to show users while we wait for the data to load. Make sure to give each of these elements an id so that we can refer to them later from the JavaScript.

```html
<section>
  <h1 id="city">Weather Where You Are</h1>
  <p><span id="temperature"></span> <span id="weather">by Thom Corah</span></p>
</section>
```

We’re also nice web citizens so we want to give credit to our data sources. We’ve done this in a `<footer>` element. We should probably also put something in here that links back to the image we get on Flickr, although I’ve not done that here. Whoops.

```HTML
<footer>
  <p>
    Powered by <a href="http://flickr.com/services/api">Flickr</a> and
    <a href="http://openweathermap.org">Open Weather Map</a>.
  </p>
</footer>
```

We want this footer to appear right at the bottom of the page, so we need to use a little css here. We’ve also set the font size to be smaller than the rest.

```CSS
footer {
  position: absolute;
  bottom: 0;
  font-size: 0.5em;
}
```

That’s our interface all set up, now it’s on to fetching the data.

## The Order of Things

The order that we fetch this data in is important, as we need the data from one to inform the next.

First up, we’ll **find out the user’s location** using the ipinfo.io API.

Armed with the latitude and longitude from this API call, we can then use Open Weather Map to **get the weather** at that location.

By this point we’ll know the location and the weather, so we can go ahead and ask Flickr for a **photo near that location that’s tagged with the same weather**.

## Getting Location

This is the easiest bit. ipinfo doesn’t require you to create an account or provide an API key. You also don’t need to send them any info as they’ll pick up the IP address in the API request, and this is all they need.

All we need to do therefore is pull in data from their URL - https://ipinfo.io. ipinfo.io responds with JSON formatted data, so we can use jQuery’s getJSON method to do this and the result will be automatically parsed into a JavaScript object for us to use.

```js
$.getJSON("https://ipinfo.io", function (data) {
  console.log(data);
});
```

From the log of the data you can see what information we’re getting back. There’s the name of the city there, but the latitude and longitude are wrapped up as a comma delimited list as the ‘loc’ property. We need to break this up into latitude and longitude to be able to use it.

We can use the split() string method to do this, giving us an array of two items. The first will be the latitude and the second the longitude.

```js
var location = data.loc.split(",");
```

You're going to create a function that will get the weather based on the location info. The final thing to do here then is to call that function and pass in the location data - latitude, longitude, city name. Your finished code to get the location should look something like this, where `getWeather` is the function you'll create:

```js
$.getJSON("https://ipinfo.io", function (data) {
  console.log(data);
  var location = data.loc.split(",");
  getWeather(location[0], location[1], data.city);
});
```

## Getting the Weather

Now we know where the user is, we can find out the weather. In order to use Open Weather Map you’ll need to sign up for a free account and get an API key. Head over to openweathermap.org to do so. You’ll also find their API documentation there. You’ll see there’s a good deal more you can do there than just get the current weather. You can also get up to 16 day forecasts as well as historical data.

Create a function called getWeather that will contain the code to, well, get the weather.

We need to send a GET request to the Open Weather Map API. The URL for this is:

http://api.openweathermap.org/data/2.5/weather

You will need to send this request with a few parameters.

**APPID:** This is your API key. The API will refuse your request without this.
**lat:** This is the longitude you got earlier.
**lon:** This is the longitude you got earlier.
**units:** Open Weather Map supplies temperatures in Kelvin by default, but we want centigrade.

We can construct this request using the jQuery ajax() method, which uses the GET method by default. You'll have a request that will look something like this, inside the getWeather function.

```js
$.ajax({
  url: "https://api.openweathermap.org/data/2.5/weather",
  data: {
    lat: lat,
    lon: lon,
    APPID: "faa5f3cbac49209a59c3a86dfeb48128",
    units: "metric",
  },
  success: function onSuccess(result) {
    // handle the result
  },
  error: function onError(error) {
    // handle any errors
  },
});
```

The success parameter here specifies what to do when the data is received. There is also an error method to catch any errors, perhaps to be able to report back to the user. Note that functions specified as object methods (as here) have to use the `function` keyword syntax, you can't use => arrow functions here.

Anyhow, in this success function you can update the text components of your interface by pulling data out of the object that’s returned.

If you log the returned object to the console you’ll see that it’s got quite a lot of data in it, so you’ll have to dig into it a bit to get what you want. You can see that the temperature is at main.temp. A nice description of the weather however is a little trickier. It’s inside the weather object, but this object contains an array of just one item. Inside that item we then have the main property, with the value ‘Clouds’. This should do nicely. In order to get to it we need to dig in like so: weather[0].main.

All of this comes within the result object, so your success function should look something like this.

```js
success: function onSuccess(result) {
  $("#city").html(city);
  $("#temperature").html(result.main.temp + "&deg");
  $("#weather").html(result.weather[0].main);
},
```

Once you've logged the info to the screen, it's time to go get a photo. You're going to create a function called getPhoto that will accept three arguments - latitude, longitude, and weather.

```js
success: function onSuccess(result) {
  $("#city").html(city);
  $("#temperature").html(result.main.temp + "&deg");
  $("#weather").html(result.weather[0].main);

  getPhoto(lat, lon, result.weather[0].main);
},
```

## Getting a Photo

So far, so good. We know where we are, what the weather’s like, and we've told the user all of that. Now we need to finish it off with a nice photo that brings all of that together. For this we’re going to use Flickr’s API, which is extensive. As with Open Weather Map you’ll need an account with them in order to get an API key, so head to https://www.flickr.com/services/api/ and sign up.

You’ll also find all the API documentation here so you might want to have a look at all the things you can do. For much of this, like posting photos, your user will have to tell Flickr to give your web app permission to do stuff on its behalf. For this, it uses the OAuth authentication system. However, for our purposes, we don’t need this, just the API key.

Getting photos out of the Flickr API starts off much like getting weather from Open Weather Map. We send a GET request to the Flickr URL, so again, we can use jQuery’s ajax() method. We want to use REST for our requests and responses, so we need to specify this in the url, giving us https://api.flickr.com/services/rest/.

We also need to send Flickr some further parameters.

**method:** As there’s so much Flickr can do, we need to tell it what we’re after. In this case we want to search the photos, so we use flickr.photos.search. All the method names are formatted in this way.
**api_key:** This is your API key.
**format:** By default, Flickr will send us back XML, which is a bit annoying, so we want to switch to JSON.
**extras:** You can tell Flickr what information you want beyond the basics. By default, the URL to an image isn’t included in the response so we have to ask for this specifically. There are a range of sizes available, but we just want a large image.
**lat:** This is the latitude.
**lon:** This is the longitude.
**tags:** We can specify whatever tags we want to search for. We can just use the weather descriptor we got earlier.

When searching for an image based on latitude and longitude, Flickr will automatically search for images within a 5km radius of that position. We can change the radius (up to 32km) with the radius property.

By default, Flickr will give us results 100 at a time. We only want one though, so we could also specify this using the per_page property.

Create a function called getPhoto that can accept three arguments - latitude, longitude, weather. Add this ajax call inside it.

```js
$.ajax({
  url: "https://api.flickr.com/services/rest/",
  data: {
    method: "flickr.photos.search",
    api_key: "YOUR-API-KEY",
    format: "json",
    extras: "url_l",
    lat: lat,
    lon: lon,
    tags: weather,
    per_page: 1,
    has_geo: 1,
    radius: 20,
  },
  success: function onSuccess(result) {
    // handle the result
  },
});
```

What Flickr sends back is quite interesting. If you log it you’ll see that it’s not quite JSON. There is a load of JSON there, but it’s wrapped in what looks like a call to a function called jsonFlickrApi(). Yup, that’s how Flickr works, it sends back a function call with the JSON as a parameter. This means we need to do two things.

1. Create function called jsonFlickrApi that can handle the JSON.
2. Insert what Flickr has given us into a `<script>` element so that it will run, calling the function and passing in the data.

We’ll come to number one shortly. On number two, this might seem a bit odd, but the solution is quite straightforward. We’re going to inject this bit of JavaScript into an otherwise empty `<script>` element. You should create an empty `<script>` element and give it an id.

```html
<script id="runFlickrScript"></script>
```

We can then use jQuery to insert the result into it.

```js
success: function onSuccess(result) {
  $("#runFlickrScript").html(result);
},
```

As soon as the result is injected into the `<script>` element, it will be evaluated and run.

So, back to point 1. Create your jsonFlickrApi function and log out what comes in.

```js
jsonFlickrApi = (data) => {
  console.log("DATA", data);
};
```

You’ll see that as with the data we got from Open Weather Map, we’ve got a little digging to do. Inside the object we’ve got a photos object, inside which is a photo array. The first item in here is the photo we want, and comes with lots of information, including the url_l property we asked for to get the URL of the large form of the image.

This is what we’re after. We want to set the background-image property of the `<body>` element to this URL. Again, we can use jQuery to do this with the css() method.

```js
jsonFlickrApi = (data) => {
  console.log("DATA", data);
  $("body").css("background-image", "url(" + data.photos.photo[0].url_l + ")");
};
```

Notice here that we can’t just supply the URL as the parameter for the background image, we need to wrap it up in the url() identifier as this is CSS we’re dealing with.

And with that, we’re done!

## Conclusion

This was a pretty full-on exploration of APIs. Hopefully it all made sense and you worked out any kinks. However, you’ve likely ended up with some messy code. Take some time to tidy it up and really understand what’s going on. One thing to look out for is the possibility here of embedding sequential async operations inside each other. A flatter code base is preferable, so if you’ve got ajax calls nested inside ajax calls think about pulling these out into functions.

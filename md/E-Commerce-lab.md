# E-Commerce

In this lab we're going to make an online t-shirt shop. Here's what it's going to do/be:

- list three different t-shirt designs
- let the user add them to a cart
- display the cart
- allow the user to select the size they want
- proceed to checkout
- let the user checkout, with dummy card details, and get an email confirmation

You can see a completed example here: <https://thomcorah.github.io/dmu-multimedia/resources/tshirt-shop/>

![TShirt Shop Screenshot](https://thomcorah.github.io/dmu-multimedia/resources/img/tshirt-shop-screenshot.png)

That might sound like rather a lot, and a bit tricky! Get a working cart that can take card details and email a confirmation?! Well, the good news is that we're going to use a third-party e-commerce provider that does the heavy lifting for us.

For any e-commerce site, we'd need a third party to process card payments anyway, so there are plenty that do that and handle much of the technical side for us. You could use Shopify, Paypal, Braintree, WooCommerce, or likely many many others. We're going to use Snipcart because it's pretty straightforward, works well, and is free in test mode.

You can find them here: <https://snipcart.com>

They've got a good series of guides on getting started, all available here: <https://docs.snipcart.com/v3/>

You might want to refer to the relevant sections of the documentation as you progress through making the tshirt shop.

## Resources

You'll need some images of the tshirts you're going to sell. You'll find three jpgs here: <https://thomcorah.github.io/dmu-multimedia/resources/tshirt-shop/img.zip>

If you want to make your own t-shirt designs, these were produced using a free t-shirt mockup from Graphic Burger. <https://graphicburger.com/v-neck-t-shirt-mockup-psd/>

## UI

The page is quite straightforward here. There's a header, and then three rows - one for each tshirt.

Each row is a flex container, with the image on the left, and the details on the right.

Inspect the code in the example to see what I've done, but feel free to go your own way.

## Adding the E-Commerce

There are three parts to this:

1. Add Snipcart to our page
2. Add a 'Buy' button to each product
3. Add a cart button, so users can access the cart and progress to checkout.

### 1. Add Snipcart to our page

You'll first need to create an account with Snipcart - it's free. You can do so here: <https://app.snipcart.com/register>

Next, you'll need to include some files from Snipcart - their CSS for styling the cart and checkout process, and their JavaScript file.

These bits need to go in the `<head>` section of your page.

```HTML
<link rel="preconnect" href="https://app.snipcart.com">
<link rel="preconnect" href="https://cdn.snipcart.com">
<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.28/default/snipcart.css" />
```

You'll then need to include their JavaScript bits just before your closing `</body>` tag:

```HTML
<script async src="https://cdn.snipcart.com/themes/v3.0.28/default/snipcart.js"></script>
<div hidden id="snipcart" data-api-key="YOUR_PUBLIC_API_KEY"></div>
```

Notice that you need to insert `YOUR_PUBLIC_API_KEY` in there - you need to get this from your Snipcart dashboard. In the top right corner there's a little person button - click that to open your account menu. Click that, and way down the menu that opens you'll see 'API KEYS'. Click that.

![Snipcart screenshot](https://thomcorah.github.io/dmu-multimedia/resources/img/Snipcart-screenshot.png)

On the page that comes up you'll see a long code. This is your API Key. Copy this and paste it into your code in place of `YOUR_PUBLIC_API_KEY`.

There are two other settings to, well, set.

First off, we need to tell Snipcart the web address of where sales requests are going to come from. This means you'll need to host this somewhere on the web for it to work, such as your GitHub account.

So, in that long menu, go to DOMAINS & URLS. In there is your default domain. Put your GitHub domain into the box. This is username.github.io. For me, that's thomcorah.github.io

Next up, we can change the currency from the default \$ to £. In that long menu, go to REGIONAL SETTINGS. Select GBP from the dropdown list, and replace the currency symbol in the text box with a £.

![Snipcart screenshot](https://thomcorah.github.io/dmu-multimedia/resources/img/Snipcart-screenshot-2.png)

### 2. Add a 'Buy' button to each product

Snipcart works by having you create a button, and then adding the details of the product to it using specific attributes. At the very least, you need to provide:

- Name
- Price
- Id - unique for each
- URL

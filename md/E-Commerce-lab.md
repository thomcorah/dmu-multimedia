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
- Id - unique for each product, but set by you
- URL - the url of where this button is

There's an important point here on security. As all this stuff is just included as attributes in the button, it would be trivial for somebody to open up the DevTools and manually change the price to something tiny, before clicking the button. Snipcart protects against this. When the user proceeds to checkout, the details of the transaction are sent to Snipcart, including that URL you provided. Snipcart will make sure the URL is in your list of allowed Domains that you set in step 1. If it isn't, the transaction is blocked. If it is, it'll then send a request to the URL, look for the button that comes back, and check the price given. If this price doesn't match the one with the transaction, it'll get blocked.

Back to this URL attribute, you can likely just put `/` in there, which means the page the button is on.

You should also really include the URL of an image to display in the cart and a short description of the product.

In order to provide these details, you need to use attribute names specified by Snipcart. These are given in the table below.

| Name        | Description                                                                                                               | Attribute             | Type   | Required |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------ | -------- |
| Name        | Product's name                                                                                                            | data-item-name        | string | true     |
| Id          | Product's unique Id                                                                                                       | data-item-id          | string | true     |
| Price       | Product's price. You must use a . as decimal separator.                                                                   | data-item-price       | number | true     |
| URL         | Product's URL. Must be where the buy button is located. This will be used by our crawler when validating order integrity. | data-item-url         | string | true     |
| Description | Product's description.                                                                                                    | data-item-description | string | false    |
| Image       | Product's image URL. Avoid linking to a large image; try to use an optimized one.                                         | data-item-image       | string | false    |

We also need to include the `snipcart-add-item` class name. So, for one of our tshirts, we might include a `<button>` like this:

```html
<button
  class="snipcart-add-item"
  data-item-id="design2"
  data-item-price="12.00"
  data-item-url="/"
  data-item-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  data-item-image="./img/design2.jpg"
  data-item-name="Boxing"
></button>
```

Do this. Add a button to one of your products, and then open the page in Chrome and see if it works. When it's clicked, the cart should open.

If that's working, add buttons to all your products.

### 3. Add a cart button, so users can access the cart and progress to checkout.

If a user returns to shopping after adding an item to their cart, we need them to be able to open the cart again to proceed to checkout. For that, we need a cart button. Ideally, one that also tells them the value of products in the cart and the number of items. We can do that by applying the `snipcart-checkout` class to an element.

```HTML
<button class="snipcart-checkout">Click here to checkout</button>
```

We can also insert the number of products, and total value of the cart using elements with class names:

```HTML
<span class="snipcart-items-count"></span>
<span class="snipcart-total-price"></span>
```

### 4. Style those buttons

As a final step, those buttons will likely be the browser default ones. You can restyle them though so that they fit in better with your site. This might be as simple as setting the border to `none`, giving them a `background-color`, and some `padding`.

### 5. Going Further

If you've got this far, you've got a basic store. Snipcart gives you a few more options for your products though. One of those is the ability to provide purchase options for a product to the user. For example, we might want our shoppers to be able to select the size of tshirt they would like. We can do this by adding some more attributes to the buy button. We can even set different prices for different variants of the product. We can take customisation options, provide details like dimensions and weight, and more. We can also sell digital items.

Take a look through the documentation on products to see what's possible: <https://docs.snipcart.com/v3/setup/products>

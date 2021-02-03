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

If you want to your own t-shirt designs, these were produced using a free t-shirt mockup from Graphic Burger. <https://graphicburger.com/v-neck-t-shirt-mockup-psd/>

## UI

The page is quite straightforward here. There's a header, and then three rows - one for each tshirt.

Each row is a flex container, with the image on the left, and the details on the right.

Inspect the code

And that's it.

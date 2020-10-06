# Lists and headings, and an intro to style

This week's lab is going to build on the simple page you put together last week.

You're going to do three things:

1. Add a list to your page
2. Add subheadings
3. Change its appearance with some basic styling

First though, duplicate the html file you created for week 1 to use that as a start point.

## 1. Add a List

Lists in HTML come in two flavours, ordered and unordered. Ordered lists are numbered (or lettered) and created using an `<ol>` element. Unordered lists are bulleted lists and created with a `<ul>` element.

Add an ordered list to your page that lists the top three reasons dogs have decided to work for the bank.

By default, ordered lists are numbered, but they can also have letters or Roman numerals (in upper and lowercase).

Have a look at entry on W3Schools for the `<ul>` element: <https://www.w3schools.com/tags/tag_ol.asp>

Can you change your list to use Roman numerals instead?

## 2. Add Subheadings

You've now got a some content building up on this page, getting to the point where subheadings would be useful for the reader. Subheadings help to add structure to your page.

The list you just created for example could do with a subheading. So far, you've just got the main heading at the top with the `<h1>` element. A subheading for this list should therefore use a `<h2>` element.

Use a `<h2>` to add a subheading to the list.

HTML provides six levels of heading, from `<h1>` to `<h6>`.

Let's add some more content to see more of how headings work.

Copy the following content after your list.

> **Businesses Suited to Animal Employees**
>
> Many businesses could benefit from embracing our feathered and furry friends in the workplace.
>
> **Cafes**
>
> Perhaps you've been to a cat cafe already? Relax with a coffee and be soothed by the elegant slow dance and soft purring of some feline friends.
>
> **Hospitals**
>
> Hospitals often have a need to move small things like sample tubes and paperwork to other parts of the hospital quickly, often along long narrow corridors. Parrots would be perfectly suited to this role, and would also help brighten things up, adding a little cheer for those enjoying a temporary stay.
>
> **Window Cleaning**
>
> If window cleaners used Pelicans to hold their water, instead of carrying a bucket up a ladder, it's estimated that 356 window cleaning injuries a year could be avoided. They're also good company on a lunch break.

The bold items are headings. Mark them up with suitable headings tags. Hint: this should use both `<h2>` and `<h3>` elements.

## Changing Appearance

So far we've looked at HTML. HTML describes the content and structure of a webpage. However, it does nothing to tell the browser how any of it should look. The browser makes some decisions based on what the content is, such as making headings bigger, but this is pretty basic.

If we want to change the appearance of our webpage, we need to use CSS. This stands for Cascading Style Sheets, which we'll get to in a future lab. For now, there are two key things you need to know:

1. We use rules to affect appearance, in the format `rule-name: rule-value;`
2. We can apply these rules using the `style` attribute of the element we want to apply them to.

You can find more on using the `style` attribute of an element here: <https://thomcorah.github.io/dmu-multimedia/lab-reader.html?Inline-Style-talk.md>

You can find a list of all the style rules available on the W3Schools website here: https://www.w3schools.com/cssref/default.asp

Armed with this, make some changes to the way your website looks. Think in the first instance about font, text colour, and background colour. Have a scroll through that list on W3Schools and see if anything else sounds interesting. Play around, see what happens.

## Finally

And that's it for this week. Save your work, upload to GitHub, make sure it works on a mobile.

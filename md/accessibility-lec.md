# Accessibility

---

> The power of the web is in its universality. Access by everyone regardless of disability is an essential aspect.

Tim Berners-Lee (1977): [Web Accessibility Initiative announcement](https://www.w3.org/Press/IPO-announce)


> Whatever your needs or preferences, there's almost certainly a way to access the web. **Theoretically**.  
>  
> In reality, **the web is a mess** ... accessibility options tend to be forgotten or stripped away, ... though accessible websites and apps can ... still be beautiful, innovative...user-friendly.  
>  
> **This is a human rights issue**. Disabled people need these options in order to access the web.  

Mischa Andrews: [The Inaccessible Web](https://uxdesign.cc/the-inaccessible-web-how-we-got-into-this-mess-7cd3460b8e32)


> The duty to make reasonable adjustments requires providers to ensure disabled people can access services. Service providers should anticipate the needs of
potential disabled customers”

Adapted from [Disabled access to websites under UK law](https://www.pinsentmasons.com/out-law/guides/disabled-access-to-websites-under-uk-law)

The Disability Equality Act (2010) is law — you could be sued for discrimination if your website fails to meet accessibility standards.

---

## What is Accessibility?

Websites, tools, and technologies are designed and developed so that people with disabilities can use them.  

More specifically, people can:

* perceive, understand, navigate, and interact with the Web
* contribute to the web


## What disabilities?

All of them, including...

* **Auditory**
* **Cognitive**
* Physical
* Speech
* **Visual**


## Auditory

The web is increasingly audible  

Videos should have captions and transcripts  

Audio only content should have a transcript


## Cognitive

There are a broad range of cognitive disabilities.

An individual with a cognitive disability might have problems with:

* Memory
* Problem-solving
* Attention
* Reading, linguistic, and verbal comprehension
* Math comprehension
* Visual comprehension


## Visual

People with visual disability are blind or partially sighted.  

This is what we most often think of with web accessibility.

But, this also includes colour blindness.


## Lack of vision

Screen reading software is used to access the web.

It reads the screen aloud, allowing the user to navigate the content in various ways.

Users interact using the keyboard.  


## Screen Reader Limits

* Screen readers can't understand images, so we must provide a descriptions.
* They can't survey a whole page's visual layout to understand what's important and what isn't.

---

# What can we do?

* Make content easy to understand
* Keep page layout clear and uncluttered
* Provide images to illustrate points
* Make user interfaces easy and obvious
* Use a range of media
* Good navigation helps accessibility

---

# Some practical guidance

---

## Create Structured HTML

If elements belong together, put them together.

```html
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" >
  <figcaption>Trulli, Puglia, Italy.</figcaption>
</figure>
```
```html
<section>
  <h1>Appearance</h1>
  <p>Cockapoos often appear silly.</p>
</section>
```

---

## The Alt Attribute

The `alt` attribute provides a short description of the image.

Use the `alt` attribute for **every** image.

```html
<img src='img/dogWork.jpg' alt='Dog in glasses typing' />
```


## Images as links

If you have an image as a link, it **MUST** have content in the `alt` attribute.

Without, a screenreader will read the url or some other nonsense.

---

## Semantic Elements

Most HTML elements have meaning.

`<p>` = a paragraph  
`<h1>` = a heading  
`<blockquote>` = a blockquote  

These elements result in some default browser styling.


There are some elements that exist just for the meaning.

`<nav>` = a block of navigation, links to other pages for example.  
`<article>` = a fully complete self-enclosed piece of work, like an article in a magazine.  
`<section>` = a self contained part of a larger whole, like a chapter in a book.  
`<header>` = one or more elements that form a header for either a page, article, or section.  
`<footer>` = one of more elements that form a footer for either a page, article, or section.  
`<aside>` = holds tangentially related information.

---

## Validate your HTML

Make sure your html adheres to standards by validating it.

Visit <https://validator.w3.org> and enter the url of your page.

Another good reason to work in your `public_html` folder.

---

# Recap

* Accessibility on the web is vitally important
* Think about it and implement it from the start
* Provide meaningful `alt` attributes
* Use HTML semantic elements
* Make sure your html is well structured

---

# Further Reading

<div style='text-align: left; font-size: 80%'>

**WebAIM**   
<https://webaim.org/>  

**The Inaccessible Web**  
<https://uxdesign.cc/the-inaccessible-web-how-we-got-into-this-mess-7cd3460b8e32>  

**Web Accessibility Initiative**  
<https://www.w3.org/WAI/>  

**Accessible Rich Internet Applications**  
<https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA>  

**How to use ARIA effectively with HTML5**  
<https://www.sitepoint.com/how-to-use-aria-effectively-with-html5/>  

</div>

---

# Thank You

# What is HTML?

HTML is the language of the web, used to write web pages. But what does it do and how do we write it?

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=8354f78b-9289-402e-968f-ac3d010d215c&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Webpages Have Contents

Look at any webpage and it'll likely have a variety of different types of content. There might be headings, paragraphs, images, audio, video, lists, or figures.

When we create a webpage, we need a way to be able to include this content, and to tell the browser what kind of content it is. The browser needs to know that something is a heading for example, because then it knows that it's an important marker in the document, and should probably be displayed larger than the paragraph text.

## Describing Content

Including the content is easy, well, for text at least. We can just write it. But we also need to describe it, to tell the browser what kind of text it is - is this a heading or a paragraph for example.

To do that we need to tell the browser three things.

1. What is it
2. Where does it start
3. Where does it end

This is where tags come in. Let's imagine we want to include the following text in our webpage as a heading

```HTML
What is HTML?
```

Tags usually come in pairs. One tells the browser where the heading starts, and one tells it where it ends. Let's look at the opening tag first.

```HTML
<h1>What is HTML?
```

Not only does this tell the browser where the heading starts, but it tells the browser that it's a heading. That's what the `h1` is for.

To tell the browser where the heading ends, we need a closing tag. This is almost identical to the opening tag, but with a backslash `/` just before the name of the element.

```HTML
<h1>What is HTML?</h1>
```

And there we are. This tells the browser this is a heading, where it starts, and where it ends.

The opening tag, contents, and closing tag when taken together are called an HTML element, or just an element for short.

## So What is HTML?

HTML, or HyperText Markup Language, describes the content and structure of a webpage. It uses tags to create elements to do this.

### A Note on Headings

We saw the `<h1>` tag being used above. Headings are a little special because the can have different levels of importance, from the main heading of the page, down to the smallest sub-sub-sub-subheading. For this reason, HTML actually provides 6 heading tags, numbered in the name from `<h1>` to `<h6>`.

Don't be confused into thinking the number says something about the order the headings appear in, they describe the relative importance of the headings. Also, no other element does this - don't try putting numbers on `<p>` elements as there's no such thing as a `<p1>`.

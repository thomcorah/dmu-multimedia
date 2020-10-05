# HTML Attributes

In life, attributes describe information about a thing. The same is true with HTML.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=0280b942-fa9d-47b1-9be7-ac470119fb80&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## What is an Attribute

An attribute is a property or characteristic of a thing. For example, a person might have brown eyes and be 1.9m tall. These are attributes of that person.

In HTML, we use attributes to define properties of HTML elements. For some elements this is crucial. For example, an `<img>` element tells the browser where its image file is using an attribute. Without the attribute, there is no image.

## Attribute Format

Attributes are _always_ defined in the opening tag of an element. And they always follow the same format:

```HTML
name="value"
```

The HTMl that every page starts off with contains lots of attributes already. For example:

```HTMl
<html lang="en" dir="ltr">
```

This `<html>` element has two attributes. One describes the language the page is written in (English in this case), the other the text direction (left to right).

There are some cases where an attribute doesn't strictly follow this format. Some elements might have attributes that can have either a true of false value. For example, the `<audio>` element has a `controls` attribute that defines whether playback controls are provided to the user. Its value is either true or false. We might therefore write:

```HTML
<audio controls="true">
```

However, where an attribute is either true or false, we can simply include its name for true, or omit it for false. So, instead of the above, we could just write:

```HTML
<audio controls>
```

This would still show the controls to the user, and is shorthand for `controls="true"`.

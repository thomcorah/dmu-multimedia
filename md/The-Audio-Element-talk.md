# The Audio Element

The audio element can be used to embed an audio file in a page, providing the user with playback controls.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=47494638-de60-40e4-b4a4-ac5a01031ea9&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Audio file formats

The three audio file formats that work with the `<audio>` element are MP3, ogg audio, and wav. However, they don't all work on all browsers, as this table of support from the main browsers shows.

| Browser | MP3 | WAV | OGG |
| ------- | --- | --- | --- |
| Edge/IE | YES | NO  | NO  |
| Chrome  | YES | YES | YES |
| Firefox | YES | YES | YES |
| Safari  | YES | YES | NO  |
| Opera   | YES | YES | YES |

In order to overcome this, we can provide the same audio file, but in multiple file formats. The browser can then choose the one that it works with.

## Constructing an audio element

A complete audio element consists of three different components.

1. The `<audio>` opening and closing tags
2. At least two `<source>` elements, each pointing to a version of the audio file
3. A fallback for browsers that don't support the `<audio>` element.

## Source elements

The `<source>` elements are nested inside the `<audio>` element. Each one points to a different version of the audio file. Each one needs to tell the browser:

1. Where the file is
2. What type of file it is

It does both of these things with attributes. The `src` attribute is used to tell the browser where the file is, and the `type` attribute is used to tell the browser what type of file it is.

The value that you use for type has to be exactly right. Here are the options

| File Format | Media Type |
| ----------- | ---------- |
| MP3         | audio/mpeg |
| WAV         | audio/wav  |
| OGG         | audio/ogg  |

Suppose we have a recording of a dog barking, in each of the three file formats. Our `<audio>` element might look something like this:

```HTML
<audio>
  <source src="sounds/dog.ogg" type='audio/ogg' />
  <source src="sounds/dog.wav" type='audio/wav' />
  <source src="sounds/dog.mp3" type='audio/mpeg' />
</audio>
```

The browser will pick the first file format that it works with. Safari for instance doesn't work with OGG files, but it does with WAV files, so a user on Safari would get the WAV file.

A user on Internet Explorer, which doesn't work with OGG or WAV files would get the compressed MP3 file.

Chrome users on the other hand would get our high-quality OGG file.

## The fallback

The `<audio>` element doesn't work with all browser. Although support is now widespread, it is not universal. Opera Mini for instance won't recognise the `<audio>` element, nor will Internet Explorer before version 9.

For these cases, we can provide a little text and maybe a link to download the file directly. This goes just before the closing `</audio>` tag, like so:

```HTML
<audio>
  <source src="sounds/dog.ogg" type='audio/ogg' />
  <source src="sounds/dog.wav" type='audio/wav' />
  <source src="sounds/dog.mp3" type='audio/mpeg' />
  <p>Your browser does not support the audio element. Please click <a href='sounds/dog.mp3'>here</a> to download an mp3 of the audio.</p>
</audio>
```

## Controlling playback

We have a range of options for how the audio file is presented and controlled. These are set as attributes on the `<audio>` element itself.

| Attribute | Value              | Description                                                                           |
| --------- | ------------------ | ------------------------------------------------------------------------------------- |
| autoplay  | true/false         | Specifies that the audio will start playing as soon as it is ready                    |
| controls  | true/false         | Specifies that audio controls should be displayed (such as a play/pause button etc)   |
| loop      | true/false         | Specifies that the audio will start over again, every time it is finished             |
| muted     | true/false         | Specifies that the audio output should be muted                                       |
| preload   | auto/metadata/none | Specifies if and how the author thinks the audio should be loaded when the page loads |
| src       | _URL_              | Specifies the URL of the audio file                                                   |

This table has been copied from the W3Schools reference page on the `<audio>` element, available here: <https://www.w3schools.com/tags/tag_audio.asp>

Attributes are normally provided in the format `name="value"`. However, for attributes whose value is either true or false, simply including the attribute name sets it as true, whereas omitting it sets it as false.

For example, in order to provide playback controls for the user, we would add the `controls` attribute to the opening `<audio>` tag:

```HTML
<audio controls>
  <source src="sounds/dog.ogg" type='audio/ogg' />
  <source src="sounds/dog.wav" type='audio/wav' />
  <source src="sounds/dog.mp3" type='audio/mpeg' />
  <p>Your browser does not support the audio element. Please click <a href='sounds/dog.mp3'>here</a> to download an mp3 of the audio.</p>
</audio>
```

Note that in many browsers, autoplay won't work. This is to cut down on users having audio erupt from their computers uninvited when browsing the web.

Finally, although you can use the `src` attribute, it is better to nest `<source>` elements in order to provide a range of file options.§

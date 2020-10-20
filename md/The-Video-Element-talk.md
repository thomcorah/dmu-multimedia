# The Video Element

The video element can be used to embed a video file in a page, providing the user with playback controls.

## Video file formats

The three video file formats that work with the `<video>` element are MP4, ogg video, and webm. However, they don't all work on all browsers, as this table of support from the main browsers shows.

| Browser | MP3 | WAV | OGG |
| ------- | --- | --- | --- |
| Edge/IE | YES | YES | YES |
| Chrome  | YES | YES | YES |
| Firefox | YES | YES | YES |
| Safari  | YES | YES | NO  |
| Opera   | YES | YES | YES |

In order to overcome this, we can provide the same video file, but in multiple file formats. The browser can then choose the one that it works with.

## Constructing a video element

A complete video element consists of three different components.

1. The `<video>` opening and closing tags
2. At least two `<source>` elements, each pointing to a version of the video file
3. A fallback for browsers that don't support the `<video>` element.

## Source elements

The `<source>` elements are nested inside the `<video>` element. Each one points to a different version of the video file. Each one needs to tell the browser:

1. Where the file is
2. What type of file it is

It does both of these things with attributes. The `src` attribute is used to tell the browser where the file is, and the `type` attribute is used to tell the browser what type of file it is.

The value that you use for type has to be exactly right. Here are the options

| File Format | Media Type |
| ----------- | ---------- |
| MP4         | video/mp4  |
| WEBM        | video/webm |
| OGG         | video/ogg  |

Suppose we have a video of a dog barking, in each of the three file formats. Our `<video>` element might look something like this:

```HTML
<video>
  <source src="clips/dog.ogv" type='video/ogg' />
  <source src="clips/dog.webm" type='video/webm' />
  <source src="clips/dog.mp4" type='video/mp4' />
</video>
```

The browser will pick the first file format that it works with. Safari for instance doesn't work with OGG files, but it does with webm files, so a user on Safari would get the webm file.

Chrome users on the other hand would get our OGG file.

## The fallback

The `<video>` element doesn't work with all browser. Although support is now widespread, it is not universal. Opera Mini for instance won't recognise the `<video>` element, nor will Internet Explorer before version 9.

For these cases, we can provide a little text and maybe a link to download the file directly. This goes just before the closing `</video>` tag, like so:

```HTML
<video>
  <source src="clips/dog.ogv" type='video/ogg' />
  <source src="clips/dog.webm" type='video/webm' />
  <source src="clips/dog.mp4" type='video/mp4' />
  <p>Your browser does not support the video element. Please click <a href='clips/dog.mp4'>here</a> to download an mp4 of the video.</p>
</video>
```

## Controlling playback

We have a range of options for how the video file is presented and controlled. These are set as attributes on the `<video>` element itself.

| Attribute | Value              | Description                                                                                           |
| --------- | ------------------ | ----------------------------------------------------------------------------------------------------- |
| autoplay  | true/false         | Specifies that the video will start playing as soon as it is ready                                    |
| controls  | true/false         | Specifies that video controls should be displayed (such as a play/pause button etc)                   |
| loop      | true/false         | Specifies that the video will start over again, every time it is finished                             |
| muted     | true/false         | Specifies that the video output should be muted                                                       |
| preload   | auto/metadata/none | Specifies if and how the author thinks the video should be loaded when the page loads                 |
| src       | _URL_              | Specifies the URL of the video file                                                                   |
| height    | _pixels_           | Sets the height of the video player                                                                   |
| width     | _pixels_           | Sets the width of the video player                                                                    |
| poster    | _URL_              | Specifies an image to be shown while the video is downloading, or until the user hits the play button |

This table has been copied from the W3Schools reference page on the `<video>` element, available here: <https://www.w3schools.com/tags/tag_video.asp>

Attributes are normally provided in the format `name="value"`. However, for attributes whose value is either true or false, simply including the attribute name sets it as true, whereas omitting it sets it as false.

For example, in order to provide playback controls for the user, we would add the `controls` attribute to the opening `<video>` tag:

```HTML
<video controls>
  <source src="clips/dog.ogv" type='video/ogg' />
  <source src="clips/dog.webm" type='video/webm' />
  <source src="clips/dog.mp4" type='video/mp4' />
  <p>Your browser does not support the video element. Please click <a href='clips/dog.mp4'>here</a> to download an mp4 of the video.</p>
</video>
```

Note that in many browsers, autoplay won't work unless you also mute the video by default. This is to cut down on users having video erupt from their computers uninvited when browsing the web.

The inclusion of a poster image is a good step to take. Rather than the user being faced with a static shot of the first frame, you can use this to provide a suitable cover image. Make sure this image is the same aspect ratio as your video, or you'll get black bars taking up the extra space.

Finally, although you can use the `src` attribute, it is better to nest `<source>` elements in order to provide a range of file options.

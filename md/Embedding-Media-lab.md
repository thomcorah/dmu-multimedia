# Embedding Media

This lab will see you adding audio and video content to a simple page. It'll be a page with a heading. a paragraph of text, an audio player, and a video.

You can see a finished example here: <https://thomcorah.github.io/dmu-multimedia/resources/EmbeddingMediaEx/index.html>

## Start a New Project

Create a new folder and open it in Atom. Create a new HTML file, and fill in the starter code. (type html and hit tab). Add the viewport meta tag:

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## Add Some Content

Add a main heading and a paragraph of text.

## The Audio

### 1. Get An Audio File

Head to <https://freesound.org>, sign up for a free account, and download some audio. Ideally in wav format.

### 2. Convert it

If you've got a wav file, you also need it as mp3 and ogg. There are free online converters such as <https://online-audio-converter.com>
Be wary - don't use any that require you download their software.  
If the converted file you download doesn't have a file extension you expect (.mp3, .wav, or .ogg) delete it and head somewhere else.

You should now have the same audio clip in three formats.

### 3. Add The Audio Files to the Project

Create a new folder for your audio files and move them there.

### 4. Add the `<audio>` element

You'll find some good pointers at <https://www.w3schools.com/tags/tag_audio.asp> to help with this. Don't forget to include a fallback for browsers that don't support the audio element, and don't forget to provide controls for the user.

### 5. Make it Loop

Because, why not. You'll probably want to turn this off again though.

## The Video

### 1. Get a video

Head to <https://www.videvo.net>, download a video. Ideally in mp4 format.

### 2. Convert it

If you've got an mp4 file, you also need it as webm and ogv. There are free online converters such as <https://util.clipchamp.com>
Be wary - don't use any that require you download their software.  
If the converted file you download doesn't have a file extension you expect (.mp4, .webm, or .ogv) delete it and head somewhere else.

You should now have the same video clip in three formats.

### 3. Add The Video Files to the Project

Create a new folder for your video files and move them there.

### 4. Add the `<video>` element

You'll find some good pointers at <https://www.w3schools.com/tags/tag_video.asp> to help with this. Don't forget the fallback for non-supportive browsers.

### 5. Fix the Width

By default, a video element will be the native width of the video file. This might be too large for the screen, so we want to constrain the width. We can do this by setting it's width to 100%.

### 6. Make a Poster Image

This should be an image that's the same aspect ratio as the video.

### 7. Set the Image as the Poster for the Video

Use the `<video>` element's `poster` attribute to point to the poster image.

### 8. Make the Video Autoplay

In lots of browsers, you'll also need to mute the video to allow this to happen.

## Conclusion

And that's it. You've successfully embedded both audio and video in a page.

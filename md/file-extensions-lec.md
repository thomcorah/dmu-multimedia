# File Extensions

Often hidden, file extensions are a critical thing to understand when developing for the web.

<iframe src="https://dmureplay.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=07efbfdb-49ee-4dce-a6ef-ac4c01023589&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" height="405" width="720" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

# File Extensions

- Websites are comprised of files
- The browser needs to know exactly what those files are
- It does that using the file extension

# File Names

File names actually have two parts.

name*.extension*

For example

**teddy.jpg** > this is a jpg file  
**week2.html** > this is an html file  
**saturday.mp4** > this in an mp4 video file

Every file has an extension, but the operating system doesn't usually show it to you.

When we create files for our website, we need to make sure to include the file extension. When we reference files in our website, we need to make sure to include the file extension.

## What happens if you don't add the extension?

It just won't work. Atom won't know it's an HTML file, and so can't be as helpful. The browser won't know it's an HTML file and so might not render it properly. It won't know which image file you actually want to display because you didn't provide the full name, including the extension.

## Don't put spaces in file names

When working with files that are to be used by web pages, don't put spaces in the names. Filenames don't actually have spaces, ever. You operating system lets you put spaces in, but behind the scenes it actually replaces the spaces with something else. The browser will do this too, replacing spaces with %20, making your web addresses look really messy. Use dashes instead.

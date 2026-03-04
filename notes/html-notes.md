HTML NOTES

href → hyperlink (go somewhere)

src → source (bring something in)

img elements have an opening tag without a closing tag. An element without a closing tag is known as a void element.

All img elements should have an alt attribute. The alt attribute's text is used for screen readers to improve accessibility and is displayed if the image fails to load.

The figure element represents self-contained content and will allow you to associate an image with a caption.

A figure caption (figcaption) element is used to add a caption to describe the image contained within the figure element.

when should you use an id versus a class? Classes are best used when you want to apply a set of styles to many elements. If you want to target a specific element, it is best to use id because those values need to be unique.

 HTML Entities ---> An HTML entity, or character reference, is a set of characters used to represent a reserved character in HTML. <p>This is an <img /> element</p> is written like this <p>This is an &lt;img /&gt; element</p>

The id attribute adds a unique identifier to an HTML element. Each id should be unique within a page and should only be used once.
id values cannot contain spaces and should only contain letters, digits, underscores, and dashes.

SEO, or Search Engine Optimization, is a practice that optimizes web pages so they become more visible and rank higher on search engines. One way to improve your site's SEO, is to provide a short description for the web page using the meta element.

The open graph protocol enables you to control how your website's content appears across various social media platforms, such as Facebook, LinkedIn, and many more. By setting these open graph properties, you can entice users to want to click and engage with your content. You can set these properties through a collection of meta elements inside your HTML head section.

video/audio type attribute is used to specify the video/mp4 MIME type. Also audio, MIME (Multipurpose Internet Mail Extensions) is a standard to describe documents in other forms besides ASCII text, for example, audio, video, and images.
MP4, formally known as MPEG-4 Part 14, is a digital multimedia container format. It is widely used for storing video and audio, but it can also include other data types like subtitles and still images. MP4 files are designed for streaming over the Internet and are compatible with many devices and platforms.


Another common MIME type is the video/webm MIME type.
WebM is an open-source audiovisual media file format developed by Google, primarily designed for web-based media content. It supports video codecs like VP8, VP9, and AV1, and audio codecs such as Vorbis and Opus, making it a popular choice for HTML5 video and audio elements.


Another common MIME type is the video/ogg MIME type.
Ogg is a digital multimedia container format designed to provide for efficient streaming and manipulation of digital multimedia. It is maintained by the Xiph.Org Foundation and is free and open, unrestricted by software patents. Its name is derived from "ogging", jargon from the computer game Netrek.

Another common MIME type is the video/quicktime MIME type.
QuickTime is an extensible multimedia architecture created by Apple, which supports playing, streaming, encoding, and transcoding a variety of digital media formats. Not as popular as the MP4 format, you may need it for legacy application support.

semantic HTML:
header
main
section inside main
footer

What Are Common Ways to Optimize Media Assets?
There are three tools to consider when using media, such as images, on your web pages: the size, the format, and the compression.

Let's talk about the size of your images first. When you are building a website, you'll often style images to display in a specific size. For example, you might have an image display at a 640x480 resolution. 640 represents the width while 480 represents the height in pixels. When preparing your image you want to scale it to a 640x480 size to match that styling. If you serve an image that is 1920x1080 but you are styling it to be much smaller, you're requiring your users to download unnecessary data. A smaller resolution results in a smaller file size.

The next thing to consider is your file format. Two of the most common file formats are PNG and JPG, but these are no longer the most ideal formats for serving images. Unless you need support for older browsers, you should consider using a more optimized format, like WEBP or AVIF.

Finally, you can run compression algorithms on your images. A compression algorithm is used to reduce the size for files or data. There are options like pngcrush to compress your images locally, or you can use online compression tools. However, it's worth noting that specific file formats, such as JPG, are not lossless. Lossless means that the original data can be perfectly reconstructed from the compressed data. If you try to compress a JPG image, it will result in a degraded quality. You should keep all these things in mind when selecting images for your web pages.


Images are considered intellectual property, this means that they are protected by copyright regulations, most often belonging to the creator. By default, images are released as all rights reserved. The creator, or publisher sometimes, holds all copyright for the image.

This means that you cannot use them in your web page unless you do one of three things: obtain written permission from the copyright holder, purchase a license from the copyright holder, or incorporate the image in a way that falls under fair use.

That third point is a bit tricky. Fair use requires that your use of the image is both limited and transformative. Some examples of fair use would be to comment on or review the art or create a parody of the image.

Some images might be released under a permissive license, like a Creative Commons license, or the BSD license that freeCodeCamp uses. These images are available for use in your website, but you'll need to read the license to understand the rules you need to follow when using these images. For example, you might be required to make your website open source, or you may not be permitted to modify the image in any way.

Finally, some images may be released to the public domain. An image under the public domain has no copyright attached to it and is free to be used without any restrictions. Images licensed specifically under the Creative Commons 0 license are considered public domain.

Most search engines will allow you to filter image results by a license. There are also sites like Pixabay and Unsplash, which offer free-to-use images. Always be mindful of the copyright and licensing when you use an image in your website.


What Are SVGs, and When Should You Use Them?
First, you need to understand how images work. Common image formats like PNG and JPG are classified as raster formats. This essentially means that they are pixel-based, with the data tracking the color value in each pixel.

A large downside of raster based images is that they do not upscale well. If you've ever tried to make a PNG larger, you may have seen that it becomes pixelated, or blurry.

An SVG is a different kind of image. SVG stands for a scalable vector graphic. A vector graphic tracks data based on paths and equations to plot points, lines, and curves. What this really means is that a vector graphic, like an SVG, can be scaled to any size without impacting the quality.

SVGs specifically have the added benefit of storing data in XML. This means you can use them directly in your code as raw HTML with the svg element. It also means you can programmatically change the color of the image.

To change the smiley face to red, enable the interactive editor and change the fill="yellow" to fill="red".

<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="45" stroke="black" stroke-width="4" fill="yellow" />
  <circle cx="35" cy="40" r="5" fill="black" />
  <circle cx="65" cy="40" r="5" fill="black" />
  <path d="M35 65 Q50 80 65 65" stroke="black" stroke-width="4" fill="transparent" />
</svg> 
Here are the basic elements for the example:

The svg element is the container for the whole drawing. It sets up the space where all the shapes appear. Everything you want to draw with SVG, such as circles, lines, or paths, goes inside the svg element.
The circle element is used to make the face and the eyes. One large circle forms the yellow face, and two smaller circles make the eyes.
The path element is used to draw the smile. It creates a curved line for the mouth.
Each SVG element has attributes that control its appearance and position within the drawing area.
Here are a few more examples. To change the color for any of the examples, update the value for the fill attribute to any named color like red, green, blue, yellow, etc.

<!-- Star Icon -->
<svg width="50" height="50" viewBox="0 0 24 24" fill="gold" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L14.9 8.6L22 9.3L17 14.1L18.3 21.2L12 17.8L5.7 21.2L7 14.1L2 9.3L9.1 8.6L12 2Z"/>
</svg>

<!-- Heart Icon -->
<svg width="50" height="50" viewBox="0 0 24 24" fill="crimson" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 6 4 4 6.5 4C8 4 9.5 4.8 10.5 6.09C11.5 4.8 13 4 14.5 4C17 4 19 6 19 8.5C19 12.28 15.6 15.36 10.45 20.04L12 21.35Z"/>
</svg>

<!-- Checkmark Icon -->
<svg width="50" height="50" viewBox="0 0 24 24" fill="green" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.29 5.71L9 17L3.71 11.71L5.12 10.29L9 14.17L18.88 4.29L20.29 5.71Z"/>
</svg>
So when would you want to use an SVG? A great use case is for icons. If you want to create custom bullet points, or add icons to your links to represent social media platforms, using SVGs is the best approach. One of the most popular icon libraries, Font Awesome, uses SVG images for their icons. SVGs are also great for webpage logos, because they scale perfectly. They allow you to adapt your layout to any responsive design you need. Next time you have an SVG locally, try opening it with a text editor and playing with the code.

How Do You Embed Videos onto Your Page Using the iframe Element?

 The iframe element. This element stands for inline frame. It's an inline element used to embed other HTML content directly within the HTML page. That HTML content could be a video, map, another HTML element, or even other web pages.

Here's an example of embedding a popular freeCodeCamp course from YouTube. To see a different video, enable the interactive editor and change the src value to a video of your choosing.

<iframe
  width="400"
  height="400"
  src="https://www.youtube.com/embed/PkZNo7MFNFg?si=-UBVIUNM3csdeiWF"
  title="Learn JavaScript - Full Course for Beginners (YouTube video)"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>

The src attribute specifies the URL of the page you want to embed. The width attribute specifies the width of the iframe. The height attribute specifies the height of the iframe. The allowfullscreen attribute allows the user to display the iframe in full screen mode. It's also a good practice to specify a title attribute for the iframe, as it's important for accessibility.

The allow attribute, on the other hand, lets you define what an iframe can or can't do. This is called an allowlist. In the above example, adding clipboard-write to it allows the embedded page to write items to your clipboard. Items in an allowlist can be separated by semicolons or spaces, and both can be used together.

Note that the video can come from anywhere. It doesn't have to come from video services like YouTube and Vimeo.

Don't forget you can also embed a map, another web page, or direct HTML within the iframe element. Here is an example of an embedded map.

Try interacting with the map by zooming in and out.

<h1>A Map from Openstreetmap.org Embedded with the iframe Element</h1>

<iframe
  width="425"
  height="350"
  src="https://www.openstreetmap.org/export/embed.html?bbox=3.006134033203125%2C6.150112578753815%2C3.6357879638671875%2C6.749850810550778&amp;layer=mapnik"
  title="Map of Lagos area, Nigeria"
  style="border: 1px solid black"
>
</iframe>
<br />
<small>
  <a href="https://www.openstreetmap.org/#map=11/6.4501/3.3210">
    View Larger Map
  </a>
</small>

If you want to embed direct HTML within the iframe element you have to use the srcdoc attribute instead of src.

What Are the Different Target Attribute Types, and How Do They Work?

You may have seen the target attribute on anchor elements, or links. This important attribute tells the browser where to open the URL for the anchor element.

There are four important possible values for this attribute. Note that each value is preceded by an underscore.

The first value is _self, which is the default value. This opens the link in the current browsing context. In most cases, this will be the current tab or window.

The second value is _blank, which opens the link in a new browsing context. Typically, this will open in a new tab. But some users might configure their browsers to open a new window instead.

The third value is _parent, which opens the link in the parent of the current context. For example, if your website has an iframe, a _parent value in that iframe would open in your website's tab/window, not in the embedded frame.

The fourth value is _top, which opens the link in the top-most browsing context - think "the parent of the parent". This is similar to _parent, but the link will always open in the full browser tab/window, even for nested embedded frames.

There is a fifth value, called _unfencedTop, which is currently used for the experimental FencedFrame API. At the time of this lesson, you probably won't have a reason to use this one yet.

Selecting the right target value to control where your users end up is an important consideration when creating a website.


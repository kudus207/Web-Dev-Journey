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
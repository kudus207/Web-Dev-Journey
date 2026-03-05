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

#
When Should You Use the Emphasis Element Over the Idiomatic Text Element?

It is recommended to use <em> instead of <i>

Even if it looks the same when the text was inside the idiomatic text element, the semantic emphasis element conveys its meaning and importance behind the scenes.

It's important to know that these elements should not be used for presentational purposes only. If you need to display the text in italics, but the text doesn't have a special purpose, style, or meaning in the paragraph, you should use CSS instead.

When Should You Use the Strong Element Over the Bring Attention To Element?

The "bring attention to" element, b, is commonly used to highlight keywords in summaries, or product names in reviews. Usually, browsers display this text in boldface. Here's an example using the b element to highlight product names in this review:

<p>
  We tested several products, including the SuperSound 3000 for audio
  quality, the QuickCharge Pro for fast charging, and the
  EcoClean Vacuum for cleaning. The first two performed well, but the
  EcoClean Vacuum did not meet expectations.
</p>

<p>
  <strong>Warning:</strong> This product may cause allergic reactions.
</p>

The strong element communicates that sense of urgency.

Visually both are very similar, because they are both rendered as bold by default. But their meanings are quite different. While the "bring attention to" element only draws attention to the text, without indicating the higher level of importance, the strong element does more than that. It conveys a sense of importance, or urgency. This is their main difference.

To choose between them, consider the purpose of the text and its importance within the surrounding content.


What Are Description Lists, and When Should You Use Them?

Description lists are perfect for presenting terms and definitions in an organized and easy-to-read format, like in a glossary, or real dictionary, where you can find words with their corresponding definitions.

<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
   <dt>JS</dt>
  <dd>JavaScript</dd>
</dl>

In this case the terms are the acronyms HTML and CSS, and the details are their expansions. The details could also be definitions, or other information related to the terms.

You will need three HTML elements to define a description list. First, the description list element, dl, which is the container for the entire list. You can see it wraps around all the other elements of the description list in the example.

Then, one description term element, dt, for each term. In this case the description list has two terms, HTML and CSS, so it has two of these elements.

And finally, after each term you will find a description details element, dd, for the description, or details associated with that term. In this example, they are Hypertext Markup Language and Cascading Style Sheets.

In the browser, you would see each term followed by its corresponding description. By default, the descriptions are slightly more indented towards the right to distinguish them visually.

But description lists are not limited to only terms and definitions. They are much more versatile than that.

Other use cases for description lists include product specifications, frequently asked questions, contact information, and metadata. Essentially, when you have two related pieces of information in a key-value pair format, where one acts as a label, the key, and the other acts as additional related information, the value, you can use a description list.


How Do Block and Inline Quotes Work in HTML?

In HTML, quoted elements are used to distinguish quoted text from the surrounding content. This gives the quoted text a format that is easy to identify.

You should use the block quotation element for representing a section quoted from another source. It's mainly used for extended quotations. If the source of the quote has an address, you can cite it with the cite attribute. The value of this attribute should be a valid URL. This is an example of a quote within a block quotation element:

<blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
  "Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?"
</blockquote>

You should use block quotes like these for long quotations from other sources. But sometimes you will only need to quote a few words within a larger paragraph.

That's exactly what the inline quotation element is for. It's for short inline quotations from other sources. Most modern browsers will add quotation marks around the inline quote automatically when you use this element. This is an example:

<p>
  As Quincy Larson said,
  <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">
    Momentum is everything.
  </q>
</p>

What's the difference between block quotes and inline quotes? You should use block quotes for extended quotations from other sources and inline quotes for short quotations from other sources that should be part of existing paragraphs.

How Do You Display Abbreviations in HTML?

An abbreviation is a shortened form of a word or phrase. For example, "Dr" followed by a period, is an abbreviation for the word "doctor".

There are two common forms of abbreviations: acronyms and initialisms.

An acronym is a word formed from the initial letters of a phrase, with each letter representing the first letter of a word in that phrase.

GUI is an example of an acronym. It stands for Graphical User Interface. By taking the first letters of each word G, U, and I, you get the acronym GUI.

An initialism is formed from the initial letters of a phrase, with each letter representing the first letter of a word in that phrase.

For example, HTML is an initialism; it stands for HyperText Markup Language and is pronounced by spelling out each letter H, T, M, L.

Both acronyms and initialisms are types of abbreviations. The distinction is acronyms are pronounced as words and initialisms are pronounced as individual letters.

They are very helpful for writing more concise text, especially when they are well-known and easy to understand in a given context.

If you need to display abbreviations such as acronyms or initialisms in HTML, the abbreviation element is exactly what you're looking for. You should always explain their full meaning when you use them for the first time. Then you can use the abbreviation element to highlight them and provide more details.

<p><abbr>HTML</abbr> is the foundation of the web.</p>

If you want to help users understand what this initialism means, you can show its full form with the title attribute.

The title attribute is optional, but if you decide to include it, it must be a human readable description of the abbreviation, acronym, or initialism.


<p><abbr title="HyperText Markup Language">HTML</abbr> is the foundation of the web.</p>


While you don't necessarily need to use the abbreviation element for every abbreviation on your web page, it's recommended for those that might be unclear and those that might need additional context.

You should use your best judgment to find the right balance between information and presentation to avoid cluttering the text while being clear and concise.


How Do You Display Addresses in HTML?

The contact address element is used to represent contact information for a section on a web page. The address element is versatile and can be used for business pages, author pages, personal sites, and more.

When it comes to building out your website's contact sections, you should use the semantic address element over a generic element like a div.

Here is an example of using the address element for a company contact page:

<address>
  <h2>Company Name</h2>
  <p>
    1234 Elm Street

    Springfield, IL 62701

    United States
  </p>
  <p>Phone: <a href="tel:+15555555555">+1 (555) 555-5555</a></p>
  <p>Email: <a href="mailto:contact@company.com">contact@company.com</a></p>
</address>

In this example, there is the company name, physical address, phone, and email information. For the physical address, the line break element, br, is used to show the division between the street name, city, and country.

For the phone number, we have an anchor element with the href value set for telephone numbers. The tel:+ value inside the href attribute creates a clickable link to initiate a phone call on certain devices that support that.

For the email address, another anchor element is used with the href value set to a mailto link. mailto links are used in HTML documents to allow users to open a new email within their preferred email client.

One of the downsides of using a mailto link is that users often perceive it as spam. Unfortunately, a lot of spammers will use this option to send emails to users. So just keep that in mind when you're using it.


How Do You Display Times and Dates in HTML?

The time element is used to represent a specific moment in time.

Here is an example using the time element to represent twenty hundred hours, or eight PM in the evening.

<p>The reservations are for <time datetime="20:00">20:00 </time></p>

The datetime attribute is used to translate dates and times into a machine-readable format.

This is important, because it helps with search engine results and helps the browser process date and time information more effectively.

The value for the datetime attribute must be either a valid year, valid month, valid time, local date, global date, or valid duration string.

Here is another example of using the time element to represent a particular date:

<p>
  The graduation will be on <time datetime="2024-06-15T15:00">June 15</time>
</p>

The value for the datetime attribute is in the ISO 8601 format. ISO 8601 is an international standard to represent dates and times.

The first part of that value is the year, month and day. The capital T in the value is a separator between the date and time.

The fifteen hundred hours would be three PM in the afternoon.

Whenever you need to represent events, publication dates, or appointments, it is best to use the time element.

HTML QUICK NOTES (COMPRESSED)
1. Basic Attribute Meaning

href → hyperlink destination (go somewhere)

src → source of a file (bring something in)

Example

<a href="page.html">Link</a>
<img src="image.jpg">
2. Void Elements

Elements without closing tags.

Examples:

img
br
hr
input

Example

<img src="cat.jpg" alt="cat">
3. Image Accessibility

Every img should have:

alt → text description for screen readers or if image fails to load

Example

<img src="dog.jpg" alt="Brown dog running">
4. Image Grouping
figure + figcaption

Used to connect images with captions.

Example

<figure>
  <img src="food.jpg" alt="Pasta">
  <figcaption>Delicious pasta</figcaption>
</figure>
5. ID vs Class
class

Used for grouping many elements

<p class="text"></p>
<p class="text"></p>
id

Used for one unique element

<h1 id="title"></h1>

Rules for id

must be unique

no spaces

letters, numbers, _ or -

6. HTML Entities

Used to display reserved HTML characters.

Example

Character	Entity
<	&lt;
>	&gt;
&	&amp;

Example

<p>This is an &lt;img /&gt; element</p>
7. SEO Meta Description

Improves search engine visibility.

Example

<meta name="description" content="Best pancake recipe website">
8. Open Graph (Social Media Preview)

Controls how links appear on social media.

Example

<meta property="og:title" content="My Website">
<meta property="og:description" content="Learn web development">
<meta property="og:image" content="image.jpg">
9. Media MIME Types

MIME types describe file formats.

Common video types:

Type	Format
video/mp4	MP4
video/webm	WebM
video/ogg	Ogg
video/quicktime	QuickTime

Example

<video controls>
  <source src="video.mp4" type="video/mp4">
</video>
10. Semantic Layout Structure

Common semantic layout:

<header>
<main>
  <section>
</section>
</main>
<footer>

Purpose → better SEO + accessibility

11. Media Optimization

3 main factors:

1. Size

Match image size to display size.

Example
Display: 640x480 → image should also be 640x480.

2. Format

Best modern formats:

WEBP
AVIF

Older formats:

JPG
PNG
3. Compression

Reduces file size.

Tools:

pngcrush

online compressors

12. Image Copyright

Images are intellectual property.

You can use them only if:

Permission

Purchased license

Fair use

Creative Commons license

Public domain

Free sites:

Pixabay

Unsplash

13. Raster vs Vector Images
Raster (pixel-based)

Examples:

PNG
JPG

Problem → becomes blurry when enlarged.

Vector (SVG)

Scalable without quality loss.

Example

Best for:

icons

logos

UI graphics

14. iframe (Embedding Content)

Used to embed external content.

Examples:

videos

maps

web pages

Example

<iframe
  src="https://www.youtube.com/embed/videoID"
  width="400"
  height="400"
  allowfullscreen>
</iframe>

Important attributes

Attribute	Purpose
src	embedded URL
width	width
height	height
allow	permissions
title	accessibility
15. Link Target Values

Controls where links open.

Value	Behavior
_self	same tab
_blank	new tab
_parent	parent frame
_top	top frame

Example

<a href="page.html" target="_blank">Open</a>
16. Text Meaning Elements
Emphasis
<em>

Semantic emphasis.

Example

<em>Important</em>
Italic
<i>

Used for stylistic text.

Strong
<strong>

Important or urgent content.

Bold
<b>

Draw attention only.

17. Description Lists

Used for term-definition pairs.

Elements:

dl → list container
dt → term
dd → description

Example

<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>

Use cases

glossary

product specs

FAQ

18. Quotes
Block quotes

For long quotes

<blockquote cite="source">
Quote text
</blockquote>
Inline quotes

For short quotes

<p>He said <q>keep learning</q></p>
19. Abbreviations

Use abbr for acronyms.

Example

<abbr title="HyperText Markup Language">HTML</abbr>
20. Address Element

Used for contact information.

Example

<address>
  123 Street
  <a href="tel:+123456789">Call</a>
  <a href="mailto:info@email.com">Email</a>
</address>
21. Time Element

Represents dates or time.

Example

<time datetime="2024-06-15">June 15</time>

Uses ISO 8601 format.

22. Forms Basics

Form collects user data.

Example

<form action="/submit" method="POST">
</form>
Attribute	Purpose
action	where data goes
method	GET / POST
23. Input + Label

Example

<label for="email">Email</label>
<input type="email" id="email">

Alternative (implicit)

<label>
Email
<input type="email">
</label>
24. Input Attributes
Attribute	Purpose
type	data type
placeholder	hint text
required	must be filled

Example

<input type="email" placeholder="example@email.com" required>
25. Fieldset Grouping

Groups related inputs.

<fieldset>
  <legend>Personal Info</legend>
</fieldset>
26. Button Types
Type	Behavior
button	custom action
submit	submit form
reset	clear form

Example

<button type="submit">Submit</button>
27. Button vs Input Button
button

Can contain:

text

icons

images

<button>Start</button>
input button

Void element.

<input type="button" value="Start">
28. Client-Side Validation

Validation done in browser before sending to server.

Example

<input type="email" required>

Common validation attributes:

Attribute	Purpose
required	must fill
type=email	email format
min/max	number limits
pattern	custom validation
Simple HTML Mental Model
ELEMENT
<tag>content</tag>

ATTRIBUTE
<tag attribute="value">

GROUPING
div
section
fieldset
figure

IDENTIFIERS
class → group
id → unique

HTML Tables (Short Note)

HTML tables are used to display data in rows and columns.

Example uses:

Product lists

Timetables

Statistics

Comparison data

Basic Table Structure
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>

  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>
Table Elements
Element	Meaning
<table>	Table container
<tr>	Table row
<th>	Table header cell
<td>	Table data cell
Example Layout
Name     Age
John     25
Mary     30
Optional Table Elements
Element	Purpose
<caption>	Table title
<thead>	Header section
<tbody>	Body section
<tfoot>	Footer section

Example:

<table>
  <caption>Student List</caption>

  <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Ada</td>
      <td>90</td>
    </tr>
  </tbody>
</table>
Useful Attributes
Attribute	Purpose
colspan	Merge columns
rowspan	Merge rows

Example:
<td colspan="2">Total</td>

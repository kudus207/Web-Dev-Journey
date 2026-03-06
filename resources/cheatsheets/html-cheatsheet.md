# HTML Cheatsheet

<!-- Basic Structure -->
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
</body>
</html>

<!-- Headings -->
<h1></h1> to <h6></h6>

<!-- Paragraph -->
<p></p>

<!-- Link -->
<a href="https://example.com">Visit</a>

<!-- Image -->
<img src="image.jpg" alt="description">

<!-- Video -->
<video controls width="640">
  <source src="video.mp4" type="video/mp4">
</video>

<!-- Audio -->
<audio controls loop src="audio.mp3"></audio>

<!-- ifame -->
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/OXGznpKZ_sA" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media;vgyroscope; picture-in-picture; web-share" 
        allowfullscreen>
    </iframe>

    <!-- form -->
    <h1>Complete HTML Form Example</h1>

<form action="/submit" method="post" autocomplete="on">

<!-- TEXT INPUT -->
<label for="name">Full Name:</label>
<input type="text" id="name" name="name" placeholder="Enter your name" required>
<br><br>

<!-- EMAIL -->
<label for="email">Email:</label>
<input type="email" id="email" name="email" placeholder="Enter your email" required>
<br><br>

<!-- PASSWORD -->
<label for="password">Password:</label>
<input type="password" id="password" name="password" minlength="6" required>
<br><br>

<!-- PHONE -->
<label for="phone">Phone:</label>
<input type="tel" id="phone" name="phone" placeholder="08012345678">
<br><br>

<!-- NUMBER -->
<label for="age">Age:</label>
<input type="number" id="age" name="age" min="1" max="100">
<br><br>

<!-- DATE -->
<label for="dob">Date of Birth:</label>
<input type="date" id="dob" name="dob">
<br><br>

<!-- TIME -->
<label for="time">Preferred Time:</label>
<input type="time" id="time" name="time">
<br><br>

<!-- COLOR -->
<label for="color">Favorite Color:</label>
<input type="color" id="color" name="color">
<br><br>

<!-- RANGE -->
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="100">
<br><br>

<!-- FILE UPLOAD -->
<label for="file">Upload File:</label>
<input type="file" id="file" name="file" accept=".jpg,.png,.pdf">
<br><br>

<!-- RADIO BUTTON -->
<p>Gender:</p>
<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>

<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>
<br><br>

<!-- CHECKBOX -->
<p>Skills:</p>
<input type="checkbox" name="skills" value="html"> HTML
<input type="checkbox" name="skills" value="css"> CSS
<input type="checkbox" name="skills" value="javascript"> JavaScript
<br><br>

<!-- DROPDOWN -->
<label for="country">Country:</label>
<select id="country" name="country">
<option value="">Select Country</option>
<option value="nigeria">Nigeria</option>
<option value="uae">UAE</option>
<option value="usa">USA</option>
</select>
<br><br>

<!-- MULTIPLE SELECT -->
<label for="languages">Languages:</label>
<select id="languages" name="languages" multiple>
<option>English</option>
<option>Arabic</option>
<option>French</option>
</select>
<br><br>

<!-- TEXTAREA -->
<label for="message">Message:</label><br>
<textarea id="message" name="message" rows="4" cols="30" placeholder="Write your message"></textarea>
<br><br>

<!-- DATALIST -->
<label for="browser">Choose Browser:</label>
<input list="browsers" name="browser">
<datalist id="browsers">
<option value="Chrome">
<option value="Firefox">
<option value="Edge">
<option value="Safari">
</datalist>
<br><br>

<!-- FIELDSET -->
<fieldset>
<legend>Account Settings</legend>

<label for="username">Username:</label>
<input type="text" id="username" name="username">
<br><br>

<label for="website">Website:</label>
<input type="url" id="website" name="website" placeholder="https://example.com">

</fieldset>
<br>

<!-- HIDDEN INPUT -->
<input type="hidden" name="user_id" value="12345">

<!-- BUTTONS -->
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button">Click Me</button>

</form>

<!-- table -->
<h2>Student Information Table</h2>

<table border="1" cellpadding="10" cellspacing="0">

<caption>Student Records</caption>

<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Age</th>
<th>Course</th>
<th>Country</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>John</td>
<td>22</td>
<td>Computer Science</td>
<td>Nigeria</td>
</tr>

<tr>
<td>2</td>
<td>Mary</td>
<td>21</td>
<td>Web Development</td>
<td>UAE</td>
</tr>

<tr>
<td>3</td>
<td>David</td>
<td>23</td>
<td>Software Engineering</td>
<td>USA</td>
</tr>

<tr>
<td>4</td>
<td colspan="2">Merged Column</td>
<td rowspan="2">Merged Row</td>
<td>UK</td>
</tr>

<tr>
<td>5</td>
<td>Sarah</td>
<td>20</td>
<td>Canada</td>
</tr>

</tbody>

<tfoot>
<tr>
<td colspan="5">Total Students: 5</td>
</tr>
</tfoot>

</table>

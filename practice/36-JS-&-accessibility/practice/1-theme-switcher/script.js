// Store the available themes in an array of objects.
// Each object contains a theme name and its corresponding message.
const themes = [
  { name: "light", message: "Hello sunshine — Light theme is on!" },
  { name: "dark", message: "The night is yours — Dark theme is on!" },
  { name: "ocean", message: "Blue skies and high tides — Ocean theme is on!" },
  { name: "nord", message: "The frost has settled - Nord theme is on!" },
];

// Select the button that opens and closes the theme dropdown.
const themeSwitcher = document.getElementById("theme-switcher-button");

// Select the dropdown containing the available theme options.
const themeDropdown = document.getElementById("theme-dropdown");

// Select the element where the selected theme message will be displayed.
const statusMsg = document.getElementById("status");

// Select all the individual theme options (li elements).
const menuItem = document.querySelectorAll("[role='menuitem']");

// Listen for clicks on the theme switcher button.
themeSwitcher.addEventListener("click", () => {
  // Check whether the dropdown is currently hidden.
  if (themeDropdown.hidden) {
    // Show the dropdown by removing its hidden state.
    themeDropdown.hidden = false;

    // Update the button's accessibility state to indicate that the menu is expanded.
    themeSwitcher.setAttribute("aria-expanded", "true");
  } else {
    // Hide the dropdown when the button is clicked again.
    themeDropdown.hidden = true;

    // Update the button's accessibility state to indicate that the menu is collapsed.
    themeSwitcher.setAttribute("aria-expanded", "false");
  }
});

// Loop through each theme option and listen for clicks.
menuItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    // Get the text content of the theme option that was clicked.
    const getItemName = e.target.textContent;

    // Loop through all the theme objects in the themes array.
    themes.forEach((theme) => {
      // Remove the current theme class before applying the selected one.
      // This prevents multiple theme classes from remaining on the body.
      document.body.classList.remove(`theme-${theme.name}`);

      // Check whether the current theme object's name matches the clicked theme.
      if (theme.name === getItemName) {
        // Display the message belonging to the selected theme.
        statusMsg.textContent = theme.message;

        // Add the selected theme's class to the body element.
        document.body.classList.add(`theme-${theme.name}`);

        // Hide the dropdown after a theme has been selected.
        themeDropdown.hidden = true;

        // Update the button's accessibility state to indicate that the menu is closed.
        themeSwitcher.setAttribute("aria-expanded", "false");
      }
    });

    /*
    ALTERNATIVE APPROACH USING find():

    // Search the themes array for the object whose name matches the clicked theme.
    const selectedTheme = themes.find(theme => theme.name === getItemName);

    // Remove all available theme classes from the body.
    themes.forEach(theme => {
      document.body.classList.remove(`theme-${theme.name}`);
    });

    // Check whether a matching theme was found.
    if (selectedTheme) {

      // Display the message belonging to the selected theme.
      statusMsg.textContent = selectedTheme.message;

      // Add the selected theme's class to the body.
      document.body.classList.add(`theme-${selectedTheme.name}`);

      // Hide the dropdown and update the accessibility state.
      themeDropdown.hidden = true;
      themeSwitcher.setAttribute("aria-expanded", "false");
    }

    END OF find() ALTERNATIVE.
    */
  });
});

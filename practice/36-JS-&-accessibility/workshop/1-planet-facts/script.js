// Select all elements that have the role="tab" attribute
const tabs = document.querySelectorAll('[role="tab"]');

// Select all elements that have the role="tabpanel" attribute
const panels = document.querySelectorAll('[role="tabpanel"]');

// Loop through each tab button
tabs.forEach((tab) => {
  // Listen for a click on the current tab
  tab.addEventListener("click", () => {
    // Set every tab's aria-selected attribute to false
    // This ensures that only the clicked tab is selected
    tabs.forEach((t) => t.setAttribute("aria-selected", "false"));

    // Hide all tab panels before displaying the selected one
    panels.forEach((p) => (p.hidden = true));

    // Mark the clicked tab as selected
    tab.setAttribute("aria-selected", "true");

    // Get the ID of the panel associated with the clicked tab
    // aria-controls contains the ID of the panel this tab controls
    const associatedPanel = tab.getAttribute("aria-controls");

    // Find that particular panel using its ID
    const panel = document.getElementById(associatedPanel);

    // Make the associated panel visible
    panel.hidden = false;
  });
});

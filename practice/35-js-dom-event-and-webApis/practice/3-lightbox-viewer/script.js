// Select all gallery images
const galleryImg = document.querySelectorAll(".gallery-item");

// Select the lightbox container
const lightboxContainer = document.querySelector(".lightbox");

// Select the large image displayed inside the lightbox
const lightboxImg = document.getElementById("lightbox-image");

// Select the close button
const closeBtn = document.getElementById("close-btn");

// Loop through each gallery image
galleryImg.forEach((item) => {
  // Add a click event listener to each image
  item.addEventListener("click", (event) => {
    // Make the lightbox visible
    lightboxContainer.style.display = "flex";

    // Get the clicked image's source and remove "-thumbnail"
    // to get the URL of the full-size image
    const fullImgSrc = event.target.src.replace("-thumbnail", "");

    // Set the full-size image as the lightbox image source
    lightboxImg.src = fullImgSrc;
  });
});

// Add a click event listener to the lightbox container
lightboxContainer.addEventListener("click", (event) => {
  // Check if the lightbox background itself was clicked
  // This prevents the lightbox from closing when the image is clicked
  if (event.target === lightboxContainer) {
    // Hide the lightbox
    lightboxContainer.style.display = "none";
  }
});

// Add a click event listener to the close button
closeBtn.addEventListener("click", () => {
  // Hide the lightbox when the close button is clicked
  lightboxContainer.style.display = "none";
});

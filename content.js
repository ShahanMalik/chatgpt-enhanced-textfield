document.addEventListener("DOMContentLoaded", () => {
  // Get the #composer-background element
  const composer = document.querySelector("#composer-background");

  if (composer) {
    // Apply flex-row layout
    composer.style.display = "flex"; // Use flexbox
    composer.style.flexDirection = "row"; // Arrange items in a row
    composer.style.alignItems = "center"; // Vertically center items
    composer.style.justifyContent = "space-between"; // Space out items evenly
    composer.style.gap = "10px"; // Add space between items

    // Ensure the padding and other necessary styles are applied
    composer.style.padding = "10px";
  }
});

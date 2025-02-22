document.addEventListener("DOMContentLoaded", () => {
  const composer = document.querySelector("#composer-background");

  if (composer) {
    // Apply flex-column layout
    composer.style.display = "flex";
    composer.style.flexDirection = "column";
    composer.style.minHeight = "100%";

    // Target the first div and make it take maximum space
    const firstDiv = composer.querySelector('.flex.flex-col.justify-start');
    if (firstDiv) {
      firstDiv.style.flex = "1";
      firstDiv.style.minHeight = "0";
    }

    // Keep second div at natural size
    const secondDiv = composer.querySelector('.mb-2.mt-1.flex.items-center.justify-between');
    if (secondDiv) {
      secondDiv.style.flexShrink = "0";
    }
  }
});

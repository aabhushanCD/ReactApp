// Get all submenu toggles
const submenuToggles = document.querySelectorAll(
  ".templatemo-accordion .collapsed"
);

// Attach click event listener to each toggle
submenuToggles.forEach((toggle) => {
  toggle.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Find the submenu associated with this toggle
    const submenu = toggle.nextElementSibling;

    // Toggle the 'show' class to collapse/expand the submenu
    submenu.classList.toggle("show");
  });
});

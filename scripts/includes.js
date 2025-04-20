// Function to load HTML components
function loadHTML(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

// Load common components when page loads
window.addEventListener("DOMContentLoaded", () => {
  loadHTML("header-placeholder", "/templates/header.html");
  loadHTML("nav-placeholder", "/templates/nav.html");
  loadHTML("footer-placeholder", "/templates/footer.html");
});

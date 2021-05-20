const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// toggle button
toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

// close button

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// Navbar Toggle Function
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const navbarToggler = document.querySelector(".navbar-toggler");

  navbarToggler.addEventListener("click", () => {
    navbar.classList.toggle("bg-active");
  });
});

// Highlight Active Nav Item
document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.href.includes(currentLocation)) {
      link.parentElement.classList.add("active");
    }
  });
});

// FAQ Accordion Functionality
document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const isActive = content.style.maxHeight;

      // Close any open items
      document.querySelectorAll(".accordion-content").forEach((item) => {
        if (item !== content) {
          item.style.maxHeight = null;
          item.previousElementSibling.classList.remove("active");
        }
      });

      // Toggle current item
      if (isActive) {
        content.style.maxHeight = null;
        header.classList.remove("active");
      } else {
        content.style.maxHeight = `${content.scrollHeight}px`;
        header.classList.add("active");
      }
    });
  });
});

// Navbar
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 200) {
    // Adjust scroll distance as needed
    navbar.classList.add("fixed-top");
    navbar.style.transition = "top 0.5s";
  } else {
    navbar.classList.remove("fixed-top");
  }
});

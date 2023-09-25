// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

    // Create timeline
    $('#experience-timeline').each(function() {

      $this = $(this); // Store reference to this
      $userContent = $this.children('div'); // user content

      // Create each timeline block
      $userContent.each(function() {
          $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
      });

      // Add icons to each block
      $this.find('.vtimeline-point').each(function() {
          $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
      });

      // Add dates to the timeline if exists
      $this.find('.vtimeline-content').each(function() {
          var date = $(this).data('date');
          if (date) { // Prepend if exists
              $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
          }
      });

  });


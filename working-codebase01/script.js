const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

const searchInput = document.querySelector(".search__wrapper input");

searchInput.addEventListener("focus", (e) => {
  document.body.classList.remove("collapsed");
});

// Existing code...
// ...

// Function to load content into the 'content' div
function loadContent(href) {
  // Assuming your content div has the ID 'content'
  const contentDiv = document.getElementById('content');
  const sectionName = href.split('#')[1]; // Get the section name from the href

  // Fetch the content from the corresponding HTML file
  fetch(`${sectionName}.html`)
    .then(response => response.text())
    .then(html => {
      contentDiv.innerHTML = html; // Inject the HTML into the content div
      window.scrollTo(0, 0); // Scroll to the top of the page
    })
    .catch(error => console.error('Failed to load content:', error));
}

// Event listener for sidebar links
allLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Call the loadContent function with the href of the clicked link
    loadContent(this.getAttribute('href'));
    // Rest of your code...
  });
});

// Rest of your existing code...
// ...

// Assuming the sidebar links have IDs like 'link-1', 'link-2', etc.
// Corresponding content divs have IDs like 'content-1', 'content-2', etc.

document.addEventListener("DOMContentLoaded", () => {
  const sidebarLinks = document.querySelectorAll(".sidebar-links a");
  const contentDivs = document.querySelectorAll(".sidebar-content");

  sidebarLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      // Hide all content divs and remove 'active' class
      contentDivs.forEach(div => {
        div.style.display = 'none';
        div.classList.remove('active');
      });

      // Get the section name from the link's href attribute
      const sectionName = link.getAttribute('href').substring(1);
      const contentDiv = document.getElementById(`content-${sectionName}`);
      if (contentDiv) {
        contentDiv.style.display = 'block';
        contentDiv.classList.add('active');
      }
    });
  });
});

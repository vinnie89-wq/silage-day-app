/*
  main.js — the small amount of JavaScript that makes the page a bit smarter.

  The page works fine WITHOUT this file (all the links and content still work).
  This file just adds two nice extras:
    1. A "days to go" countdown in the header.
    2. Highlighting the bottom-nav button for the section you're looking at.
*/

// ---------- 1. Countdown to the event ----------

// The event date. Months in JavaScript start at 0, so September is 8 (not 9)!
var EVENT_DATE = new Date(2027, 8, 11);

function updateCountdown() {
  var box = document.getElementById("countdown");
  if (!box) return; // stop if the element isn't on the page

  // Today's date with the time set to midnight, so we count whole days.
  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // Subtracting two dates gives milliseconds. 1 day = 1000 × 60 × 60 × 24 ms.
  // Math.round deals with the odd 23- or 25-hour day when the clocks change.
  var msPerDay = 1000 * 60 * 60 * 24;
  var daysLeft = Math.round((EVENT_DATE - today) / msPerDay);

  if (daysLeft > 1) {
    box.textContent = daysLeft + " days to go";
  } else if (daysLeft === 1) {
    box.textContent = "Tomorrow!";
  } else if (daysLeft === 0) {
    box.textContent = "It's today — enjoy the day!";
  } else {
    box.textContent = "Thank you for coming!";
  }
}

updateCountdown();


// ---------- 2. Highlight the current section in the bottom nav ----------

// Find all five nav links.
var navLinks = document.querySelectorAll(".bottom-nav a");

// Mark one link as active (yellow) and un-mark the others.
function setActive(sectionId) {
  navLinks.forEach(function (link) {
    var isMatch = link.getAttribute("href") === "#" + sectionId;
    link.classList.toggle("is-active", isMatch);
    // "aria-current" tells screen readers which link is the current one.
    if (isMatch) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

// IntersectionObserver is a built-in browser tool that tells us when an
// element scrolls into view. Older browsers may not have it, so we check first.
if ("IntersectionObserver" in window) {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      // Only count a section as "current" when it crosses a thin band
      // about a third of the way down the screen.
      rootMargin: "-30% 0px -65% 0px"
    }
  );

  document.querySelectorAll("main section[id]").forEach(function (section) {
    observer.observe(section);
  });
}

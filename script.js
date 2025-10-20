function isHomePage() {
  const { origin, pathname, hash } = window.location;

  // Normalize pathname: remove "index.html" and trailing slash
  let normalizedPath = pathname.replace(/index\.html$/, '').replace(/\/$/, '');

  // If the path is empty or root of site
  if (normalizedPath === '') normalizedPath = '/';

  // Also ignore any hash fragment (like #about)
  const hasHashOnly = hash && (normalizedPath === '/' || normalizedPath === '');

  // Return true if we're basically at the origin or root index
  return normalizedPath === '/' || hasHashOnly;
}

if (isHomePage()) {
  // ================= Smooth Scroll for Navbar Links =================
  document.querySelectorAll('#nav-Section-Links a, .hero-buttons a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // stop the default jump

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 35, // adjust offset if you have a sticky header
          behavior: 'smooth'
        });
      }
    });
  });

  // // ================= Smooth Scroll for Hero Buttons =================
  // document.querySelectorAll('#hero-buttons a').forEach(link => {
  //   link.addEventListener('click', event => {
  //     event.preventDefault(); // stop the default jump

  //     const targetId = link.getAttribute('href').substring(1);
  //     const targetElement = document.getElementById(targetId);

  //     if (targetElement) {
  //       window.scrollTo({
  //         top: targetElement.offsetTop - 35, // adjust offset if you have a sticky header
  //         behavior: 'smooth'
  //       });
  //     }
  //   });
  // }); 


  // ================= Scroll Animations =================
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => observer.observe(el));

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop >= 100) {
      mouseScroll[0].style.transition = ".15s"
      mouseScroll[0].style.opacity = "0"
    } else {
      mouseScroll[0].style.transition = ".15s"
      mouseScroll[0].style.opacity = "0.35"
    }
  });

  setTimeout(() => {
    loader.classList.add('fade-out');
    document.querySelectorAll('.hidden').forEach(el => {
      el.classList.add('visible');
    });
  }, 800);
}


// ================= Custom Cursor Logic =================
const customCursor = document.getElementById('custom-cursor');

// Move the cursor
document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
  customCursor.style.opacity = '1'; // ensure visible on movement
});

// Hide the cursor when mouse leaves the window
document.addEventListener('mouseleave', () => {
  customCursor.style.opacity = '0';
});

// Show cursor again when mouse re-enters
document.addEventListener('mouseenter', () => {
  customCursor.style.opacity = '1';
});

// Hover effects for interactive targets
const targets = document.querySelectorAll(
  'a, p, h1, h2, h3, #song-display, button, .style-preview-card, img, .repo-card'
);

targets.forEach(target => {
  target.addEventListener('mouseover', () => {
    customCursor.classList.add('hover-target');
  });
  target.addEventListener('mouseout', () => {
    customCursor.classList.remove('hover-target');
  });
});


// ===================== EMAIL POPUP =====================
const isDesktop = window.innerWidth > 768;
const emailPopup = document.getElementById("email-popup");
const copyEmailBtn = document.getElementById("copy-email");
const closePopupBtn = document.getElementById("close-popup");
const emailLink = document.querySelectorAll(".contact-email");

if (emailLink && isDesktop) {
  emailLink.forEach((btnLink) => {
    btnLink.addEventListener("click", (e) => {
      e.preventDefault();
      emailPopup.classList.add("visible");
    });
  })
}

closePopupBtn.addEventListener("click", () => {
  emailPopup.classList.remove("visible");
});

// Copy email to clipboard
copyEmailBtn.addEventListener("click", () => {
  const email = "benburnell.git@gmail.com";
  navigator.clipboard.writeText(email);
  copyEmailBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
  setTimeout(() => {
    copyEmailBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy Email';
  }, 1500);
});

// ================= Theme Toggle =================
const toggle = document.getElementById('theme-toggle');
const body = document.body;
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const mouseScroll = document.querySelectorAll(".mousey")

function setTheme(isLight) {
  body.classList.toggle('light', isLight);
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  moonIcon.style.display = isLight ? 'block' : 'none';
  sunIcon.style.display = isLight ? 'none' : 'block';
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'light');

// Toggle theme on click
toggle.addEventListener('click', () => {
  const isLight = !body.classList.contains('light');
  setTheme(isLight);
});


// ================= Loader Animation =================
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(function() {
    loader.classList.add('fade-out');
    document.querySelectorAll('.hidden').forEach(el => {
      el.classList.add('visible');
    });
    window.scrollTo(0, 0);
  }, 500)
});

// console.log(window.history.back())
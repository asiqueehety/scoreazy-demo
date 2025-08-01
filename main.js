const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__left .container__btn", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  delay: 3500,
});

ScrollReveal().reveal(".container__right .physics", {
  duration: 1000,
  delay: 4000,
});

ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 5000,
});

ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 5500,
  interval: 500,
});

// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    answer.style.maxHeight = "0";
    answer.style.overflow = "hidden";
    answer.style.transition = "max-height 0.3s ease";
  
    btn.addEventListener("click", () => {
      const expanded = btn.classList.toggle("open");
      if (expanded) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = "0";
      }
    });
  });
  
  ScrollReveal().reveal(".faq-item", {
    ...scrollRevealOption,
    origin: "top",
    delay: 500,
    interval: 500,
  });

  ScrollReveal().reveal(".section-title", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 500,
    interval: 500,
  });

  ScrollReveal().reveal(".steppo", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
    interval: 500,
  });
  

  ScrollReveal().reveal(".card", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
    interval: 500,
  });
  

  ScrollReveal().reveal("#process", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
    interval: 500,
  });

  document.getElementById("to-offers").addEventListener("click", () => {
    document.getElementById("offers").scrollIntoView({ behavior: "smooth" });
  });
  
  // Countdown to next batch (adjust target date as needed)
  function setupCountdown(targetDateStr, elementSelector) {
    const target = new Date(targetDateStr);
    const el = document.querySelector(elementSelector);
    if (!el) return;
  
    function update() {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) {
        el.textContent = "Batch started!";
        clearInterval(interval);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      el.textContent = `${days}d ${hrs}h ${mins}m ${secs}s`;
    }
  
    update();
    const interval = setInterval(update, 1000);
  }
  
  // example: countdown to Aug 4 2025
  setupCountdown("2025-08-10T09:00:00", "#batch-date");
  
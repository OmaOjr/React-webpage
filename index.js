document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));

  const pricingCards = document.querySelectorAll(".pricing__cards > article");
  pricingCards.forEach((card, index) => {
    card.style.setProperty("--delay", `${120 + index * 120}ms`);
  });

  // Hamburger menu
  const toggleBtn = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const closeBtn = document.getElementById("navClose");

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        toggleBtn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    }
  });


  navLinks.addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      navLinks.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }
  });

});





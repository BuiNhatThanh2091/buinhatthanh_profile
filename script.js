// Hamburger menu
const ham = document.getElementById("hamburger");
const menu = document.getElementById("menu");
ham.addEventListener("click", () => menu.classList.toggle("show"));

// Active link on scroll
const sections = [...document.querySelectorAll("section, header")];
const links = [...document.querySelectorAll(".menu a")];
const setActive = () => {
  const y = window.scrollY + 120;
  const id = sections.findLast((s) => y >= s.offsetTop)?.id;
  links.forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === `#${id}`)
  );
};
window.addEventListener("scroll", setActive);
setActive();

// Filters (assignments)
const filterBtns = document.querySelectorAll(".tag");
const cards = document.querySelectorAll(".assign");
filterBtns.forEach((b) => {
  b.addEventListener("click", () => {
    filterBtns.forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    const key = b.dataset.filter;
    cards.forEach((c) => {
      c.style.display =
        key === "all" || c.classList.contains(key) ? "" : "none";
    });
  });
});

// Contact form fake submit
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Đã gửi! Mình sẽ phản hồi sớm nhất. 🙌");
});

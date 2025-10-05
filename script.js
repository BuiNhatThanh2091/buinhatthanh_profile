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

// Contact form fake submit
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Đã gửi! Mình sẽ phản hồi sớm nhất. 🙌");
});

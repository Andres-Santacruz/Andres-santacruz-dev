const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);

const $ul = $(".nav-header-menu-list");
const $body = document.body;
const h1_header = $(".nav-header-h1");
const $li = $$(".nav-header-menu-item");
const info_h1 = $(".perfil-info-h1");
const info_h2 = $(".perfil-info-h2");
const span_blink = $(".perfil-info-span");
const btn_dark = $(".btn-dark");
const $span = $(".perfil-info-span");
const $header = $(".header");

const text = ["Front-end ", "Back-end ", "Full-Stack "];
let i = 0,
  num = 0;
let work = text[num].split("");
const timer = setInterval(() => {
  $span.innerHTML += work[i];
  i++;
  if (i === work.length) {
    $span.innerHTML = "";
    i = 0;
    num += 1;
    work = text[num]?.split("");
  }
  if (num === 3) {
    clearInterval(timer);
    $span.innerHTML = text[2];
  }
}, 350);

let currentScroll = window.scrollY;
window.addEventListener("scroll", () => {
  if (currentScroll > window.scrollY) {
    $header.style.top = "0px";
  } else {
    $header.style.top = "-100px";
  }
  currentScroll = window.scrollY;
});

const toggleDark = () => {
  span_blink.classList.toggle("info-span-dark");
  btn_dark.classList.toggle("btn-dark-active");
  info_h1.classList.toggle("dark-info-h1");
  info_h2.classList.toggle("dark-info-h2");
  h1_header.classList.toggle("dark-color");
  $li.forEach((el) => el.classList.toggle("dark-color"));
  $header.classList.toggle("dark-header");
  $body.classList.toggle("dark");
};
const mediaQueryDark = window.matchMedia("(prefers-color-scheme: dark)");
if (mediaQueryDark.matches) {
  toggleDark();
}
btn_dark.addEventListener("click", toggleDark);

const $alinks = $$(".nav-header-menu-item a");
const $section = $$("section ");

const observer = new IntersectionObserver(
  (els) => {
    els.forEach((el) => {
      const atribute = el.target.getAttribute("id");
      const alink = $(`a[href="#${atribute}"]`);
      if (el.isIntersecting) {
        $(".nav-header-menu-item a.seleted").classList.remove("seleted");
        alink.classList.add("seleted");
      }
    });
  },
  { rootMargin: "-50% 0px -50% 0px" }
);

$alinks.forEach((a) => {
  a.addEventListener("click", (e) => {
    const checkbox = $("#check-menu");
    checkbox.checked = false;
  });

  const atribute = a.getAttribute("href");
  const section = $(atribute);

  if (section) observer.observe(section);
});

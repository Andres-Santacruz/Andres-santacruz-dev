const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);
const ul = $(".nav-header-menu-list");
ul.addEventListener("click", (e) => {
  const checkbox = $("#check-menu");
  checkbox.checked = false;
});

const span = $(".perfil-info-span");
const text = ["Front-end ", "Back-end ", "Full-Stack "];
let i = 0,
  num = 0;
let work = text[num].split("");
const timer = setInterval(() => {
  span.innerHTML += work[i];
  i++;
  if (i === work.length) {
    span.innerHTML = "";
    i = 0;
    num += 1;
    work = text[num]?.split("");
  }
  if (num === 3) {
    clearInterval(timer);
    span.innerHTML = text[2];
  }
}, 350);

const header = $(".header");
let currentScroll = window.scrollY;

window.addEventListener("scroll", () => {
  if (currentScroll > window.scrollY) {
    header.style.top = "0px";
  } else {
    header.style.top = "-100px";
  }
  currentScroll = window.scrollY;
});

const btn_dark = $(".btn-dark");

btn_dark.addEventListener("click", () => {
  const body = document.body;
  const h1_header = $(".nav-header-h1");
  const li = $$(".nav-header-menu-item");
  const info_h1 = $(".perfil-info-h1");
  const info_h2 = $(".perfil-info-h2");

  btn_dark.classList.toggle("btn-dark-active");
  info_h1.classList.toggle("dark-info-h1");
  info_h2.classList.toggle("dark-info-h2");
  h1_header.classList.toggle("dark-color");
  li.forEach((el) => el.classList.toggle("dark-color"));
  header.classList.toggle("dark-header");
  body.classList.toggle("dark");
});

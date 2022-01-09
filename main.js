const $ = (el) => document.querySelector(el);
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

let count = 0;
let counter = document.getElementById("counter");
let decrease = document.querySelector(".btn.decrease");
let increase = document.querySelector(".btn.increase");
let reset = document.querySelector(".btn.reset");

decrease.addEventListener("click", () => {
  count--;
  counter.innerHTML = count;
  counterStyle();
});

increase.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
  counterStyle();
});

reset.addEventListener("click", () => {
  count = 0;
  counter.innerHTML = count;
  counterStyle();
});

function counterStyle() {
  if (count < 0) {
    counter.style.color = "#F84F31";
  } else if (count > 0) {
    counter.style.color = "#23C552";
  } else {
    counter.style.color = "#f58a07";
  }
}

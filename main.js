let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slider = document.querySelector(".slider");
let images = document.querySelectorAll(".image");
const sectionTwo = document.querySelector(".section-two");
slideNumber = 1;
const length = images.length;

//next code function
next.addEventListener("click", () => {
  if (slideNumber < length) {
    slider.style.transform = `translateX(-${slideNumber * 700}px)`;
    slideNumber++;
  } else {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
  }
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = " black";
});
//previos code function
prev.addEventListener("click", () => {
  if (slideNumber > 1) {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 700}px)`;
    slideNumber--;
  } else {
    slider.style.transform = `translateX(-${(length - 1) * 700}px)`;
    slideNumber = length;
  }
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = " black";
});

//the dots goes here
for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "buttons";
  sectionTwo.appendChild(div);
}
const buttons = document.querySelectorAll(".buttons");
//reseting buttons backgrounds

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = " transparent";
  });
};
buttons[0].style.backgroundColor = "black";
buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 700}px)`;
    button.style.backgroundColor = " black";
    slideNumber = 1 + 1;
  });
});

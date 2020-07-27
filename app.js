let text = document.querySelector(".text");
let strText = text.textContent;
let splitText = strText.split("");

text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let interval = 50;
let timer = setInterval(() => {
  let span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}, interval);

let complete = () => {
  clearInterval(timer);
  timer = null;
};

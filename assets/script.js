let currentDay = document.querySelector("#currentDay");
let containerPX5 = document.querySelector(".px-5");
let buttonArray = [];
let newText = document.querySelectorAll(".description");

// dayjs format
currentDay.textContent = dayjs().format("dddd," + "MMM DD, YYYY" + " h:mm A");

containerPX5.addEventListener("click", function (event) {
// Checks for button elements
  if (event.target.matches("i") || event.target.matches("button")) {
    // Loop
    for (let i = 0; i < newText.length; i++) {
      // uses local storage to store text inside textboxes
      localStorage.setItem(newText[i].parentNode.textContent, newText[i].value);
    }
  }
});

// Decides what the color should be based off past present and future
for (let i = 0; i < 9; i++) {
  
  let timeEl = document.querySelector("#hour-" + (i + 9));
  let presentTime = dayjs().hour();

  if (
    parseInt(document.querySelectorAll(".row")[i].dataset.time) < presentTime
  ) {
    timeEl.classList.add("past");

  } else if (
    parseInt(document.querySelectorAll(".row")[i].dataset.time) === presentTime
  ) {
    timeEl.classList.add("present");

  } else {
    timeEl.classList.add("future");
  }
}
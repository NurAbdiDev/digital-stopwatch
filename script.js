const timer = document.querySelector(".timer");
const startbtn = document.querySelector(".start-btn");
const pausebtn = document.querySelector(".pause-btn");
const resetbtn = document.querySelector(".reset-btn");
const status = document.querySelector(".status");
let seconds = 0;
let intervalID = null;
startbtn.addEventListener("click", function () {
  status.style.display = "none";
  if (intervalID === null) {
    intervalID = setInterval(() => {
      seconds++;
      timer.textContent = seconds;
      if (seconds === 100) {
        status.style.display = "block";
        status.textContent = "100 seconds ayaad gaartay! Hambalyo 🎉";
        setTimeout(() => {
          status.style.display = "none";
        }, 1000);
      }
    }, 1000);
  }
});
pausebtn.addEventListener("click", function () {
  clearInterval(intervalID);
  intervalID = null;
});
resetbtn.addEventListener("click", function () {
  clearInterval(intervalID);
  intervalID = null;
  seconds = 0;
  timer.textContent = "00:00:00";
});

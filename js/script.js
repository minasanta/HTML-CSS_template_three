// Main
const ourskillsSection = document.getElementById("our-skills");
const progressSpans = [...document.querySelectorAll("#our-skills .skill .the-progress span")];
const statsSpans = [...document.querySelectorAll("#stats .box span.number")];
const statsSection = document.getElementById("stats");
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

let startWindowScrollFunctionOnCounter = false;
let eventNewYear = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = eventNewYear - dateNow;

    if (dateDiff == 0) {
        clearInterval(counter);
        return;
    }

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000));

    daysSpan.textContent = days;
    hoursSpan.textContent = hours;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;



}, 1000);

window.onscroll = function () {
    if (ourskillsSection.offsetTop <= window.scrollY) {
        progressSpans.forEach(span => {
            span.style.width = span.dataset.width;
        });
    }
    if (window.scrollY >= statsSection.offsetTop) {
        if (!startWindowScrollFunctionOnCounter) {
            statsSpans.forEach(span => increasNumberToAchieveGoals(span));
            startWindowScrollFunctionOnCounter = true;
        }
    }
};

// Functions
function increasNumberToAchieveGoals(el) {
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(counter);
        }
    }, 2000 / goal);
}
// Main
const ourskillsSection = document.getElementById("our-skills");
const progressSpans = [...document.querySelectorAll("#our-skills .skill .the-progress span")];
const statsSpans = [...document.querySelectorAll("#stats .box span.number")];
const statsSection = document.getElementById("stats");
let startWindowScrollFunctionOnCounter = false;

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
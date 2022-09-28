// Main
const statsSpans = [...document.querySelectorAll("#stats .box span.number")];
const statsSection = document.getElementById("stats");
let startWindowScrollFunctionOnCounter = false;

window.onscroll = function () {
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
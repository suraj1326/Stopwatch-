let startTime, updatedTime, difference, tInterval;
let running = false;
let previousDifference = 0;

const stopwatchDisplay = document.getElementById("stopwatch");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - previousDifference;
        tInterval = setInterval(getShowTime, 10);
        startStopBtn.innerHTML = "Stop";
        running = true;
    } else {
        clearInterval(tInterval);
        previousDifference = new Date().getTime() - startTime;
        startStopBtn.innerHTML = "Start";
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    previousDifference = 0;
    startStopBtn.innerHTML = "Start";
    stopwatchDisplay.innerHTML = "00:00:00:00";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    stopwatchDisplay.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}

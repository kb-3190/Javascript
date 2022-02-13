const timer = document.getElementById("timer");
const start = document.getElementById("startBtn");
const stop = document.getElementById("stopBtn");
const reset = document.getElementById("resetBtn");

let startTime;
let elapsedTime;
let time;

function timeCount() {
    elapsedTime = Date.now() - startTime;
    timeConversion();
    timer.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

start.addEventListener('click', function() {
    startTime = new Date();
    time = setInterval(timeCount, 10);
    start.disabled = true;
    stop.disabled = false;
})

stop.addEventListener('click', function() {
    clearInterval(time);
    start.disabled = false;
    stop.disabled = true;
    
})

reset.addEventListener('click', function() {
    timer.innerHTML = "00:00:00:000"
    start.disabled = false;
})

let ms;
let s;
let m;
let h;

function timeConversion() {
    ms = elapsedTime % 1000;
    s = Math.floor(elapsedTime / 1000) % 60;
    m = Math.floor(elapsedTime / (1000 * 60)) % 60;
    h = Math.floor(elapsedTime / (1000 * 60 * 60)) % 60;

    ms = ( '0' + ms).slice(-3);
    s = ('0' + s).slice(-2);
    m = ('0' + m).slice(-2);
    h = ('0' + h).slice(-2);

}
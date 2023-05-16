const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hh = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hh}:${mm}:${ss}`;
}

getClock();
setInterval(getClock, 1000);

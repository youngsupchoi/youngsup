const clock = document.querySelector("h2#clock");


function handleClock() {
    const date= new Date();
    const hours = String(date.getHours());
    const minute = String(date.getMinutes());
    const second = String(date.getSeconds());
    clock.innerText = `${hours.padStart(2, "0")}:${minute.padStart(2, "0")}:${second.padStart(2, "0")}`;
}

handleClock();
setInterval(handleClock, 1000);

setTimeout(handleClock, 5000);





function printCurrentTimePS() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(printCurrentTimePS, 1000);


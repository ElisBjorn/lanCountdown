let countDownDate = new Date("MAY 10, 2019 18:00:00 GMT+0000").getTime(); //Weekly reset
let t = new Date();
console.log(t.getDay());
let x = setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));




    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "LAN TIME!!!";
    } else {
        document.getElementById("timer").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }
}, 1000);

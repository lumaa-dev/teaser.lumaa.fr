function countdown() {
    var countDownDate = new Date("Jul 21, 2023 21:30:00").getTime(); // next event day (will get changed later)

    var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector("p#x").innerText = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s";

    if (distance < 0) {
        clearInterval(x);
        document.querySelector("p#x").innerText = "0d 0h 0m 0s";
    }
    }, 1000);
}
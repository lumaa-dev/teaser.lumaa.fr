function countdown(querySelector = "p", countdown = new Date("July 21st, 2023 21:30:00"), endString = "") {
    var x = setInterval(function() {
        var now = new Date().getTime();

        var distance = countdown - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let dString = days > 0 ? `${zeroify(days)}d` : ""
        let hString = hours > 0 ? `${zeroify(hours)}h` : ""
        // let mString = minutes > 0 ? `${minutes}m` : ""
        // let sString = seconds > 0 ? `${seconds}s` : ""

        document.querySelector(querySelector).innerText = `${dString} ${hString} ${zeroify(minutes)}m ${zeroify(seconds)}s`

        if (distance < 0) {
            clearInterval(x);
            document.querySelector(querySelector).innerText = endString;
        }
    }, 1000);
}

function zeroify(int = 1) {
    if (int < 10) {
        return `0${int}`
    } else {
        return `${int}`
    }
}

countdown(".counter", new Date("Jul 21st, 2023 21:30:00"), "Started.")
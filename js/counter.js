var n = 0;
var max = prompt("Please enter your target:");
var w = 0;
if (max < 0) {
    alert("You cant count in negative, Dummy!");
    window.location.reload();
} else if (max == 0) {
    alert("Really? Do you not have any aims?");
    window.location.reload();
}

function clicky() {
    if (w == 100) {
        alert("You have completed your target. Congratulations!");
        window.location.reload();
    } else {
        update();
    }
}

function update() {
    n += 1;
    document.getElementById("work").innerHTML = n;
    w = (n / max) * (100);
    document.getElementById("done").style.width = w.toFixed(2) + "%";
    document.getElementById("display2").innerHTML = w.toFixed(2) + "%";
    console.log(w.toFixed(2) + " % completed.");
}
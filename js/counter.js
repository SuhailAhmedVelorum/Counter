var n = 0;
var max = prompt("Please enter your target:");

function clicky() {
    n += 1;
    document.getElementById("work").innerHTML = n;
    var w = (n / max) * (100);
    console.log(w);
    document.getElementById("done").style.width = w + "%";
    document.getElementById("display2").innerHTML = w + "%";
    if (w == 100) {
        alert("You have completed your target. Congratulations!");
        window.location.reload();
    }
}
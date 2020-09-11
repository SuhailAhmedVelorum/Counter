var n = 0;
var max = prompt("Please enter your target:");
if(max < 0){
    alert("You cant count in negative, Dummy!");
    window.location.reload();
}else if(max = 0){
    alert("Really? Do you not have any aims?");
    window.location.reload();
}

function clicky() {
    n += 1;
    document.getElementById("work").innerHTML = n;
    var w = (n / max) * (100);
    console.log(w);
    document.getElementById("done").style.width = w.toFixed(2) + "%";
    document.getElementById("display2").innerHTML = w.toFixed(2) + "%";
    if (w == 100) {
        alert("You have completed your target. Congratulations!");
        window.location.reload();
    }
}

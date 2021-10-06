let seconds = 3;
const el = document.getElementById('counter');

function incrementSec () {
    seconds -=1;
    el.innerText = "Bye: " + seconds;
};

var cancel = setInterval(incrementSec, 1000);

setTimeout(() => location.href = "/", 3000);


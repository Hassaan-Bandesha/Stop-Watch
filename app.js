// Varuables Area Started
let seconds = document.querySelector("#seconds");
let minutes = document.querySelector("#minutes");
let hours = document.querySelector("#hours");
let i = 1;
let j = 1;
let k = 1;
let addSeconds;
// Variables Area Ended 

// Start Function Area Started
function stopwatch() {
    clearInterval(addSeconds);
    addSeconds = setInterval(function () {
        seconds.innerHTML = i;
        i++;
        if (i === 61) {
            minutes.innerHTML = j++;
            i = 0;
            seconds.innerHTML = i;
            i++;
            if (j == 61) {
                j = 0;
                hours.innerHTML = k++;
                minutes.innerHTML = j;
                j++;
            }
        }
    }, 1000)
}
// Start Function ARea Ended  

// Reset Function Area Started 
function reset() {
    i = 0;
    j = 0;
    k = 0;
    seconds.innerHTML = i ;
    hours.innerHTML = j ;
    minutes.innerHTML = k ;
}
// Reset Function Area Ended 

// Stop Function Area Started 
function stop(){
    clearInterval(addSeconds);
}
// Stop Function Area Ended 
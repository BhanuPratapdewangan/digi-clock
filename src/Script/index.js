
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

var ampm = document.querySelector("#ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let pmam = ampm;

    if (h >= 12) {
        if(h > 12){
            h = h - 12;
        }
        pmam = 'PM';        
    } 

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerText = s;
    ampm.innerHTML= pmam;

    setTimeout(() => {
        updateClock();
    }, 1000)
}

updateClock();
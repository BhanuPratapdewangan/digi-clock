
let hour = document.getElementById('hours');
let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');

let ampm = 'AM';
const updateClock = () => {

    h = new Date().getHours();
    m = new Date().getMinutes();
    s = new Date().getSeconds();

    if(h>12)
    {
        h = h-12;
        ampm = 'PM';
    }

    h = h<10 ? '0' + h : h;
    m = m<10 ? '0' + m : m;
    s = s<10 ? '0' + s : s;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;

    setTimeout(() => {
        updateClock();
    },1000)
}

updateClock();
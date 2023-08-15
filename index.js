const hour = document.querySelector('#hours');
const min = document.querySelector('#minutes');
const sec = document.querySelector('#seconds');

setInterval( () => {
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.getElementById('hours').innerHTML = formatTime(hours);
    document.getElementById('minutes').innerHTML = formatTime(minutes);
    document.getElementById('seconds').innerHTML = formatTime(seconds);
}, 1000);

function formatTime (time){
    return time < 10 ? '0' + time : time;
}

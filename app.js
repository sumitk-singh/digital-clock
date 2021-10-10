// let x = document.getElementById('demo').innerHTML = Date();
// let y = x.getHours();
// document.getElementById('demo').innerHTML = y;

setInterval(showTime, 1000);

function showTime() {
    let x = new Date();
    let hr = x.getHours();
    let min = x.getMinutes();
    let sec = x.getSeconds();
    document.getElementById('demo').innerHTML = hr + " : " + min + ' : ' + sec;
    document.getElementById('demo-2').innerHTML = 'sdf';
}
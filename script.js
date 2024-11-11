document.body.onload = () => {
    timeInterval();
};

function timeInterval() {
    let clock = document.getElementById("clock");
    let today = new Date();
    let day = today.getDate();
    if(day < 10) {day = "0" + day};
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let hour = today.getHours();
    if(hour < 10) {hour = "0" + hour};
    let minute = today.getMinutes();
    if(minute < 10) {minute = "0" + minute};
    let second = today.getSeconds();
    if(second < 10) {second = "0" + second};
    clock.innerHTML = `${hour}:${minute}:${second}<br>${day}.${month}.${year}`;
    setTimeout(() => {
        timeInterval();
    }, 1000);
}


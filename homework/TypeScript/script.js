var deg = 6;
var hr = document.querySelector('#hr');
var sc = document.querySelector('#sc');
var mn = document.querySelector('#mn');
setInterval(function () {
    var day = new Date();
    var hh = day.getHours() * 30;
    var mm = day.getMinutes() * deg;
    var ss = day.getSeconds() * deg;
    hr.style.transform = "rotateZ(".concat((hh) + (mm / 12), "deg)");
    mn.style.transform = "rotateZ(".concat(mm, "deg)");
    sc.style.transform = "rotateZ(".concat(ss, "deg)");
    var timeToShow = day.toLocaleTimeString();
    console.log(timeToShow);
}, (1000));

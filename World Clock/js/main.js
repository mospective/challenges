
window.onload = function() {
  setTime();
};

// variables
var lines = document.getElementsByClassName('lines'); // Dial lines
var clock = document.getElementsByClassName('clock')[0];


//append dial lines 

for (var i = 0; i < 60; i++) {
  clock.innerHTML += '<div class="lines"></div>';
  lines[i].style.transform = "rotate(" + 6 * i + "deg)";
}


// clock hands
var secondHand =  document.querySelector('.second-hand');
var minuteHand =  document.querySelector('.minute-hand');
var hourHand =  document.querySelector('.hour-hand');


//Fuction that runs the clock

var sec, min, hour;
var counter = 1;


function setTime() {
  var info = new Date();
	if(document.getElementById("timezone").value){
    var utc = info.getTime() + (1 * 60000);
    counter = document.getElementById("timezone").value
    info = new Date(utc + (3600000*counter))
   }

	sec = info.getSeconds();
  var secondDeg = ((sec / 60) * 360);
  secondHand.style.transform = "rotate(" + secondDeg + "deg)";
	
  min = info.getMinutes();
  var minuteDeg = ((min / 60) * 360);
  minuteHand.style.transform = "rotate(" + minuteDeg + "deg)";

	
  hour = info.getHours();
  var hourDeg = ((hour + min/60) / 12 * 360);
  hourHand.style.transform = "rotate(" + hourDeg + "deg)";

  setTimeout('setTime()',1000);
}



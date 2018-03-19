var totalSeconds = 43200;
setInterval(setTime, 1);

function setTime() {
	
  totalSeconds += 10;
  var s = pad(totalSeconds % 60);
  var m = pad(parseInt((totalSeconds / 60) % 60));
  var h = pad(parseInt((totalSeconds / 3600) % 24));
  
   var hoursLabel = document.getElementById('hours');
   var minutesLabel = document.getElementById('minutes');
   var secondsLabel = document.getElementById('seconds');
   hoursLabel.innerHTML = h;
   minutesLabel.innerHTML = m;
   secondsLabel.innerHTML = s;
    
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

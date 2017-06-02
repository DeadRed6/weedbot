//this is a standalone file that goes into a bit more detail about the 420 command.
//format: MM/DD/YYYY HH:MM:SS.
var currentDt = new Date();
var todays420 = new Date();
todays420.setHours(17, 20, 0);
//find out if it's already past 4:20 today (milisecond comparison).
if(todays420 - currentDt > 0) {
  timeRemaining(todays420);
} else {
  //sets the next 420 to be tomorrow at 4:20pm.
  var next420 = new Date(currentDt.setDate(currentDt.getDate() + 1));
  //I have no idea why the hours are 16 here and 17 further up.
  next420.setHours(16, 20, 0);
  timeRemaining(next420);
}

function timeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  //round down for whole numbers, not fractions.
  var seconds = Math.floor((t/1000) % 60); //1000ms in 1s.
  var minutes = Math.floor((t/1000/60) % 60); //60s in 1m.
  var hours = Math.floor((t/(1000*60*60)) % 24);
  return "It is " + hours + " hour(s), " + minutes + " minute(s), and "
    + seconds + " seconds until the next 420.";
}

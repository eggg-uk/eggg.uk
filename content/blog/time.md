+++
date = '2025-04-28'
draft = false
title = 'time zone js stuff'
+++

test page with some time stuff

function updateTimes(){
  var currentDateTime = new Date()
  var torontoDateTime = new Date(currentDateTime.toLocaleString("en-US",{timeZone:'America/Toronto'}));
  var londonDateTime = new Date(currentDateTime.toLocaleString("en-US",{timeZone:'Europe/London'}));
  var seoulDateTime = new Date(currentDateTime.toLocaleString("en-US",{timeZone:'Asia/Seoul'}));
  document.getElementById("currentTZ").innerText= currentDateTime;
  document.getElementById("torontoTZ").innerText= torontoDateTime;
  document.getElementById("londonTZ").innerText=londonDateTime;
  document.getElementById("seoulTZ").innerText=seoulDateTime;
}
updateTimes();
setInterval(updateTimes,1000);
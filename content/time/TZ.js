const timezones = [
  { id: 'toronto', timezone: 'America/Toronto', label: 'Toronto, Canada' },
  { id: 'london', timezone: 'Europe/London', label: 'London, UK' },
  { id: 'seoul', timezone: 'Asia/Seoul', label: 'Seoul, South Korea' }
  ];

function generateTimecards(){
  const container = document.getElementById("time-display");
  container.innerHTML = "";
  timezones.forEach(timezone=>{
    const timecard = document.createElement('div');
    timecard.className = "time-card"
    timecard.id = `card-${timezone.id}`
    timecard.innerHTML = `
    <div>
      <div class=location>${timezone.label}</div>
      <div class=date id=${timezone.id}-date></div>
    </div>
    <div class=time id=${timezone.id}></div>
    `;
    container.appendChild(timecard)
  })
};

function formatDate(timezoneTime){
  return timezoneTime.toLocaleDateString("en-UK");
};

function formatTime(timezoneTime){
  return timezoneTime.toLocaleTimeString("en-UK");
};

function updateAllTimes() {
  const now = new Date();
  const userTimezone = now;
  timezones.forEach(timezone => {
    const timezoneTime = new Date(now.toLocaleString('en-US', { timeZone: timezone.timezone }));
    const timeElement = document.getElementById(timezone.id);
    const dateElement = document.getElementById(`${timezone.id}-date`);
    const card = document.getElementById(`card-${timezone.id}`);
    timeElement.textContent = formatTime(timezoneTime);
    dateElement.textContent = formatDate(timezoneTime);
    card.classList.remove('current', 'hidden');
    if (timezone.timezone === userTimezone) {
      card.classList.add('current');
    }
  });
};

generateTimecards();
updateAllTimes();
setInterval(updateAllTimes,1000);

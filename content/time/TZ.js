const timezonesBase = [
  { id: 'seoul', timezone: 'Asia/Seoul', label: 'Seoul, South Korea' },
  { id: 'toronto', timezone: 'America/Toronto', label: 'Toronto, Canada' },
  { id: 'london', timezone: 'Europe/London', label: 'London, UK' },
  { id:'user', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, label: 'wherever you seem to be' }
  ];

const timezones = timezonesBase.map((tz,index,tzs) => {
  return { ...tz, offset: getTimeZoneOffset(tz) } ;
});
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//this was an ordeal
// const productsWithPrice = products.map((product) => {
//   return { ...product, price: 100 };
// });

function getTimeZoneOffset(tz){
  const now = new Date();
  const TZDate = new Date(now.toLocaleString('en-US', { timeZone: tz.timezone }));
  const UTCDate = new Date(now.toLocaleString('en-US', { timeZone: "UTC" }));
  return ((TZDate - UTCDate)  / (1000*3600));

};

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
<div>
    <div class=time id=${timezone.id}></div>
    <div class=offset id=${timezone.id}-offset></div>
<div>
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

function getAndSortTimezonesByOffset(){
//todo: add logic to fetch offsets and sort by them
  return timezones.sort((a,b)=>a.offset-b.offset);
  // items.sort((a, b) => a.value - b.value);
};

console.log(getAndSortTimezonesByOffset());

function updateAllTimes() {
  const now = new Date();
  const userTimezone = now;
  const userTzLoc = Intl.DateTimeFormat().resolvedOptions().timeZone
  // timezones.
  getAndSortTimezonesByOffset().forEach(timezone => {
    const timezoneTime = new Date(now.toLocaleString('en-US', { timeZone: timezone.timezone }));
    const timeElement = document.getElementById(timezone.id);
    const dateElement = document.getElementById(`${timezone.id}-date`);
    const offsetElement = document.getElementById(`${timezone.id}-offset`);
    var offsetFormatted = ""
    if(timezone.offset < 0) {
      offsetFormatted += "(UTC ";
    } else if (timezone.offset >0) {
      offsetFormatted += "(UTC +";
    }
    offsetFormatted += (timezone.offset + ")");
    const card = document.getElementById(`card-${timezone.id}`);
    timeElement.textContent = formatTime(timezoneTime);
    dateElement.textContent = formatDate(timezoneTime);
    offsetElement.textContent = offsetFormatted
    card.classList.remove('current', 'hidden');
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone; // ty https://stackoverflow.com/questions/6939685/get-client-time-zone-from-browser#37512371
    if (tz === timezone.timezone) {
      card.classList.add('current');
      const yourcard = document.getElementById("card-user")
      yourcard.classList.add('hidden')
    }
  });
};

generateTimecards();
updateAllTimes();
setInterval(updateAllTimes,1000);

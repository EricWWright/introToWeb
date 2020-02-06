const weather0 = document.getElementById('weather0');
const temp0 = document.getElementById('temp0');
const img0 = document.getElementById('day0_img');

const weather1 = document.getElementById('weather1');
const temp1 = document.getElementById('temp1');
const img1 = document.getElementById('day1_img');

const weather2 = document.getElementById('weather2');
const temp2 = document.getElementById('temp2');
const img2 = document.getElementById('day2_img');

const weather3 = document.getElementById('weather3');
const temp3 = document.getElementById('temp3');
const img3 = document.getElementById('day3_img');

const weather4 = document.getElementById('weather4');
const temp4 = document.getElementById('temp4');
const img4 = document.getElementById('day4_img');


const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() +1;
let dayOfMonth = now.getDate();
let dayOfWeek = now.getDay();

const day0 = document.getElementById('day0');
const day1 = document.getElementById('day1');
const day2 = document.getElementById('day2');
const day3 = document.getElementById('day3');
const day4 = document.getElementById('day4');

function days(dayOfWeek) {
  if (dayOfWeek > 6) {
    dayOfWeek = 0;
  }
  switch(dayOfWeek) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  };
};

day0.innerHTML = days(dayOfWeek);
day1.innerHTML = days(dayOfWeek + 1);
day2.innerHTML = days(dayOfWeek + 2);
day3.innerHTML = days(dayOfWeek + 3);
day4.innerHTML = days(dayOfWeek + 4);

let api = '48e1791dc5efe75fcfc48198db9d7ed4';
let city = 'Salt Lake City, UT';
let country = 'US';
let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&APPID=${api}`;

const desc = "Weather description:\n";
const temperture = "Temperture:\n";
fetch(url)
.then(response => response.json())
.then(data => {
  console.log(data);
  let img0i = data.list[0].weather[0].icon;
  let img1i = data.list[8].weather[0].icon;
  let img2i = data.list[16].weather[0].icon;
  let img3i = data.list[24].weather[0].icon;
  let img4i = data.list[32].weather[0].icon;

  weather0.innerHTML = `<strong>${desc}</strong> ${data.list[0].weather[0].description}`;
  temp0.innerHTML = `<strong>${temperture}</strong> ${data.list[0].main.temp + ' &deg;F'}`;
  img0.src = `http://openweathermap.org/img/wn/${img0i}@2x.png`;

  weather1.innerHTML = `<strong>${desc}</strong> ${data.list[8].weather[0].description}`;
  temp1.innerHTML = `<strong>${temperture}</strong> ${data.list[8].main.temp + ' &deg;F'}`;
  img1.src = `http://openweathermap.org/img/wn/${img1i}@2x.png`;

  weather2.innerHTML = `<strong>${desc}</strong> ${data.list[16].weather[0].description}`;
  temp2.innerHTML = `<strong>${temperture}</strong> ${data.list[16].main.temp + ' &deg;F'}`;
  img2.src = `http://openweathermap.org/img/wn/${img2i}@2x.png`;

  weather3.innerHTML = `<strong>${desc}</strong> ${data.list[24].weather[0].description}`;
  temp3.innerHTML = `<strong>${temperture}</strong> ${data.list[24].main.temp + ' &deg;F'}`;
  img3.src = `http://openweathermap.org/img/wn/${img3i}@2x.png`;

  weather4.innerHTML = `<strong>${desc}</strong> ${data.list[32].weather[0].description}`;
  temp4.innerHTML = `<strong>${temperture}</strong> ${data.list[32].main.temp + ' &deg;F'}`;
  img4.src = `http://openweathermap.org/img/wn/${img4i}@2x.png`;
    
  })
  .catch(e => console.log(e));
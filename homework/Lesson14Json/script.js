fetch('http://api.openweathermap.org/data/2.5/weather?lat=49.8383&lon=24.0232&&lang=ua&units=metric&appid=a3a1973efbdcf68716ac3f0f486e3233')

.then(function (resp) { 
  return resp.json()
})

.then(function (data) {
    console.log(data);
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '&deg';
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = data.wind.speed;
    document.querySelector('.description').textContent = data.weather[0]['description'];
    document.getElementsByClassName('icon')[0].innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0]['icon']}.png">`;
    
    
})

.catch(function () {
    // catch any errors
});




// Годинник
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function timeBegan() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('timeNow').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    timeBegan()
  }, 500);
}
timeBegan();

// Дата
const dateEl = document.getElementById('dateId');
const days = ['Понеділок','Вівторок','Середа','Четвер','П'+"'"+'ятниця','Субота','Неділя'];
const months = ['Січ','Лют','Бер','Кві','Тра','Чер','Лип','Сер','Вер','Жов','Лис','Гру'];

  console.log(dateEl);

setInterval(() =>{
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();

  dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month];

}, 1000)


// погода погодинно
function renderDetails(data) {
  let detailsDataContainer = document.querySelector('.details');
  let details = '';

  for (let i = 0; i < 6; i++) {
    let item = data.list[i];

    let icon = `<img src="https://openweathermap.org/img/w/${data.weather[0]['icon']}.png">`;
    let temp = getTemperature(item.main.temp);
    let hours = ( i == 0 ? 'Зараз' : getHoursString(item.dt * 1000));

    let template = `< class="details">
      <p class="time">${hours}</p>
      <ul class="icon">
        <li>${icon}</li>
      </ul>
      <p>t&deg;: <span class="temperature${temp}"></span>C</p>
    </div>`;
    details += template;
  }
  detailsDataContainer.innerHTML = details;
}


fetch('http://api.openweathermap.org/data/2.5/forecast?lat=49.8383&lon=24.0232&lang=ua&units=metric&appid=a3a1973efbdcf68716ac3f0f486e3233')

.then(function (resp) { 
  return resp.json()
})

.then(function (data) {
    console.log(data);
    document.querySelector('.temperatura1').innerHTML = Math.round(data.list[1].main.temp) + '&deg';
    document.querySelector('.temperatura2').innerHTML = Math.round(data.list[2].main.temp) + '&deg';
    document.querySelector('.temperatura3').innerHTML = Math.round(data.list[3].main.temp) + '&deg';
    document.querySelector('.temperatura4').innerHTML = Math.round(data.list[4].main.temp) + '&deg';
    document.getElementsByClassName('icon')[1].innerHTML = `<img src="https://openweathermap.org/img/w/${data.list[1].weather[0]['icon']}.png">`;
    document.getElementsByClassName('icon')[2].innerHTML = `<img src="https://openweathermap.org/img/w/${data.list[2].weather[0]['icon']}.png">`;
    document.getElementsByClassName('icon')[3].innerHTML = `<img src="https://openweathermap.org/img/w/${data.list[3].weather[0]['icon']}.png">`;
    document.getElementsByClassName('icon')[4].innerHTML = `<img src="https://openweathermap.org/img/w/${data.list[4].weather[0]['icon']}.png">`;
    document.querySelector('.time1').innerHTML = (data.list[1]['dt_txt']);
    document.querySelector('.time2').innerHTML = (data.list[2]['dt_txt']);
    document.querySelector('.time3').innerHTML = (data.list[3]['dt_txt']);
    document.querySelector('.time4').innerHTML = (data.list[4]['dt_txt']);

})

.catch(function () {
    // catch any errors
});

let dat = {
  "cod": "200",
  "message": 0.0082,
  "cnt": 40,
  "list": [
    {
      "dt": 1642896000,
      "main": {
        "temp": 283.76,
      },
      "weather": [
        {
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2017-01-30 18:00:00"
    },
    {
      "dt": 1642906800,
      "main": {
        "temp": 283.76,
      },
      "weather": [
        {
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2017-01-30 18:00:00"
    },
    {
      "dt": 1642917600,
      "main": {
        "temp": 283.76,
      },
      "weather": [
        {
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2017-01-30 18:00:00"
    },
    {
      "dt": 1485799200,
      "main": {
        "temp": 283.76,
      },
      "weather": [
        {
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2017-01-30 18:00:00"
    },
  ],
  "city": {
    "id": 702550,
    "name": "Lviv",
    "coord": {
      "lat": 49.8383,
      "lon": 24.0232
    },
    "country": "none"
  }
}


// фон

theTime = new Date();
theHour = theTime.getHours();
if(theHour > 6 && theHour < 18){
document.write('<body background="day.jpeg" text="day" >');

}
else{
document.write('<body background="night.jpeg" text="night" >');
}
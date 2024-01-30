// selectors
const Humidity = document.getElementById("humidity-numbers");
const Pressure = document.getElementById("Pressure-number");
const windSpeed = document.getElementById("wind-speed");
const dataDate = document.getElementById("date");
const timeData = document.getElementById("time");
const currentTemp = document.getElementById("temp");
const currentLocation = document.getElementById("location");
let imageContainer =document.getElementById('image-container')
let img = document.createElement("img");
img.classList.add('active');

const API_KEY = 'f2dfadf0b98bc0afe6a0338a641c4d39'

const Base_url = `http://openweathermap.org/img/w/`

const monthsData = [
  "jan",
  "feb",
  "mar",
  "april",
  "may",
  "june",
  "july",
  "august",
  "sep",
  "oct",
  "nov",
  "dec",
];
const weekDays = [
  "sunday",
  "Monday",
  "tuesday",
  "wednesday",
  "thurday",
  "friday",
  "saturday",
];

const date = new Date();
const months = date.getMonth();
const day = date.getDay();
const currentDate = date.getDate();

dataDate.innerHTML = `${weekDays[day]} ${currentDate} ${monthsData[months]}`;



const fetchData = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        let { latitude, longitude } = pos.coords;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => displayUi(data));
      },
      function (e) {
        console.log(e);
      }
    );
  };
  fetchData();

  const displayUi = (data) => {
    console.log(data);
    const { humidity, pressure, temp } = data?.main;
    const { speed } = data?.wind;
    const{name}= data;
    const {icon} = data?.weather[0];
    console.log(humidity, pressure, temp);
    console.log(name);
    Humidity.innerHTML = `${humidity}`;
    windSpeed.innerHTML = `${speed}`;
    currentTemp.innerHTML = `${temp}`;
    currentLocation.innerHTML= `${name}`;
    img.src = `${Base_url}${icon}.png`;
    imageContainer.appendChild(img);
   
  };


  
  
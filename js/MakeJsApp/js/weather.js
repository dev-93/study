const weather = document.querySelector(".weather-box"),
  area = document.querySelector(".js-area"),
  nowDegree = weather.querySelector(".now-degree"),
  minDegree = weather.querySelector(".min-degree"),
  maxDegree = weather.querySelector(".max-degree");

const API_KEY = "8ffece332fcf3dc518ba4a18c1176e4b";
const COORDS = "coords";

function getWeather(lat, lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function(response){
    return response.json();
  }).then(function(json){
    const place = json.name;
    const nowDeg = json.main.temp;
    const minDeg = json.main.temp_min;
    const maxDeg = json.main.temp_max;
    
    area.innerText = `You are in ${place}`;
    nowDegree.innerText = `현재 : ${nowDeg}도`;
    minDegree.innerText = `최저온도: ${minDeg} / `;
    maxDegree.innerText = `최고온도: ${maxDeg}`;
  });
}

function saveCoods(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoods(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(){
  console.log("can't access geo location");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null){
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}


function init(){
  loadCoords();
}

init();
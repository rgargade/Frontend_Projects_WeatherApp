const button = document.getElementById('search-button');
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityName){
   const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=443910e803ff40e0baf31004241806&q=${cityName}&aqi=yes`);
   return await promise.json();
}

button.addEventListener("click", async ()=>{
  const value = cityInput.value;
  const result = await getData(value);
  cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
  cityTime.innerText = `${result.location.localtime}`;
  cityTemp.innerText = `${result.current.temp_c}`;
})



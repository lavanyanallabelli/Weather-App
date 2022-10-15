/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/


// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key

  const options = {
    method:'GET',
    headers:{
      ''
    }
  }

   fetch( 'https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial')
   .then(response => response.json())
   .then(data=>console.log(data.weather[0].main))
 
   .catch(err=>console.log(err));


  //CODE GOES HERE
}
getWeatherData()

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  showWeatherData()

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  document.getElementById("temp").innerText=weatherData.main.temp
  document.getElementById("min-temp").innerText=weatherData.temp_min
  document.getElementById("max-temp").innerText=weatherData.temp_max
  document.getElementById("city-name").innerText=weatherData.name
  document.getElementById("weather-type").innerText=weatherData.weather[0].main
  //CODE GOES HERE
  
}




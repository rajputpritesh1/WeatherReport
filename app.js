const apiKey = "6d770d87922aa4da4dc5707b9b2f923c";
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?units-metric&q=";
      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");

      async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }else{
            
        }
        var data = await response.json();

        // Temp Conversion because temparate show in this api in kelvin form
        function kelvinToCelsius(kelvin) {
          return kelvin - 273.15;
        }

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
        Math.round(kelvinToCelsius(data.main.temp)) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
            
      }

      searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
      })
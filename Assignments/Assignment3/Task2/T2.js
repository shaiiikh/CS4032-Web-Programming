function fetchWeather(city) {
    const apiKey = "98aae6a121a8ade5f2176f7b4b71a150";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('No weather found.');
        }
        return response.json();
      })
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        alert('No weather found. Please try again.');
      });
  }
  
  function displayWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
  
    document.querySelector(".city").innerText = `Weather in ${name}`;
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = `${temp}°C`;
    document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h`;
  
    document.querySelector(".weather").classList.remove("loading");
  }
  
  document.querySelector("#search-btn").addEventListener("click", function () {
    const city = document.querySelector(".search-bar").value;
    fetchWeather(city);
  });
  
  document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const city = document.querySelector(".search-bar").value;
      fetchWeather(city);
    }
  });
  
  fetchWeather("Karachi");
async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "YOUR_API_KEY_HERE";

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    document.getElementById("result").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>☁ Weather: ${data.weather[0].main}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
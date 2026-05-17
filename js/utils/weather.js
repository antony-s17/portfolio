const getWeather = () => {
  const API_KEY = '8cf98ec1da984a40b23173434260905';
  const weatherContainer = document.getElementById('weather');
  
  if (!weatherContainer) {
    return
  }
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      try {
        const { latitude, longitude } = position.coords
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}&lang=es`
        )
        if (!response.ok) {
            throw new Error('Error al obtener el clima')
        }
        const data = await response.json()
        const city = data.location.name
        const temp = Math.round(data.current.temp_c)
        const icon = data.current.condition.icon
        const condition = data.current.condition.text
        weatherContainer.innerHTML = `
          <div class="weather-widget">
            <div class="weather-top">
              <img src="https:${icon}" alt="${condition}" class="weather-icon">
              <span class="weather-temp">${temp}°C</span>
            </div>
            <span class="weather-city">${city}</span>
          </div>
        `
      } catch (error) {
        console.error('Error obteniendo el clima:', error)
        weatherContainer.innerHTML = ''
      }
    },
    (error) => {
      console.error('Error de geolocalización:', error)
      weatherContainer.innerHTML = ''
    }
  )
}

export default getWeather
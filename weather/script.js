function updateDateTime() {  
    const now = new Date(); 
    const options = {  
        year: 'numeric',  
        month: 'long',  
        day: 'numeric',  
        hour: '2-digit',  
        minute: '2-digit',  
        second: '2-digit',  
        hour12: true  
    }; 

   
    const formattedDateTime = now.toLocaleString('en-US', options);  

    
    document.getElementById('datetime').innerText = formattedDateTime;  
}  


updateDateTime();  

setInterval(updateDateTime, 1000);  

const apiKey = '153db001ec0248ec90500739242208'; 
const defaultCity = 'Iligan City'; 

async function fetchWeather(city) {  
    try {  
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);  
        const data = await response.json();  
        if (data.error) {  
            alert(data.error.message);  
            return;  
        }  
        document.getElementById('temperature').textContent = `${data.current.temp_c}°C`;  
        document.getElementById('humidity').textContent = `${data.current.humidity}%`;  
        document.getElementById('wind').textContent = `${data.current.wind_kph} km/h`;  
    } catch (error) {  
        console.error('Error fetching weather data:', error);  
    }  
}  

  
fetchWeather(defaultCity);  
document.getElementById('searchButton').addEventListener('click', () => {  
const cityInput = document.getElementById('cityInput').value;  
document.querySelector('.location-label').innerText = cityInput

var mapurl = `http://maps.google.com/maps?q=${cityInput}&z=10&output=embed`;
document.querySelector('iframe').setAttribute('src',mapurl)
if (cityInput) {  
    fetchWeather(cityInput);  
}  
});

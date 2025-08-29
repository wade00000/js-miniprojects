const API_KEY = "759d83d92a6a6a166eb616225b5d227e"
defaultWeather()
const widget =  document.querySelector("#weather-widget")


function defaultWeather(){
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=Nairobi&limit=1&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            let coords = {
                "lat" : data[0].lat,
                "lon" : data[0].lon
            }
            renderWeather(coords)
        })
}

function renderWeather(place){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${place.lat}&lon=${place.lon}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
            widget.innerHTML=`
            <h2>${data.name}</h2>
            <h3>${data.sys.country}</h3>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
            <p>Desc : ${data.weather[0].description}</p>
            <p>Temperature : ${data.main.temp} °C</p>
            `        
        })

}
const weatherApi ={
    key: 'cdcb745bd706057da370a8316bbfbd3b',
    base: 'http://api.openweathermap.org/data/2.5/weather'
}

const serachInputBox = document.getElementById('input-box')

serachInputBox.addEventListener('keypress', (event)=>{
    if(event.keyCode == 13){
        console.log(serachInputBox.value)
        getWeatherReport(serachInputBox.value)
        document.querySelector('.weather-body').style.display='block'
    }
})

function getWeatherReport(city){
    fetch(`${weatherApi.base}?q=${city}&appid=${weatherApi.key}`)
    .then(weather => {
        console.log(weather);
        return weather.json();
    }).then(showWeatherReport)
}

function showWeatherReport(weather){
    let city = document.getElementById('city')
    city.innerHTML= `${weather.name},${weather.sys.country}`

    let temperature = document.getElementById('temp')
    temperature.innerHTML=`${Math.round(weather.main.temp-273)}&deg;C`

    let minmax = document.getElementById('min-max')
    minmax.innerHTML= `${weather.main.temp_min-273}&deg;C (min) / ${weather.main.temp_max-273}&deg;C (max)`

    let weatherType = document.getElementById('weather')
    weatherType.innerHTML = `${weather.weather[0].main}`
    console.log(weatherType.textContent);
    
    if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('images/Cloud.jpg')"
    } else if (weatherType.textContent == 'Sunny'){
        document.body.style.backgroundImage = "url('images/Sunny.jpg')"
    }else if (weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('images/Rain.jpg')"
    } else if (weatherType.textContent == 'Smoke'){
        document.body.style.backgroundImage = "url('images/Sunny.jpg')"
    }else if (weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url('images/Sunny.jpg')"
    }
    document.querySelector('.date').innerHTML = dateManage(skim)
}

let skim = new Date()

function dateManage(dateArg){

    let months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let year = dateArg.getFullYear()
    
    let day = days[dateArg.getDay()]
    let month = months[dateArg.getMonth()]
    let date = dateArg.getDate()
    const modifyDate = `${date} ${month} (${day}), ${year}`;
    console.log( modifyDate);
    return  modifyDate
}




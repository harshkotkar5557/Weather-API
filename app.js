const weatherApi ={
    key: 'cdcb745bd706057da370a8316bbfbd3b',
    base: 'http://api.openweathermap.org/data/2.5/weather'
}

const serachInputBox = document.getElementById('input-box')

serachInputBox.addEventListener('keypress', (event)=>{
    if(event.keyCode == 13){
        console.log(serachInputBox.value)
        getWeatherReport(serachInputBox.value)
    }
})

function getWeatherReport(city){
    fetch(`${weatherApi.base}?q=${city}&appid=${weatherApi.key}`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport)
}

function showWeatherReport(weather){
    let city = document.getElementById('city')
    city.innerHTML= `${weather.name},${weather.sys.country}`

    let temperature = document.getElementById('temp')
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`

    let minmax = document.getElementById('min-max')
    minmax.innerHTML= `${weather.main.temp_min}&deg;C (min) / ${weather.main.temp_max}&deg;C (max)`

    let date = document.getElementById('date')
    let todayDate = new Date();
    console.log(todayDate);
    date.innerText = dateManage(todayDate);

}


function dateManage(dateArg){

    let months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    let year = dateArg.getFullYear()
    let day = days[dateArg.getDay()]
    let month = months[dateArg.getFullYear()]
    let date = dateArg.getDate()

    return `${date} ${month} (${day}), ${year}`;
}
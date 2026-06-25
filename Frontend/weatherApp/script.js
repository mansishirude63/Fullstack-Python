async function getData() {

   const cityName = document.getElementById("cityInput").value
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=94550e2320ea30a588b9488772a86d8a`)
        .then(res => res.json())
        .then(data => renderData(data))
}


function renderData(data) {
    document.getElementById("result").innerHTML = `
    <h1> ${data.name} (<i>${data.sys.country}</i>)</h1>
    <p>🌡️Temperature : <b> ${data.main.temp}<sup>o</sup>C </b></p>
    <p>💧Humidity : <b> ${data.main.humidity}</b></p>
    <p>⛅${data.weather[0].main}: <b>${data.weather[0].description}. </b></p> 
    
    
    `
}
document.getElementById("btnSubmit").addEventListener('click', getData)
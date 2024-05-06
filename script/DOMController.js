import MainController from "./index.js";



let DOMController = (function(){

    let searchBtn = document.querySelector("button");
    let searchInp = document.querySelector("input");
    searchBtn.addEventListener("click",()=>MainController.UpdateData(searchInp.value));

    let dispLocation = document.querySelector("#location > h2");
    let dispDate = document.querySelector("#location > h3");
    let dispTemp = document.querySelector("#currentTemp > h4");
    let dispTempH = document.querySelector("#currentTemp > div > p:nth-child(1)");
    let dispTempL = document.querySelector("#currentTemp > div > p:nth-child(2)");
    let dispWeatherI = document.querySelector("#currentWeather > img");
    let dispWeatherT = document.querySelector("#currentWeather > p");
    let forecastWrapper = document.querySelector("#forecast");
    function displayWeather(data){
        console.log("Updating DOM...")
        console.log(data);
        dispLocation.innerHTML = data.location.name +', '+ data.location.region +', '+ data.location.country;
        let cTime = new Date(data.current.last_updated);
        dispDate.innerHTML = cTime.toLocaleDateString("en-US", {day: 'numeric', month: 'long', year: 'numeric'}) + ' | ' + cTime.getHours() +':'+cTime.getMinutes();
        
        dispTemp.innerHTML = data.current.temp_c + '°';
        dispTempH.innerHTML = 'H: ' + data.forecast.forecastday[0].day.maxtemp_c + '°';
        dispTempL.innerHTML = 'L: ' + data.forecast.forecastday[0].day.mintemp_c + '°';

        dispWeatherI.setAttribute("src", data.current.condition.icon);
        dispWeatherT.innerHTML = data.current.condition.text;   

        forecastWrapper.innerHTML = "<h4>Upcoming Days</h4>";
        data.forecast.forecastday.forEach(forecast => {

            let weekday = new Date(forecast.date).toLocaleString("en-US",{weekday:"short"});
            weekday = weekday[0].toUpperCase() + weekday.slice(1);
            if (new Date(forecast.date).getDay() == new Date().getDay()) weekday = "Today";
            if (new Date(forecast.date).getDay() == new Date().getDay() + 1) weekday = "Tomorrow";

            let rotation = 0;
            forecast.hour.forEach((hour, i) =>{ rotation += hour.wind_degree })
            rotation = rotation / 24;
            rotation -= 135;

            forecastWrapper.innerHTML += `
                <div class="forecastDay">
                    <div class="dayHeader">
                        <img src="`+forecast.day.condition.icon+`" alt="">
                        <div>
                            <h5>`+weekday+`</h5>
                            <h6>`+new Date(forecast.date).toLocaleString("en-US",{day:'numeric', month:'short'})+`</h6>
                        </div>
                    </div>

                    <div class="dayAttributes">
                        <div class="dayAttribute">
                            <img src="./img/thermometer.svg" alt="">
                            <div>
                                <p>`+forecast.day.maxtemp_c + '°'+`</p>
                                <p>`+forecast.day.mintemp_c + '°'+`</p>
                            </div>
                        </div>
        
                        <div class="dayAttribute">
                            <img src="./img/weather-pouring.svg" alt="">
                            <p>`+forecast.day.daily_chance_of_rain + '%'+`</p>
                        </div>
        
                        <div class="dayAttribute">
                            <img src="./img/weather-windy.svg" alt="">
                            <p>`+forecast.day.maxwind_kph + 'kph'+`</p>
                            <img src="./img/arrow-bottom-right-thin.svg" alt="" style="transform: rotate(`+rotation+`deg);">
                        </div>
        
                        <div class="dayAttribute">
                            <img src="./img/water-percent.svg" alt="">
                            <p>`+forecast.day.avghumidity + '%'+`</p>
                        </div>
                    </div>
                </div>`
        });
    }

    return {displayWeather};
})();
export default DOMController;

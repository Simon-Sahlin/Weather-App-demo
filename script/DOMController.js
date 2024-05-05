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
    function displayWeather(data){
        console.log("Updating DOM...")
        console.log(data);
        dispLocation.innerHTML = data.location.name +', '+ data.location.region +', '+ data.location.country;
        let cTime = new Date(data.current.last_updated);
        dispDate.innerHTML = cTime.toLocaleDateString("en-US", {day: 'numeric', month: 'long', year: 'numeric'}) + ' | ' + cTime.getHours() +':'+cTime.getMinutes();
        
        dispTemp.innerHTML = data.current.temp_c + '°';

        dispWeatherI.setAttribute("src", data.current.condition.icon);
        dispWeatherT.innerHTML = data.current.condition.text;   
    }

    return {displayWeather};
})();
export default DOMController;

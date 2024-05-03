import MainController from "./index.js";



let DOMController = (function(){

    let searchBtn = document.querySelector("button");
    let searchInp = document.querySelector("input");
    searchBtn.addEventListener("click",()=>MainController.UpdateData(searchInp.value));

    let weatherDisp = document.querySelector("p");
    function displayWeather(data){
        weatherDisp.innerHTML = data;
    }

    return {displayWeather};
})();
export default DOMController;

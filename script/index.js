import weatherAPI from "./weatherAPI.js";
import DOMController from "./DOMController.js";




let MainController = (function(){

    async function UpdateData(location){
        DOMController.hideWeather();
        DOMController.showLoading();
        let data = await weatherAPI.getWeatherData(location);
        console.log("Got data:")
        console.log(data);
        DOMController.hideLoading();
        DOMController.displayWeather(data);
    }

    return {UpdateData};
})();
export default MainController;


MainController.UpdateData("Gothenburg");
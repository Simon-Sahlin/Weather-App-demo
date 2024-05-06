import weatherAPI from "./weatherAPI.js";
import DOMController from "./DOMController.js";




let MainController = (function(){

    function throwError(location, data, msg){
        DOMController.hideWeather();
        DOMController.hideLoading();
        console.log("ERROR AT: " + location + "\nData: ");
        console.log(data);
        DOMController.showError(msg);
    }

    async function UpdateData(location){

        console.log("Searching for: " + location);

        DOMController.hideWeather();
        DOMController.hideError();
        DOMController.showLoading();

        let data = await weatherAPI.getWeatherData(location);
        if (!data)
            return;
        console.log("Got data:")
        console.log(data);

        DOMController.hideLoading();
        DOMController.displayWeather(data);

    }

    return {UpdateData, throwError};
})();
export default MainController;


MainController.UpdateData("Gothenburg");
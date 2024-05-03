import weatherAPI from "./weatherAPI.js";
import DOMController from "./DOMController.js";




let MainController = (function(){

    async function UpdateData(location){
        let data = await weatherAPI.getWeatherData(location);
        console.log("Got data:")
        console.log(data);
        DOMController.displayWeather(JSON.stringify(data));
    }

    return {UpdateData};
})();
export default MainController;


// MainController.UpdateData("Gothenburg");
import MainController from "./index.js";


let APIKey = '42638b4a1cd84e9f8c6125016242604'; //Swiper no swiping!

let weatherAPI = (function(){

    async function getWeatherData(location){
        let data = await fetchWeatherData(location);

        if (data.error){
            let errorMsg = "Unknown error";
            switch(data.error.code){
                case 1002:
                case 1005:
                case 2006:
                case 2007:
                case 2008:
                case 2009:
                case 9000:
                case 9001:
                case 9999:
                    errorMsg = "Interal Error. Error Code: "+data.error.code;
                    break;
                case 1003:
                    errorMsg = "Please enter a location. Error Code: "+data.error.code;
                    break;
                case 1006:
                    errorMsg = "No location found, please enter a valid location. Error Code: "+data.error.code;
                    break;
            }
            MainController.throwError("Error Handler", data, errorMsg);
            return null;
        }

        let formattedData = formatWeatherData(data);
        return formattedData;
    }

    async function fetchWeatherData(location){
        let data = "";
        await fetch('https://api.weatherapi.com/v1/forecast.json?days=3&key='+APIKey+'&q='+location, {mode: 'cors'})
            .then(function(response){
                return response.json();
            }).catch(function(response){
                MainController.throwError("Catch1", "No data", response);
            })
            .then(function(response){
                data = response;
            })
            .catch(function(response){
                MainController.throwError("Catch1", "No data", response);
            });
        return data;
    }

    function formatWeatherData(data){
        //If I ever switch API, reformat data here...
        let formattedData = data;
        return formattedData;
    }

    return {getWeatherData};
})();
export default weatherAPI;




let APIKey = '42638b4a1cd84e9f8c6125016242604'; //Swiper no swiping!

let weatherAPI = (function(){

    async function getWeatherData(location){
        let data = await fetchWeatherData(location);
        let formattedData = formatWeatherData(data);
        return formattedData;
    }

    async function fetchWeatherData(location){
        let data = "";
        await fetch('https://api.weatherapi.com/v1/forecast.json?days=3&key='+APIKey+'&q='+location, {mode: 'cors'})
            .then(function(response){
                return response.json();
            })
            .then(function(response){
                data = response;
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

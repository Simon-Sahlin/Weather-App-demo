


let APIKey = '42638b4a1cd84e9f8c6125016242604'; //Swiper no swiping!

let weatherAPI = (function(){

    async function getWeatherData(){
        let data = "";
        await fetch('https://api.weatherapi.com/v1/current.json?key='+APIKey+'&q=gothenburg', {mode: 'cors'})
            .then(function(response){
                return response.json();
            })
            .then(function(response){
                data = response;
            });
        return data;
    }

    return {getWeatherData};
})();
export default weatherAPI;

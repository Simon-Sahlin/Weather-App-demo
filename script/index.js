import weatherAPI from "./weatherAPI.js";

async function UpdateData(){
    let data = weatherAPI.getWeatherData("huh");
    console.log(data);
}

UpdateData();
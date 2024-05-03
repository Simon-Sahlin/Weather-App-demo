import weatherAPI from "./weatherAPI.js";

async function UpdateData(){
    let data = await weatherAPI.getWeatherData("huh");
    console.log("Got data:")
    console.log(data);
}

UpdateData();
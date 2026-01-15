async function fetchWeather(location){
    try{
        const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+location+"?key=AUUK6H4TFUHCECMQJZX8EXUJR";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(e){
        alert(e);
    }
}

export {fetchWeather};
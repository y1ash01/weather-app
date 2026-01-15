import { fetchWeather } from "./api-fetch";
import { clearDom } from "./clear-dom";
import { getLocation } from "./get-location";
import { createDom } from "./load-dom";
import { loadGif } from "./load-giphy";

const searchBtn = document.querySelector('#search');

searchBtn.addEventListener('click',async ()=>{
    const query = getLocation();
    if(query == '') return;
    clearDom();
    const data = await fetchWeather(query);
    const sticker = await loadGif(data.days[0].icon);
    createDom(data,sticker);
});

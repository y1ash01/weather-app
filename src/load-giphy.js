async function loadGif(searchParameter){
    const url = "https://api.giphy.com/v1/stickers/search?api_key=cR0Ge0ox6wpAu65z4Bw6v85NJZeaF9Qn&q="+searchParameter+"&limit=1";
    const response = await fetch(url);
    const responseJson = await response.json();
    const sticker = responseJson.data[0].images.original.url;
    return sticker;
}

export{loadGif};
const body = document.querySelector('body');

function createDom(data,gif){
    try{
        const card = document.createElement('div');
        const title = document.createElement('h2');
        const temp = document.createElement('div');
        const humidity = document.createElement('div');
        const conditions = document.createElement('div');
        const sticker = document.createElement('img');
        const semantic = document.createElement('div');
        
        sticker.src = gif;
        sticker.height = 30;
        conditions.textContent = "condition: "+data.days[0].conditions;
        humidity.textContent = "humidity: "+data.days[0].humidity;
        temp.textContent = "temperature: "+data.days[0].temp+' °F';
        card.classList.add('card');
        title.textContent  = data.address;
        semantic.classList.add('semantics');
        
        card.appendChild(title);
        semantic.appendChild(conditions);
        semantic.appendChild(sticker);
        card.appendChild(semantic);
        card.appendChild(temp);
        card.appendChild(humidity);
        body.appendChild(card);
    }
    catch(e){
        alert(e);
    }
}

export {createDom};
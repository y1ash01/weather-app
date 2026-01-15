const body = document.querySelector('body');

function clearDom(){

const children = body.children;
    if(children.length > 2){
        const card = document.querySelector('.card');
        card.remove();
    }
}

export {clearDom};
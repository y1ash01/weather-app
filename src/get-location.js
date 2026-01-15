const queryField = document.querySelector('#location');

function getLocation(){
    const query = queryField.value;
    queryField.value = '';
    return query;
}

export {getLocation};
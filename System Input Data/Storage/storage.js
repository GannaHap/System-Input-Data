const CACHE_KEY = 'data_form';

function checkForStorage() {
    return typeof(Storage) !== "undefined";
}

function putData(data) {
    if( checkForStorage() ) {
        let dataForm = null;
        if( localStorage.getItem(CACHE_KEY) === null ) {
            dataForm = [];
        } else {
            dataForm = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        dataForm.push(data);
    
        localStorage.setItem(CACHE_KEY, JSON.stringify(dataForm));
    }
}

function showData() {
    if(checkForStorage) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}



function renderData() {
    const myData = showData();
    let listData = document.querySelector('.data');
    listData.innerHTML = '';
    for ( let d of myData ) {
        let row = document.createElement('tr');    
        row.innerHTML += `<td>${d.username ? `${d.username }` : '-'}</td>`;
        row.innerHTML += `<td>${d.jobs? `${d.jobs}` : '-'}</td>`;
        row.innerHTML += `<td>${d.email ? `${d.email }` : '-'}</td>`;
        row.innerHTML += `<td>${d.telp ? `${d.telp }` : '-'}</td>`;
        row.innerHTML += `<td>${d.address ? `${d.address }` : '-'}</td>`;



    
        listData.appendChild(row);
    }
}
renderData();
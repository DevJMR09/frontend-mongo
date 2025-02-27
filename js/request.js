// const url = 'http://localhost:3000/api/';
const url = 'https://backend-mongo-qpfc.onrender.com/api/';

function sendRequest(endpoint, method, data) {
    let request = new XMLHttpRequest();
    request.open(method, url + endpoint);
    request.responseType = 'json';
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(data ? JSON.stringify(data) : data);
    return request;
};
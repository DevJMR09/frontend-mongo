function viewData() {
    let request = sendRequest('clientes', 'GET', '');
    let table = document.getElementById('clientes-table');
    table.innerHTML = '';
    request.onload = function () {
        let data = request.response;
        console.log(data);
        data.forEach(element => {
            table.innerHTML += `
            <tr>
            <th>${element._id}</th>
            <td>${element.nombres}</td>
            <td>${element.apellidos}</td>
            <td>${element.documento}</td>
            <td>${element.correo}</td>
            <td>${element.telefono}</td>
            <td>${element.direccion}</td>
            <td>
                <button type="button" class="btn btn-primary" onclick = 'window.location="./formulario-cliente.html?id=${element._id}"'>Editar</button>
                <button type="button" class="btn btn-danger" onclick = 'deleteCustomer("${element._id}")'>Eliminar</button>
            </td>
                        
            </tr>
            `;
        });
    };
    request.onerror = function () {
        table.innerHTML = `
            <tr>
                <td colspan="">Error al traer los datos</td>
            </tr>
        `;
    };
};

function deleteCustomer(id) {
    let request = sendRequest('clientes/' + id, 'DELETE', '');
    request.onload = function () {
        viewData();
    };
};

function saveCustomer() {
    let nom = document.getElementById('nombres-n').value;
    let ape = document.getElementById('apellidos-n').value;
    let doc = document.getElementById('documento-n').value;
    let cor = document.getElementById('correo-n').value;
    let tel = document.getElementById('telefono-n').value;
    let dir = document.getElementById('direccion-n').value;
    let data = { 'nombres': nom, 'apellidos': ape, 'documento': doc, 'correo': cor, 'telefono': tel, 'direccion': dir };
    let request = sendRequest('clientes/', 'POST', data);

    request.onload = function () {
        window.location = 'clientes.html';
    }
    request.onerror = function () {
        alert('Error al guardar los datos');
    };
};

function loadDataCustomer(id) {
    let request = sendRequest('clientes/' + id, 'GET', '');
    let nom = document.getElementById('nombres-n');
    let ape = document.getElementById('apellidos-n');
    let doc = document.getElementById('documento-n');
    let cor = document.getElementById('correo-n');
    let tel = document.getElementById('telefono-n');
    let dir = document.getElementById('direccion-n');

    request.onload = function () {
        let data = request.response;
        nom.value = data.nombres;
        ape.value = data.apellidos;
        doc.value = data.documento;
        cor.value = data.correo;
        tel.value = data.telefono;
        dir.value = data.direccion;
    };
    request.onerror = function () {
        alert('Error al cargar los datos');
    };
};

function editDataCustomer(id) {
    let nom = document.getElementById('nombres-n').value;
    let ape = document.getElementById('apellidos-n').value;
    let doc = document.getElementById('documento-n').value;
    let cor = document.getElementById('correo-n').value;
    let tel = document.getElementById('telefono-n').value;
    let dir = document.getElementById('direccion-n').value;
    let data = { 'nombres': nom, 'apellidos': ape, 'documento': doc, 'correo': cor, 'telefono': tel, 'direccion': dir };

    let request = sendRequest('clientes/' + id, 'PUT', data);
    request.onload = function () {
        window.location = 'clientes.html';
    };
    request.onerror = function () {
        alert('Error al editar datos');
    };
};
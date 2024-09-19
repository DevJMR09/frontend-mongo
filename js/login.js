const formLogin = document.querySelector('#form-login');

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const validateUser = users.find(user => user.email === email && user.password === password);

    if (!validateUser) {
        alert('Usuario o Contraseña incorrectos');
    } else {
        alert(`Bienvenido ${validateUser.name}`);
    };
    localStorage.setItem('login-success', JSON.stringify('validateUser'));
    window.location.href = 'index.html';
});
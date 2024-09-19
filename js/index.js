const user = JSON.parse(localStorage.getItem('login-success')) || false;
if (!user) {
    window.location.href = 'login.html';
};

const logout = document.querySelector('#logout');
logout.addEventListener('click', () => {
    alert('Sesión cerrada');
    localStorage.removeItem('login-success');
    window.location.href = 'login.html';
});
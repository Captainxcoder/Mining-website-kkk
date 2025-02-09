document.addEventListener("DOMContentLoaded", function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('username');
    const registerDate = new Date().toLocaleDateString();
    const loginDate = new Date().toLocaleDateString();

    document.getElementById('username').textContent = username;
    document.getElementById('register-date').textContent = registerDate;
    document.getElementById('login-date').textContent = loginDate;
});

function deposit() {
    // Deposit logic here
    alert("Deposit function called");
}

function withdraw() {
    // Withdraw logic here
    alert("Withdraw function called");
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
        document.getElementById('loginMessage').textContent = "Login Successful!";
        document.getElementById('loginMessage').style.color = "green";
    } else {
        document.getElementById('loginMessage').textContent = "Invalid email or password!";
        document.getElementById('loginMessage').style.color = "red";
    }
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    document.getElementById('registerMessage').textContent = "Registration Successful!";
});

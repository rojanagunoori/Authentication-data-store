document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/v1/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullName, email, password })
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('getUsersBtn').addEventListener('click', async function() {
    try {
        const response = await fetch('/api/v1/users');
        const data = await response.json();
        const usersList = document.getElementById('usersList');
        usersList.innerHTML = '';
        data.forEach(user => {
            const userItem = document.createElement('div');
            userItem.textContent = `Name: ${user.fullName}, Email: ${user.email}`;
            usersList.appendChild(userItem);
        });
    } catch (error) {
        console.error('Error:', error);
    }
});

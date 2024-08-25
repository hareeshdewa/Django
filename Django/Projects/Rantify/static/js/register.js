document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username && email && password) {
        alert('Registration successful!');
        // You can add code here to handle form submission to a server
        // e.g., using fetch or XMLHttpRequest
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic form validation (more complex validation can be added as needed)
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var successMessage = document.getElementById('successMessage');

    if (name && email && message) {
        // Simulate a successful form submission (replace with actual form submission logic)
        successMessage.textContent = 'Your message has been sent successfully!';
        successMessage.style.display = 'block';
    } else {
        successMessage.textContent = 'Please fill in all fields.';
        successMessage.style.display = 'block';
    }
});

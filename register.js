document.getElementById('sendEmailOtp').addEventListener('click', function() {
    // Simulate sending OTP to email (replace with actual email OTP logic)
    alert('Email OTP sent!');
});

document.getElementById('sendPhoneOtp').addEventListener('click', function() {
    // Simulate sending OTP to phone (replace with actual phone OTP logic)
    alert('Phone OTP sent!');
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var emailOtp = document.getElementById('emailOtp').value;
    var phone = document.getElementById('phone').value;
    var phoneOtp = document.getElementById('phoneOtp').value;
    var password = document.getElementById('password').value;
    var successMessage = document.getElementById('successMessage');

    // Simulate OTP verification (replace with actual verification logic)
    if (emailOtp === '123456' && phoneOtp === '654321') {
        successMessage.textContent = 'Registration successful!';
        successMessage.style.display = 'block';
    } else {
        successMessage.textContent = 'Invalid OTP!';
        successMessage.style.display = 'block';
    }
});

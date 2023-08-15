const form = document.getElementById('registrationForm');
  
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  window.location.href = "http://127.0.0.1:5500/index.html";
  
  const fullName = document.getElementById('fullName').value;
  const mobileNumber = document.getElementById('mobileNumber').value;
  const email = document.getElementById('email').value;
  
  // You can perform further actions here, like sending data to a server or validating input.
  
  // For now, let's just log the collected data to the console.
  console.log('Full Name:', fullName);
  console.log('Mobile Number:', mobileNumber);
  console.log('Email:', email);
});
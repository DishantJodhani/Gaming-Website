function login() {
    // Get the username and password from the form.
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    function myFunction(e){
      e.preventDefault()
      // Redirect the user to the next web page.
      window.location.href = "http://127.0.0.1:5500/index.html";
      }
    // Check if the username and password are correct.
    if (username == "admin" && password == "password") {
      
    } 
    else {
      // Display an error message.
      alert("Invalid username or password.");
    }
  }
  
  $('.btn').click(function() {
    if (this.innerHTML === 'Sign Up') {
      this.innerHTML = 'Sign Out';
    } 
    else {
      this.innerHTML = 'Sign Up';
    }
  });
  
  var btnSignUp = document.getElementById('btnSignUp');
btnSignUp.innerHTML = 'Sign Out';

var btnSignUp = document.getElementById('btnSignUp');
btnSignUp.addEventListener('click', function() {
  btnSignUp.innerHTML = 'Sign Out';
});
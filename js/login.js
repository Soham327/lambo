// js/login.js
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    window.location.href = "index.html"; // Redirect to your main project
  } else {
    alert("Invalid credentials");
  }
});
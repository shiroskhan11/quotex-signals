
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('login-message');

  if (username === "shiroskhan" && password === "hplmanageR11") {
    window.location.href = "/dashboard.html";
  } else {
    message.textContent = "Invalid username or password.";
  }
}

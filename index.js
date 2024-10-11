// Object to store username and password
const credentials = {
    username: "Prakash",
    password: "1234"
};

// Function to log in
function login() {
    // Get the input values
    const inputUsername = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;

    // Check if the entered username and password match the credentials
    if (inputUsername === credentials.username && inputPassword === credentials.password) 
    {
        window.location.href="home.html";
    } else 
    {
        alert("Incorrect username or password!");
    }
}

// Add event listener to the button
document.getElementById("loginBtn").addEventListener("click", login);

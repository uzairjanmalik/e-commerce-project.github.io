const users = {};
function login() {
    const user = document.getElementById("adress").value;
    const password = document.getElementById("pass").value;
 
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    if (!user || !password) {
       document.getElementById("x").innerHTML = "Fill all the blanks first!";
       return;
    }
 
    if (!emailRegex.test(user)) {
       document.getElementById("x").innerHTML = "Enter a valid email address!";
       return;
    }
 
    if (!users[user] || users[user].password !== hash(password)) {
       document.getElementById("x").innerHTML = `You are not signed up! Please sign up first.`;
       return;
    }
 
    console.log(`Log in successful DEAR: ${user}!`);
    document.getElementById("z").innerHTML = `You are logged in. WELCOME!`;
 
    setTimeout(() => {
       document.getElementById("x").innerHTML = "";
       document.getElementById("z").innerHTML = "";
    }, 10000); // Clear messages after 3 seconds (adjust as needed)
 }
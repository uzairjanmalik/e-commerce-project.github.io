const users = {}; // Object to store users and passwords

function signup() {
   const user = document.getElementById("email").value;
   const password = document.getElementById("password").value;

   // Regular expression for email validation
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!user || !password) {
      document.getElementById("t1").innerHTML = "Fill all the blanks first!";
      return;
   }

   if (!emailRegex.test(user)) {
      document.getElementById("t1").innerHTML = "Enter a valid email address!";
      return;
   }

   if (users[user]) {
      document.getElementById("t1").innerHTML = `${user} is already signed up! Try another email.`;
      return;
   }

   // Store username and hashed password
   users[user] = { password: hash(password)};

   console.log(`NAME: Mr.${user}`);
   document.getElementById("t2").innerHTML = `Sign Up Successful Dear ${user}! THANKS FOR PARTICIPATION.`;

   // Clear messages after showing the result
   setTimeout(() => {
      document.getElementById("t1").innerHTML = "";
      document.getElementById("t2").innerHTML = "";
   }, 10000); // Clear messages after 3 seconds (adjust as needed)
}

function hash(password) {
   return password;
}

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

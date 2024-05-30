const users = {}; // Object to store users and passwords

function signup() {
   const user = document.getElementById("email").value;
   const password = document.getElementById("password").value;

   if (!user || !password) {
      document.getElementById("t1").innerHTML = "Fill all the blanks first!";
      return;
   }

   if (users[user]) {
      document.getElementById("t1").innerHTML = `${user} is already signed up! try another email.`;
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

   if (!user || !password) {
      document.getElementById("x").innerHTML = "fill all the blanks first!";
      return;
   }
   if (!users[user] || users[user].password !== hash(password)) {
      document.getElementById("x").innerHTML = `you are not signed up! please sign up first.`;
      return;
   }

   console.log(`log in successful DEAR: ${user}!`);
   document.getElementById("z").innerHTML = `you are loged in. WELCOME!`;

   setTimeout(() => {
      document.getElementById("x").innerHTML = "";
      document.getElementById("z").innerHTML = "";
   }, 10000); // Clear messages after 3 seconds (adjust as needed)
}
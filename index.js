const product = [
    {
        id: 0,
        image: 'images/gg-1.jpeg',
        title: 'Air pods pro',
        price: 120,
    },
    {
        id: 1,
        image: 'images/hh-2.jpeg',
        title: 'Head Phones',
        price: 60,
    },
    {
        id: 2,
        image: 'images/qq-3.jpeg',
        title: 'z-flipable mobile',
        price: 230,
    },
    {
        id: 3,
        image: 'images/xx-4.jpeg',
        title: '250D DSLR Camera',
        price: 100,
    },
    {
        id:4,
        image:'images/cc-5.jpg',
        title:'luxury watch',
        price:300,
    },
    {
        id:5,
        image:'images/w-1.jpg',
        title:'modern style',
        price:200,
    },
    {
        id:6,
        image:'images/w-3.jpg',
        title:'rolex',
        price:700,
    },
    {
        id:7,
        image:'images/w-4.jpg',
        title:'Rado',
        price:360,
    }
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
        <div class='img-box'>
        <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('');
function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}


var cart = [];

function displaycart() {
    let j = 0;
    let Total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartitem').innerHTML = "Your cart is empty";
        document.getElementById("Total").innerHTML = "$ " + 0 + ".00";
    } else {
        document.getElementById('cartitem').innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            Total = Total + price;
            document.getElementById("Total").innerHTML = "$ " + Total + ".00";
            return (
                `<div class='cartitem'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                </div>`
            );
        }).join('');
    }
}

// slider
document.addEventListener('DOMContentLoaded', () => {
    const slideContainer = document.querySelector('.slide-container3');
    const pirElements = document.querySelectorAll('.pir');

    let animationTimeout;

    pirElements.forEach(pirElement => {
        pirElement.addEventListener('mouseenter', () => {
            slideContainer.style.animationPlayState = 'paused';
            if (animationTimeout) {
                clearTimeout(animationTimeout);
            }
        });

        pirElement.addEventListener('mouseleave', () => {
            animationTimeout = setTimeout(() => {
                slideContainer.style.animationPlayState = 'running';
            }, 2000);
        });
    });
});

// sidebar
function moveSidebar() {
    var sidebar = document.getElementById("sidebar");
    var screenWidth = window.innerWidth;
    var sidebarWidth = sidebar.offsetWidth;
    var newPosition = Math.floor(Math.random() * (screenWidth - sidebarWidth));
  
    sidebar.style.right = newPosition + "px";
  }
  
  // Function to check screen width and move the sidebar if necessary
  function checkWidthAndMoveSidebar() {
    var screenWidth = window.innerWidth;
    var sidebar = document.getElementById("sidebar");
  
    if (screenWidth < 300) {
      moveSidebar();
    } else {
      sidebar.style.right = "0px"; // Reset position if screen is wider than 300px
    }
  }
  
  // Call the function initially and on window resize
  window.onload = checkWidthAndMoveSidebar;
  window.onresize = checkWidthAndMoveSidebar;
  
  // Periodically move the sidebar randomly
  setInterval(moveSidebar, 3000);
  

// forms



document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.getElementById("signInForm");
    const signOutBtn = document.getElementById("signOutBtn");
  
    signInForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = signInForm.username.value;
      const password = signInForm.password.value;
  
      // Perform authentication (for simplicity, using hardcoded credentials)
      if (username === "user" && password === "password") {
        // Successful sign-in
        alert("Sign in successful!");
        signIn();
      } else {
        // Failed sign-in
        alert("Incorrect username or password. Please try again.");
      }
    });
  
    signOutBtn.addEventListener("click", function() {
      signOut();
    });
  
    // Function to show sign-out button and hide sign-in form
    function signIn() {
      signInForm.style.display = "none";
      signOutBtn.style.display = "block";
    }
  
    // Function to show sign-in form and hide sign-out button
    function signOut() {
      signInForm.style.display = "block";
      signOutBtn.style.display = "none";
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    
    // Check screen width on page load
    checkScreenWidth();
  
    // Check screen width when window is resized
    window.addEventListener("resize", checkScreenWidth);
  
    function checkScreenWidth() {
      const screenWidth = window.innerWidth;
      
      // If screen width is less than or equal to 300px, activate sidebar
      if (screenWidth <= 300) {
        sidebar.classList.add("active");
      } else {
        // If screen width is greater than 300px, deactivate sidebar
        sidebar.classList.remove("active");
      }
    }
  });
  

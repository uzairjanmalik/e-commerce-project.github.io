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




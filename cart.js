localStorage.removeItem("cart");

function addToCart(title, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ title: title, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(title + " added to cart!");
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cart-items");
    let total = 0;

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.title + " - $" + item.price;
        container.appendChild(li);
        total += Number(item.price);
    });

    document.getElementById("cart-total").textContent = total.toFixed(2);
}
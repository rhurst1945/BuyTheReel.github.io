
//Add Items to Cart 
function addToCart(title, price) {
    // Retrieve existing cart or initialize a new one
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add new item to cart
    cart.push({ title: title, price: price });

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Confirmation alert
    alert(title + " added to cart!");
}

//Display Cart Items
function displayCart() {
    // Retrieve cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Clear existing items
    let container = document.getElementById("cart-items");

    // Clear previous contents
    let total = 0;

    // Populate cart items
    cart.forEach(item => {
        let li = document.createElement("li");

        // Format: Item Title - $Price
        li.textContent = item.title + " - $" + item.price;

        // Append to container
        container.appendChild(li);

        // Calculate total
        total += Number(item.price);
    });

    // Display total
    document.getElementById("cart-total").textContent = total.toFixed(2);
}
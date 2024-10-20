// Initial cart setup
let cart = [];

// Function to add items to the cart
function addToCart(product, price) {
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.product === product);
    
    if (existingProduct) {
        // If product is already in the cart, increase its quantity
        existingProduct.quantity += 1;
    } else {
        // Add new product to the cart
        cart.push({ product: product, price: price, quantity: 1 });
    }

    // Display success message
    alert(`${product} added to the cart!`);
    updateCart();
}

// Function to update and display cart contents
function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = ''; // Clear the cart container

    // Check if the cart is empty
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // Display each item in the cart
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `${item.product} - $${item.price} x ${item.quantity}`;
        cartContainer.appendChild(itemDiv);
    });
}

// Add event listeners to the "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.dataset.product;
            const price = parseFloat(event.target.dataset.price);
            addToCart(product, price);
        });
    });
});

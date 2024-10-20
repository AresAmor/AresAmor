document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const addToCartButtons = document.querySelectorAll('button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.previousElementSibling.previousElementSibling.textContent;
            cart.push(productName);
            alert(`${productName} added to cart!`);
        });
    });
});

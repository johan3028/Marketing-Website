// Variables
let quantity = 1;
const quantityDisplay = document.getElementById('quantity');
const cartModal = document.getElementById('cartModal');
const modalQuantity = document.getElementById('modalQuantity');

// Increment Quantity
function increment() {
    quantity++;
    quantityDisplay.textContent = quantity;
}

// Decrement Quantity
function decrement() {
    if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
    }
}

// Add to Cart
function addToCart() {
    modalQuantity.textContent = quantity;
    cartModal.style.display = 'flex';
}

// Close Cart Modal
function closeCartModal() {
    cartModal.style.display = 'none';
}

// Checkout
function checkout() {
    alert('Pembayaran berhasil!');
    closeCartModal();
}

// Arrays to store product data
let products = [];

/**
 * Function to add a product and update the graphs
 */
function addProduct() {
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const rating = parseFloat(document.getElementById('product-rating').value);

    if (!name || isNaN(price) || isNaN(rating)) {
        alert('Please enter valid product details.');
        return;
    }

    products.push({ name, price, rating });
    updateGraphs();
}

/**
 * Function to update the price and rating graphs
 */
function updateGraphs() {
    const priceBars = document.getElementById('price-bars');
    const ratingBars = document.getElementById('rating-bars');

    // Clear existing bars
    priceBars.innerHTML = '';
    ratingBars.innerHTML = '';

    products.forEach(product => {
        const priceBar = document.createElement('div');
        priceBar.className = 'bar price-bar';
        priceBar.style.width = `${product.price * 10}px`;
        priceBar.textContent = `${product.name} $${product.price.toFixed(2)}`;
        priceBars.appendChild(priceBar);

        const ratingBar = document.createElement('div');
        ratingBar.className = 'bar rating-bar';
        ratingBar.style.width = `${product.rating * 40}px`;
        ratingBar.textContent = `${product.name} ${product.rating.toFixed(1)}`;
        ratingBars.appendChild(ratingBar);
    });
}

/**
 * Function to sort the products by price and update the graphs
 */
function sortByPrice() {
    products.sort((a, b) => a.price - b.price);
    updateGraphs();
}

/**
 * Function to sort the products by rating and update the graphs
 */
function sortByRating() {
    products.sort((a, b) => a.rating - b.rating);
    updateGraphs();
}

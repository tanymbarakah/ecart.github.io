function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-active');
}




let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth; // Get width of a single slide

function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    const offset = -slideIndex * slideWidth;
    document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Show first slide initially
showSlide(slideIndex);

// Auto advance slides every 5 seconds (optional)
setInterval(nextSlide, 5000); // Change slide every 5 seconds (5000 ms)








// Product data
const products = [
    {
        id: 1,
        name: "Crewneck Sweatshirt",
        price: 29.99,
        category: "Clothing",
        image: "https://via.placeholder.com/300x300.png?text=Sweatshirt"
    },
    {
        id: 2,
        name: "Wireless Earbuds",
        price: 59.99,
        category: "Electronics",
        image: "https://via.placeholder.com/300x300.png?text=Earbuds"
    },
    {
        id: 3,
        name: "Leather Wallet",
        price: 39.99,
        category: "Accessories",
        image: "https://via.placeholder.com/300x300.png?text=Wallet"
    },
    {
        id: 4,
        name: "Classic T-Shirt",
        price: 19.99,
        category: "Clothing",
        image: "https://via.placeholder.com/300x300.png?text=T-Shirt"
    },
    {
        id: 5,
        name: "Bluetooth Headphones",
        price: 79.99,
        category: "Electronics",
        image: "https://via.placeholder.com/300x300.png?text=Headphones"
    },
    {
        id: 6,
        name: "Leather Backpack",
        price: 49.99,
        category: "Accessories",
        image: "https://via.placeholder.com/300x300.png?text=Backpack"
    },
    {
        id: 7,
        name: "Denim Jeans",
        price: 34.99,
        category: "Clothing",
        image: "https://via.placeholder.com/300x300.png?text=Denim+Jeans"
    },
    {
        id: 8,
        name: "Smartwatch",
        price: 129.99,
        category: "Electronics",
        image: "https://via.placeholder.com/300x300.png?text=Smartwatch"
    },
    {
        id: 9,
        name: "Leather Belt",
        price: 24.99,
        category: "Accessories",
        image: "https://via.placeholder.com/300x300.png?text=Leather+Belt"
    },
    {
        id: 10,
        name: "Hooded Sweatshirt",
        price: 39.99,
        category: "Clothing",
        image: "https://via.placeholder.com/300x300.png?text=Hoodie"
    },
    {
        id: 11,
        name: "Portable Speaker",
        price: 49.99,
        category: "Electronics",
        image: "https://via.placeholder.com/300x300.png?text=Speaker"
    },
    {
        id: 12,
        name: "Leather Watch",
        price: 69.99,
        category: "Accessories",
        image: "https://via.placeholder.com/300x300.png?text=Watch"
    },
    // Add more products here...

    // Clothing Category
    {
        id: 13,
        name: "Graphic T-Shirt",
        price: 22.99,
        category: "Clothing",
        image: "https://via.placeholder.com/300x300.png?text=Graphic+T-Shirt"
    },
    {
        id: 14,
        name: "Slim Fit Jeans",
        price: 44.99,
        category: "Clothing",
        image: "https://via.placeholder.com/300x300.png?text=Slim+Fit+Jeans"
    },
    {
        id: 15,
        name: "Pullover Hoodie",
        price: 37.99,
        category: "Clothing",
        image: "https://via.placeholder.com/300x300.png?text=Pullover+Hoodie"
    },
    {
        id: 16,
        name: "Sports Jacket",
        price: 79.99,
        category: "Clothing",
        image: "https://via.placeholder.com/300x300.png?text=Sports+Jacket"
    },
    {
        id: 17,
        name: "Casual Shorts",
        price: 29.99,
        category: "Clothing",
        image: "https://via.placeholder.com/300x300.png?text=Casual+Shorts"
    },
    // Add more clothing products...

    // Electronics Category
    {
        id: 18,
        name: "Tablet",
        price: 199.99,
        category: "Electronics",
        image: "https://via.placeholder.com/300x300.png?text=Tablet"
    },
    {
        id: 19,
        name: "Gaming Console",
        price: 299.99,
        category: "Electronics",
        image: "https://via.placeholder.com/300x300.png?text=Gaming+Console"
    },
    {
        id: 20,
        name: "Fitness Tracker",
        price: 49.99,
        category: "Electronics",
        image: "https://via.placeholder.com/300x300.png?text=Fitness+Tracker"
    },
    {
        id: 21,
        name: "Laptop",
        price: 899.99,
        category: "Electronics",
        image: "https://via.placeholder.com/300x300.png?text=Laptop"
    },
    {
        id: 22,
        name: "Digital Camera",
        price: 349.99,
        category: "Electronics",
        image: "https://via.placeholder.com/300x300.png?text=Camera"
    },
    // Add more electronics products...

    // Accessories Category
    {
        id: 23,
        name: "Sunglasses",
        price: 19.99,
        category: "Accessories",
        image: "https://via.placeholder.com/300x300.png?text=Sunglasses"
    },
    {
        id: 24,
        name: "Travel Backpack",
        price: 59.99,
        category: "Accessories",
        image: "https://via.placeholder.com/300x300.png?text=Travel+Backpack"
    },
    {
        id: 25,
        name: "Keychain",
        price: 9.99,
        category: "Accessories",
        image: "https://via.placeholder.com/300x300.png?text=Keychain"
    },
    {
        id: 26,
        name: "Phone Case",
        price: 14.99,
        category: "Accessories",
        image: "https://via.placeholder.com/300x300.png?text=Phone+Case"
    },
    {
        id: 27,
        name: "Tie",
        price: 29.99,
        category: "Accessories",
        image: "https://via.placeholder.com/300x300.png?text=Tie"
    },
    // Add more products here...
];

let cart = []; 

function displayProducts(productsArray) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    productsArray.forEach(product => {
        const productItem = createProductElement(product);
        productGrid.appendChild(productItem);
    });
}

function createProductElement(product) {
    const productItem = document.createElement('a');
    productItem.href = `product.html?id=${product.id}`;
    productItem.classList.add('product-item');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement('p');
    productName.textContent = product.name;

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price.toFixed(2)}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.onclick = () => addToCart(product);

    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);
    productItem.appendChild(addToCartButton);

    return productItem;
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} x ${item.quantity}`;
        cartItemsContainer.appendChild(cartItem);
    });
}

function openCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'block';
}

function closeCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'none';
}

function filterProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category.toLowerCase() === category.toLowerCase());
    displayProducts(filteredProducts);
}

function filterByPrice() {
    const minPrice = parseFloat(document.getElementById('min-price').value);
    const maxPrice = parseFloat(document.getElementById('max-price').value);

    const filteredProducts = products.filter(product => {
        const productPrice = parseFloat(product.price); // Parse product price as a float
        // Check if the product price is within the specified range
        return (!isNaN(minPrice) && productPrice >= minPrice) && (!isNaN(maxPrice) && productPrice <= maxPrice);
    });

    displayProducts(filteredProducts);
}


// Initialize product display
displayProducts(products);






function searchProducts() {
    const searchTerm = document.getElementById('product-search').value.trim().toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
    return false; // Prevent form submission
}



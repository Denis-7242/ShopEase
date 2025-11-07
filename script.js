
// Product data (simulating products.json)
const productsData = {
    products: [
        {
            id: 1,
            name: "Ceramic Vase",
            price: 1200,
            category: "Home Decor",
            image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop"
        },
        {
            id: 2,
            name: "Crossbody Bag",
            price: 2500,
            category: "Accessories",
            image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=600&fit=crop"
        },
        {
            id: 3,
            name: "Throw Blanket",
            price: 1800,
            category: "Home Textiles",
            image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=600&fit=crop"
        },
        {
            id: 4,
            name: "Coffee Mug Set",
            price: 950,
            category: "Kitchenware",
            image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop"
        },
        {
            id: 5,
            name: "Canvas Tote Bag",
            price: 800,
            category: "Accessories",
            image: "https://images.unsplash.com/photo-1590393801165-08ec345a5e42?w=600&h=600&fit=crop"
        },
        {
            id: 6,
            name: "Bamboo Cutting Board",
            price: 1100,
            category: "Kitchenware",
            image: "https://images.unsplash.com/photo-1606410920828-4e387d0b5106?w=600&h=600&fit=crop"
        },
        {
            id: 7,
            name: "Cushion Cover",
            price: 650,
            category: "Home Textiles",
            image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop"
        },
        {
            id: 8,
            name: "Ceramic Plant Pot",
            price: 900,
            category: "Home Decor",
            image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop"
        },
        {
            id: 9,
            name: "Storage Basket",
            price: 1500,
            category: "Home Decor",
            image: "https://images.unsplash.com/photo-1610206820992-c5aca265ba9c?w=600&h=600&fit=crop"
        },
        {
            id: 10,
            name: "Dinner Plate Set",
            price: 2200,
            category: "Kitchenware",
            image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop"
        },
        {
            id: 11,
            name: "Leather Journal",
            price: 1300,
            category: "Accessories",
            image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=600&fit=crop"
        },
        {
            id: 12,
            name: "Coaster Set",
            price: 750,
            category: "Home Decor",
            image: "https://images.unsplash.com/photo-1615485500834-bc10199bc255?w=600&h=600&fit=crop"
        }
    ]
};

// State
let cart = [];
let currentCategory = 'all';
let searchQuery = '';

// Initialize
function init() {
    loadCart();
    loadProducts();
    setupCategories();
    setupEventListeners();
    updateCartUI();
}

// Load products (simulating JSON fetch)
function loadProducts() {
    renderProducts();
}

// Setup categories
function setupCategories() {
    const categories = [...new Set(productsData.products.map(p => p.category))];
    const container = document.getElementById('categoryFilters');

    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.dataset.category = category;
        btn.textContent = category;
        btn.onclick = () => filterByCategory(category);
        container.appendChild(btn);
    });
}

// Filter by category
function filterByCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    renderProducts();
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('searchBar').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderProducts();
    });
}

// Format currency
function formatPrice(price) {
    return `KSh ${price.toLocaleString()}`;
}

// Render products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const filtered = productsData.products.filter(product => {
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-products">No products found matching your criteria</div>';
        return;
    }

    grid.innerHTML = filtered.map(product => `
                <div class="product-card">
                    <div class="product-image-container">
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-price">${formatPrice(product.price)}</div>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                            Add to Cart
                        </button>
                    </div>
                </div>
            `).join('');
}

// Add to cart
function addToCart(productId) {
    const product = productsData.products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
}

// Update quantity
function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Update cart UI
function updateCartUI() {
    renderCart();
    updateCartBadge();
    updateTotal();
}

// Render cart
function renderCart() {
    const container = document.getElementById('cartItems');

    if (cart.length === 0) {
        container.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon">🛍️</div>
                        <div class="empty-cart-text">Your cart is empty</div>
                    </div>
                `;
        return;
    }

    container.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${formatPrice(item.price)}</div>
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                        </div>
                    </div>
                </div>
            `).join('');
}

// Update cart badge
function updateCartBadge() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartBadge').textContent = total;
}

// Update total
function updateTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('totalAmount').textContent = formatPrice(total);
}

// Toggle cart
function toggleCart() {
    const cartSection = document.getElementById('cartSection');
    const overlay = document.getElementById('cartOverlay');
    cartSection.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Save to localStorage
function saveCart() {
    localStorage.setItem('shopease_cart', JSON.stringify(cart));
}

// Load from localStorage
function loadCart() {
    const saved = localStorage.getItem('shopease_cart');
    if (saved) {
        cart = JSON.parse(saved);
    }
}

// Initialize app
init();

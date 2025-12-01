// Product data (simulating products.json)
const productsData = {
  products: [
    {
      id: 1,
      name: "Ceramic Vase",
      price: 1200,
      category: "Home Decor",
      image:
        "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop",
      description:
        "A beautifully crafted minimalist ceramic vase perfect for adding elegance to any room. Hand-finished with a smooth matte texture.",
      features: [
        "Handmade ceramic",
        "Matte finish",
        "Water resistant",
        "Easy to clean",
        "Modern design",
      ],
    },
    {
      id: 2,
      name: "Crossbody Bag",
      price: 2500,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=600&fit=crop",
      description:
        "Stylish and practical leather crossbody bag with adjustable strap. Perfect for daily use with multiple compartments for organization.",
      features: [
        "Genuine leather",
        "Adjustable strap",
        "Multiple pockets",
        "Zippered closure",
        "Compact design",
      ],
    },
    {
      id: 3,
      name: "Throw Blanket",
      price: 1800,
      category: "Home Textiles",
      image:
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=600&fit=crop",
      description:
        "Cozy wool blend throw blanket that adds warmth and style to your living space. Soft texture perfect for all seasons.",
      features: [
        "Wool blend fabric",
        "Extra soft",
        "Machine washable",
        "Lightweight",
        "Versatile use",
      ],
    },
    {
      id: 4,
      name: "Coffee Mug Set",
      price: 950,
      category: "Kitchenware",
      image:
        "https://sc04.alicdn.com/kf/H94ad39153144428b94ef6e8f32ad6985i.jpg",
      description:
        "Set of 4 artisan stoneware coffee mugs with unique glazed finish. Microwave and dishwasher safe for everyday convenience.",
      features: [
        "Set of 4 mugs",
        "Stoneware material",
        "Microwave safe",
        "Dishwasher safe",
        "12oz capacity",
      ],
    },
    {
      id: 5,
      name: "Canvas Tote Bag",
      price: 800,
      category: "Accessories",
      image:
        "https://www.purpink.co.ke/cdn/shop/collections/Handbags-n-Totes-Festive-Tile.jpg?v=1701336712",
      description:
        "Durable canvas tote bag perfect for shopping, beach trips, or daily errands. Eco-friendly and reusable with reinforced handles.",
      features: [
        "100% cotton canvas",
        "Reinforced handles",
        "Large capacity",
        "Eco-friendly",
        "Machine washable",
      ],
    },
    {
      id: 6,
      name: "Bamboo Cutting Board",
      price: 1100,
      category: "Kitchenware",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sH9yvgk0F1Pg9oE6_m5EAC1JYrfQa342fg&s",
      description:
        "Premium bamboo cutting board that's gentle on knives and naturally antimicrobial. Features a juice groove to catch liquids.",
      features: [
        "Sustainable bamboo",
        "Antimicrobial",
        "Knife-friendly",
        "Juice groove",
        "Easy maintenance",
      ],
    },
    {
      id: 7,
      name: "Cushion Cover",
      price: 650,
      category: "Home Textiles",
      image:
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop",
      description:
        "Elegant linen cushion cover with hidden zipper closure. Breathable fabric that adds a touch of sophistication to any space.",
      features: [
        "100% linen",
        "Hidden zipper",
        "Breathable fabric",
        "45cm x 45cm",
        "Easy to wash",
      ],
    },
    {
      id: 8,
      name: "Ceramic Plant Pot",
      price: 900,
      category: "Home Decor",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop",
      description:
        "Modern ceramic plant pot with drainage hole and saucer. Perfect for indoor plants with a sleek minimalist design.",
      features: [
        "Ceramic material",
        "Drainage hole included",
        "Comes with saucer",
        "UV resistant glaze",
        "Multiple sizes",
      ],
    },
    {
      id: 9,
      name: "Storage Basket",
      price: 1500,
      category: "Home Decor",
      image: "https://m.media-amazon.com/images/I/71nd5cgFxGL.jpg",
      description:
        "Handwoven storage basket made from natural materials. Ideal for organizing toys, blankets, or magazines with rustic charm.",
      features: [
        "Handwoven design",
        "Natural materials",
        "Durable construction",
        "Handles for easy carry",
        "Large capacity",
      ],
    },
    {
      id: 10,
      name: "Dinner Plate Set",
      price: 2200,
      category: "Kitchenware",
      image:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop",
      description:
        "Complete porcelain dinner plate set for 4 people. Elegant white finish suitable for both casual and formal dining.",
      features: [
        "Service for 4",
        "Porcelain material",
        "Microwave safe",
        "Dishwasher safe",
        "Chip resistant",
      ],
    },
    {
      id: 11,
      name: "Leather Journal",
      price: 1300,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=600&fit=crop",
      description:
        "Premium leather-bound journal with thick cream paper. Perfect for writing, sketching, or planning with a classic aesthetic.",
      features: [
        "Genuine leather cover",
        "200 pages",
        "Ribbon bookmark",
        "Elastic closure",
        "Acid-free paper",
      ],
    },
    {
      id: 12,
      name: "Coaster Set",
      price: 750,
      category: "Home Decor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrdFmC4C7FxnMxL5UQPluVd9_MQmYvmLC0Q&s",
      description:
        "Set of 6 terrazzo coasters with cork backing. Protects surfaces while adding a decorative touch to your coffee table.",
      features: [
        "Set of 6",
        "Terrazzo design",
        "Cork backing",
        "Heat resistant",
        "Easy to clean",
      ],
    },
  ],
};

// State
let cart = [];
let currentCategory = "all";
let searchQuery = "";
let modalQuantity = 1;

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
  const categories = [...new Set(productsData.products.map((p) => p.category))];
  const container = document.getElementById("categoryFilters");

  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.dataset.category = category;
    btn.textContent = category;
    btn.onclick = () => filterByCategory(category);
    container.appendChild(btn);
  });
}

// Filter by category 
function filterByCategory(category) {
  currentCategory = category;
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });
  renderProducts();
}

// Setup event listeners 
function setupEventListeners() {
  document.getElementById("searchBar").addEventListener("input", (e) => {
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
  const grid = document.getElementById("productsGrid");
  const filtered = productsData.products.filter((product) => {
    const matchesCategory =
      currentCategory === "all" || product.category === currentCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML =
      '<div class="no-products">No products found matching your criteria</div>';
    return;
  }

  grid.innerHTML = filtered
    .map(
      (product) => `
                <div class="product-card">
                    <div class="product-image-container" onclick="openProductModal(${
                      product.id
                    })">
                        <img src="${product.image}" alt="${
        product.name
      }" class="product-image">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-name" onclick="openProductModal(${
                          product.id
                        })" style="cursor: pointer;">${product.name}</h3>
                        <div class="product-price">${formatPrice(
                          product.price
                        )}</div>
                        <button class="add-to-cart-btn" onclick="addToCart(${
                          product.id
                        })">
                            Add to Cart
                        </button>
                    </div>
                </div>
            `
    )
    .join("");
}

// Add to cart
function addToCart(productId) {
  const product = productsData.products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

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
  const item = cart.find((i) => i.id === productId);
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
  cart = cart.filter((item) => item.id !== productId);
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
  const container = document.getElementById("cartItems");

  if (cart.length === 0) {
    container.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon">🛍️</div>
                        <div class="empty-cart-text">Your cart is empty</div>
                    </div>
                `;
    return;
  }

  container.innerHTML = cart
    .map(
      (item) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${
        item.name
      }" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${formatPrice(
                          item.price
                        )}</div>
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="updateQuantity(${
                              item.id
                            }, -1)">−</button>
                            <span class="quantity-display">${
                              item.quantity
                            }</span>
                            <button class="qty-btn" onclick="updateQuantity(${
                              item.id
                            }, 1)">+</button>
                            <button class="remove-item" onclick="removeFromCart(${
                              item.id
                            })">Remove</button>
                        </div>
                    </div>
                </div>
            `
    )
    .join("");
}

// Update cart badge
function updateCartBadge() {
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartBadge").textContent = total;
}

// Update total
function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("totalAmount").textContent = formatPrice(total);
}

// Toggle cart
function toggleCart() {
  const cartSection = document.getElementById("cartSection");
  const overlay = document.getElementById("cartOverlay");
  cartSection.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Save to localStorage
function saveCart() {
  localStorage.setItem("shopease_cart", JSON.stringify(cart));
}

// Load from localStorage
function loadCart() {
  const saved = localStorage.getItem("shopease_cart");
  if (saved) {
    cart = JSON.parse(saved);
  }
}

// Product Modal Functions
function openProductModal(productId) {
  const product = productsData.products.find((p) => p.id === productId);
  if (!product) return;

  modalQuantity = 1;

  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = `
                <div class="modal-image-section">
                    <img src="${product.image}" alt="${
    product.name
  }" class="modal-main-image">
                </div>
                <div class="modal-info-section">
                    <div class="modal-category">${product.category}</div>
                    <h2 class="modal-product-name">${product.name}</h2>
                    <div class="modal-price">${formatPrice(product.price)}</div>
                    <p class="modal-description">${product.description}</p>
                    <div class="modal-features">
                        <h3>Features</h3>
                        <ul>
                            ${product.features
                              .map((feature) => `<li>${feature}</li>`)
                              .join("")}
                        </ul>
                    </div>
                    <div class="modal-quantity-section">
                        <span class="modal-quantity-label">Quantity:</span>
                        <div class="modal-quantity-controls">
                            <button class="modal-qty-btn" onclick="updateModalQuantity(-1)">−</button>
                            <span class="modal-quantity-value" id="modalQuantityValue">1</span>
                            <button class="modal-qty-btn" onclick="updateModalQuantity(1)">+</button>
                        </div>
                    </div>
                    <button class="modal-add-to-cart" onclick="addToCartFromModal(${
                      product.id
                    })">
                        Add to Cart
                    </button>
                </div>
            `;

  document.getElementById("productModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  document.getElementById("productModal").classList.remove("active");
  document.body.style.overflow = "auto";
  modalQuantity = 1;
}

function closeModalOnOverlay(event) {
  if (event.target.id === "productModal") {
    closeProductModal();
  }
}

function updateModalQuantity(delta) {
  modalQuantity = Math.max(1, modalQuantity + delta);
  document.getElementById("modalQuantityValue").textContent = modalQuantity;
}

function addToCartFromModal(productId) {
  const product = productsData.products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += modalQuantity;
  } else {
    cart.push({ ...product, quantity: modalQuantity });
  }

  saveCart();
  updateCartUI();
  closeProductModal();

  // Optional: Show feedback
  const cartButton = document.querySelector(".cart-button");
  cartButton.style.transform = "scale(1.1)";
  setTimeout(() => {
    cartButton.style.transform = "scale(1)";
  }, 200);
}

// Initialize app
init();

// Complete productsData with multiple images for each product
// Replace your existing productsData object with this

const productsData = {
  products: [
    {
      id: 1,
      name: "Ceramic Vase",
      price: 1200,
      category: "Home Decor",
      images: [
        "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578500494766-4b6bafd74c53?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=600&h=600&fit=crop"
      ],
      description:
        "A beautifully crafted minimalist ceramic vase perfect for adding elegance to any room. Hand-finished with a smooth matte texture.",
      features: [
        "Handmade ceramic",
        "Matte finish",
        "Water resistant",
        "Easy to clean",
        "Modern design",
      ],
      rating: 4.5,
      reviewCount: 12,
    },
    {
      id: 2,
      name: "Crossbody Bag",
      price: 2500,
      category: "Accessories",
      images: [
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1591561954555-607968cdfe4e?w=600&h=600&fit=crop"
      ],
      description:
        "Stylish and practical leather crossbody bag with adjustable strap. Perfect for daily use with multiple compartments for organization.",
      features: [
        "Genuine leather",
        "Adjustable strap",
        "Multiple pockets",
        "Zippered closure",
        "Compact design",
      ],
      rating: 4.8,
      reviewCount: 24,
    },
    {
      id: 3,
      name: "Throw Blanket",
      price: 1800,
      category: "Home Textiles",
      images: [
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=600&fit=crop"
      ],
      description:
        "Cozy wool blend throw blanket that adds warmth and style to your living space. Soft texture perfect for all seasons.",
      features: [
        "Wool blend fabric",
        "Extra soft",
        "Machine washable",
        "Lightweight",
        "Versatile use",
      ],
      rating: 4.6,
      reviewCount: 18,
    },
    {
      id: 4,
      name: "Coffee Mug Set",
      price: 950,
      category: "Kitchenware",
      images: [
        "https://sc04.alicdn.com/kf/H94ad39153144428b94ef6e8f32ad6985i.jpg",
        "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&h=600&fit=crop"
      ],
      description:
        "Set of 4 artisan stoneware coffee mugs with unique glazed finish. Microwave and dishwasher safe for everyday convenience.",
      features: [
        "Set of 4 mugs",
        "Stoneware material",
        "Microwave safe",
        "Dishwasher safe",
        "12oz capacity",
      ],
      rating: 4.3,
      reviewCount: 31,
    },
    {
      id: 5,
      name: "Canvas Tote Bag",
      price: 800,
      category: "Accessories",
      images: [
        "https://www.purpink.co.ke/cdn/shop/collections/Handbags-n-Totes-Festive-Tile.jpg?v=1701336712",
        "https://images.unsplash.com/photo-1590393801165-08ec345a5e42?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&h=600&fit=crop"
      ],
      description:
        "Durable canvas tote bag perfect for shopping, beach trips, or daily errands. Eco-friendly and reusable with reinforced handles.",
      features: [
        "100% cotton canvas",
        "Reinforced handles",
        "Large capacity",
        "Eco-friendly",
        "Machine washable",
      ],
      rating: 4.7,
      reviewCount: 15,
    },
    {
      id: 6,
      name: "Bamboo Cutting Board",
      price: 1100,
      category: "Kitchenware",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sH9yvgk0F1Pg9oE6_m5EAC1JYrfQa342fg&s",
        "https://images.unsplash.com/photo-1606410920828-4e387d0b5106?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1593759608979-86d0cd1a44cc?w=600&h=600&fit=crop"
      ],
      description:
        "Premium bamboo cutting board that's gentle on knives and naturally antimicrobial. Features a juice groove to catch liquids.",
      features: [
        "Sustainable bamboo",
        "Antimicrobial",
        "Knife-friendly",
        "Juice groove",
        "Easy maintenance",
      ],
      rating: 4.9,
      reviewCount: 27,
    },
    {
      id: 7,
      name: "Cushion Cover",
      price: 650,
      category: "Home Textiles",
      images: [
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop"
      ],
      description:
        "Elegant linen cushion cover with hidden zipper closure. Breathable fabric that adds a touch of sophistication to any space.",
      features: [
        "100% linen",
        "Hidden zipper",
        "Breathable fabric",
        "45cm x 45cm",
        "Easy to wash",
      ],
      rating: 4.4,
      reviewCount: 9,
    },
    {
      id: 8,
      name: "Ceramic Plant Pot",
      price: 900,
      category: "Home Decor",
      images: [
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=600&fit=crop"
      ],
      description:
        "Modern ceramic plant pot with drainage hole and saucer. Perfect for indoor plants with a sleek minimalist design.",
      features: [
        "Ceramic material",
        "Drainage hole included",
        "Comes with saucer",
        "UV resistant glaze",
        "Multiple sizes",
      ],
      rating: 4.5,
      reviewCount: 14,
    },
    {
      id: 9,
      name: "Storage Basket",
      price: 1500,
      category: "Home Decor",
      images: [
        "https://m.media-amazon.com/images/I/71nd5cgFxGL.jpg",
        "https://images.unsplash.com/photo-1610206820992-c5aca265ba9c?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=600&fit=crop"
      ],
      description:
        "Handwoven storage basket made from natural materials. Ideal for organizing toys, blankets, or magazines with rustic charm.",
      features: [
        "Handwoven design",
        "Natural materials",
        "Durable construction",
        "Handles for easy carry",
        "Large capacity",
      ],
      rating: 4.6,
      reviewCount: 11,
    },
    {
      id: 10,
      name: "Dinner Plate Set",
      price: 2200,
      category: "Kitchenware",
      images: [
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600&h=600&fit=crop"
      ],
      description:
        "Complete porcelain dinner plate set for 4 people. Elegant white finish suitable for both casual and formal dining.",
      features: [
        "Service for 4",
        "Porcelain material",
        "Microwave safe",
        "Dishwasher safe",
        "Chip resistant",
      ],
      rating: 4.7,
      reviewCount: 22,
    },
    {
      id: 11,
      name: "Leather Journal",
      price: 1300,
      category: "Accessories",
      images: [
        "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1531346557933-0a8d2b3a896b?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=600&fit=crop"
      ],
      description:
        "Premium leather-bound journal with thick cream paper. Perfect for writing, sketching, or planning with a classic aesthetic.",
      features: [
        "Genuine leather cover",
        "200 pages",
        "Ribbon bookmark",
        "Elastic closure",
        "Acid-free paper",
      ],
      rating: 4.8,
      reviewCount: 19,
    },
    {
      id: 12,
      name: "Coaster Set",
      price: 750,
      category: "Home Decor",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrdFmC4C7FxnMxL5UQPluVd9_MQmYvmLC0Q&s",
        "https://images.unsplash.com/photo-1615485500834-bc10199bc255?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1616486701797-0f33f08e5602?w=600&h=600&fit=crop"
      ],
      description:
        "Set of 6 terrazzo coasters with cork backing. Protects surfaces while adding a decorative touch to your coffee table.",
      features: [
        "Set of 6",
        "Terrazzo design",
        "Cork backing",
        "Heat resistant",
        "Easy to clean",
      ],
      rating: 4.2,
      reviewCount: 8,
    },
  ],
};
// Add these new state variables
let currentImageIndex = 0;
let currentProductImages = [];

// Add these new functions for image gallery

function getProductMainImage(product) {
  return product.images ? product.images[0] : product.image;
}

function selectImage(index) {
  currentImageIndex = index;
  const mainImage = document.getElementById('modalMainImage');
  mainImage.src = currentProductImages[index];
  
  // Update thumbnail active state
  document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
}

function openImageZoom(imageIndex) {
  currentImageIndex = imageIndex;
  const overlay = document.getElementById('imageZoomOverlay');
  const zoomedImage = document.getElementById('zoomedImage');
  const counter = document.getElementById('zoomCounter');
  
  zoomedImage.src = currentProductImages[currentImageIndex];
  counter.textContent = `${currentImageIndex + 1} / ${currentProductImages.length}`;
  
  updateZoomNavButtons();
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeImageZoom(event) {
  if (event.target.id === 'imageZoomOverlay' || event.target.classList.contains('zoom-close')) {
    const overlay = document.getElementById('imageZoomOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function navigateZoomImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = 0;
  if (currentImageIndex >= currentProductImages.length) {
    currentImageIndex = currentProductImages.length - 1;
  }
  
  const zoomedImage = document.getElementById('zoomedImage');
  const counter = document.getElementById('zoomCounter');
  
  zoomedImage.src = currentProductImages[currentImageIndex];
  counter.textContent = `${currentImageIndex + 1} / ${currentProductImages.length}`;
  
  updateZoomNavButtons();
}

function updateZoomNavButtons() {
  const prevBtn = document.getElementById('zoomPrevBtn');
  const nextBtn = document.getElementById('zoomNextBtn');
  
  prevBtn.disabled = currentImageIndex === 0;
  nextBtn.disabled = currentImageIndex === currentProductImages.length - 1;
}

// Update your existing openProductModal function to include image gallery
function openProductModal(productId) {
  const product = productsData.products.find((p) => p.id === productId);
  if (!product) return;

  modalQuantity = 1;
  selectedRating = 0;
  currentImageIndex = 0;
  currentProductImages = product.images || [product.image];

  const productReviews = reviews[productId] || [];
  const avgRating = calculateAverageRating(productId);
  const totalReviews = product.reviewCount + productReviews.length;
  const inWishlist = isInWishlist(productId);

  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = `
    <div class="modal-image-section">
      <img 
        src="${currentProductImages[0]}" 
        alt="${product.name}" 
        class="modal-main-image" 
        id="modalMainImage"
        onclick="openImageZoom(${currentImageIndex})"
      >
      ${currentProductImages.length > 1 ? `
        <div class="image-thumbnails">
          ${currentProductImages.map((img, index) => `
            <img 
              src="${img}" 
              alt="${product.name} ${index + 1}" 
              class="thumbnail ${index === 0 ? 'active' : ''}"
              onclick="selectImage(${index})"
            >
          `).join('')}
        </div>
      ` : ''}
    </div>
    <div class="modal-info-section">
      <div class="modal-category">${product.category}</div>
      <h2 class="modal-product-name">${product.name}</h2>
      <div class="modal-rating">
        <div class="modal-stars">${renderStars(avgRating, "star")}</div>
        <span class="modal-rating-text">${avgRating.toFixed(1)}</span>
        <span class="modal-rating-count">(${totalReviews} reviews)</span>
      </div>
      <div class="modal-price">${formatPrice(product.price)}</div>
      <p class="modal-description">${product.description}</p>
      <div class="modal-features">
        <h3>Features</h3>
        <ul>
          ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
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
      <button class="modal-wishlist-btn ${
        inWishlist ? "in-wishlist" : ""
      }" onclick="toggleWishlistItem(${product.id})">
        ${inWishlist ? "❤️ Remove from Wishlist" : "🤍 Add to Wishlist"}
      </button>
      <button class="modal-add-to-cart" onclick="addToCartFromModal(${
        product.id
      })">
        Add to Cart
      </button>
      
      <div class="reviews-section">
        <div class="reviews-header">
          <h3>Customer Reviews</h3>
          <button class="add-review-btn" onclick="toggleReviewForm(${
            product.id
          })">Write a Review</button>
        </div>
        
        <div class="review-form" id="reviewForm-${product.id}">
          <div class="form-group">
            <label>Your Rating</label>
            <div class="star-rating-input" id="starRatingInput">
              ${[1, 2, 3, 4, 5]
                .map(
                  (i) =>
                    `<span class="star-input" onclick="setRating(${i})">★</span>`
                )
                .join("")}
            </div>
          </div>
          <div class="form-group">
            <label>Your Name</label>
            <input type="text" id="reviewerName-${
              product.id
            }" placeholder="Enter your name" required>
          </div>
          <div class="form-group">
            <label>Your Review</label>
            <textarea id="reviewText-${
              product.id
            }" placeholder="Share your experience with this product" required></textarea>
          </div>
          <div class="form-actions">
            <button class="submit-review-btn" onclick="submitReview(${
              product.id
            })">Submit Review</button>
            <button class="cancel-review-btn" onclick="toggleReviewForm(${
              product.id
            })">Cancel</button>
          </div>
        </div>
        
        <div id="reviewsList-${product.id}">
          ${renderReviews(productId)}
        </div>
      </div>
    </div>
  `;

  document.getElementById("productModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

// Update renderProducts to show image count badge
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
      (product) => {
        const images = product.images || [product.image];
        const imageCount = images.length;
        
        return `
          <div class="product-card">
            <div class="product-image-container" onclick="openProductModal(${
              product.id
            })">
              <button class="wishlist-icon ${
                isInWishlist(product.id) ? "active" : ""
              }" onclick="event.stopPropagation(); toggleWishlistItem(${
          product.id
        })">
                ${isInWishlist(product.id) ? "❤️" : "🤍"}
              </button>
              ${imageCount > 1 ? `
                <div class="image-count-badge">
                  📷 ${imageCount}
                </div>
              ` : ''}
              <img src="${images[0]}" alt="${
          product.name
        }" class="product-image">
            </div>
            <div class="product-info">
              <div class="product-category">${product.category}</div>
              <h3 class="product-name" onclick="openProductModal(${
                product.id
              })" style="cursor: pointer;">${product.name}</h3>
              <div class="product-rating">
                <div class="stars">${renderStars(product.rating)}</div>
                <span class="rating-count">(${product.reviewCount})</span>
              </div>
              <div class="product-price">${formatPrice(product.price)}</div>
              <button class="add-to-cart-btn" onclick="addToCart(${
                product.id
              })">
                Add to Cart
              </button>
            </div>
          </div>
        `;
      }
    )
    .join("");
}

// Make sure to export/expose these functions to global scope if needed
window.selectImage = selectImage;
window.openImageZoom = openImageZoom;
window.closeImageZoom = closeImageZoom;
window.navigateZoomImage = navigateZoomImage;

// State
let cart = [];
let wishlist = [];
let currentCategory = "all";
let searchQuery = "";
let modalQuantity = 1;
let reviews = {};
let selectedRating = 0;

// Initialize
function init() {
  loadCart();
  loadWishlist();
  loadReviews();
  loadProducts();
  setupCategories();
  setupEventListeners();
  updateCartUI();
  updateWishlistUI();
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

// Render star rating
function renderStars(rating, className = "star") {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = "";

  for (let i = 0; i < fullStars; i++) {
    stars += `<span class="${className}">★</span>`;
  }
  if (hasHalfStar) {
    stars += `<span class="${className}">★</span>`;
  }
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += `<span class="${className} empty">★</span>`;
  }
  return stars;
}

// Check if product is in wishlist
function isInWishlist(productId) {
  return wishlist.some((item) => item.id === productId);
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
                        <button class="wishlist-icon ${
                          isInWishlist(product.id) ? "active" : ""
                        }" onclick="event.stopPropagation(); toggleWishlistItem(${
        product.id
      })">
                            ${isInWishlist(product.id) ? "❤️" : "🤍"}
                        </button>
                        <img src="${product.image}" alt="${
        product.name
      }" class="product-image">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-name" onclick="openProductModal(${
                          product.id
                        })" style="cursor: pointer;">${product.name}</h3>
                        <div class="product-rating">
                            <div class="stars">${renderStars(
                              product.rating
                            )}</div>
                            <span class="rating-count">(${
                              product.reviewCount
                            })</span>
                        </div>
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

// Wishlist Functions
function loadWishlist() {
  const saved = localStorage.getItem("shopease_wishlist");
  if (saved) {
    wishlist = JSON.parse(saved);
  }
}

function saveWishlist() {
  localStorage.setItem("shopease_wishlist", JSON.stringify(wishlist));
}

function toggleWishlistItem(productId) {
  const product = productsData.products.find((p) => p.id === productId);
  const existingIndex = wishlist.findIndex((item) => item.id === productId);

  if (existingIndex > -1) {
    wishlist.splice(existingIndex, 1);
  } else {
    wishlist.push(product);
  }

  saveWishlist();
  updateWishlistUI();
  renderProducts();
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter((item) => item.id !== productId);
  saveWishlist();
  updateWishlistUI();
  renderProducts();
}

function clearWishlist() {
  if (wishlist.length === 0) return;
  
  if (confirm("Are you sure you want to clear your wishlist?")) {
    wishlist = [];
    saveWishlist();
    updateWishlistUI();
    renderProducts();
  }
}

function addAllToCart() {
  if (wishlist.length === 0) return;

  wishlist.forEach((product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  });

  saveCart();
  updateCartUI();
  
  // Show feedback
  alert(`Added ${wishlist.length} items to cart!`);
}

function updateWishlistUI() {
  renderWishlist();
  updateWishlistBadge();
}

function renderWishlist() {
  const container = document.getElementById("wishlistItems");
  const footer = document.getElementById("wishlistFooter");

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="empty-wishlist">
        <div class="empty-wishlist-icon">💝</div>
        <div class="empty-wishlist-text">Your wishlist is empty</div>
      </div>
    `;
    footer.style.display = "none";
    return;
  }

  footer.style.display = "block";

  container.innerHTML = wishlist
    .map(
      (item) => `
        <div class="wishlist-item">
          <img src="${item.image}" alt="${
        item.name
      }" class="wishlist-item-image" onclick="openProductModal(${item.id})">
          <div class="wishlist-item-details">
            <div class="wishlist-item-category">${item.category}</div>
            <div class="wishlist-item-name" onclick="openProductModal(${
              item.id
            })">${item.name}</div>
            <div class="wishlist-item-price">${formatPrice(item.price)}</div>
            <div class="wishlist-item-actions">
              <button class="wishlist-add-to-cart-btn" onclick="addToCart(${
                item.id
              })">Add to Cart</button>
              <button class="wishlist-remove-btn" onclick="removeFromWishlist(${
                item.id
              })">❌</button>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

function updateWishlistBadge() {
  document.getElementById("wishlistBadge").textContent = wishlist.length;
}

function toggleWishlist() {
  const wishlistSection = document.getElementById("wishlistSection");
  const overlay = document.getElementById("wishlistOverlay");
  wishlistSection.classList.toggle("active");
  overlay.classList.toggle("active");
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
            <div class="cart-item-price">${formatPrice(item.price)}</div>
            <div class="quantity-controls">
              <button class="qty-btn" onclick="updateQuantity(${
                item.id
              }, -1)">−</button>
              <span class="quantity-display">${item.quantity}</span>
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

// Reviews Functions
function loadReviews() {
  const saved = localStorage.getItem("shopease_reviews");
  if (saved) {
    reviews = JSON.parse(saved);
  }
}

function saveReviews() {
  localStorage.setItem("shopease_reviews", JSON.stringify(reviews));
}

function calculateAverageRating(productId) {
  const product = productsData.products.find((p) => p.id === productId);
  const productReviews = reviews[productId] || [];

  if (productReviews.length === 0) {
    return product.rating;
  }

  const reviewRatings = productReviews.reduce((sum, r) => sum + r.rating, 0);
  const totalRating = product.rating * product.reviewCount + reviewRatings;
  const totalCount = product.reviewCount + productReviews.length;

  return totalRating / totalCount;
}

function renderReviews(productId) {
  const productReviews = reviews[productId] || [];

  if (productReviews.length === 0) {
    return '<div class="no-reviews">No customer reviews yet. Be the first to review!</div>';
  }

  return productReviews
    .map(
      (review) => `
        <div class="review-item">
          <div class="review-header">
            <span class="reviewer-name">${review.name}</span>
            <span class="review-date">${review.date}</span>
          </div>
          <div class="review-stars">${renderStars(review.rating, "star")}</div>
          <p class="review-text">${review.text}</p>
        </div>
      `
    )
    .join("");
}

function toggleReviewForm(productId) {
  const form = document.getElementById(`reviewForm-${productId}`);
  form.classList.toggle("active");
  selectedRating = 0;
  updateStarRatingInput();
}

function setRating(rating) {
  selectedRating = rating;
  updateStarRatingInput();
}

function updateStarRatingInput() {
  const stars = document.querySelectorAll(".star-input");
  stars.forEach((star, index) => {
    if (index < selectedRating) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

function submitReview(productId) {
  const name = document
    .getElementById(`reviewerName-${productId}`)
    .value.trim();
  const text = document
    .getElementById(`reviewText-${productId}`)
    .value.trim();

  if (!name || !text) {
    alert("Please fill in all fields");
    return;
  }

  if (selectedRating === 0) {
    alert("Please select a rating");
    return;
  }

  if (!reviews[productId]) {
    reviews[productId] = [];
  }

  const review = {
    name: name,
    rating: selectedRating,
    text: text,
    date: new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  };

  reviews[productId].unshift(review);
  saveReviews();

  // Refresh the modal content
  openProductModal(productId);
}

// Product Modal Functions
function openProductModal(productId) {
  const product = productsData.products.find((p) => p.id === productId);
  if (!product) return;

  modalQuantity = 1;
  selectedRating = 0;

  const productReviews = reviews[productId] || [];
  const avgRating = calculateAverageRating(productId);
  const totalReviews = product.reviewCount + productReviews.length;
  const inWishlist = isInWishlist(productId);

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
      <div class="modal-rating">
        <div class="modal-stars">${renderStars(avgRating, "star")}</div>
        <span class="modal-rating-text">${avgRating.toFixed(1)}</span>
        <span class="modal-rating-count">(${totalReviews} reviews)</span>
      </div>
      <div class="modal-price">${formatPrice(product.price)}</div>
      <p class="modal-description">${product.description}</p>
      <div class="modal-features">
        <h3>Features</h3>
        <ul>
          ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
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
      <button class="modal-wishlist-btn ${
        inWishlist ? "in-wishlist" : ""
      }" onclick="toggleWishlistItem(${product.id})">
        ${inWishlist ? "❤️ Remove from Wishlist" : "🤍 Add to Wishlist"}
      </button>
      <button class="modal-add-to-cart" onclick="addToCartFromModal(${
        product.id
      })">
        Add to Cart
      </button>
      
      <div class="reviews-section">
        <div class="reviews-header">
          <h3>Customer Reviews</h3>
          <button class="add-review-btn" onclick="toggleReviewForm(${
            product.id
          })">Write a Review</button>
        </div>
        
        <div class="review-form" id="reviewForm-${product.id}">
          <div class="form-group">
            <label>Your Rating</label>
            <div class="star-rating-input" id="starRatingInput">
              ${[1, 2, 3, 4, 5]
                .map(
                  (i) =>
                    `<span class="star-input" onclick="setRating(${i})">★</span>`
                )
                .join("")}
            </div>
          </div>
          <div class="form-group">
            <label>Your Name</label>
            <input type="text" id="reviewerName-${
              product.id
            }" placeholder="Enter your name" required>
          </div>
          <div class="form-group">
            <label>Your Review</label>
            <textarea id="reviewText-${
              product.id
            }" placeholder="Share your experience with this product" required></textarea>
          </div>
          <div class="form-actions">
            <button class="submit-review-btn" onclick="submitReview(${
              product.id
            })">Submit Review</button>
            <button class="cancel-review-btn" onclick="toggleReviewForm(${
              product.id
            })">Cancel</button>
          </div>
        </div>
        
        <div id="reviewsList-${product.id}">
          ${renderReviews(productId)}
        </div>
      </div>
    </div>
  `;

  document.getElementById("productModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  document.getElementById("productModal").classList.remove("active");
  document.body.style.overflow = "auto";
  modalQuantity = 1;
  selectedRating = 0;
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
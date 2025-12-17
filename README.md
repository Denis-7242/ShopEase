# ShopEase - Mini E-Commerce Product Gallery 🛍️

A modern, responsive e-commerce product gallery built with vanilla HTML, CSS, and JavaScript. Features a clean interface, shopping cart functionality, product ratings & reviews, and persistent data storage.

![ShopEase Banner](https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=300&fit=crop)

## 🌟 Features

### Core Functionality

- ✅ **Product Gallery** - 12 curated products with high-quality images
- ✅ **Smart Cart System** - Add items to cart with automatic quantity management
- ✅ **Real-time Price Updates** - Dynamic total calculation in Kenyan Shillings (KSh)
- ✅ **LocalStorage Persistence** - Cart data and reviews survive page refreshes
- ✅ **Remove & Adjust** - Full cart management with quantity controls

### Enhanced Features

- ⭐ **Product Ratings & Reviews** - View and write customer reviews with star ratings
- ❤️ **Wishlist Functionality** - Save favorite items for later with persistent storage
- 📸 **Multiple Image Galleries** - View products from different angles with zoom functionality
- 🔍 **Live Search** - Filter products by name in real-time 
- 🏷️ **Category Filters** - Browse by Home Decor, Accessories, Kitchenware, or Home Textiles
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern UI** - Vibrant color scheme with smooth animations
- 🛒 **Cart Badge Counter** - Shows total items at a glance
- 💫 **Hover Effects** - Interactive product cards with visual feedback
- 🔍 **Product Detail Modal** - View detailed product information with descriptions and features
- ➕ **Modal Quantity Control** - Add multiple items at once from the product modal
- 💬 **Review System** - Interactive star rating input and review submission

### 🗂️ Project Structure

```
ShopEase/
│
├── index.html          # Main webpage structure
├── style.css           # Complete styles and responsive layout
├── script.js           # App logic (cart, reviews, modal, localStorage)
│
├── images/             # Folder for product images/icons (optional)
└── README.md           # Project documentation (this file)
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required!

### Installation

1. **Clone or Download** the repository

```bash
git clone https://github.com/Denis-7242/ShopEase.git
cd ShopEase
```

2. **Open the file**

```bash
# Simply open index.html in your browser
# On Mac/Linux:
open index.html

# On Windows:
start index.html

# Or just double-click index.html
```

That's it! No npm install, no build process needed. 🎉

## 💻 Usage

### Browsing Products

- Scroll through the product grid to view all items
- Use the **search bar** to find specific products
- Click **category buttons** to filter by type
- **Click on any product image or name** to view detailed information in a modal
- View **star ratings** and **review counts** on each product card
- Click the **heart icon** on any product to add/remove from wishlist
- Products with multiple images show a **📷 badge** with the image count

### Product Details & Reviews

1. Click on a **product image** or **product name** to open the detail modal
2. View the **average rating** and **total review count** at the top
3. **Browse multiple product images**:
   - View the main product image
   - Click on **thumbnail images** below to change the main view
   - Click the **main image** to open full-screen zoom mode
   - In zoom mode, use **arrow buttons** (◄ ►) to navigate between images
   - See the **image counter** (e.g., "2 / 4") at the bottom
   - Click **X** or **outside** the image to close zoom view
4. Read the **full product description** and **feature list**
5. Scroll down to see **customer reviews** with ratings and comments
6. Click **"Write a Review"** to add your own feedback:
   - Select a star rating (1-5 stars)
   - Enter your name
   - Write your review
   - Click **Submit** to save
7. Adjust the **quantity** using +/− buttons in the modal
8. Click **"Add to Cart"** to add items
9. Close the modal by clicking the **X button** or **clicking outside**

### Shopping Cart

1. Click **"Add to Cart"** on any product
2. Click the **"Cart"** button in the header to view your cart
3. Use **+/−** buttons to adjust quantities
4. Click **"Remove"** to delete items
5. View the **dynamic total price** in KSh
6. Your cart persists even after closing the browser!

### Wishlist

1. Click the **heart icon** (🤍) on any product card to add to wishlist
2. The heart turns **red** (❤️) when item is in wishlist
3. Click the **"Wishlist"** button in the header to view your saved items
4. In the wishlist drawer:
   - Click product **image or name** to view details
   - Click **"Add to Cart"** to move item to shopping cart
   - Click **❌** to remove from wishlist
   - Use **"Add All to Cart"** to add all wishlist items at once
   - Use **"Clear Wishlist"** to remove all items (with confirmation)
5. Add/remove items from wishlist in the **product detail modal**
6. Your wishlist persists even after closing the browser!

### Product Management

```javascript
// Products are stored in the productsData object
const productsData = {
  products: [
    {
      id: 1,
      name: "Product Name",
      price: 1200, // Price in KSh
      category: "Category",
      images: [  // Multiple images array
        "image-url-1.jpg",
        "image-url-2.jpg",
        "image-url-3.jpg"
      ],
      description: "Product description",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      rating: 4.5, // Base rating (out of 5)
      reviewCount: 12, // Initial review count
    },
    // ... more products
  ],
};
```

## 🛠️ Customization

### Adding New Products

Edit the `productsData` object in `script.js`:

```javascript
{
    id: 13,  // Unique ID
    name: "New Product",
    price: 1500,  // Price in KSh
    category: "Accessories",  // Must match existing category
    images: [  // Array of image URLs (2-4 images recommended)
        "https://your-image-url.com/image1.jpg",
        "https://your-image-url.com/image2.jpg",
        "https://your-image-url.com/image3.jpg"
    ],
    description: "Detailed product description for the modal",
    features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5"
    ],
    rating: 4.0,  // Base rating (1-5)
    reviewCount: 0  // Initial review count
}
```

### Changing Colors

Update the CSS in `style.css` for quick theme changes:

```css
/* Primary Blue */
background-color: #3498db;

/* Green for Prices */
color: #27ae60;

/* Dark Header */
background: linear-gradient(135deg, #2c3e50, #34495e);

/* Red Accents */
background-color: #e74c3c;

/* Star Rating Gold */
color: #f39c12;
```

### Adding Categories

New categories are automatically detected and added to the filter buttons when you add products with new category names.

## 📱 Responsive Design

- **Desktop** (>768px): Full grid layout with hover effects, side cart drawer
- **Tablet** (768px): Adaptive grid with 2-3 columns
- **Mobile** (<768px): Single column layout, full-width cart drawer, stacked modal content

## 🎨 Color Palette

| Color        | Hex Code  | Usage                           |
| ------------ | --------- | ------------------------------- |
| Primary Blue | `#3498db` | Buttons, links, active states   |
| Dark Grey    | `#2c3e50` | Header background               |
| Green        | `#27ae60` | Prices, checkout button         |
| Red          | `#e74c3c` | Wishlist, cart badge, alerts    |
| Light Grey   | `#f8f9fa` | Page background                 |
| Gold         | `#f39c12` | Star ratings                    |

## 🔧 Technical Details

### Technologies Used

- **HTML5** - Semantic markup with modal structure
- **CSS3** - Grid, Flexbox, animations, gradients, modal styling
- **JavaScript (ES6+)** - Cart logic, wishlist management, reviews system, modal interactions, DOM manipulation
- **LocalStorage API** - Data persistence for cart, wishlist, and reviews

### Key Features Implementation

- **Product Modal**: Click-triggered overlay with detailed product information
- **Image Gallery System**: Multiple images per product with thumbnail navigation and zoom
- **Full-Screen Image Zoom**: Click-to-zoom with navigation arrows and image counter
- **Wishlist System**: Heart icons on products with toggle functionality and persistent storage
- **Star Rating System**: Visual 5-star display with half-star support
- **Review Management**: Complete CRUD operations for customer reviews
- **Average Rating Calculation**: Dynamic computation combining base ratings and user reviews
- **Smooth Animations**: CSS keyframes for modal slide-in, heart beat effect, image transitions
- **Event Handling**: Click events on product cards, rating stars, wishlist hearts, thumbnails, and form controls
- **Quantity Control**: In-modal and in-cart quantity selectors
- **Side Drawers**: Cart and wishlist slide-in panels with overlay
- **Responsive Modal**: Adapts layout for mobile and desktop views

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance

- No external dependencies
- Lightweight (~45KB total including reviews, wishlist, and image gallery)
- Fast initial load
- Smooth 60fps animations
- Optimized modal rendering
- Efficient localStorage operations
- Lazy loading support for images

### Data Storage

**Cart Data**: Stored in `localStorage` with key `shopease_cart`
```javascript
{
  id: 1,
  name: "Product Name",
  price: 1200,
  quantity: 2,
  // ... other product properties
}
```

**Wishlist Data**: Stored in `localStorage` with key `shopease_wishlist`
```javascript
[
  {
    id: 1,
    name: "Product Name",
    price: 1200,
    category: "Home Decor",
    // ... other product properties
  }
]
```

**Reviews Data**: Stored in `localStorage` with key `shopease_reviews`
```javascript
{
  "1": [  // Product ID
    {
      name: "John Doe",
      rating: 5,
      text: "Great product!",
      date: "15 Dec 2025"
    }
  ]
}
```

## 🐛 Known Issues

- None at the moment! 🎉

## 📈 Future Enhancements

- [x] ~~Add product detail modal~~
- [x] ~~Implement product ratings/reviews~~
- [x] ~~Add wishlist functionality~~
- [x] ~~Multiple image galleries per product~~
- [ ] Price sorting (low to high, high to low)
- [ ] Stock availability tracking
- [ ] Checkout process with M-Pesa integration
- [ ] Order history
- [ ] User authentication
- [ ] Product comparison feature
- [ ] Recently viewed products
- [ ] Review voting (helpful/not helpful)
- [ ] Image upload for reviews
- [ ] Filter by rating
- [ ] Share wishlist functionality
- [ ] Wishlist item notes/comments
- [ ] 360° product view
- [ ] Product video galleries
- [ ] Image zoom on hover (magnifier effect)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Denis**

- GitHub: [@Denis-7242](https://github.com/Denis-7242)
- Email: dexdenis3@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com) and various sources
- Inspired by modern e-commerce platforms like Jumia and Kilimall
- Built as an MVP project for learning purposes
- Special thanks to the open-source community

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Email me directly at dexdenis3@gmail.com
- Check the [Issues](https://github.com/Denis-7242/ShopEase/issues) page

## 🎯 Learning Objectives Achieved

This project demonstrates:
- ✅ DOM manipulation and event handling
- ✅ LocalStorage for data persistence
- ✅ Responsive web design principles
- ✅ Modal implementation (product details and image zoom)
- ✅ Form validation and submission
- ✅ Dynamic content rendering
- ✅ Star rating systems
- ✅ CRUD operations (Create, Read for reviews)
- ✅ State management in vanilla JavaScript
- ✅ Clean code organization and structure
- ✅ Wishlist functionality with toggle states
- ✅ Badge counters and real-time UI updates
- ✅ Side drawer/panel implementations
- ✅ Animation and transition effects
- ✅ Image gallery with thumbnail navigation
- ✅ Full-screen image zoom with navigation controls
- ✅ Multi-image product display system

---

**Made with ❤️ by Denis**
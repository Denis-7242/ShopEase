# ShopEase - Mini E-Commerce Product Gallery 🛍️

A modern, responsive e-commerce product gallery built with vanilla HTML, CSS, and JavaScript. Features a clean interface, shopping cart functionality, and persistent data storage.

![ShopEase Banner](https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=300&fit=crop)

## 🌟 Features

### Core Functionality

- ✅ **Product Gallery** - Browse 12 curated products with high-quality images
- ✅ **Smart Cart System** - Add items to cart with automatic quantity management
- ✅ **Real-time Price Updates** - Dynamic total calculation in Kenyan Shillings (KSh)
- ✅ **LocalStorage Persistence** - Cart data survives page refreshes
- ✅ **Remove & Adjust** - Full cart management with quantity controls

### Enhanced Features

- 🔍 **Live Search** - Filter products by name in real-time
- 🏷️ **Category Filters** - Browse by Home Decor, Accessories, Kitchenware, or Home Textiles
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern UI** - Vibrant color scheme with smooth animations
- 🛒 **Cart Badge Counter** - Shows total items at a glance
- 💫 **Hover Effects** - Interactive product cards with visual feedback
- 🔍 **Product Detail Modal** - View detailed product information with descriptions and features
- ➕ **Modal Quantity Control** - Add multiple items at once from the product modal

### 🗂️ Project Structure

```
ShopEase/
│
├── index.html          # Main webpage
├── style.css           # Styles and responsive layout
├── script.js           # App logic (cart + localStorage)
├── products.json       # Mock product data
│
├── images/             # Folder for product images/icons
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome,Firefox,Edge and any other browser)
- No server or build tools required!

### Installation

1. **Clone or Download** the repository

```bash
git clone https://github.com/Denis-7242/ShopEase.git
cd shopEase
```

2. **Open the file**

```bash
# Simply open index.html in your browser
# On Mac/Linux/windows:
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

### Product Details

1. Click on a **product image** or **product name** to open the detail modal
2. View the **full product description** and **feature list**
3. Adjust the **quantity** using +/− buttons in the modal
4. Click **"Add to Cart"** to add items
5. Close the modal by clicking the **X button** or **clicking outside** the modal

### Shopping Cart

1. Click **"Add to Cart"** on any product
2. Click the **"Cart"** button in the header to view your cart
3. Use **+/−** buttons to adjust quantities
4. Click **"Remove"** to delete items
5. Your cart persists even after closing the browser!

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
      image: "image-url",
    },
    // ... more products
  ],
};
```

## 🛠️ Customization

### Adding New Products

Edit the `productsData` object in the JavaScript section:

```javascript
{
    id: 13,  // Unique ID
    name: "New Product",
    price: 1500,  // Price in KSh
    category: "Accessories",  // Must match existing category
    image: "https://your-image-url.com/image.jpg",
    description: "Detailed product description for the modal",
    features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5"
    ]
}
```

### Changing Colors

Update the CSS variables for quick theme changes:

```css
/* Primary Blue */
background-color: #3498db;

/* Green for Prices */
color: #27ae60;

/* Dark Header */
background: linear-gradient(135deg, #2c3e50, #34495e);

/* Red Accents */
background-color: #e74c3c;
```

### Adding Categories

New categories are automatically detected and added to the filter buttons.

## 📱 Responsive Design

- **Desktop**: Full grid layout with hover effects
- **Tablet**: Adaptive grid with 2-3 columns
- **Mobile**: Single column, full-width cart drawer

## 🎨 Color Palette

| Color        | Hex Code  | Usage                         |
| ------------ | --------- | ----------------------------- |
| Primary Blue | `#3498db` | Buttons, links, active states |
| Dark Grey    | `#2c3e50` | Header background             |
| Green        | `#27ae60` | Prices, checkout button       |
| Red          | `#e74c3c` | Cart badge, alerts            |
| Light Grey   | `#f8f9fa` | Page background               |

## 🔧 Technical Details

### Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, animations, gradients
- **JavaScript (ES6+)** - Cart logic, DOM manipulation
- **LocalStorage API** - Data persistence

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance

- No external dependencies
- Lightweight (~25KB total)
- Fast initial load
- Smooth 60fps animations

## 🐛 Known Issues

- None at the moment! 🎉

## 📈 Future Enhancements

- [x] ~~Add product detail modal~~
- [ ] Implement product ratings/reviews
- [ ] Add wishlist functionality
- [ ] Multiple image galleries per product
- [ ] Price sorting (low to high, high to low)
- [ ] Stock availability tracking
- [ ] Checkout process
- [ ] Order history
- [ ] User authentication
- [ ] Product comparison feature
- [ ] Recently viewed products

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**

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

- Product images from [Unsplash](https://unsplash.com)
- Inspired by modern e-commerce platforms
- Built as an MVP project for learning purposes

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact me directly.

---

**Made with ❤️ by Denis**


---

## 🛍️ ShopEase – Mini E-Commerce Product Gallery

### 📖 Overview

**ShopEase** is a **Mini E-Commerce Product Gallery MVP** built using **HTML, CSS, and JavaScript**.
It allows users to browse products, add them to a cart, remove items, and view their total — all while saving their cart in **localStorage** for persistence.
The design uses **muted, non-bright colors** for a clean, modern shopping experience.

---

### 🎯 Features

✅ Display a list of products dynamically (from `products.json`)
✅ Add items to a shopping cart
✅ Increase quantity of items in the cart
✅ Remove items from the cart
✅ Calculate total price in real-time
✅ Save and restore cart data using **localStorage**
✅ Fully **responsive layout** using CSS Grid/Flexbox
✅ Optional search and category filters

---

### 🧰 Tech Stack

| Layer    | Technology Used                                               |
| -------- | ------------------------------------------------------------- |
| Frontend | HTML5, CSS3, JavaScript (ES6)                                 |
| Data     | `products.json` (local mock data)                             |
| Storage  | Browser LocalStorage                                          |
| Design   | Muted, neutral color palette (grays, off-whites, beige tones) |

---

### 🗂️ Project Structure

```
ShopEase/
│
├── index.html          # Main webpage
├── style.css           # Styles and responsive layout
├── script.js           # App logic (cart + localStorage)
├── products.json       # Mock product data
│
├── assets/             # Folder for product images/icons
│   ├── product1.jpg
│   ├── product2.jpg
│   └── ...
│
└── README.md           # Project documentation
```

---

### 💡 Design Guidelines

* Use **muted/neutral colors** instead of bright tones:

  * Background: `#F5F5F5`
  * Text: `#333333`
  * Card: `#EDEDED`
  * Accent: `#6B6B6B` or a soft olive tone (`#7A8A72`)
* Maintain consistent padding, spacing, and rounded corners for all product cards.
* Product images should be **clean and professional**, ideally from royalty-free sources like:

  * [Pexels](https://www.pexels.com)
  * [Unsplash](https://unsplash.com)
  * [Pixabay](https://pixabay.com)

---

### 🚀 How to Run

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Denis-7242/ShopEase.git
   ```
2. **Open the folder:**

   ```bash
   cd ShopEase
   ```
3. **Run locally:**

   * Simply open `index.html` in your browser.
   * *(Optional)* Use Live Server in VS Code for auto reloads.

---

### 🧩 Optional Improvements

* Add search and category filters.
* Show item count badge on the cart icon.
* Include product detail pop-ups.
* Connect to a real API instead of local JSON.
* Add animations with CSS transitions or small libraries (e.g., GSAP, Animate.css).

---

### 👨‍💻 Author

**Denis Murithi**
💼 *Front-End Developer | Web Enthusiast*
📧 [dexdenis3@gmail.com]
🌐 [(https://github.com/Denis-7242)]

---

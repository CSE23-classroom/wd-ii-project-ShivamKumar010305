// Dataset containing exactly 33 structured Amazon items in Rupees (INR)
const products = [
    // --- ELECTRONICS (9 items) ---
    { id: 1, title: "Wireless Bluetooth Over-Ear Noise Cancelling Headphones", category: "Electronics", price: 7999, rating: 4.5, reviews: 2450, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 2, title: "4K Sports Action Waterproof Camera with Kit", category: "Electronics", price: 3999, rating: 4.2, reviews: 1102, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80" },
    { id: 3, title: "Mechanical Gaming Keyboard RGB Backlit Keys", category: "Electronics", price: 4550, rating: 4.7, reviews: 890, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80" },
    { id: 4, title: "Ergonomic Wireless Optical Mouse with Nano Receiver", category: "Electronics", price: 999, rating: 4.1, reviews: 5430, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80" },
    { id: 5, title: "Dual-Driver Portable Outdoor Bluetooth Speaker", category: "Electronics", price: 2499, rating: 4.4, reviews: 1320, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80" },
    { id: 6, title: "1080p HD Live Streaming Webcam with Ring Light", category: "Electronics", price: 2999, rating: 4.3, reviews: 765, image: "https://images.unsplash.com/photo-1603162591604-c529d8916d86?w=500&q=80" },
    { id: 7, title: "Fitness Tracker Smartwatch with Heart Rate Monitor", category: "Electronics", price: 3495, rating: 4.0, reviews: 3210, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80" },
    { id: 8, title: "Fast Wireless Charging Dock Pad for Smartphones", category: "Electronics", price: 1299, rating: 4.6, reviews: 9400, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAYkDuyPXzhBcUMQt8gyhywUGiR3yia2AS0Utq4CaneA&s=10" },
    { id: 9, title: "Professional Studio Condenser USB Podcast Microphone", category: "Electronics", price: 5999, rating: 4.5, reviews: 1823, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80" },

    // --- FASHION (8 items) ---
    { id: 10, title: "Classic Men's Crewneck Solid Cotton T-Shirt", category: "Fashion", price: 599, rating: 4.3, reviews: 12050, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80" },
    { id: 11, title: "Unisex Retro UV Protection Sunglasses", category: "Fashion", price: 799, rating: 4.2, reviews: 310, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80" },
    { id: 12, title: "Lightweight Breathable Running Sneakers", category: "Fashion", price: 2499, rating: 4.4, reviews: 2980, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 13, title: "Water-Resistant Canvas College & Travel Backpack", category: "Fashion", price: 1499, rating: 4.6, reviews: 4120, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80" },
    { id: 14, title: "Premium Analog Quartz Genuine Leather Watch", category: "Fashion", price: 4999, rating: 4.7, reviews: 1540, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80" },
    { id: 15, title: "Women's Comfort Casual Open Cardigan", category: "Fashion", price: 1890, rating: 4.1, reviews: 890, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&q=80" },
    { id: 16, title: "Genuine Leather Slim Bi-fold Wallet for Men", category: "Fashion", price: 999, rating: 4.5, reviews: 6710, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80" },
    { id: 17, title: "Comfy Indoor Memory Foam Home Slippers", category: "Fashion", price: 699, rating: 4.3, reviews: 1130, image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80" },

    // --- HOME & KITCHEN (8 items) ---
    { id: 18, title: "Stainless Steel Electric Fast-Boiling Kettle (1.5L)", category: "Home", price: 1499, rating: 4.6, reviews: 14320, image: "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=500&q=80" },
    { id: 19, title: "Automatic Programmable Drip Coffee Maker Machine", category: "Home", price: 3899, rating: 4.4, reviews: 3890, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyb3hEKzKNBI8C8q2qtHYqnh3VRwt-wzN62aAWbq29Q&s" },
    { id: 20, title: "Ultrasonic Cool Mist Humidifier for Home & Bedroom", category: "Home", price: 2199, rating: 4.3, reviews: 5210, image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&q=80" },
    { id: 21, title: "Modern Elegant Ceramic Flower Vases Set", category: "Home", price: 850, rating: 4.5, reviews: 740, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&q=80" },
    { id: 22, title: "Non-Stick Heavy Duty Cast Iron Skillet Pan Set", category: "Home", price: 2999, rating: 4.7, reviews: 6150, image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=500&q=80" },
    { id: 23, title: "Dimmable Eye-Care LED Desk Lamp with Charging Port", category: "Home", price: 1599, rating: 4.4, reviews: 2900, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhy0GQNEvV9PWUGHgeB_CPEz2NE4yWmZ7jWldHFK-18g&s" },
    { id: 24, title: "Double-Wall Insulated Stainless Steel Flask Tumbler", category: "Home", price: 999, rating: 4.8, reviews: 10450, image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=500&q=80" },
    { id: 25, title: "Digital Electronic Precision Food Kitchen Scale", category: "Home", price: 595, rating: 4.6, reviews: 24100, image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=500&q=80" },

    // --- BOOKS (8 items) ---
    { id: 26, title: "The Creative Mindset: Finding Your Innovation Inside", category: "Books", price: 499, rating: 4.6, reviews: 120, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80" },
    { id: 27, title: "Classic Hardcover Fiction Suspense Mystery Novel", category: "Books", price: 695, rating: 4.4, reviews: 2340, image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80" },
    { id: 28, title: "Mastering Clean Coding & Development Principles", category: "Books", price: 1299, rating: 4.9, reviews: 420, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80" },
    { id: 29, title: "The Indian Culinary Masterclass: Modern Recipes", category: "Books", price: 899, rating: 4.7, reviews: 890, image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500&q=80" },
    { id: 30, title: "Mindfulness Daily Self-Reflection Guide Journal", category: "Books", price: 349, rating: 4.3, reviews: 1530, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80" },
    { id: 31, title: "Historical World Atlas and Comprehensive Atlas Guide", category: "Books", price: 1499, rating: 4.5, reviews: 310, image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80" },
    { id: 32, title: "The Science of Deep Space & Cosmic Exploration", category: "Books", price: 750, rating: 4.8, reviews: 115, image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=500&q=80" },
    { id: 33, title: "Architectural Wonders Art & Photo Collection Book", category: "Books", price: 1850, rating: 4.7, reviews: 94, image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&q=80" }
];

// Global Active States
let cart = [];
let wishlist = [];

// DOM Loaded Event Entry Point
window.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});

// Render Dynamic Products Grid Layout
function renderProducts(items) {
    const container = document.getElementById('productsGrid');
    if (items.length === 0) {
        container.innerHTML = `<p class="col-span-full text-center text-gray-600 font-semibold py-10">No products found matching your search.</p>`;
        return;
    }

    container.innerHTML = items.map(product => {
        const inWishlist = wishlist.some(item => item.id === product.id);
        const heartClass = inWishlist ? 'fa-solid text-red-500' : 'fa-regular text-gray-400';
        
        return `
            <div class="bg-white p-4 rounded flex flex-col justify-between relative group shadow hover:shadow-md transition">
                <button onclick="toggleWishlist(${product.id})" class="absolute top-3 right-3 z-20 bg-white/80 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition">
                    <i id="heart-${product.id}" class="${heartClass} fa-heart text-base"></i>
                </button>
                <div>
                    <div class="w-full h-48 flex items-center justify-center overflow-hidden mb-3 bg-gray-50 rounded">
                        <img src="${product.image}" alt="${product.title}" class="object-contain max-h-full max-w-full mix-blend-multiply group-hover:scale-105 transition duration-300">
                    </div>
                    <span class="text-[10px] uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full font-bold">${product.category}</span>
                    <h3 class="text-sm font-medium line-clamp-2 text-gray-800 mt-2 mb-1">${product.title}</h3>
                    <div class="flex items-center gap-1 mb-2">
                        <span class="text-amazon_orange text-xs"><i class="fa-solid fa-star"></i> ${product.rating}</span>
                        <span class="text-xs text-blue-600 hover:underline cursor-pointer">(${product.reviews})</span>
                    </div>
                </div>
                <div>
                    <div class="flex flex-col mb-3">
                        <span class="text-[11px] text-gray-500 font-medium">M.R.P.:</span>
                        <div class="flex items-baseline text-gray-900">
                            <span class="text-xl font-bold">₹${product.price.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                    <button onclick="addToCart(${product.id})" class="w-full bg-amazon_yellow hover:bg-amazon_orange text-black py-1.5 rounded-md text-xs font-semibold shadow transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Category Filtering Engine Logic
function filterCategory(category) {
    if (category === 'All') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
        renderProducts(filtered);
    }
}

// Global Text Query Search Method
function handleSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const filtered = products.filter(p => p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
    renderProducts(filtered);
}

// Cart System State Handlers
function addToCart(id) {
    const item = products.find(p => p.id === id);
    const exists = cart.find(p => p.id === id);
    if (exists) {
        exists.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function changeQty(id, delta) {
    const item = cart.find(p => p.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) removeFromCart(id);
        else updateCartUI();
    }
}

function updateCartUI() {
    const totalCount = cart.reduce((acc, obj) => acc + obj.quantity, 0);
    document.getElementById('cartCount').innerText = totalCount;

    const cartContainer = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartContainer.innerHTML = `<p class="text-center text-gray-500 py-10">Your Amazon Cart is empty.</p>`;
        document.getElementById('cartSubtotal').innerText = "₹0";
        return;
    }

    let subtotal = 0;
    cartContainer.innerHTML = cart.map(item => {
        subtotal += item.price * item.quantity;
        return `
            <div class="flex items-center gap-3 pb-3 border-b border-gray-200">
                <img src="${item.image}" class="w-16 h-16 object-cover rounded bg-gray-100">
                <div class="flex-grow">
                    <h4 class="text-xs font-bold text-gray-800 line-clamp-1">${item.title}</h4>
                    <p class="text-sm font-semibold text-amber-700 mt-0.5">₹${item.price.toLocaleString('en-IN')}</p>
                    <div class="flex items-center gap-2 mt-1">
                        <div class="flex items-center border border-gray-300 rounded bg-gray-50">
                            <button onclick="changeQty(${item.id}, -1)" class="px-2 py-0.5 text-xs hover:bg-gray-200">-</button>
                            <span class="px-2 text-xs font-semibold">${item.quantity}</span>
                            <button onclick="changeQty(${item.id}, 1)" class="px-2 py-0.5 text-xs hover:bg-gray-200">+</button>
                        </div>
                        <button onclick="removeFromCart(${item.id})" class="text-xs text-blue-600 hover:underline">Delete</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    document.getElementById('cartSubtotal').innerText = `₹${subtotal.toLocaleString('en-IN')}`;
}

// Wishlist Logic Controllers
function toggleWishlist(id) {
    const index = wishlist.findIndex(p => p.id === id);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        const product = products.find(p => p.id === id);
        wishlist.push(product);
    }
    updateWishlistUI();
    
    const heartIcon = document.getElementById(`heart-${id}`);
    if(heartIcon) {
        heartIcon.className = wishlist.some(p => p.id === id) 
            ? 'fa-solid text-red-500 fa-heart text-base' 
            : 'fa-regular text-gray-400 fa-heart text-base';
    }
}

function updateWishlistUI() {
    document.getElementById('wishlistCount').innerText = wishlist.length;
    const container = document.getElementById('wishlistItems');

    if (wishlist.length === 0) {
        container.innerHTML = `<p class="text-center text-gray-500 py-10">Your Wishlist is empty.</p>`;
        return;
    }

    container.innerHTML = wishlist.map(item => `
        <div class="flex items-center justify-between pb-3 border-b border-gray-200">
            <div class="flex items-center gap-3">
                <img src="${item.image}" class="w-14 h-14 object-cover rounded bg-gray-100">
                <div>
                    <h4 class="text-xs font-bold text-gray-800 line-clamp-1">${item.title}</h4>
                    <p class="text-xs font-semibold text-amber-700">₹${item.price.toLocaleString('en-IN')}</p>
                </div>
            </div>
            <div class="flex flex-col gap-1 text-right">
                <button onclick="addToCart(${item.id}); toggleWishlist(${item.id});" class="bg-amazon_yellow text-[11px] px-2 py-1 rounded shadow font-semibold">Move to Cart</button>
                <button onclick="toggleWishlist(${item.id})" class="text-[11px] text-red-600 hover:underline">Remove</button>
            </div>
        </div>
    `).join('');
}

// Interface Animation Toggles
function toggleModal(id) {
    document.getElementById(id).classList.toggle('hidden');
}

function openSlideOver(id) {
    document.getElementById(id).classList.remove('translate-x-full');
}

function closeSlideOver(id) {
    document.getElementById(id).classList.add('translate-x-full');
}

function handleLogin(e) {
    e.preventDefault();
    const nameInput = document.getElementById('loginEmail').value;
    document.getElementById('navUserLabel').innerText = `Hello, ${nameInput.split('@')[0]}`;
    toggleModal('loginModal');
}
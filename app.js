const products = [
  { id: 1, name: "Cloud Nine Hydrating Mist", category: "Skincare", price: 1009.71, rating: "4.9", reviews: 128, badge: "bestseller", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85", colors: ["#eac3bd", "#e7d8c8", "#d4d6c6"] },
  { id: 2, name: "Peachy Keen Lip & Cheek", category: "Makeup", price: 897.52, rating: "4.8", reviews: 96, badge: "little fave", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85", colors: ["#dc8d85", "#bb686f", "#e9b9a2"] },
  { id: 3, name: "Sunday Reset Headband", category: "Accessories", price: 785.33, rating: "5.0", reviews: 74, badge: "", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=85", colors: ["#e7bfbd", "#e9ddce", "#d2cbe0"] },
  { id: 4, name: "Dew Drop Daily Cleanser", category: "Skincare", price: 1234.09, rating: "4.9", reviews: 211, badge: "glow getter", image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=85", colors: ["#e4c4ae", "#d7d9ca", "#d9c8d7"] },
  { id: 5, name: "Soft Focus Cream Blush", category: "Makeup", price: 1065.8, rating: "4.8", reviews: 89, badge: "", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=85", colors: ["#e5a89e", "#c77e83", "#edc2a8"] },
  { id: 6, name: "Sweet Dreams Satin Scrunchies", category: "Accessories", price: 673.14, rating: "4.9", reviews: 153, badge: "set of 3", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=700&q=85", colors: ["#e9bfc2", "#dbd1e8", "#ddc8ad"] },
  { id: 7, name: "Main Character SPF 30", category: "Skincare", price: 1346.28, rating: "5.0", reviews: 57, badge: "new", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=85", colors: ["#f1d8b8", "#eee1d1"] },
  { id: 8, name: "Rosewater Glow Oil", category: "Skincare", price: 1458.47, rating: "4.9", reviews: 107, badge: "", image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=85", colors: ["#e4a8a0", "#d1b3a5", "#e1cdd4"] },
  { id: 9, name: "Sunday Softening Hair Oil", category: "Hair care", price: 1177.99, rating: "4.8", reviews: 63, badge: "new", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=85", colors: ["#d9b8a8", "#e8d9c9"] }
];
const productDetails = {
  1: { description: "A refreshing face mist designed for a quick, feel-good refresh in your everyday routine.", howTo: "Mist lightly over clean skin, keeping your eyes closed. Follow the directions on the product label.", note: "Check the packaging for the full ingredient list, size, and suitability information." },
  2: { description: "A multi-use lip and cheek color for adding a soft touch of color to your look.", howTo: "Apply a small amount to lips or cheeks and blend. Follow the product label, especially if you have sensitive skin.", note: "Check the packaging for ingredients, shade name, size, and suitability information." },
  3: { description: "A soft everyday headband to keep hair comfortably away while you get ready or follow your skincare routine.", howTo: "Wear comfortably around the hairline. Follow the care instructions on the packaging.", note: "Check the packaging for exact material composition and care instructions." },
  4: { description: "A daily facial cleanser for a simple, fresh-feeling skincare routine.", howTo: "Use as directed on the label and rinse thoroughly. Avoid contact with eyes; discontinue if irritation occurs.", note: "Check the packaging for ingredients, size, and skin suitability information." },
  5: { description: "A cream blush made for a soft pop of color as part of your everyday makeup routine.", howTo: "Tap a small amount onto cheeks and blend. Follow the product label and patch test if you have sensitive skin.", note: "Check the packaging for ingredients, shade name, size, and suitability information." },
  6: { description: "A set of three satin scrunchies for everyday styling and keeping hair comfortably tied back.", howTo: "Use to tie hair without pulling too tightly. Follow the care instructions on the packaging.", note: "Check the packaging for exact material composition and care instructions." },
  7: { description: "An SPF 30 sunscreen listing for a daily sun-care routine.", howTo: "Use only according to the product label, including its application and reapplication instructions.", note: "Verify the SPF rating, active ingredients, water-resistance details, size, and directions on the item packaging." },
  8: { description: "A face oil listing for adding a finishing step to your skincare routine.", howTo: "Apply sparingly as directed on the product label. Avoid contact with eyes and discontinue if irritation occurs.", note: "Check the packaging for ingredients, size, and skin suitability information." },
  9: { description: "A hair oil listing for a little extra care as part of your hair routine.", howTo: "Start with a small amount and use only as directed on the product label.", note: "Check the packaging for ingredients, size, and directions for use." }
};
const reviews = [
  { quote: "My whole bathroom shelf is slowly becoming a sunday girl shelf and honestly… no regrets.", name: "Jules M.", item: "Cloud Nine Hydrating Mist" },
  { quote: "Everything feels so thoughtful, from the products to the little packaging details. Obsessed.", name: "Ari L.", item: "Peachy Keen Lip & Cheek" },
  { quote: "The softest little pick-me-up. My morning routine finally feels like me again.", name: "Nina R.", item: "Sunday Reset Headband" },
  { quote: "The cleanser is dreamy and my skin has never felt this happy. Already on my second one!", name: "Mia C.", item: "Dew Drop Daily Cleanser" },
  { quote: "Cute, actually useful, and arrived so fast. This is my new go-to gift shop too.", name: "Sam K.", item: "Sweet Dreams Satin Scrunchies" }
];
const cart = new Map();
const wishlist = new Set();
let reviewIndex = 0;
let toastTimer;
const FREE_SHIPPING_THRESHOLD = 3365.69;

function money(amount) {
  return `EGP ${amount.toLocaleString("en-EG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function renderProducts(filter = "All") {
  const visible = products.filter(product => filter === "All" || product.category === filter);
  document.querySelector("#productGrid").innerHTML = visible.map(product => `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-image-wrap">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" />
        <button class="product-heart ${wishlist.has(product.id) ? "active" : ""}" data-wishlist="${product.id}" aria-label="${wishlist.has(product.id) ? "Remove from" : "Add to"} wishlist"><svg viewBox="0 0 24 24"><path d="M20.8 8.8c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10a4.7 4.7 0 0 1 8.8-2.2 4.7 4.7 0 0 1 8.8 2.2Z"></path></svg></button>
        <button class="quick-add" data-add="${product.id}">Add to bag — ${money(product.price)}</button>
      </div>
      <div class="product-info">
        <div class="product-title-row"><h3 class="product-title">${product.name}</h3><span class="product-price">${money(product.price)}</span></div>
        <div class="product-rating"><span>★★★★★</span>${product.rating} (${product.reviews})</div>
        <button class="product-detail-trigger" data-details="${product.id}" aria-label="View details for ${product.name}">View product details <span>↗</span></button>
        <div class="product-swatches" aria-label="Available colors">${product.colors.map(color => `<span class="swatch" style="background:${color}"></span>`).join("")}</div>
      </div>
    </article>`).join("");
}

function openProductDetails(id) {
  const product = products.find(item => item.id === Number(id));
  const details = productDetails[product?.id];
  if (!product || !details) return;
  document.querySelector("#productDetailsImage").src = product.image;
  document.querySelector("#productDetailsImage").alt = product.name;
  document.querySelector("#productDetailsCategory").textContent = product.category;
  document.querySelector("#productDetailsTitle").textContent = product.name;
  document.querySelector("#productDetailsPrice").textContent = money(product.price);
  document.querySelector("#productDetailsDescription").textContent = details.description;
  document.querySelector("#productDetailsHowTo").textContent = details.howTo;
  document.querySelector("#productDetailsNote").textContent = details.note;
  document.querySelector("#productDetailsAdd").dataset.add = String(product.id);
  document.querySelector("#productDetails").showModal();
}

function setBadge(element, count) {
  element.textContent = count;
  element.classList.toggle("visible", count > 0);
}

function updateWishlistCount() {
  setBadge(document.querySelector("#wishlistCount"), wishlist.size);
  document.querySelector("#wishlistTrigger").classList.toggle("liked", wishlist.size > 0);
}

function updateCart() {
  const count = [...cart.values()].reduce((sum, item) => sum + item.quantity, 0);
  setBadge(document.querySelector("#cartCount"), count);
  document.querySelector("#drawerItemCount").textContent = `(${count})`;
  const itemCount = cart.size;
  const empty = itemCount === 0;
  document.querySelector("#emptyCart").classList.toggle("show", empty);
  document.querySelector("#drawerFooter").classList.toggle("hidden", empty);
  document.querySelector("#cartItems").innerHTML = [...cart.values()].map(({ product, quantity }) => `
    <div class="cart-row">
      <img src="${product.image}" alt="" />
      <div><p class="cart-product-name">${product.name}</p><span class="cart-product-price">${money(product.price)}</span>
        <div class="quantity-control"><button data-quantity="${product.id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${quantity}</span><button data-quantity="${product.id}" data-change="1" aria-label="Increase quantity">+</button></div>
      </div>
      <button class="remove-item" data-remove="${product.id}" aria-label="Remove ${product.name}">×</button>
    </div>`).join("");
  const subtotal = [...cart.values()].reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  document.querySelector("#cartSubtotal").textContent = money(subtotal);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  document.querySelector("#shippingMessage").textContent = remaining ? `You’re ${money(remaining)} away from free shipping!` : "Yay! You unlocked free shipping ♡";
  document.querySelector("#shippingProgress").style.width = `${Math.min(100, subtotal / FREE_SHIPPING_THRESHOLD * 100)}%`;
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2100);
}

function addToCart(id) {
  const product = products.find(item => item.id === Number(id));
  if (!product) return;
  const item = cart.get(product.id);
  cart.set(product.id, { product, quantity: (item?.quantity || 0) + 1 });
  updateCart();
  showToast(`${product.name} added to your bag ♡`);
}

function openDrawer() {
  document.querySelector("#cartDrawer").classList.add("open");
  document.querySelector("#cartDrawer").setAttribute("aria-hidden", "false");
  document.querySelector("#drawerScrim").classList.add("open");
  document.body.classList.add("drawer-open");
  document.querySelector("#closeDrawer").focus();
}

function closeDrawer() {
  document.querySelector("#cartDrawer").classList.remove("open");
  document.querySelector("#cartDrawer").setAttribute("aria-hidden", "true");
  document.querySelector("#drawerScrim").classList.remove("open");
  document.body.classList.remove("drawer-open");
}

function updateReviewCarousel() {
  const cards = [...document.querySelectorAll(".review-card")];
  const mobile = window.matchMedia("(max-width: 760px)").matches;
  cards.forEach((card, index) => card.classList.toggle("active", !mobile || index === reviewIndex));
  document.querySelector("#reviewDots").innerHTML = reviews.map((_, index) =>
    `<button class="${index === reviewIndex ? "active" : ""}" data-review="${index}" aria-label="Show review ${index + 1}"></button>`).join("");
}

document.querySelector("#productGrid").addEventListener("click", event => {
  const add = event.target.closest("[data-add]");
  const heart = event.target.closest("[data-wishlist]");
  const details = event.target.closest("[data-details]");
  if (add) addToCart(add.dataset.add);
  if (details) openProductDetails(details.dataset.details);
  if (heart) {
    const id = Number(heart.dataset.wishlist);
    if (wishlist.has(id)) wishlist.delete(id);
    else wishlist.add(id);
    updateWishlistCount();
    renderProducts(document.querySelector(".product-tabs button.active").dataset.filter);
  }
});

document.querySelector("#productDetailsClose").addEventListener("click", () => document.querySelector("#productDetails").close());
document.querySelector("#productDetailsAdd").addEventListener("click", event => {
  addToCart(event.currentTarget.dataset.add);
  document.querySelector("#productDetails").close();
});
document.querySelector("#productDetails").addEventListener("click", event => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});

document.querySelector(".product-tabs").addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  document.querySelector(".product-tabs .active").classList.remove("active");
  button.classList.add("active");
  renderProducts(button.dataset.filter);
});

document.querySelector("#cartTrigger").addEventListener("click", openDrawer);
document.querySelector("#closeDrawer").addEventListener("click", closeDrawer);
document.querySelector("#drawerScrim").addEventListener("click", closeDrawer);
document.querySelector("#continueShopping").addEventListener("click", closeDrawer);
document.querySelector("#continueShoppingLink").addEventListener("click", closeDrawer);
document.querySelector("#cartItems").addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");
  if (quantityButton) {
    const id = Number(quantityButton.dataset.quantity);
    const item = cart.get(id);
    item.quantity += Number(quantityButton.dataset.change);
    if (item.quantity <= 0) cart.delete(id);
    updateCart();
  }
  if (removeButton) {
    cart.delete(Number(removeButton.dataset.remove));
    updateCart();
  }
});
document.querySelector("#checkoutButton").addEventListener("click", () => showToast("Online ordering is coming soon ♡"));
document.querySelector("#wishlistTrigger").addEventListener("click", () => {
  if (!wishlist.size) showToast("Tap a heart to save your little favorites ♡");
  else {
    document.querySelector(".product-tabs button.active").classList.remove("active");
    document.querySelector('.product-tabs button[data-filter="All"]').classList.add("active");
    renderProducts("All");
    document.querySelector("#bestsellers").scrollIntoView({ behavior: "smooth" });
    showToast(`${wishlist.size} little favorite${wishlist.size === 1 ? "" : "s"} saved ♡`);
  }
});
document.querySelector("#searchInput").addEventListener("input", event => {
  const query = event.target.value.trim().toLowerCase();
  const results = document.querySelector("#searchResults");
  if (!query) { results.classList.remove("open"); results.innerHTML = ""; return; }
  const matches = products.filter(product => `${product.name} ${product.category}`.toLowerCase().includes(query)).slice(0, 5);
  if (matches.length) results.innerHTML = matches.map(product => `<div class="search-result" role="option" data-search-product="${product.id}"><img src="${product.image}" alt="" /><span>${product.name}</span><small>${money(product.price)}</small></div>`).join("");
  else {
    results.textContent = "";
    const emptyResult = document.createElement("div");
    emptyResult.className = "search-result";
    emptyResult.textContent = `No little finds for “${query}”`;
    results.append(emptyResult);
  }
  results.classList.add("open");
});
document.querySelector("#searchResults").addEventListener("click", event => {
  const result = event.target.closest("[data-search-product]");
  if (!result) return;
  const product = products.find(item => item.id === Number(result.dataset.searchProduct));
  document.querySelector("#searchInput").value = product.name;
  document.querySelector("#searchResults").classList.remove("open");
  document.querySelector(".product-tabs .active").classList.remove("active");
  document.querySelector(`.product-tabs button[data-filter="${product.category}"]`).classList.add("active");
  renderProducts(product.category);
  document.querySelector("#bestsellers").scrollIntoView({ behavior: "smooth" });
});
document.addEventListener("click", event => {
  if (!event.target.closest(".search-wrap")) document.querySelector("#searchResults").classList.remove("open");
});
document.querySelectorAll(".category-card").forEach(card => card.addEventListener("click", () => {
  const category = card.dataset.category;
  document.querySelector(".product-tabs .active").classList.remove("active");
  document.querySelector(`.product-tabs button[data-filter="${category}"]`).classList.add("active");
  renderProducts(category);
}));
document.querySelector("#menuToggle").addEventListener("click", () => {
  const nav = document.querySelector("#mainNav");
  const open = nav.classList.toggle("open");
  document.querySelector("#menuToggle").setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#mainNav a").forEach(link => link.addEventListener("click", () => document.querySelector("#mainNav").classList.remove("open")));
document.querySelector("#reviewTrack").innerHTML = reviews.map(review => `
  <article class="review-card"><div class="review-stars">★★★★★</div><p class="review-quote">“${review.quote}”</p><div class="reviewer"><span>${review.name} · ${review.item}</span><span class="verified">✓ VERIFIED BUYER</span></div></article>`).join("");
document.querySelector("#reviewPrev").addEventListener("click", () => { reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length; updateReviewCarousel(); });
document.querySelector("#reviewNext").addEventListener("click", () => { reviewIndex = (reviewIndex + 1) % reviews.length; updateReviewCarousel(); });
document.querySelector("#reviewDots").addEventListener("click", event => {
  const dot = event.target.closest("[data-review]");
  if (dot) { reviewIndex = Number(dot.dataset.review); updateReviewCarousel(); }
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeDrawer();
});
window.addEventListener("resize", updateReviewCarousel);
window.addEventListener("scroll", () => document.querySelector(".site-header").classList.toggle("scrolled", window.scrollY > 10), { passive: true });

renderProducts();
updateCart();
updateReviewCarousel();
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("revealed"); revealObserver.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll(".section, .sale-banner, .site-footer").forEach(element => {
    element.setAttribute("data-reveal", "");
    revealObserver.observe(element);
  });
} else {
  document.querySelectorAll(".section, .sale-banner, .site-footer").forEach(element => element.classList.add("revealed"));
}

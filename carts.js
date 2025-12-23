/* ===== DARK MODE ===== */
const toggleBtn = document.getElementById("toggleTheme");
if (toggleBtn) {
    toggleBtn.onclick = () => {
        document.body.classList.toggle("dark-mode");
    };
}

/* ===== CART ===== */
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
    const el = document.getElementById("cart-count");
    if (!el) return;
    const cart = getCart();
    el.textContent = cart.reduce((s, i) => s + i.qty, 0);
}

function renderCart() {
    const cart = getCart();
    const box = document.getElementById("cart-container");
    const totalEl = document.getElementById("total-price");

    if (!cart.length) {
        box.innerHTML = "🛒 Giỏ hàng trống";
        totalEl.textContent = "0 đ";
        return;
    }

    let total = 0;
   box.innerHTML = cart.map((i, idx) => {
    total += i.price * i.qty;
    return `
        <div class="cart-item">
            <img src="${i.image}" class="cart-img" alt="${i.name}">
            <div class="cart-info">
                <h3>${i.name}</h3>
                <p>${i.price.toLocaleString("vi-VN")} đ</p>
                <p>Số lượng: ${i.qty}</p>
                <button onclick="removeItem(${idx})">❌ Xóa</button>
            </div>
        </div>
    `;
}).join("");

    totalEl.textContent = total.toLocaleString("vi-VN") + " đ";
}

function removeItem(i) {
    const cart = getCart();
    cart.splice(i, 1);
    saveCart(cart);
    renderCart();
    updateCartCount();
}

renderCart();
updateCartCount();

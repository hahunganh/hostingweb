/* ===== DARK MODE ===== */
const toggleThemeBtn = document.getElementById("toggleTheme");
if (toggleThemeBtn) {
    toggleThemeBtn.onclick = () => {
        document.body.classList.toggle("dark-mode");
    };
}
function searchProducts() { 
	const searchTerm = 
		  document.getElementById("searchInput").value.toLowerCase(); 
	const products = document.querySelectorAll(".product");
	
	products.forEach(product => {
		const productName = 
			  product.querySelector("h2").innerText.toLowerCase(); 
		product.style.display = productName.includes(searchTerm) ? "block" : "none";
	}); 
}
/* ================= FILTER CATEGORY ================= */ 
function filterCategory(category) { 
	const products = document.querySelectorAll(".product"); 
	
	products.forEach(product => { 
		if (category === "all" || product.dataset.category === category) {
			product.style.display = "block";
		} else { 
			product.style.display = "none"; 
		} 
	}); 
}
/* ===== CLICK SẢN PHẨM → DETAIL ===== */
document.querySelectorAll(".product").forEach(product => {
    product.onclick = () => {
        const id = product.dataset.id;
        window.location.href = `detail.html?product=${id}`;
    };
});

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

updateCartCount();

/* ===== ADD CART TỪ HOME ===== */
document.querySelectorAll(".details-button").forEach(btn => {
    btn.onclick = e => {
        e.stopPropagation();
        e.preventDefault();

        const p = btn.closest(".product");
        const item = {
            id: p.dataset.id,
            name: p.dataset.name,
            price: Number(p.dataset.price),
			image: p.querySelector("img").src,
            qty: 1
        };

        let cart = getCart();
        const found = cart.find(i => i.id === item.id);
        if (found) found.qty++;
        else cart.push(item);

        saveCart(cart);
        updateCartCount();
        alert("✅ Đã thêm vào giỏ hàng");
    };
});

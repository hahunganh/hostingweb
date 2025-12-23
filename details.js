/* ===== DARK MODE ===== */
const toggleBtn = document.getElementById("toggleTheme");
if (toggleBtn) {
    toggleBtn.onclick = () => {
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
/* ===== DATA SẢN PHẨM ===== */
const products = {
    iphone15: {
        name: "iPhone 15 Pro Max 256GB",
        price: 29990000,
        image: "pic/ip15.jpeg",
        desc: [
            "Đánh giá iPhone 15 Pro Max chi tiết - những cải tiến nổi bật: ",
			"iPhone 15 Pro Max là siêu phẩm mới ra mắt gần đây từ nhà Apple, là sự kết hợp giữa thiết kế sang trọng, hiệu năng mạnh mẽ và công nghệ tiên tiến. Sản phẩm này không chỉ đáp ứng tốt các nhu cầu sử dụng hàng ngày mà còn nâng tầm trải nghiệm người dùng với những tính năng đột phá. Tuy nhiên, iPhone 15 Pro Max giá bao nhiêu và có đi đôi với chất lượng hay không cần phải xem xét các tính năng đổi mới mà nó mang lại. Để đánh giá iP 15 Pro Max cần điểm qua một số điểm nổi bật sau",
        ],
        specs: {
            "Kích thước màn hình": "6.7 inches",
            "Công nghệ màn hình": "Super Retina XDR OLED",
            "Camera sau": "48MP + 12MP + 12MP",
            "Camera trước": "12MP",
            "Chipset": "Apple A17 Pro 6 nhân",
            "RAM": "8 GB",
            "Bộ nhớ trong": "256 GB",
            "Pin": "4422 mAh",
            "SIM": "2 SIM (nano-SIM & eSIM)",
            "Hệ điều hành": "iOS 17",
            "Độ phân giải": "2796 × 1290 pixels",
            "Tần số quét": "120Hz"
        }
    },
	googlepixel: {
	name: "Google Pixel 9 Pro",
        price: 24950000,
        image: "pic/ggpx.jpg",
        desc: [
            "Điện thoại Google Pixel 9 Pro – Hiệu năng mạnh, camera đỉnh, thiết kế tinh tế",
			"Điện thoại Google Pixel 9 Pro là mẫu flagship mới nhất từ Google, mang đến sự kết hợp hoàn hảo giữa sức mạnh xử lý, camera AI thông minh và thiết kế cao cấp. Đây là mẫu điện thoại Google Pixel đáng chú ý nhất đối với tín đồ yêu thích smartphone AI vào cuối năm nay.",
        ],
        specs: {
			"Kích thước màn hình": "6.3 inches",
            "Công nghệ màn hình": "LTPO OLED",
            "Camera sau": "Góc rộng 50 MP,ƒ/1.68, Góc siêu rộng 48 MP, f/1.7 với Lấy nét Macro, Ống kính tele 48 MP, f/2.8, 5x",
            "Camera trước": "42 MP, ƒ/2.2",
            "Chipset": "Google Tensor G4",
			"Công nghệ NFC":"Có",
            "RAM": "16 GB",
            "Bộ nhớ trong": "128 GB",
            "Pin": "4700 mAh",
            "SIM": "2 SIM (nano-SIM & eSIM)",
            "Hệ điều hành": "Android 14"
        }
},
		samsunggalaxys24ultra: {
	name: "Samsung Galaxy S24 Ultra",
        price: 22950000,
        image: "pic/ss.jpg",
        desc: [
            "Đặc điểm nổi bật của Samsung Galaxy S24 Ultra 12GB 256GB",
			"Samsung Galaxy S24 Ultra sở hữu AI thông minh, hiệu năng cực đỉnh cũng đa tính năng cao cấp nhất. Đi kèm với đó là những cải tiến tích cực vượt trội hơn về camera, vi xử lý, và tích hợp AI toàn diện, đây là sản phẩm không thể bỏ qua cho người yêu công nghệ.",
        ],
        specs: {
			"Kích thước màn hình": "6.8 inches",
            "Công nghệ màn hình": "Dynamic AMOLED 2X",
            "Camera sau": "Camera chính: 200MP, Laser AF, OIS, Camera: 50MP, PDAF, OIS, Camera tele: 10MP, Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚",
            "Camera trước": "12 MP, f/2.2",
            "Chipset": "Snapdragon 8 Gen 3 For Galaxy",
			"Công nghệ NFC":"Có",
            "RAM": "12 GB",
            "Bộ nhớ trong": "256 GB",
            "Pin": "5000 mAh",
            "SIM": "SIM 1 + SIM 2 / SIM 1 + eSIM / 2 eSIM",
            "Hệ điều hành": "Android 14, One UI 6.1",
			"Độ phân giải": "1440 x 3120 pixels",
			"Loại CPU": "3.39GHz, 3.1GHz, 2.9GHz, 2.2GHz"
        }
},
	asusrogscar18: {
	name: "Laptop ASUS ROG Strix SCAR 18 G835LX SA208W",
        price: 124990000,
        image: "pic/rogstrixg18_1.png",
        desc: [
            "Đánh giá chi tiết Laptop gaming ASUS ROG Strix SCAR 18 G835LX SA208W",
			"Laptop gaming ASUS ROG Strix SCAR 18 G835LX SA208W là một trong những sản phẩm nổi bật nhất trong dòng laptop gaming ASUS. Với thiết kế mạnh mẽ và cấu hình cao cấp, sản phẩm này hứa hẹn mang đến trải nghiệm chơi game tuyệt vời cho người dùng. Hãy cùng tìm hiểu những đặc điểm nổi bật của chiếc laptop này.",
        ],
        specs: {
			"CPU": "Intel® Core™ Ultra 9 Processor 275HX 2.7 GHz (36MB Cache, up to 5.4 GHz, 24 cores, 24 Threads); Intel® AI Boost NPU up to 13TOPS",
            "RAM": "64GB (2x32GB) DDR5 5600MHz (2x SO-DIMM socket, up to 64GB SDRAM)",
            "Ổ Cứng": "2TB PCIe® 4.0 NVMe™ M.2 Performance SSD(2x slot SSD, nâng cấp tối đa 2TB/1 slot)",
            "Card đồ họa": "NVIDIA® GeForce RTX™ 5090 Laptop GPU 24GB GDDR7, ROG Boost: 1647MHz* at 175W (1597MHz Boost Clock+50MHz OC, 150W+25W Dynamic Boost",
            "Màn hình": "18' 2.5K (2560 x 1600, WQXGA) 16:10, 240Hz 3ms, Mini LED, 1200nits, Anti-glare display, G-Sync, Pantone Validated, ROG Nebula HDR Display",
			"Bàn phím":"Backlit Chiclet Keyboard Per-Key RGB",
            "Audio": "Dolby Atmos, Hi-Res certification, Smart Amp Technology, AI noise-canceling technology, 4-speaker system with Smart Amplifier Technology",
            "Wifi + Bluetooth": "Wi-Fi 7(802.11be) (Triple band) 2*2+Bluetooth® 5.4 Wireless Card (*Bluetooth® version may change with OS version different.)",
            "Pin": "90WHrs, 4S1P, 4-cell Li-ion",
            "Kích thước": "39.9 x 29.8 x 2.35 ~ 3.20 cm",
            "Hệ điều hành": "Windows 11 Home",
			"Trọng lượng": "3.30 Kg (7.28 lbs)",
			"Webcam": "	1080P FHD IR Camera for Windows Hello"
        }
},
	msistealtha16mercedesamg: {
	name: "Laptop gaming MSI Stealth A16 Mercedes AMG AI+ A3XWGG 032VN",
        price: 78490000,
        image: "pic/mercedes_1.png",
        desc: [
            "Đánh giá chi tiết Laptop gaming MSI Stealth A16 Mercedes AMG AI+ A3XWGG 032VN",
			"Dành cho những nhà sáng tạo chuyên nghiệp và game thủ đỉnh cao, những người không chấp nhận sự thỏa hiệp giữa hiệu suất và phong cách. Laptop gaming MSI Stealth A16 Mercedes AMG AI+ A3XWGG 032VN ra đời để mang đến một cỗ máy AI toàn năng, xử lý mượt mà mọi tác vụ đồ họa phức tạp và thống trị mọi chiến trường ảo, gói gọn trong một thiết kế độc quyền lấy cảm hứng từ tốc độ và sự sang trọng.",
        ],
        specs: {
			"CPU": "AMD Ryzen™ AI 9 HX 370 Processor with up to 50 NPU TOPS (80 total AI TOPS) 12 core, 24 thread, 36MB cache, Max Turbo Frequency 5.1 GHz",
            "RAM": "32GB (2x16GB) DDR5 5600MHz (2x SO-DIMM socket, up to 96GB SDRAM)",
            "Ổ Cứng": "2TB NVMe SSD PCIe Gen4 (2 x M.2 SSD slots)",
            "Card đồ họa": "NVIDIA® GeForce RTX™ 5070 Laptop GPU powers advanced AI with 798 AI TOPS, Up to 2025MHz Boost Clock 95W Maximum Graphics Power with Dynamic Boost.",
            "Màn hình": "16inch 16:10 QHD+(2560 x 1600) OLED, 240Hz, 100% DCI-P3, Tr+Tf 1ms, 400 nits, VESA DisplayHDR™ True Black 600 Certified",
			"Bàn phím":"Per-Key RGB Gaming Keyboard by SteelSeries with Copilot Key",
            "Audio": "2 x 2W loa con và 4 x 2W loa trầm, thiết kế bởi Dynaudio, Nahimic 3 Audio Enhancer, hỗ trợ Hi-Res Audio",
            "Wifi + Bluetooth": "Wi-Fi 7 , Bluetooth v5.4",
            "Pin": "4-Cell 99.9 Battery (Whr)",
            "Kích thước": "355.8 x 259.7 x 19.95 mm",
            "Hệ điều hành": "	Windows 11 Home (MSI recommends Windows 11 Pro for business.)",
			"Trọng lượng": "2.1 kg",
			"Webcam": "	IR FHD type (30fps@1080p) with HDR, 3D Noise Reduction+ (3DNR+)"
        }
},
	asusrogflowz13: {
	name: "Laptop ASUS ROG Flow Z13 GZ302EA RU145WS",
        price: 79990000,
        image: "pic/rogflowz13_1.png",
        desc: [
            "Đánh giá chi tiết Laptop gaming ASUS ROG Flow Z13 GZ302EA RU145WS",
			"Laptop gaming ASUS ROG Flow Z13 GZ302EA RU145WS là một trong những sản phẩm nổi bật trong dòng laptop gaming ASUS, đặc biệt với thiết kế độc đáo và cấu hình mạnh mẽ. Trong bài viết này, chúng ta sẽ cùng tìm hiểu chi tiết về sản phẩm này, từ những đặc tính nổi bật cho đến hiệu năng của nó.",
        ],
        specs: {
			"CPU": "AMD Ryzen™ AI MAX+ 395 Processor 3.0GHz (80MB Cache, up to 5.1GHz, 16 cores, 32 Threads); AMD XDNA™ NPU up to 50TOPS",
            "RAM": "128GB LPDDR5X 8000 on board (Actual memory speeds may vary by CPU configuration.)",
            "Ổ Cứng": "1TB PCIe® 4.0 NVMe™ M.2 SSD (2230) ( không nâng cấp)",
            "Card đồ họa": "AMD Radeon™ Graphics",
            "Màn hình": "13.4 inch 2.5K ROG Nebula (2560 x 1600, WQXGA) 16:10 180Hz IPS, 500 nits, 100% DCI-P3, Glossy display, Adaptive-Sync, PANTONE Validated, Dolby Vision HDR",
			"Bàn phím":"Backlit Chiclet 1-Zone RGB",
            "Audio": "2 x 2W loa con và 4 x 2W loa trầm, thiết kế bởi Dynaudio, Nahimic 3 Audio Enhancer, hỗ trợ Hi-Res Audio",
            "Wifi + Bluetooth": "Wi-Fi 6E(802.11ax)+Bluetooth 5.2 (Dual band) 2*2",
            "Pin": "70WHrs, 4S1P, 4-cell Li-ion",
            "Kích thước": "30.0 x 20.4 x 1.29 ~ 1.49 cm",
            "Hệ điều hành": "Windows 11 Home bản quyền + Trọn đời Microsoft Office Home 2024 + 1 năm Microsoft 365 Basic",
			"Trọng lượng": "1.2 kg",
			"Webcam": "13MP camera and 5MP IR camera"
        }
},
	lgultrafine27: {
	name: "Màn hình LG 27US500-W Ultrafine 27' IPS 4K HDR10",
        price: 5390000,
        image: "pic/ultrafine_1.jpg",
        desc: [
			"Đánh giá màn hình LG 27US500-W Ultrafine 27“ IPS 4K HDR10",
			"LG 27US500-W Ultrafine là một màn hình 27 inch với độ phân giải 4K (3840x2160) cùng công nghệ IPS (Góc nhìn rộng 178°) mang đến cho bạn trải nghiệm hình ảnh sắc nét và sống động. Với độ bao phủ màu DCI-P3 90% và hỗ trợ HDR10, màn hình LG này là lựa chọn lý tưởng cho các họa sĩ minh họa, nhiếp ảnh gia và người biên tập video.",
        ],
		 specs: {
			
        }
	},
	lg34gx90saw34: {
	name: "Màn hình cong LG 34GX90SA-W 34' OLED 2K 240Hz",
        price: 24790000,
        image: "pic/W34_1.jpg",
        desc: [
			"Đánh giá chi tiết Màn hình cong LG 34GX90SA-W OLED 2K 240Hz chuyên game",
			"Màn hình cong LG 34GX90SA-W quảng bá một trải nghiệm chơi game tuyệt vời với các tính năng nổi bật và thiết kế hiện đại, hứa hẹn sẽ làm hài lòng cả những game thủ khó tính nhất. Dưới đây là bài đánh giá chi tiết về sản phẩm này.",
        ],
		 specs: {
			
        }
	}
};

/* ===== LOAD DETAIL ===== */
const params = new URLSearchParams(location.search);
const key = params.get("product");
const detail = document.getElementById("detail");

if (!products[key]) {
    detail.innerHTML = "❌ Sản phẩm không tồn tại";
} else {
    const p = products[key];

    detail.innerHTML = `
        <div class="product-detail-wrap">
            <div class="detail-left">
                <img src="${p.image}">
            </div>

            <div class="detail-right">
                <h1>${p.name}</h1>
                <p>${p.price.toLocaleString("vi-VN")} đ</p>
                <button id="buy">🛒 Mua ngay</button>
                <ul>${p.desc.map(d => `<li>${d}</li>`).join("")}</ul>
            </div>
        </div>

        <div class="specs">
            <h2>Thông số kỹ thuật</h2>
            <table>
                ${Object.entries(p.specs).map(([k, v]) => `
                    <tr>
                        <td>${k}</td>
                        <td>${v}</td>
                    </tr>
                `).join("")}
            </table>
        </div>
    `;
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
updateCartCount();

/* ===== ADD CART TỪ DETAIL ===== */
document.addEventListener("click", e => {
    if (e.target.id !== "buy") return;

    let cart = getCart();
    const found = cart.find(i => i.id === key);
    if (found) found.qty++;
    else {
        cart.push({
            id: key,
            name: products[key].name,
            price: products[key].price,
			image: products[key].image,
            qty: 1
        });
    }
    saveCart(cart);
    updateCartCount();
    alert("🛒 Đã thêm vào giỏ hàng");
});

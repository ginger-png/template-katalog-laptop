// Data Produk
const products = [
    { 
        id: 1, 
        name: "Fujitsu Lifebook U938", 
        price: "Rp 5.500.000", 
        category: "Produktivitas", 
        images: [
            "images/Fujitsu Lifebook U938/fujitsu1.jpg",
            "images/Fujitsu Lifebook U938/fujitsu2.jpg",
            "images/Fujitsu Lifebook U938/fujitsu3.jpg",
            "images/Fujitsu Lifebook U938/fujitsu4.jpg",
            "images/Fujitsu Lifebook U938/fujitsu5.jpg",
            "images/Fujitsu Lifebook U938/fujitsu6.jpg"
        ], 
        specs: [
            "Prosesor: Intel Core i7 8665u", 
            "RAM: 20GB DDR4", 
            "Penyimpanan: SSD Highspeed 256GB (upgradable upto 2TB)", 
            "Layar: 13-inch Panel IPS Resolusi FHD"
        ]
    },
    { 
        id: 2, 
        name: "Lenovo Thinkpad L13 Yoga Gen 2", 
        price: "Rp 6.500.000", 
        category: "Produktivitas", 
        images: [
            "images/Thinkpad L13 Yoga/L13 Yoga 1.jpg",
            "images/Thinkpad L13 Yoga/L13 Yoga 2.jpg",
            "images/Thinkpad L13 Yoga/L13 Yoga 3.jpg",
            "images/Thinkpad L13 Yoga/L13 Yoga 4.jpg",
        ], 
        specs: [
            "Prosesor: Intel Core i5 Gen 11", 
            "RAM: 16GB DDR4", 
            "Penyimpanan: 256 GB SSD", 
            "Layar: 13-inch Touchscreen IPS FHD Flip 360"
        ]
    },
    { 
        id: 3, 
        name: "Toshiba Dynabook R82", 
        price: "Rp 4.500.000", 
        category: "Produktivitas", 
        images: [
            "images/Toshiba Dynabook R82/toshiba1.jpg",
            "images/Toshiba Dynabook R82/toshiba2.jpg",
            "images/Toshiba Dynabook R82/toshiba3.jpg",
            "images/Toshiba Dynabook R82/toshiba4.jpg",
            "images/Toshiba Dynabook R82/toshiba5.jpg",
        ], 
        specs: [
            "Prosesor: Intel Core M5", 
            "RAM: 8GB DDR4", 
            "Penyimpanan: 256 GB SSD", 
            "Layar: 12,5-inch IPS FHD Touchscreen + Pen"
        ]
    },
    { 
        id: 4, 
        name: "Lenovo Thinkpad P14s", 
        price: "Rp 9.300.000", 
        category: "Gaming", 
        images: [
            "images/Thinkpad P14s/P14s3.jpg",
            "images/Thinkpad P14s/P14s2.jpg",
            "images/Thinkpad P14s/P14s1.jpg",
            "images/Thinkpad P14s/P14s4.jpg",
            "images/Thinkpad P14s/P14s5.jpg",
        ], 
        specs: [
            "Prosesor: Intel Core i7-11800H",
            "RAM: 32GB DDR4",
            "Penyimpanan: 512GB SSD NVMe",
            "Grafis: NVIDIA Quadro T500 4GB",
            "Layar: 14-inch FHD"
        ]
    },
    { 
        id: 5, 
        name: "Lenovo T14 Gen 2", 
        price: "Rp 7.000.000", 
        category: "Gaming", 
        images: [
            "images/T14s/t14s1.jpg",
            "images/T14s/t14s2.jpg",
            "images/T14s/t14s3.jpg",
            "images/T14s/t14s4.jpg",
            "images/T14s/t14s5.jpg",
            "images/T14s/t14s6.jpg",
        ], 
        specs: [
            "Prosesor: AMD Ryzen 5 Pro 5650U",
            "RAM: 16GB DDR4",
            "Penyimpanan: 256GB SSD",
            "Grafis: AMD Radeon 8GB",
            "Layar: 14-inch FHD IPS Touchscreen"
        ]
    },
    { 
        id: 6, 
        name: "Lenovo Thinkpad X1 Carbon", 
        price: "Rp 6.900.000", 
        category: "Bisnis", 
        images: [
            "images/X1 Carbon/carbon1.jpg",
            "images/X1 Carbon/carbon2.jpg",
            "images/X1 Carbon/carbon3.jpg",
            "images/X1 Carbon/carbon4.jpg",
            "images/X1 Carbon/carbon5.jpg"
        ], 
        specs: [
            "Prosesor: Intel Core i7 8665U", 
            "RAM: 16GB DDR4", 
            "Penyimpanan: 512GB NVMe SSD", 
            "Layar: 14-inch IPS FHD", 
            "Fitur: Berat 1.1kg, Baterai 12 Jam"
        ]
    },
    { 
        id: 7, 
        name: "HP Elitebook x360 435 G7", 
        price: "Rp 6.900.000", 
        category: "Bisnis", 
        images: [
            "images/HP Elitebook x360 435 G7/HP Elitebook x360 435 G7-1.jpg",
            "images/HP Elitebook x360 435 G7/HP Elitebook x360 435 G7-2.jpg",
            "images/HP Elitebook x360 435 G7/HP Elitebook x360 435 G7-3.jpg",
            "images/HP Elitebook x360 435 G7/HP Elitebook x360 435 G7-4.jpg",
        ], 
       specs: [
            "Prosesor: AMD Ryzen 5 4500U",
            "RAM: 16GB DDR4",
            "Penyimpanan: 256GB SSD",
            "Grafis: AMD Radeon Vega",
            "Layar: 13.3-inch FHD IPS Touchscreen Flip 360°",
        ]
    },
    { 
        id: 8, 
        name: "HP Probook 430 G8", 
        price: "Rp 6.900.000", 
        category: "Gaming", 
        images: [
            "images/HP Probook 430 G8/HP Probook 430 G8-1.jpg",
            "images/HP Probook 430 G8/HP Probook 430 G8-2.jpg",
            "images/HP Probook 430 G8/HP Probook 430 G8-3.jpg",
            "images/HP Probook 430 G8/HP Probook 430 G8-4.jpg",
            "images/HP Probook 430 G8/HP Probook 430 G8-5.jpg",
        ], 
      specs: [
            "Prosesor: Intel Core i5-1135G7",
            "RAM: 16GB DDR4",
            "Penyimpanan: 256GB SSD",
            "Grafis: Intel Iris Xe 2GB",
            "Layar: 13.3-inch FHD IPS",
            "Model: HP ProBook 430 G8"
        ]

    },
    { 
        id: 9, 
        name: "Dell latitude 5320", 
        price: "Rp 7.400.000", 
        category: "Bisnis", 
        images: [
            "images/Dell latitude 5320/Dell latitude 5320-1.jpg",
            "images/Dell latitude 5320/Dell latitude 5320-2.jpg",
            "images/Dell latitude 5320/Dell latitude 5320-3.jpg",
            "images/Dell latitude 5320/Dell latitude 5320-4.jpg",
            "images/Dell latitude 5320/Dell latitude 5320-5.jpg",
        ], 
       specs: [
            "Prosesor: Intel Core i7-1145G7",
            "RAM: 32GB DDR4",
            "Penyimpanan: 256GB SSD",
            "Grafis: Intel Iris Graphics",
            "Layar: 13.3-inch FHD IPS Touchscreen",
            "Fitur: Touch ID dan Face ID"
        ]

    },
    { 
        id: 10, 
        name: "Dell latitude 5320", 
        price: "Rp 7.400.000", 
        category: "Gaming", 
        images: [
            "images/Dell latitude 5320/Dell latitude 5320-1.jpg",
            "images/Dell latitude 5320/Dell latitude 5320-2.jpg",
            "images/Dell latitude 5320/Dell latitude 5320-3.jpg",
            "images/Dell latitude 5320/Dell latitude 5320-4.jpg",
            "images/Dell latitude 5320/Dell latitude 5320-5.jpg",
        ], 
       specs: [
            "Prosesor: Intel Core i7-1145G7",
            "RAM: 32GB DDR4",
            "Penyimpanan: 256GB SSD",
            "Grafis: Intel Iris Graphics",
            "Layar: 13.3-inch FHD IPS Touchscreen",
            "Fitur: Touch ID dan Face ID"
        ]

    },
];

// Variabel Global
const grid = document.getElementById('product-grid');
const modal = document.getElementById('imageModal');
const slideContainer = document.getElementById('slideContainer');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const menuBtn = document.querySelector('.menu-btn');
const menuPanel = document.getElementById('menuPanel');
let currentSlide = 0;
let currentImages = [];

// Toggle sidebar menu
menuBtn.addEventListener('click', () => {
    menuPanel.classList.toggle('active');
});

// Listener untuk menutup menu saat klik di luar
document.addEventListener('click', function(e) {
    if (!menuPanel.classList.contains('active')) {
        return;
    }

    if (e.target.closest('.menu-btn') || e.target.closest('.menu-panel')) {
        return;
    }

    menuPanel.classList.remove('active');
});

// Fungsi untuk render produk
function renderProducts(categoryFilter) {
    grid.innerHTML = '';
    const filtered = (categoryFilter === 'Semua') ? products : products.filter(p => p.category === categoryFilter);
    
    filtered.forEach(p => {
        const specList = p.specs.map(s => `<li>${s}</li>`).join('');
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${p.images[0]}" alt="${p.name}" class="product-image" onerror="this.src='https://placehold.co/400x200/e1f5fe/333?text=Gambar+Produk';">
            <div class="product-info">
                <h3>${p.name}</h3>
                <div class="product-price">${p.price}</div>
                <ul class="product-specs">${specList}</ul>
                <button class="cta-button" onclick="buyNow('${p.name}')">
                    <i class="fas fa-shopping-cart"></i> Beli Sekarang
                </button>
            </div>`;
        grid.appendChild(card);
    });
    
    enableImageModal();
}

// Event listener saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.addEventListener('click', e => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
        renderProducts(e.target.dataset.category);
        menuPanel.classList.remove('active');
    }));
    
    // Render semua produk saat halaman pertama kali dimuat
    renderProducts('Semua');
});

// Fungsi untuk tombol WhatsApp
function buyNow(name) {
    const msg = `Halo, saya tertarik membeli ${name}.`;
    const url = `https://api.whatsapp.com/send?phone=6281373403850&text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

// Fungsi untuk enable modal gambar saat klik judul produk
function enableImageModal() {
    const titles = document.querySelectorAll('.product-info h3');
    titles.forEach(title => {
        title.addEventListener('click', () => {
            const product = products.find(p => p.name === title.textContent);
            if (product) {
                currentImages = product.images;
                currentSlide = 0;
                openModal(product);
            }
        });
    });
}

// Fungsi untuk membuka modal
function openModal(product) {
    modal.style.display = 'block';
    caption.textContent = product.name;
    slideContainer.innerHTML = '';
    
    currentImages.forEach(img => {
        const slide = document.createElement('img');
        slide.src = img;
        slide.className = 'slide-image';
        slide.onerror = function() { 
            this.src='https://placehold.co/600x400/fff/333?text=Gambar+Tidak+Tersedia'; 
            this.style.objectFit = 'cover';
        };
        slideContainer.appendChild(slide);
    });
    
    updateSlide();
}

// Fungsi untuk update slide gambar
function updateSlide() {
    const offset = -currentSlide * 100;
    slideContainer.style.transform = `translateX(${offset}%)`;
}

// Event listener untuk tombol prev (gambar sebelumnya)
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + currentImages.length) % currentImages.length;
    updateSlide();
});

// Event listener untuk tombol next (gambar selanjutnya)
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % currentImages.length;
    updateSlide();
});

// Event listener untuk tombol close modal
closeBtn.onclick = () => modal.style.display = 'none';

// Event listener untuk menutup modal saat klik di luar gambar
window.onclick = e => { 
    if (e.target == modal) modal.style.display = 'none'; 
};
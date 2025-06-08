 
const products = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `商品 ${i + 1}`,
  price: (Math.random() * 100 + 1).toFixed(2),
  image: `https://picsum.photos/seed/${i + 1}/200/200`
}));

const PRODUCTS_PER_PAGE = 8;
let currentPage = 1;

const productListEl = document.getElementById('product-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageIndicator = document.getElementById('page-indicator');

function renderProducts(page) {
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const pageProducts = products.slice(start, end);

  productListEl.innerHTML = pageProducts.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button class="buy-btn">購買</button>
    </div>
  `).join('');

  pageIndicator.textContent = `第 ${page} 頁，共 ${Math.ceil(products.length / PRODUCTS_PER_PAGE)} 頁`;
  prevBtn.disabled = page === 1;
  nextBtn.disabled = page === Math.ceil(products.length / PRODUCTS_PER_PAGE);
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderProducts(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < Math.ceil(products.length / PRODUCTS_PER_PAGE)) {
    currentPage++;
    renderProducts(currentPage);
  }
});

// 初始化顯示
renderProducts(currentPage);

 

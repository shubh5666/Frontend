// Product Data
const products = [
    { name: "Product 1", price: 100, description: "Description 1", image: "./GNC.png" },
    { name: "Product 2", price: 200, description: "Description 2", image: "./jwellers.png" },
    { name: "Product 3", price: 500, description: "Description 3", image: "./Kiwi.png" },
    { name: "Product 4", price: 800, description: "Description 4", image: "./iphone.png" },
  ];
  
  const cart = [];
  const cartCount = document.getElementById("cart-count");
  const productList = document.getElementById("product-list");
  const priceFilter = document.getElementById("priceFilter");
  const maxPriceDisplay = document.getElementById("max-price");
  
  // Function to update cart count
  function updateCartCount() {
    cartCount.textContent = cart.length;
  }
  
  // Function to render products
  function renderProducts(maxPrice) {
    productList.innerHTML = ""; // Clear previous products
    products
      .filter(product => product.price <= maxPrice)
      .forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
  
        productDiv.innerHTML = `
          <button class="btn btn-info me-3">+</button>
          <img src="${product.image}" alt="${product.name}">
          <div>
            <h5>${product.name}</h5>
            <p>${product.description}</p>
            <div class="h5">$${product.price}</div>
          </div>
        `;
  
        const addButton = productDiv.querySelector("button");
        addButton.addEventListener("click", () => {
          cart.push(product);
          updateCartCount();
        });
  
        productList.appendChild(productDiv);
      });
  }
  
  // Event listener for price filter
  priceFilter.addEventListener("input", () => {
    const maxPrice = parseInt(priceFilter.value, 10);
    maxPriceDisplay.textContent = maxPrice;
    renderProducts(maxPrice);
  });
  
  // Initial render
  renderProducts(1000);
  
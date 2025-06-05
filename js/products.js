async function loadProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    displayProducts(products);  
}

function displayProducts(products) {
    const container = document.querySelector('#all-products .container');
    const fragment = document.createDocumentFragment();
  
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
  
      // 상품 이미지 영역
      const pictureDiv = document.createElement('div');
      pictureDiv.classList.add('product-picture');
  
      const img = document.createElement('img');
      img.src = product.image;
      img.alt = `product: ${product.title}`;
      img.width = 250;
      img.style.height = 'auto';
  
      // ★ 여기에 lazy 속성 추가
      img.loading = 'lazy'; 
      // 필요에 따라 이미지 크기가 고정이라면 width/height 값을 명시해두면 CLS도 방지됩니다.
  
      pictureDiv.appendChild(img);
  
      // 상품 정보 영역 (변경 없음)
      const infoDiv = document.createElement('div');
      infoDiv.classList.add('product-info');
  
      const category = document.createElement('h5');
      category.classList.add('categories');
      category.textContent = product.category;
  
      const title = document.createElement('h4');
      title.classList.add('title');
      title.textContent = product.title;
  
      const price = document.createElement('h3');
      price.classList.add('price');
      const priceSpan = document.createElement('span');
      priceSpan.textContent = `US$ ${product.price}`;
      price.appendChild(priceSpan);
  
      const button = document.createElement('button');
      button.textContent = 'Add to bag';
  
      infoDiv.appendChild(category);
      infoDiv.appendChild(title);
      infoDiv.appendChild(price);
      infoDiv.appendChild(button);
  
      productElement.appendChild(pictureDiv);
      productElement.appendChild(infoDiv);
      fragment.appendChild(productElement);
    });
    container.appendChild(fragment);
  }

loadProducts();

// Simulate heavy operation. It could be a complex price calculation.
for (let i = 0; i < 10000000; i++) {
    const temp = Math.sqrt(i) * Math.sqrt(i);
}
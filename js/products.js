const products = [
    { name: 'Casual T-Shirt', image: 'https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_1280.png', price: 19.99 },
        { name: 'Stylish Jacket', image: 'https://cdn.pixabay.com/photo/2017/08/01/11/48/blue-2564660_1280.jpg', price: 49.99 },
        { name: 'Sport Shoes', image: 'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg', price: 69.99 },
        { name: 'Classic Watch', image: 'https://cdn.pixabay.com/photo/2016/11/29/13/39/analog-watch-1869928_1280.jpg', price: 89.99 },
        { name: 'Leather Handbag', image: 'https://cdn.pixabay.com/photo/2017/08/17/08/20/online-shopping-2650383_1280.jpg', price: 120.00 },
        { name: 'Sunglasses', image: 'https://cdn.pixabay.com/photo/2020/05/26/09/32/product-5222398_1280.jpg', price: 39.99 },
        { name: 'Denim Jeans', image: 'https://cdn.pixabay.com/photo/2017/08/01/11/48/blue-2564660_1280.jpg', price: 59.99 },
        { name: 'Elegant Dress', image: 'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_1280.jpg', price: 79.99 }
]; 
  const productList = document.getElementById('product-list');
  
  products.forEach(product => {
    const productCard = `
      <div class="col">
        <div class="card h-100 border-0 shadow-sm">
          <img src="${product.image}" class="card-img-top" alt="Product Image" loading="lazy"/>
          <div class="card-body text-center">
            <h6 class="fw-semibold">${product.name}</h6>
            <p class="text-muted mb-2">$${product.price}</p>
            <a class="btn btn-outline-dark btn-sm rounded-pill" href="../html/product-details.html">View Details</a>
          </div>
        </div>
      </div>
    `;
    productList.innerHTML += productCard;
  });
  
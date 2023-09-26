class Product {
    title = "DEFAULT";
    imageUrl;
    description;
    price;

    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}

const productList = {
    products: [
        new Product(
            "A Pollow",
            "https://m.media-amazon.com/images/I/61XxtPdqhZL.jpg",
            "A soft pillow",
            29.99
        ),
        new Product(
            "A Carpet",
            "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/types-of-rugs-2022-section-4.jpg",
            "A soft carpet",
            59.99
        ),
    ],
    render() {
        const renderHook = document.getElementById("app");
        const prodList = document.createElement("ul");
        prodList.className = "product-list";
        for (const prod of this.products) {
            const prodEl = document.createElement("li");
            prodEl.className = "product-item";
            prodEl.innerHTML = `
            <div>
              <img src="${prod.imageUrl}" alt="${prod.title}" >
              <div class="product-item__content">
                <h2>${prod.title}</h2>
                <h3>\$${prod.price}</h3>
                <p>${prod.description}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    },
};

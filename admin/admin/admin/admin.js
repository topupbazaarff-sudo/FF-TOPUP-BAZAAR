// ==========================================
// Free Fire Top-Up Website - Admin Panel
// File: admin/admin.js
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    initAdminPanel();
});


// ------------------------------------------
// Default Products
// ------------------------------------------

const defaultProducts = [
    {
        id: 1,
        name: "100 Diamonds",
        price: 80,
        type: "diamond"
    },
    {
        id: 2,
        name: "310 Diamonds",
        price: 240,
        type: "diamond"
    },
    {
        id: 3,
        name: "520 Diamonds",
        price: 390,
        type: "diamond"
    },
    {
        id: 4,
        name: "1060 Diamonds",
        price: 780,
        type: "diamond"
    },
    {
        id: 5,
        name: "Weekly Membership",
        price: 150,
        type: "weekly"
    },
    {
        id: 6,
        name: "Monthly Membership",
        price: 700,
        type: "monthly"
    }
];


// ------------------------------------------
// Initialize Admin Panel
// ------------------------------------------

function initAdminPanel() {

    if (!localStorage.getItem("ff_products")) {
        localStorage.setItem(
            "ff_products",
            JSON.stringify(defaultProducts)
        );
    }

    displayProducts();

    setupAddProductForm();

    setupClearDataButton();
}


// ------------------------------------------
// Get Products
// ------------------------------------------

function getProducts() {
    try {
        return JSON.parse(
            localStorage.getItem("ff_products")
        ) || [];
    } catch (error) {
        console.error("Product data error:", error);
        return [];
    }
}


// ------------------------------------------
// Save Products
// ------------------------------------------

function saveProducts(products) {
    localStorage.setItem(
        "ff_products",
        JSON.stringify(products)
    );
}


// ------------------------------------------
// Display Products
// ------------------------------------------

function displayProducts() {

    const productList =
        document.getElementById("productList");

    if (!productList) {
        return;
    }

    const products = getProducts();

    productList.innerHTML = "";

    if (products.length === 0) {

        productList.innerHTML = `
            <div class="empty-message">
                No products available.
            </div>
        `;

        return;
    }

    products.forEach(product => {

        const item = document.createElement("div");

        item.className = "admin-product";

        item.innerHTML = `
            <div class="product-info">

                <h3>${escapeHTML(product.name)}</h3>

                <p>
                    Type:
                    ${escapeHTML(product.type)}
                </p>

                <strong>
                    ৳${Number(product.price).toFixed(0)}
                </strong>

            </div>

            <div class="product-actions">

                <button
                    class="edit-btn"
                    data-id="${product.id}">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    data-id="${product.id}">
                    Delete
                </button>

            </div>
        `;

        productList.appendChild(item);
    });


    // Edit buttons
    document
        .querySelectorAll(".edit-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);

                editProduct(id);
            });
        });


    // Delete buttons
    document
        .querySelectorAll(".delete-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);

                deleteProduct(id);
            });
        });
}


// ------------------------------------------
// Add Product
// ------------------------------------------

function setupAddProductForm() {

    const form =
        document.getElementById("addProductForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", event => {

        event.preventDefault();

        const nameInput =
            document.getElementById("productName");

        const priceInput =
            document.getElementById("productPrice");

        const typeInput =
            document.getElementById("productType");


        if (!nameInput || !priceInput || !typeInput) {
            return;
        }


        const name =
            nameInput.value.trim();

        const price =
            Number(priceInput.value);

        const type =
            typeInput.value;


        if (!name) {
            alert("Please enter product name.");
            return;
        }


        if (!price || price <= 0) {
            alert("Please enter a valid price.");
            return;
        }


        const products = getProducts();


        const newProduct = {

            id: Date.now(),

            name: name,

            price: price,

            type: type
        };


        products.push(newProduct);

        saveProducts(products);

        displayProducts();

        form.reset();

        alert("Product added successfully!");
    });
}


// ------------------------------------------
// Edit Product
// ------------------------------------------

function editProduct(id) {

    const products = getProducts();

    const product =
        products.find(item => item.id === id);


    if (!product) {
        return;
    }


    const newName =
        prompt(
            "Enter new product name:",
            product.name
        );


    if (newName === null) {
        return;
    }


    const newPrice =
        prompt(
            "Enter new price:",
            product.price
        );


    if (newPrice === null) {
        return;
    }


    const price =
        Number(newPrice);


    if (!newName.trim()) {
        alert("Product name cannot be empty.");
        return;
    }


    if (!price || price <= 0) {
        alert("Invalid price.");
        return;
    }


    product.name =
        newName.trim();

    product.price =
        price;


    saveProducts(products);

    displayProducts();


    alert("Product updated successfully!");
}


// ------------------------------------------
// Delete Product
// ------------------------------------------

function deleteProduct(id) {

    const products = getProducts();

    const product =
        products.find(item => item.id === id);


    if (!product) {
        return;
    }


    const confirmDelete =
        confirm(
            `Delete "${product.name}"?`
        );


    if (!confirmDelete) {
        return;
    }


    const updatedProducts =
        products.filter(
            item => item.id !== id
        );


    saveProducts(updatedProducts);

    displayProducts();


    alert("Product deleted successfully!");
}


// ------------------------------------------
// Clear All Products
// ------------------------------------------

function setupClearDataButton() {

    const button =
        document.getElementById("clearProducts");


    if (!button) {
        return;
    }


    button.addEventListener("click", () => {

        const confirmation =
            confirm(
                "Are you sure you want to delete all products?"
            );


        if (!confirmation) {
            return;
        }


        localStorage.removeItem("ff_products");

        displayProducts();

        alert("All products deleted.");
    });
}


// ------------------------------------------
// Reset Default Products
// ------------------------------------------

function resetDefaultProducts() {

    const confirmation =
        confirm(
            "Restore the default products?"
        );


    if (!confirmation) {
        return;
    }
// ==========================================
// Free Fire Top-Up Website - Admin Panel
// File: admin/admin.js
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    initAdminPanel();
});


// ------------------------------------------
// Default Products
// ------------------------------------------

const defaultProducts = [
    {
        id: 1,
        name: "100 Diamonds",
        price: 80,
        type: "diamond"
    },
    {
        id: 2,
        name: "310 Diamonds",
        price: 240,
        type: "diamond"
    },
    {
        id: 3,
        name: "520 Diamonds",
        price: 390,
        type: "diamond"
    },
    {
        id: 4,
        name: "1060 Diamonds",
        price: 780,
        type: "diamond"
    },
    {
        id: 5,
        name: "Weekly Membership",
        price: 150,
        type: "weekly"
    },
    {
        id: 6,
        name: "Monthly Membership",
        price: 700,
        type: "monthly"
    }
];


// ------------------------------------------
// Initialize Admin Panel
// ------------------------------------------

function initAdminPanel() {

    if (!localStorage.getItem("ff_products")) {
        localStorage.setItem(
            "ff_products",
            JSON.stringify(defaultProducts)
        );
    }

    displayProducts();

    setupAddProductForm();

    setupClearDataButton();
}


// ------------------------------------------
// Get Products
// ------------------------------------------

function getProducts() {
    try {
        return JSON.parse(
            localStorage.getItem("ff_products")
        ) || [];
    } catch (error) {
        console.error("Product data error:", error);
        return [];
    }
}


// ------------------------------------------
// Save Products
// ------------------------------------------

function saveProducts(products) {
    localStorage.setItem(
        "ff_products",
        JSON.stringify(products)
    );
}


// ------------------------------------------
// Display Products
// ------------------------------------------

function displayProducts() {

    const productList =
        document.getElementById("productList");

    if (!productList) {
        return;
    }

    const products = getProducts();

    productList.innerHTML = "";

    if (products.length === 0) {

        productList.innerHTML = `
            <div class="empty-message">
                No products available.
            </div>
        `;

        return;
    }

    products.forEach(product => {

        const item = document.createElement("div");

        item.className = "admin-product";

        item.innerHTML = `
            <div class="product-info">

                <h3>${escapeHTML(product.name)}</h3>

                <p>
                    Type:
                    ${escapeHTML(product.type)}
                </p>

                <strong>
                    ৳${Number(product.price).toFixed(0)}
                </strong>

            </div>

            <div class="product-actions">

                <button
                    class="edit-btn"
                    data-id="${product.id}">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    data-id="${product.id}">
                    Delete
                </button>

            </div>
        `;

        productList.appendChild(item);
    });


    // Edit buttons
    document
        .querySelectorAll(".edit-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);

                editProduct(id);
            });
        });


    // Delete buttons
    document
        .querySelectorAll(".delete-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);

                deleteProduct(id);
            });
        });
}


// ------------------------------------------
// Add Product
// ------------------------------------------

function setupAddProductForm() {

    const form =
        document.getElementById("addProductForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", event => {

        event.preventDefault();

        const nameInput =
            document.getElementById("productName");

        const priceInput =
            document.getElementById("productPrice");

        const typeInput =
            document.getElementById("productType");


        if (!nameInput || !priceInput || !typeInput) {
            return;
        }


        const name =
            nameInput.value.trim();

        const price =
            Number(priceInput.value);

        const type =
            typeInput.value;


        if (!name) {
            alert("Please enter product name.");
            return;
        }


        if (!price || price <= 0) {
            alert("Please enter a valid price.");
            return;
        }


        const products = getProducts();


        const newProduct = {

            id: Date.now(),

            name: name,

            price: price,

            type: type
        };


        products.push(newProduct);

        saveProducts(products);

        displayProducts();

        form.reset();

        alert("Product added successfully!");
    });
}


// ------------------------------------------
// Edit Product
// ------------------------------------------

function editProduct(id) {

    const products = getProducts();

    const product =
        products.find(item => item.id === id);


    if (!product) {
        return;
    }


    const newName =
        prompt(
            "Enter new product name:",
            product.name
        );


    if (newName === null) {
        return;
    }


    const newPrice =
        prompt(
            "Enter new price:",
            product.price
        );


    if (newPrice === null) {
        return;
    }


    const price =
        Number(newPrice);


    if (!newName.trim()) {
        alert("Product name cannot be empty.");
        return;
    }


    if (!price || price <= 0) {
        alert("Invalid price.");
        return;
    }


    product.name =
        newName.trim();

    product.price =
        price;


    saveProducts(products);

    displayProducts();


    alert("Product updated successfully!");
}


// ------------------------------------------
// Delete Product
// ------------------------------------------

function deleteProduct(id) {

    const products = getProducts();

    const product =
        products.find(item => item.id === id);


    if (!product) {
        return;
    }


    const confirmDelete =
        confirm(
            `Delete "${product.name}"?`
        );


    if (!confirmDelete) {
        return;
    }


    const updatedProducts =
        products.filter(
            item => item.id !== id
        );


    saveProducts(updatedProducts);

    displayProducts();


    alert("Product deleted successfully!");
}


// ------------------------------------------
// Clear All Products
// ------------------------------------------

function setupClearDataButton() {

    const button =
        document.getElementById("clearProducts");


    if (!button) {
        return;
    }


    button.addEventListener("click", () => {

        const confirmation =
            confirm(
                "Are you sure you want to delete all products?"
            );


        if (!confirmation) {
            return;
        }


        localStorage.removeItem("ff_products");

        displayProducts();

        alert("All products deleted.");
    });
}


// ------------------------------------------
// Reset Default Products
// ------------------------------------------

function resetDefaultProducts() {

    const confirmation =
        confirm(
            "Restore the default products?"
        );


    if (!confirmation) {
        return;
    }


    saveProducts(defaultProducts);

    displayProducts();

    alert("Default products restored!");
}


// ------------------------------------------
// Safe HTML Helper
// ------------------------------------------

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ------------------------------------------
// Make functions available globally
// ------------------------------------------

window.displayProducts =
    displayProducts;

window.resetDefaultProducts =
    resetDefaultProducts;

window.editProduct =
    editProduct;

window.deleteProduct =
    deleteProduct;

    saveProducts(defaultProducts);

    displayProducts();

    alert("Default products restored!");
}


// ------------------------------------------
// Safe HTML Helper
// ------------------------------------------

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ------------------------------------------
// Make functions available globally
// ------------------------------------------

window.displayProducts =
    displayProducts;

window.resetDefaultProducts =
    resetDefaultProducts;

window.editProduct =
    editProduct;

window.deleteProduct =
    deleteProduct;

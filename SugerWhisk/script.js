
/* ----------------------------------
   SUGARWHISK - OUR LITTLE SCRIPT FILE
   ---------------------------------- */

// Our product collection.
// You can change the names, prices and pictures here.

const products = [
    {
        id: 1,
        name: "Strawberry Dream Cake",
        category: "Cakes",
        price: 799,
        description: "Soft layers, strawberry cream and a little pink magic.",
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=700&q=80",
        badge: "Bestseller",
        diet: "Eggless",
        featured: true
    },
    {
        id: 2,
        name: "Pink Velvet Cupcakes",
        category: "Cakes",
        price: 299,
        description: "Fluffy little cupcakes topped with pretty swirls.",
        image: "images/cupcake.jpg",
        badge: "Popular",
        diet: "Eggless",
        featured: true
    },
    {
        id: 3,
        name: "Chocolate Hug Box",
        category: "Chocolates",
        price: 449,
        description: "A cosy collection of rich, melt-in-your-mouth chocolates.",
        image: "images/chocolate.jpg",
        badge: "Bestseller",
        diet: "Vegan",
        featured: true
    },
    {
        id: 4,
        name: "Blush Macaron Box",
        category: "Macarons",
        price: 549,
        description: "Colourful French-style bites in dreamy pastel shades.",
        image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=700&q=80",
        badge: "Pretty pick",
        diet: "Eggless",
        featured: true
    },
    {
        id: 5,
        name: "Buttercream Cookie Jar",
        category: "Cookies",
        price: 249,
        description: "Golden, buttery cookies for your evening cravings.",

        image: "images/cookie.jpg",
        badge: "Everyday fave",
        diet: "Eggless",
        featured: true
    },
    {
        id: 6,
        name: "Rainbow Candy Party",
        category: "Candies",
        price: 199,
        description: "Bright, colourful sweets that bring out your inner child.",
        image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=700&q=80",
        badge: "Fun pick",
        diet: "Vegan",
        featured: false
    },
    {
        id: 7,
        name: "Pistachio Baklava Bites",
        category: "Baklava",
        price: 399,
        description: "Crispy golden pastry with a nutty, sweet centre.",
        image: "images/baklawa.jpg",
        badge: "Something special",
        diet: "Vegan",
        featured: true
    },
    {
        id: 8,
        name: "Chocolate Chip Cookies",
        category: "Cookies",
        price: 299,
        description: "Classic chocolate chips in every buttery bite.",
        image: "images/chip.jpg",
        badge: "Bestseller",
        diet: "Eggless",
        featured: true
    },
    {
        id: 9,
        name: "Kaju Katli Celebration Box",
        category: "Indian Sweets",
        price: 499,
        description: "A festive favourite, made for sharing a little happiness.",
        image: "images/kajukatli.jpg",
         badge: "Festive fave",
        diet: "Vegan",
        featured: false
    },
    {
        id: 10,
        name: "Rose & Baby's Breath Bouquet",
        category: "Flowers",
        price: 699,
        description: "A soft, romantic bunch for your favourite person.",
        image: "images/rose.jpg",
        badge: "Made for gifting",
        diet: "Flower gift",
        featured: true
    },
    {
        id: 11,
        name: "The Little Love Hamper",
        category: "Gift Boxes",
        price: 899,
        description: "A sweet mix of cookies, chocolates and thoughtful extras.",
        image: "images/hamper.jpg",
        badge: "Bestseller",
        diet: "Mixed treats",
        featured: true
    },
    {
        id: 12,
        name: "Mini Brownie Bites",
        category: "Cakes",
        price: 349,
        description: "Fudgy chocolate brownies in cute little portions.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
        badge: "Chocolate lover",
        diet: "Eggless",
        featured: false
    },
    {
        id: 13,
        name: "Chocolate-Dipped Strawberries",
        category: "Chocolates",
        price: 599,
        description: "Juicy strawberries dressed up in silky chocolate.",
        image: "images/strawbeery.jpg",
        badge: "Romantic pick",
        diet: "Vegetarian",
        featured: true
    },
    {
        id: 14,
        name: "Sugar-Free Choco Bites",
        category: "Chocolates",
        price: 349,
        description: "A cocoa-rich treat made without added sugar.",
        image: "images/suger free.jpg",
        badge: "Feel-good pick",
        diet: "Sugar-free",
        featured: false
    },
    {
        id: 15,
        name: "Pastel Party Gift Box",
        category: "Gift Boxes",
        price: 1299,
        description: "A generous hamper filled with little treats and big feelings.",
        image: "images/gifts.jpg",
        badge: "Premium",
        diet: "Mixed treats",
        featured: true
    },
    {
        id: 16,
        name: "Vegan Cookie Bites",
        category: "Cookies",
        price: 279,
        description: "Crisp-edged, soft-centred cookies with plant-based goodness.",
        image: "images/bites.jpg",
        badge: "Plant-based",
        diet: "Vegan",
        featured: false
    }
];


// Treats you can put inside your custom gift box.

const giftTreats = [
    { name: "Chocolate truffles", price: 45, emoji: "🍫" },
    { name: "Mini cookies", price: 25, emoji: "🍪" },
    { name: "Macarons", price: 40, emoji: "🍬" },
    { name: "Brownie bites", price: 35, emoji: "🍰" },
    { name: "Indian mithai", price: 40, emoji: "🍡" },
    { name: "Chocolate almonds", price: 35, emoji: "🥜" },
    { name: "Caramel candies", price: 20, emoji: "🍭" },
    { name: "Mini cupcake", price: 45, emoji: "🧁" },
    { name: "Pistachio baklava", price: 40, emoji: "🥮" },
    { name: "Chocolate pralines", price: 45, emoji: "🤎" },
    { name: "Dried fruit mix", price: 30, emoji: "🍇" },
    { name: "Strawberry sweets", price: 25, emoji: "🍓" }
];

const boxPrices = {
    Small: 399,
    Medium: 599,
    Premium: 999
};

const boxLimits = {
    Small: 4,
    Medium: 6,
    Premium: 12
};


// Keep track of what's happening on the website.

let visibleProducts = [...products];
let cart = [];
let favourites = [];
let quickFilter = "All";
let couponApplied = false;
let toastTimer;


// Find the HTML elements we need.

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const dietFilter = document.getElementById("dietFilter");
const sortFilter = document.getElementById("sortFilter");
const resultCount = document.getElementById("resultCount");
const emptyMessage = document.getElementById("emptyMessage");


// Format prices in Indian rupees.

function formatPrice(price) {
    return "₹" + price.toLocaleString("en-IN");
}


// Show a small message at the bottom of the page.

function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(function () {
        toast.classList.remove("show");
    }, 2400);
}


// Display the products on the page.

function displayProducts(items) {
    productGrid.innerHTML = "";

    resultCount.textContent = items.length + " lovely treat" + (items.length === 1 ? "" : "s") + " to explore";

    emptyMessage.hidden = items.length !== 0;

    items.forEach(function (product) {
        const card = document.createElement("article");
        card.className = "product-card";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";
        image.onerror = function () {
            this.style.display = "none";
            this.parentElement.classList.add("image-fallback");
        };

        const picture = document.createElement("div");
        picture.className = "product-picture";
        picture.appendChild(image);

        const badge = document.createElement("span");
        badge.className = "product-badge";
        badge.textContent = product.badge;
        picture.appendChild(badge);

        const wishButton = document.createElement("button");
        wishButton.className = "wishlist-button" + (favourites.includes(product.id) ? " liked" : "");
        wishButton.textContent = favourites.includes(product.id) ? "♥" : "♡";
        wishButton.setAttribute("aria-label", "Add " + product.name + " to favourites");
        wishButton.addEventListener("click", function () {
            toggleFavourite(product.id);
        });
        picture.appendChild(wishButton);

        const info = document.createElement("div");
        info.className = "product-info";

        const category = document.createElement("span");
        category.className = "product-category";
        category.textContent = product.category;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const description = document.createElement("p");
        description.textContent = product.description;

        const meta = document.createElement("div");
        meta.className = "product-meta";

        const price = document.createElement("span");
        price.className = "product-price";
        price.textContent = formatPrice(product.price);

        const diet = document.createElement("span");
        diet.className = "product-diet";
        diet.textContent = product.diet;

        meta.append(price, diet);

        const addButton = document.createElement("button");
        addButton.className = "add-button";
        addButton.textContent = "＋ Add to my bag";
        addButton.addEventListener("click", function () {
            addToCart(product);
        });

        info.append(category, name, description, meta, addButton);
        card.append(picture, info);
        productGrid.appendChild(card);
    });
}


// Search, filter and sort the product collection.

function filterProducts() {
    const searchText = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;
    const priceRange = priceFilter.value;
    const diet = dietFilter.value;
    const sort = sortFilter.value;

    let results = products.filter(function (product) {
        const matchesSearch =
            product.name.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText);

        const matchesCategory =
            category === "All" || product.category === category;

        let matchesPrice = true;

        if (priceRange === "under300") {
            matchesPrice = product.price < 300;
        } else if (priceRange === "300to600") {
            matchesPrice = product.price >= 300 && product.price <= 600;
        } else if (priceRange === "600to1000") {
            matchesPrice = product.price > 600 && product.price <= 1000;
        } else if (priceRange === "above1000") {
            matchesPrice = product.price > 1000;
        }

        const matchesDiet =
            diet === "all" || product.diet === diet;

        let matchesQuick = true;

        if (quickFilter === "Bestseller") {
            matchesQuick = product.badge === "Bestseller";
        } else if (quickFilter === "New") {
            matchesQuick = product.badge === "Just arrived";
        } else if (quickFilter === "Eggless") {
            matchesQuick = product.diet === "Eggless";
        }

        return matchesSearch && matchesCategory && matchesPrice &&
            matchesDiet && matchesQuick;
    });

    if (sort === "low") {
        results.sort(function (a, b) {
            return a.price - b.price;
        });
    } else if (sort === "high") {
        results.sort(function (a, b) {
            return b.price - a.price;
        });
    } else if (sort === "name") {
        results.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    } else {
        results.sort(function (a, b) {
            return Number(b.featured) - Number(a.featured);
        });
    }

    visibleProducts = results;
    displayProducts(results);
}


// Add an item to the shopping bag.

function addToCart(product) {
    const existingItem = cart.find(function (item) {
        return item.id === product.id;
    });

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCart();
    showToast(product.name + " added to your bag ♡");
}


// Add or remove a favourite.

function toggleFavourite(productId) {
    if (favourites.includes(productId)) {
        favourites = favourites.filter(function (id) {
            return id !== productId;
        });
        showToast("Removed from your favourites");
    } else {
        favourites.push(productId);
        showToast("Saved to your favourites ♡");
    }

    filterProducts();
}


// Change the quantity of an item in the bag.

function changeQuantity(productId, change) {
    const item = cart.find(function (product) {
        return product.id === productId;
    });

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(function (product) {
            return product.id !== productId;
        });
    }

    updateCart();
}


// Remove an item from the bag.

function removeFromCart(productId) {
    cart = cart.filter(function (item) {
        return item.id !== productId;
    });

    updateCart();
    showToast("Item removed from your bag");
}


// Calculate the total number of items and display the cart.

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartEmpty = document.getElementById("cartEmpty");
    const cartCount = document.getElementById("cartCount");

    cartItems.innerHTML = "";

    let totalItems = 0;
    let subtotal = 0;

    cart.forEach(function (item) {
        totalItems += item.quantity;
        subtotal += item.price * item.quantity;

        const row = document.createElement("div");
        row.className = "cart-item";

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.name;
        image.onerror = function () {
            this.style.display = "none";
            this.parentElement.classList.add("image-fallback");
        };

        const details = document.createElement("div");

        const name = document.createElement("h4");
        name.textContent = item.name;

        const price = document.createElement("p");
        price.textContent = formatPrice(item.price * item.quantity);

        const controls = document.createElement("div");
        controls.className = "quantity-controls";

        const minus = document.createElement("button");
        minus.textContent = "−";
        minus.setAttribute("aria-label", "Decrease quantity");
        minus.addEventListener("click", function () {
            changeQuantity(item.id, -1);
        });

        const quantity = document.createElement("span");
        quantity.textContent = item.quantity;

        const plus = document.createElement("button");
        plus.textContent = "+";
        plus.setAttribute("aria-label", "Increase quantity");
        plus.addEventListener("click", function () {
            changeQuantity(item.id, 1);
        });

        controls.append(minus, quantity, plus);

        const remove = document.createElement("button");
        remove.className = "remove-item";
        remove.textContent = "Remove";
        remove.addEventListener("click", function () {
            removeFromCart(item.id);
        });

        details.append(name, price, controls, remove);
        row.append(image, details);
        cartItems.appendChild(row);
    });

    cartCount.textContent = totalItems;
    cartEmpty.hidden = cart.length > 0;
    cartItems.hidden = cart.length === 0;

    document.getElementById("cartSubtotal").textContent = formatPrice(subtotal);

    const discount = couponApplied ? Math.round(subtotal * 0.10) : 0;
    const delivery = subtotal === 0 || subtotal >= 999 ? 0 : 60;
    const total = subtotal - discount + delivery;

    document.getElementById("cartDiscount").textContent = "−" + formatPrice(discount);
    document.getElementById("cartDiscountRow").hidden = discount === 0;
    document.getElementById("deliveryCost").textContent = delivery === 0 ? "FREE" : formatPrice(delivery);
    document.getElementById("cartTotal").textContent = formatPrice(total);
}


// Open and close the shopping bag.

function openCart() {
    document.getElementById("cartPanel").classList.add("open");
    document.getElementById("cartOverlay").classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    document.getElementById("cartPanel").classList.remove("open");
    document.getElementById("cartOverlay").classList.remove("open");
    document.body.style.overflow = "";
}


// Build the treat choices in the custom gift-box section.

function displayTreatChoices() {
    const treatChoices = document.getElementById("treatChoices");
    treatChoices.innerHTML = "";

    giftTreats.forEach(function (treat, index) {
        const label = document.createElement("label");
        label.className = "treat-choice";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = index;
        checkbox.className = "gift-treat";

        const name = document.createElement("span");
        name.textContent = treat.emoji + " " + treat.name;

        const price = document.createElement("b");
        price.textContent = "+" + formatPrice(treat.price);

        checkbox.addEventListener("change", updateGiftBox);

        label.append(checkbox, name, price);
        treatChoices.appendChild(label);
    });
}


// Get the selected gift-box size.

function getBoxSize() {
    const selected = document.querySelector('input[name="boxSize"]:checked');
    return selected ? selected.value : "Small";
}


// Update the custom gift price when the user changes their choices.

function updateGiftBox() {
    const boxSize = getBoxSize();
    const limit = boxLimits[boxSize];
    const checkboxes = Array.from(document.querySelectorAll(".gift-treat"));
    const selectedTreats = checkboxes.filter(function (checkbox) {
        return checkbox.checked;
    });

    // Keep the number of selected treats within the chosen box size.
    checkboxes.forEach(function (checkbox) {
        checkbox.disabled = !checkbox.checked && selectedTreats.length >= limit;
    });

    const extras = selectedTreats.reduce(function (total, checkbox) {
        return total + giftTreats[Number(checkbox.value)].price;
    }, 0);

    const total = boxPrices[boxSize] + extras;

    document.getElementById("giftTotal").textContent = formatPrice(total);
    document.getElementById("selectionCount").textContent =
        selectedTreats.length + " of " + limit + " treats selected";

    document.getElementById("giftSummary").textContent =
        boxSize + " box · " + limit + " treat slots";

    document.querySelectorAll(".size-card").forEach(function (card) {
        const radio = card.querySelector("input");
        card.classList.toggle("selected", radio.checked);
    });
}


// Add the custom gift box to the shopping bag.

function addGiftToCart() {
    const boxSize = getBoxSize();
    const limit = boxLimits[boxSize];

    const selectedTreats = Array.from(document.querySelectorAll(".gift-treat:checked"))
        .map(function (checkbox) {
            return giftTreats[Number(checkbox.value)].name;
        });

    if (selectedTreats.length !== limit) {
        showToast("Please choose exactly " + limit + " treats for your box ♡");
        return;
    }

    const occasion = document.getElementById("occasion").value;
    const ribbon = document.getElementById("ribbonColor").value;
    const message = document.getElementById("giftMessage").value.trim();

    const extras = Array.from(document.querySelectorAll(".gift-treat:checked"))
        .reduce(function (total, checkbox) {
            return total + giftTreats[Number(checkbox.value)].price;
        }, 0);

    const price = boxPrices[boxSize] + extras;

    // Each custom box gets a unique ID so different boxes stay separate in the cart.
    const giftId = Date.now();

    cart.push({
        id: giftId,
        name: boxSize + " Custom Gift Box",
        price: price,
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80",
        quantity: 1,
        isGift: true,
        details: "Occasion: " + occasion +
            " | Ribbon: " + ribbon +
            " | Treats: " + selectedTreats.join(", ") +
            (message ? " | Message: " + message : "")
    });

    updateCart();
    showToast("Your custom gift box is in the bag! 🎀");
    openCart();
}


// Apply the demo coupon.

function applyCoupon() {
    const code = document.getElementById("couponInput").value.trim().toUpperCase();

    if (cart.length === 0) {
        showToast("Add a little treat before using a coupon ♡");
        return;
    }

    if (code === "SWEET10") {
        if (couponApplied) {
            showToast("Your SWEET10 discount is already applied!");
            return;
        }

        couponApplied = true;
        updateCart();
        showToast("Yay! Your 10% discount is applied ♡");
    } else {
        showToast("That code didn't work. Try SWEET10!");
    }
}


// Open the demo checkout.

function openCheckout() {
    if (cart.length === 0) {
        showToast("Your bag is empty! Pick a treat first ♡");
        return;
    }

    closeCart();
    document.getElementById("checkoutOverlay").classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeCheckout() {
    document.getElementById("checkoutOverlay").classList.remove("open");
    document.body.style.overflow = "";
}


// Show a demo order confirmation. This does not send a real order.

function placeDemoOrder(event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value.trim();
    const total = document.getElementById("cartTotal").textContent;
    const orderNumber = "SW" + Math.floor(10000 + Math.random() * 90000);

    const success = document.getElementById("orderSuccess");
    success.innerHTML = "";

    const heading = document.createElement("h3");
    heading.textContent = "Your demo order is ready! 💗";

    const message = document.createElement("p");
    message.textContent = "Thank you, " + customerName + "! Your sample order " +
        orderNumber + " totals " + total +
        ". This is only a website preview, so no order or payment was actually sent.";

    success.append(heading, message);
    success.hidden = false;

    document.getElementById("checkoutForm").hidden = true;
    cart = [];
    couponApplied = false;
    document.getElementById("couponInput").value = "";
    updateCart();

    showToast("Demo order completed ♡");
}


// Set up all the buttons, filters and forms.

function startSugarwhisk() {
    // Show the first collection of products.
    displayProducts(products);
    updateCart();
    displayTreatChoices();
    updateGiftBox();

    // Keep the year up to date.
    document.getElementById("year").textContent = new Date().getFullYear();

    // Search and filter controls.
    searchInput.addEventListener("input", filterProducts);
    categoryFilter.addEventListener("change", filterProducts);
    priceFilter.addEventListener("change", filterProducts);
    dietFilter.addEventListener("change", filterProducts);
    sortFilter.addEventListener("change", filterProducts);

    // Quick filters.
    document.querySelectorAll("[data-quick-filter]").forEach(function (button) {
        button.addEventListener("click", function () {
            quickFilter = button.dataset.quickFilter;

            document.querySelectorAll("[data-quick-filter]").forEach(function (tag) {
                tag.classList.remove("active");
            });

            button.classList.add("active");
            filterProducts();
        });
    });

    // Category cards take the shopper to the collection.
    document.querySelectorAll("[data-category]").forEach(function (button) {
        button.addEventListener("click", function () {
            categoryFilter.value = button.dataset.category;
            quickFilter = "All";

            document.querySelectorAll("[data-quick-filter]").forEach(function (tag) {
                tag.classList.toggle("active", tag.dataset.quickFilter === "All");
            });

            filterProducts();
            document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
        });
    });

    // Occasion cards also filter the collection.
    document.querySelectorAll("[data-occasion]").forEach(function (button) {
        button.addEventListener("click", function () {
            document.getElementById("occasion").value = button.dataset.occasion;
            document.getElementById("gifts").scrollIntoView({ behavior: "smooth" });
            showToast("Let's make a " + button.dataset.occasion.toLowerCase() + " gift ♡");
        });
    });

    // Clear all filters.
    document.getElementById("clearFilters").addEventListener("click", function () {
        searchInput.value = "";
        categoryFilter.value = "All";
        priceFilter.value = "all";
        dietFilter.value = "all";
        sortFilter.value = "featured";
        quickFilter = "All";

        document.querySelectorAll("[data-quick-filter]").forEach(function (tag) {
            tag.classList.toggle("active", tag.dataset.quickFilter === "All");
        });

        filterProducts();
    });

    // Shopping bag controls.
    document.getElementById("openCart").addEventListener("click", openCart);
    document.getElementById("closeCart").addEventListener("click", closeCart);
    document.getElementById("cartOverlay").addEventListener("click", closeCart);
    document.getElementById("applyCoupon").addEventListener("click", applyCoupon);
    document.getElementById("checkoutButton").addEventListener("click", openCheckout);

    // Gift box controls.
    document.querySelectorAll('input[name="boxSize"]').forEach(function (radio) {
        radio.addEventListener("change", updateGiftBox);
    });

    document.getElementById("addGift").addEventListener("click", addGiftToCart);

    // Checkout controls.
    document.getElementById("closeCheckout").addEventListener("click", closeCheckout);
    document.getElementById("checkoutForm").addEventListener("submit", placeDemoOrder);

    document.getElementById("checkoutOverlay").addEventListener("click", function (event) {
        if (event.target.id === "checkoutOverlay") {
            closeCheckout();
        }
    });

    // Mobile navigation.
    document.getElementById("menuButton").addEventListener("click", function () {
        const navigation = document.getElementById("navigation");
        navigation.classList.toggle("open");

        this.textContent = navigation.classList.contains("open") ? "×" : "☰";
    });

    document.querySelectorAll("#navigation a").forEach(function (link) {
        link.addEventListener("click", function () {
            document.getElementById("navigation").classList.remove("open");
            document.getElementById("menuButton").textContent = "☰";
        });
    });

    // Demo newsletter signup.
    document.getElementById("newsletterForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("newsletterEmail").value;
        const message = document.getElementById("newsletterMessage");

        message.textContent = "You're on our demo sweet list! Thanks for joining ♡";
        this.reset();

        showToast("Welcome to the Sugarwhisk sweet club!");
    });

    // Close the shopping bag with Escape.
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeCart();
            closeCheckout();
        }
    });
}


// Start the website after the HTML is ready.
document.addEventListener("DOMContentLoaded", startSugarwhisk);

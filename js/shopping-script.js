// Source code from: https://github.com/CodeExplainedRepo/shopping-cart-javascript

const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");

function renderProducts() {
    products.forEach((product) => {
        productsEl.innerHTML += `
        <div class="card mb-5" style="margin-bottom:200px;" id="${product.id}-link">
            <div class="card-body item-image" alt="..." style="background-image:url(${product.imgSrc})"></div>
            <div class="card-body">
                    <h3 class="card-title"><b>${product.name}</b></h3>
                    <h5 class="card-subtitle">${product.subtitle}</h5>
                    <p class="card-text">
                        <ul>
                            ${product.description}
                        </ul>

                        <div class="row mb-3">
                            <label for="${product.id}Amount" class="col-sm-2 col-form-label col-form-label-sm">Quantity</label>
                            <div class="col-sm-3">
                                <input type="number" min="1" max="${product.instock}" class="form-control form-control-sm" id="${product.id}-quantity" placeholder="1">
                            </div>
                        </div>

                        <div class="form-floating">
                            <select class="form-select" id="${product.id}-unit-select" aria-label="${product.id}-size">
                                <option value="3" selected>${product.unitCount1}</option>
                                <option value="5">${product.unitCount2}</option>
                            </select>
                            <label for="${product.id}-unit-select">unit count</label>
                        </div>

                        <br>

                        <div class="form-floating">
                            <select class="form-select" id="${product.id}-quality-select" aria-label="${product.id}-quality")">
                                <option value="4" selected>student-grade</option>
                                <option value="5">artist-grade</option>
                            </select>
                            <label for="${product.id}-quality-select">quality</label>
                        </div>

                        <br>

                        <div class="col-auto">
                            <div class="input-group mb-3">
                                <span class="input-group-text">$</span>
                                <span class="input-group-text" id="${product.id}-cost">${product.price}</span>
                            </div>
                            <button type="submit" class="btn add-to-cart" onclick="addToCart(${product.id},document.getElementById('${product.id}-quantity').value)">Add to Checkout</button>
                        </div>

                    </p>
            </div>
        </div>
       `;
  });
}

renderProducts();

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

function addToCart(id, amount) {

    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id, amount);

    }
    else {
        const item = products.find((product) => product.id === id);

        if (amount === '') {
            cart.push({
                ...item,
                numberOfUnits: 1,
            });
        }
        else {
            cart.push({
                ...item,
                numberOfUnits: amount,
            });
        }
    }

    updateCart();
}

function updateCart() {
    renderCartItems();
    renderSubtotal();

    localStorage.setItem("CART", JSON.stringify(cart));
}

function renderSubtotal() {
    let totalPrice = 0,
        totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += parseInt(item.numberOfUnits);
    });

    subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
}

function renderCartItems() {
    cartItemsEl.innerHTML = "";

    cart.forEach((item) => {

        cartItemsEl.innerHTML += `
        <li class="list-group-item cart-item">
        <div class="row" style="text-align:center">
            <div class="col">
                <div class="item-info" onclick="removeItemFromCart(${item.id})">
                    ${item.name}
                </div>
                <div class="unit-price">
                    <small>$</small>${item.price}
                </div>
            </div>
            <div class="col">
                <a href="#" class="item-x" style="font-size: 30px" onclick="removeItemFromCart(${item.id})"><i class="fa-solid fa-x"></i></a>
            </div>
            <div class="col">
                <div class="btn minus" style="display:inline" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="btn plus" style="display:inline" onclick="changeNumberOfUnits('plus', ${item.id}, 1)">+</div>
                <div class="number" style="display:inline">Quantity: ${item.numberOfUnits}</div>
            </div>
        </div>
        </li>
      `;
    });

}

function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}

function changeNumberOfUnits(action, id, amount) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;

        if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            } else if (action === "plus" && numberOfUnits < item.instock) {
                for (let i = item.instock - amount; i < item.instock; i++) {
                    numberOfUnits++;
                }
            }
        }

        return {
            ...item,
            numberOfUnits,
        };
    });

    updateCart();
}
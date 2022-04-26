
document.addEventListener("DOMContentLoaded", function() {
    var data2 = localStorage.getItem('finished-login');
    if (data2 !== 'true') {
        window.location.replace("login.html");
    }
});

const totalQtEl = document.querySelector(".check-qt");
const checkItemsEl = document.querySelector(".checkout-container");
const totalItemsEl = document.querySelector(".check-price");

let cartFin = JSON.parse(localStorage.getItem("CART")) || [];

function renderCheckoutTable() {
    let totalPrice = 0,
        totalItems = 0,
        count = 0;

    cartFin.forEach((item) => {
        count++;
        checkItemsEl.innerHTML += `
            <tr>
                <th scope="row">${count}</th>
                <td>${item.name}</td>
                <td>${item.numberOfUnits}</td>
                <td>$${item.price * item.numberOfUnits}</td>
            </tr>
      `;
        totalPrice += item.price * item.numberOfUnits;
        totalItems += parseInt(item.numberOfUnits);
    });

    totalItemsEl.innerHTML = `$${totalPrice.toFixed(2)}`;
    totalQtEl.innerHTML = `${totalItems}`;
}

renderCheckoutTable();
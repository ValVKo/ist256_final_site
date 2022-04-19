let price = 0;

function addToCart(form,name,amount) {
    const node = document.createElement("li");
    let itemPrice = document.getElementById(name).innerHTML;
    node.setAttribute('class','list-group-item');

    if (amount.value !== '') {
        node.appendChild(document.createTextNode(name + ' x' + amount.value));
    }
    else {
        node.appendChild(document.createTextNode(name + ' x' + 1));
    }

    node.appendChild(document.createElement("br"))

    let text = document.createElement("small");
    text.setAttribute("class", "text-muted");
    text.appendChild(document.createTextNode('$' + itemPrice));
    node.appendChild(text);

    document.getElementById("checkout-list").appendChild(node);
    price = (price + parseFloat(itemPrice));
    document.getElementById("checkout-price").innerHTML = '$' + price.toFixed(2) + ' total';

}

function forwardData() {
    var b = document.getElementById('name').value,
        url = 'checkout.html' + encodeURIComponent(b);

    document.location.href = url;
}

function changePrice(amountChange) {

}